# v2.4.11 · Harness 0.2.1-rc.5 兼容更新

本版适配 Windows DeepSeek Harness `0.2.1-rc.5`，并包含主分支此前合并的 macOS 顶部窗口区域调整。

## 更新内容

- 右侧栏和字号箭头使用完整的组件类名组合识别，避免把它们匹配到其他面板或按钮；无法确定的单类名不再猜测。
- 宿主兼容检查正确处理未变化的哈希，并读取以下划线开头的样式表。
- Windows 可选标题栏适配器支持已核对哈希的 rc.5 原始安装包；不匹配的构建仍会拒绝写入。
- 保留既有工作区、配色与窗口适配设置。皮肤安装包本身不修改 Harness 应用文件。

## 验证与边界

- 读取本机 rc.5 原始安装包中的 162 张宿主样式表，皮肤使用的 21 组模块全部解析，右侧栏及字号按钮映射到了各自真实组件。
- Windows 隔离配置实测 19 项皮肤检查，包括输入框、工作区悬浮卡片、MORE、明暗模式、工作区样式切换、刷新恢复和窄窗口；页面 JavaScript 错误为零。
- 在隔离应用副本中，标题栏适配器通过 9 项窗口和备用按钮检查；安装前后核对了 16,651 个归档文件，并成功恢复原始 archive。最小化、最大化和还原已实测；关闭到后台未单独验证。
- 第一次隔离启动曾出现色条与经典布局混杂；刷新后恢复，另外两次全新配置启动没有复现。若遇到此现象，可先重新加载应用；原因仍待进一步确认。
- 未在 macOS 实机复测；macOS 辅助功能授权和窗口交互仍需反馈。未发送真实模型请求。

## 安装与回退

在 Harness「插件 → 添加插件」输入以下完整地址，启用后按提示重启：

https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/download/v2.4.11/dsh-industrial-acid-skin-2.4.11.tgz

也可下载 Release 中的 `.tgz` 并输入本机绝对路径。需要 Windows 竖排窗口按钮时，另下载 `dsh-industrial-caption-adapter-2.4.11.zip`，按[适配器说明](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/blob/main/docs/DESKTOP-ADAPTER.md)检查宿主版本和哈希；Harness 更新可能覆盖旧适配器，请保留原恢复记录。旧版可从 [v2.4.10 Release](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/tag/v2.4.10) 回退。

Release 提供 SHA256 校验文件。
