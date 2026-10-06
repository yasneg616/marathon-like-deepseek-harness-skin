# marathon-like deepseek harness skin

受 Marathon 工业视觉启发的 **DeepSeek Harness 外部皮肤插件**。当前版本 **2.3.3**，兼容性验证基于 **Windows / Harness 0.2.0-rc.2**。

提供酸性色块、几何字标、三位数工作区编号和统一的交互动效。保留 Harness 的原生会话、轨迹、插件、模型、文件与工作区操作。这是独立的非官方项目，与 DeepSeek、Bungie 或 Marathon 没有隶属关系。

## 已实现

- **完整外观**：工业标题栏、几何鲸鱼符号、GRID / SIGNAL 字体，支持白天、黑天和跟随应用。
- **可调配色**：酸性色、交互色、阅读背景和正文色支持取色器与 HEX 输入；明暗模式分别保存，正文自动处理对比度。
- **四块往返遮罩**：左侧栏从左向右覆盖、反向揭开，右侧栏采用镜像方向；四块颜色直接跟随当前调色盘。页面、菜单、弹窗和轨迹详情使用各自的遮罩转场。
- **Max 动效**：同频震颤、残像追赶、错帧暴走随机选取；一次 High → Max 充能期间保持同一种形式，回到 High 或更低后开始下一轮。
- **原生模型与思考强度**：模型目录和推理等级由 Harness 提供；滑块可连续预览，松开后提交最近的真实等级，支持键盘操作。
- **窄侧栏工作区选择**：收起后的 56px 栏中显示 `001`、`002` 等数字按钮，可直接切换工作区。当前工作区高亮，悬停显示名称，较长列表可滚动。
- **一致的操作反馈**：3px 厚角、点击填充、输入框边线与状态灯、数字扫描校准和四方块状态信号。正文跟随真实模型输出。
- **动效偏好**：完整、克制、停止三档，正常 `1×` 节奏；尊重系统“减少动态效果”，停用插件时清理自有样式、事件和动画。

## 安装

1. 在 [Releases](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases) 下载 `dsh-industrial-acid-skin-2.3.3.tgz`。
2. 在 Harness 的“插件 → 添加插件”中选择运行包并启用。
3. 在侧栏底部的调色盘或“设置 → 通用设置 → 皮肤外观”调整颜色和动效。

运行包内置字体、SVG 和编译后的客户端，皮肤资源可离线加载。插件包名保留 `dsh-industrial-acid-skin`，便于现有安装升级并保留外观偏好。

核心皮肤使用 `ctx.theme.overrideTokens` 和原生扩展槽。Windows 标题栏最右侧的竖向窗口按钮需要下述可选桌面适配器。其他系统及新版 Harness 尚未验证；宿主内部 DOM 或接口变更可能需要适配。

## 构建与测试

需要 Node.js 22 或更新版本及 npm。构建与测试使用 Node.js 内置模块，不需要安装 Harness 的私有 SDK；实际运行由 Harness 提供 React 和宿主服务。

```sh
git clone https://github.com/yasneg616/marathon-like-deepseek-harness-skin.git
cd marathon-like-deepseek-harness-skin
npm run build
npm run check
npm test
npm pack
```

`npm pack` 生成可导入的 `.tgz` 运行包。仓库提交了 `lib/client.js`，可以检查构建前后的差异。

31 项自动测试覆盖插件撤销、配色与对比度、工作区编号及选择、原生桥接权限、模型与推理等级、随机 Max 轮次、连续位置提交、遮罩方向与色块，以及侧栏和分栏边界。自动测试使用宿主模拟环境，不能替代真实 Electron 窗口的兼容性验证。

## 源码安装与回退

也可以退出 Harness 后，从源码目录执行：

```sh
node tools/install.cjs
```

默认读取当前用户的 `.dsh/profiles/desktop`。使用自定义数据目录时，先设置 `DSH_HOME`。安装脚本备份 profile 清单，只添加本插件的依赖和 bundle 关联；安装记录保存在本机 `validation/` 下。

解除本插件的 profile 关联：

```sh
node tools/uninstall.cjs
```

日常使用也可在 Harness 插件页停用。解除关联保留其他配置、聊天、工作区、插件缓存与本机颜色偏好。

## 可选：Windows 桌面标题栏适配器

适配器将原生窗口操作接入皮肤的竖排按钮，并保留原生应用/编辑菜单、窗口拖动及关闭确认。它会修改本机 `resources/app.asar` 中的两个桌面入口，因此请先完全退出 Harness。

在 PowerShell 中指定实际安装目录：

```powershell
$env:DSH_DESKTOP_DIR = Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness'
node tools/desktop-bridge.cjs install
```

适配器只接受已验证的 `0.2.0-rc.2` 原始 archive，其 SHA256 为：

```text
983ca71114e6dfd353fc79af5a1f9481a250ee64c2a3c757673029b811b23bc2
```

写入前自动备份到安装目录的 `_backups/`，校验未改动文件并记录本机恢复路径。版本或哈希不匹配时拒绝写入。停用皮肤后提供横向窗口按钮回退；安装到其他机器时，需要在那里重新生成备份。

退出 Harness 后，在同一源码目录、相同 `DSH_DESKTOP_DIR` 下恢复：

```powershell
node tools/desktop-bridge.cjs restore
```

恢复同样校验当前 archive；应用已更新时会拒绝覆盖。保留本机 `validation/desktop-bridge.json` 和备份目录，直到完成恢复。

## 目录

| 路径 | 用途 |
| --- | --- |
| `src/shell.js`、`src/workspaces.js` | 标题栏、原生操作、工作区编号与窄栏选择 |
| `src/accepted-motion.js`、`src/accepted-motion.css` | 往返遮罩、反馈、校准和动画清理 |
| `src/max-berserk.js` | 三种随机 Max 渲染与轮次策略 |
| `src/model-controls.js`、`src/model-controls.css` | 原生模型选择和推理滑块 |
| `src/palette.js`、`src/skin.css`、`src/planar.css` | 配色、对比度与布局 |
| `src/motion.js` | 原生菜单可用空间修正 |
| `assets/`、`locale/` | 本地字体、SVG 和语言资源 |
| `lib/client.js` | 编译后的离线客户端 |
| `tools/`、`tests/` | 构建、安装、回退和自动测试 |

`diagnostics` 默认关闭。开发时临时启用会生成含本机认证 URL 的 `.validation/connection.json`，使用后应关闭诊断；此目录已排除出 Git 和运行包。

## 许可与资源

代码采用 [MIT License](LICENSE)。GRID / SIGNAL 为此项目使用的原创字体派生版本，详见 [字体来源](assets/fonts/SOURCE.md)。Marathon 官网仅作为视觉与动效方向参考；项目不包含其网页代码、字体或游戏素材。DeepSeek、Harness、Marathon 及相关名称的权利属于各自所有者。
