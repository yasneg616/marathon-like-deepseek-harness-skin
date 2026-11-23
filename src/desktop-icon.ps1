$ErrorActionPreference = 'Stop'
Add-Type -TypeDefinition @'
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

public sealed class IndustrialWindowIcon : IDisposable {
    delegate bool EnumProc(IntPtr window, IntPtr parameter);
    [DllImport("user32.dll")] static extern bool EnumWindows(EnumProc callback, IntPtr parameter);
    [DllImport("user32.dll")] static extern uint GetWindowThreadProcessId(IntPtr window, out uint pid);
    [DllImport("user32.dll")] static extern bool IsWindow(IntPtr window);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] static extern int GetClassName(IntPtr window, StringBuilder name, int capacity);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] static extern int GetWindowTextLength(IntPtr window);
    [DllImport("user32.dll")] static extern IntPtr GetWindow(IntPtr window, uint command);
    [DllImport("user32.dll")] static extern uint GetDpiForWindow(IntPtr window);
    [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)] static extern IntPtr LoadImage(IntPtr instance, string file, uint kind, int width, int height, uint flags);
    [DllImport("user32.dll")] static extern bool DestroyIcon(IntPtr icon);
    // Windows 11 rounds every top-level window. DWMWA_WINDOW_CORNER_PREFERENCE (33) set to
    // DWMWCP_DONOTROUND (1) squares the frame from outside the app, so no app.asar patch is needed;
    // DWMWCP_DEFAULT (0) hands the corners back. Older Windows ignores the attribute.
    [DllImport("dwmapi.dll")] static extern int DwmSetWindowAttribute(IntPtr window, int attribute, ref int value, int size);
    [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)] static extern IntPtr SendMessageTimeout(IntPtr window, uint message, IntPtr kind, IntPtr icon, uint flags, uint timeout, out IntPtr result);

    sealed class IconState {
        public IntPtr Window, Original, Owned;
        public int Kind;
    }
    readonly uint desktopPid;
    readonly string iconFile;
    readonly HashSet<IntPtr> visited = new HashSet<IntPtr>();
    readonly List<IconState> icons = new List<IconState>();
    readonly List<IntPtr> squared = new List<IntPtr>();
    readonly bool changeIcon, squareCorners;
    public IndustrialWindowIcon(uint pid, string file, bool icon, bool square) { desktopPid = pid; iconFile = file; changeIcon = icon; squareCorners = square; }
    static bool Corners(IntPtr window, int preference) { int value = preference; return DwmSetWindowAttribute(window, 33, ref value, 4) == 0; }

    bool BelongsToDesktop(IntPtr window) {
        uint pid;
        GetWindowThreadProcessId(window, out pid);
        return pid == desktopPid && IsWindow(window);
    }
    static bool Message(IntPtr window, uint message, int kind, IntPtr icon, out IntPtr result) {
        // Hung or closing windows must not stall plugin disposal indefinitely.
        return SendMessageTimeout(window, message, new IntPtr(kind), icon, 0x22, 250, out result) != IntPtr.Zero;
    }
    void SetIcon(IntPtr window, int kind, int size) {
        IntPtr owned = LoadImage(IntPtr.Zero, iconFile, 1, size, size, 0x10);
        if (owned == IntPtr.Zero) throw new Win32Exception(Marshal.GetLastWin32Error());
        IntPtr previous;
        if (!Message(window, 0x80, kind, owned, out previous)) { DestroyIcon(owned); return; }
        icons.Add(new IconState { Window = window, Kind = kind, Original = previous, Owned = owned });
    }
    public int Scan() {
        int added = 0;
        // Allow a destroyed HWND to be reused for a later application window.
        visited.RemoveWhere(window => !BelongsToDesktop(window));
        EnumWindows((window, ignored) => {
            if (!BelongsToDesktop(window) || visited.Contains(window) || GetWindow(window, 4) != IntPtr.Zero || GetWindowTextLength(window) == 0) return true;
            var name = new StringBuilder(256);
            GetClassName(window, name, name.Capacity);
            if (!name.ToString().StartsWith("Chrome_WidgetWin_", StringComparison.Ordinal)) return true;
            uint dpi = GetDpiForWindow(window);
            if (dpi == 0) dpi = 96;
            if (changeIcon) {
                SetIcon(window, 0, Math.Max(16, (int)(16 * dpi / 96)));
                SetIcon(window, 1, Math.Max(32, (int)(32 * dpi / 96)));
            }
            if (squareCorners && Corners(window, 1)) squared.Add(window);
            visited.Add(window);
            added++;
            return true;
        }, IntPtr.Zero);
        return added;
    }
    public void Dispose() {
        foreach (var icon in icons) {
            IntPtr current, ignored;
            // Restore only icons we still own; preserve subsequent application/plugin changes.
            if (BelongsToDesktop(icon.Window) && Message(icon.Window, 0x7f, icon.Kind, IntPtr.Zero, out current) && current == icon.Owned)
                Message(icon.Window, 0x80, icon.Kind, icon.Original, out ignored);
            DestroyIcon(icon.Owned);
        }
        icons.Clear();
        foreach (var window in squared) if (BelongsToDesktop(window)) Corners(window, 0);
        squared.Clear();
    }
    public static void Run(int desktopPid, int hostPid, string expectedExe, string iconFile, bool icon, bool square) {
        using (var desktop = Process.GetProcessById(desktopPid))
        using (var host = Process.GetProcessById(hostPid)) {
            string actualExe = desktop.MainModule.FileName;
            if (!String.Equals(Path.GetFileName(actualExe), "DeepSeek Harness.exe", StringComparison.OrdinalIgnoreCase)
                || !String.Equals(Path.GetFullPath(actualExe), Path.GetFullPath(expectedExe), StringComparison.OrdinalIgnoreCase)
                || !String.Equals(host.MainModule.FileName, actualExe, StringComparison.OrdinalIgnoreCase))
                throw new InvalidOperationException("Expected the Electron-owned Desktop Host.");
            using (var mutex = new Mutex(false, "Local\\DSHIndustrialWindowIcon-" + desktopPid)) {
                bool owned;
                try { owned = mutex.WaitOne(0); } catch (AbandonedMutexException) { owned = true; }
                if (!owned) return;
                try {
                    using (var controller = new IndustrialWindowIcon((uint)desktopPid, iconFile, icon, square)) {
                        var stop = Task.Run(() => Console.In.ReadLine());
                        Console.WriteLine("ready");
                        while (!stop.IsCompleted && !desktop.HasExited && !host.HasExited) {
                            int added = controller.Scan();
                            if (added > 0) Console.WriteLine("applied:" + added);
                            stop.Wait(750);
                        }
                    }
                    Console.WriteLine("restored");
                } finally { mutex.ReleaseMutex(); }
            }
        }
    }
}
'@
[IndustrialWindowIcon]::Run([int]$env:INDUSTRIAL_DESKTOP_PID, [int]$env:INDUSTRIAL_HOST_PID, $env:INDUSTRIAL_DESKTOP_EXE, $env:INDUSTRIAL_ICON_FILE, $env:INDUSTRIAL_WINDOW_ICON -ne '0', $env:INDUSTRIAL_SQUARE_CORNERS -ne '0')
