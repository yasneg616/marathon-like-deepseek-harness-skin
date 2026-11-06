# v2.4.14 · Harness 0.2.2-rc.1 兼容更新

- 新增对 DeepSeek Harness `0.2.2-rc.1` 的兼容声明，保留已有宿主版本的支持。
- 新版宿主加载时，工作区色条可以随首屏显示。设置面板也适配了新版布局，恢复皮肤的导航与内容样式。
- 可选的 Windows 竖排窗口按钮适配器新增对已核对 SHA256 的 `0.2.2-rc.1` 原始应用归档的支持。

本轮在 Windows Harness 0.2.2-rc.1 实测了启动、工作区色条、设置面板、最小化和最大化／还原。新版宿主的 macOS 窗口交互尚未实机验证。

## 安装

在 Harness「插件 → 添加插件」粘贴完整地址，安装后点击「立即启用」。如果 Harness 提示重启，按提示重启。

```text
https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/download/v2.4.14/dsh-industrial-acid-skin-2.4.14.tgz
```

Windows 用户如需竖排窗口按钮，可另外下载 `dsh-industrial-caption-adapter-2.4.14.zip`，按包内 README 安装或回退。两个附件的校验值见 `SHA256SUMS.txt`。 [适配器说明](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/blob/v2.4.14/docs/DESKTOP-ADAPTER.md)
