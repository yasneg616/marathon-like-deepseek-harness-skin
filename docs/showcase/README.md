# 自述中的动效展示页

```sh
node tools/serve-showcase.cjs
```

打开 `http://127.0.0.1:19411/?controls=1`。上方工具条可以切换 token 活动、按钮、输入框、状态和三种 Max 场景，也能播放开屏和蓄力。活动场景的“增加用量”按四个展示数值切换今日档位；齿轮可修改展示界限。

展示页从 `lib/client.js` 读取正式版 CSS、字体、配色计算、遮罩控制器、数字扫描、工作区窄栏组件和 Max Canvas 渲染器。token 日期、四档划分与界限校验也复用正式版函数；活动图展示外壳由本地 DOM 适配器渲染。预览服务只为展示页额外导出这些函数；不会改写客户端文件。

页面外壳、工作区、模型目录、状态文字与 token 计数是本地展示数据，未连接 Harness 的 profile、会话或认证服务。Max 单项场景固定一种形式便于比较，插件默认随机。统一使用正常 1× 和 1.4 幅度。2.4.0 重新录制涉及侧栏的 01–11，保留 12–17 的既有动效细部，新增 18 的四色每日活动和 19 的界限设置。

自述中的 GIF 由浏览器实际渲染截图组成，逐帧延迟来自捕获时间，未作慢放。原始截图保存在被 Git 忽略的 `.recordings/`。安装 Pillow 后可重新编码已有帧：

```sh
python tools/encode-showcase.py
```

这会生成 `docs/media/*.gif`。编码使用每段统一的 256 色调色板，减少文字闪色；较宽画面缩至 1080px，细部保留原尺寸。GIF 的帧数和压缩效果会与原生窗口的实时播放有所不同。

重新录制更新的场景需要可选的 Playwright、浏览器和 Pillow。Windows 默认使用 Edge，其他系统使用 Playwright Chromium：

```sh
npm install --no-save --package-lock=false playwright
npx playwright install chromium
python -m pip install Pillow
node tools/record-showcase.cjs
python tools/encode-showcase.py 01-opening 02-left-sidebar 03-right-sidebar 04-workspace-digits 05-model-menu 06-palette-dialog 07-palette-follow 08-day-night 09-compact-workspaces 10-page-transition 11-file-preview 18-token-activity 19-token-thresholds
```

录制器会先检查四个档位、界限校验与窄窗口，记录实际捕获时间，并确认没有请求 Harness 的 `/api/`。运行包与源码构建不需要这些录制依赖。
