# v2.4.13 · 工作区浮层与配色

- **浮层贴紧色条**。左右两列各自对齐所属工作区的右缘。浮层打开后，在相邻色条停留 350 毫秒才切换。移入原浮层会取消待切换，方便选中里面的对话。
- **底部选色条**。平时只显示细长色带。悬停或键盘聚焦时，向上显示可编辑的 HEX 色号、取色器和恢复默认按钮，卡片高度保持稳定。
- **原生菜单**。工作区菜单项跳过皮肤的按钮装饰层，修复悬停后图标压住文字的问题。
- 包含主分支 [#13](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/pull/13) 的经典工作区改动，拖拽后编号跟随顺序，并支持单独配色。

色条贴边、移入浮层、菜单悬停和 HEX 保存均在 Windows Harness 0.2.1-rc.5 桌面端验证。本版的 macOS 窗口交互尚未实机复测。

## 安装

在 Harness「插件 → 添加插件」粘贴完整地址并启用，按提示重启。

```text
https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/download/v2.4.13/dsh-industrial-acid-skin-2.4.13.tgz
```

发行附件包含 `SHA256SUMS.txt`。可选的 Windows 竖排窗口按钮继续使用 v2.4.11 附带的适配器，按宿主版本与哈希核对后使用。 [适配器说明](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/blob/v2.4.13/docs/DESKTOP-ADAPTER.md) · [v2.4.11 与回退包](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/tag/v2.4.11)
