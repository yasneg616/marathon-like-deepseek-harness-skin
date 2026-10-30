# Windows 竖排窗口按钮适配器 / 2.4.11

这是皮肤运行包之外的可选工具。先在 Harness 中安装并启用 `dsh-industrial-acid-skin-2.4.11.tgz`；只有需要右上角竖排窗口按钮时，再使用此适配器。

如果 Harness 更新覆盖了旧适配器，可将新版 ZIP 解压到新目录，在检查通过后重新安装；保留旧目录及原有恢复记录。

需要 Windows、Node.js 22 或更新版本，以及已核对哈希的原始 DeepSeek Harness 0.2.0-rc.2、0.2.1-rc.2、rc.3 或 rc.5。不同哈希会拒绝写入。已验证的 Windows rc.5 原始 archive SHA256 为 `e1b6f25fa937da98086c3e77af77aa14791105963c4d337a1c42179d232c6915`。

## 安装

1. 将适配器 ZIP 解压到一个准备保留的文件夹。
2. 完全退出 Harness，包括后台运行的进程。
3. 在解压目录打开 PowerShell，指定实际安装路径并运行：

```powershell
$env:DSH_DESKTOP_DIR = Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness'
node tools/desktop-bridge.cjs check
node tools/desktop-bridge.cjs install
```

重新启动 Harness。最小化、最大化／还原、关闭会使用皮肤右上角的竖排按钮。关闭沿用应用原有的关闭到后台策略；原生应用／编辑菜单和窗口拖动保留。停用皮肤时会显示备用窗口按钮。

工具只修改 `resources/app.asar` 中两个桌面入口。写入前会在应用安装目录的 `_backups/` 创建原始备份，并在解压目录的 `validation/desktop-bridge.json` 保存恢复记录。保留这两个位置；ZIP 不携带任何机器的应用 archive 或备份。

## 恢复

完全退出 Harness，在同一解压目录和相同安装路径下运行：

```powershell
$env:DSH_DESKTOP_DIR = Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness'
node tools/desktop-bridge.cjs restore
```

恢复前会核对当前文件与原始备份。Harness 更新导致 archive 变化时会拒绝覆盖，避免用旧版备份覆盖新版应用。应用更新也可能覆盖适配，需要先重新检查。

如果已在另一目录安装过适配器，继续使用原目录中的恢复记录；不要移除或替换该记录后重复安装。

代码采用 MIT License，许可文件随包提供。
