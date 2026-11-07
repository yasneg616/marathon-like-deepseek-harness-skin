# v2.4.15 · 色条会话浮层与拖动排序

感谢评论区的建议，这次给新版色条的会话浮层补上了三个操作。

- **展开剩余会话**。顶部会显示 `CONVERSATIONS 05 +2` 这样的计数。点底部的「展开其余会话」，浮层跟着 Harness 分批展开，也可以收起。
- **看每条会话的状态**。标题左边的点会实时更新，按等待确认、运行中、完成未读的顺序显示优先级最高的状态。
- **拖动排序**。拖到目标行的上半部或下半部，看到插入线后松开。置顶和普通会话在各自的分区内排序，手动顺序由 Harness 保存，切回经典模式或刷新也能看到。

## 演示

19 秒，从展开、查看状态到把「回归检查」拖到第三行。演示录于本地预览版，使用虚构会话。点动图可下载原始 MP4。

[![色条会话浮层演示](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/download/v2.4.15/workspace-flyout-preview.gif)](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/download/v2.4.15/workspace-flyout-demo.mp4)

本机 99 项自动测试通过。展开、状态刷新、拖放和保序在 Windows 上使用 Harness 0.2.1-rc.5 与 0.2.2-rc.1 的原生组件做了隔离验证。

## 安装

在 Harness「插件 → 添加插件」粘贴完整地址，安装后点击「立即启用」，按提示重启。

```text
https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/download/v2.4.15/dsh-industrial-acid-skin-2.4.15.tgz
```

安装包和演示附件的校验值见 `SHA256SUMS.txt`。Windows 竖排窗口按钮继续使用 v2.4.14 附带的可选适配器。[v2.4.14 适配器下载](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/tag/v2.4.14)
