# 安装与开发

## 安装

1. 在 [Releases](https://github.com/yasneg616/marathon-like-deepseek-harness-skin/releases/tag/v2.4.0) 下载 `dsh-industrial-acid-skin-2.4.0.tgz`。
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

37 项自动测试覆盖插件撤销、配色与对比度、工作区编号及选择、原生桥接权限、模型与推理等级、随机 Max 轮次、连续位置提交、遮罩方向与色块，以及侧栏和分栏边界。新增检查包括 token 界限、等号边界、北京时间与闰年、缓存输入、分叉继承排除、跨工作区和子代理合计、失败提示、查询释放与轮询撤销。自动测试使用宿主模拟环境，不能替代真实 Electron 窗口的兼容性验证。

2.4.0 另在真实本机 Host 的 Edge 页面检查了活动图、界限保存、四色联动、断线恢复、收起侧栏、390–1586 像素窗口、原生指令菜单以及插件停用和重新启用；独立解析本机历史日志，对最近 18 周逐日核对一致。验证未发送会话消息，未单独捕获 Electron 原生窗口。示例 GIF 使用独立展示计数。

## 每日 token 活动

活动图使用最近 18 周的日期，按 `Asia/Shanghai` 划分每日边界。默认界限为 `1000000`、`10000000`、`50000000`，可在活动图齿轮、调色盘或通用设置中修改。三个数值必须是递增的正整数；等于界限仍属于前一档。保存后立即重算颜色，设置在本地保留。

范围是整个应用所有工作区、会话与子代理的已记录提供方用量。Harness 的普通输入、缓存读取和缓存写入三个字段合并为输入；推理 token 已包含在输出中，不重复叠加。分叉继承事件排除。仅统计已报告用量，不估算缺失记录；查询失败、连接中断或未报告用量有提示。可见页面每 15 秒刷新，恢复可见或重连后立即更新。界面接口只返回逐日汇总，不返回聊天内容或本机路径。

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
| `src/token-activity-core.js`、`src/token-activity-host.js` | 日期、分档与原生会话日志汇总 |
| `src/token-activity.js`、`src/token-activity.css` | 活动方块、每日用量与界限设置 |
| `src/palette.js`、`src/skin.css`、`src/planar.css` | 配色、对比度与布局 |
| `src/motion.js` | 原生菜单可用空间修正 |
| `assets/`、`locale/` | 本地字体、SVG 和语言资源 |
| `lib/` | 编译后的离线客户端与 Host 用量模块 |
| `tools/`、`tests/` | 构建、安装、回退和自动测试 |

`diagnostics` 默认关闭。开发时临时启用会生成含本机认证 URL 的 `.validation/connection.json`，使用后应关闭诊断；此目录已排除出 Git 和运行包。

## 许可与资源

代码采用 [MIT License](../LICENSE)。GRID / SIGNAL 为此项目使用的原创字体派生版本，详见 [字体来源](../assets/fonts/SOURCE.md)。Marathon 官网仅作为视觉与动效方向参考；项目不包含其网页代码、字体或游戏素材。DeepSeek、Harness、Marathon 及相关名称的权利属于各自所有者。
