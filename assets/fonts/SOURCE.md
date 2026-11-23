# GRID / SIGNAL 字体来源

Industrial GRID 和 Industrial SIGNAL 派生自仓库作者的 Eventide 项目原创字体。此皮肤使用独立派生副本，原项目字体未被修改。

2.0.1 对 GRID 数字与 HARNESS 标题字母重绘直线多边形，并减少其他轮廓中的微小折点；保留字符映射、字距与 SIGNAL 的等宽属性。两个字体均覆盖 95 个可打印 ASCII 字符。

当前仓库提供最终 WOFF2 与 TTF 文件。`build-report.json` 记录生成时的来源及产物 SHA256、字符覆盖和轮廓校验；重新构建皮肤客户端直接使用这些文件，不依赖原项目或字体生成工具。

这些原创派生字体随本仓库按根目录的 MIT License 提供。项目未使用 Marathon 官网字体或第三方商业字体。

# Acid Cipher 字体来源

Acid Cipher 是 3.1.0 为首页鲸跃彩蛋绘制的原创像素未知文字，不对应任何现有文字或游戏字体。每个字形在 5×7 网格上由少量笔画部件（主干、横笔、钩笔、悬空点、切口）组合而成，以字符码为种子确定，结果可重复；62 个字母与数字两两不同，标点保留括号、等号等结构。

`tools/cipher-font.cjs` 生成 `acid-cipher.otf` 与 `acid-cipher.json`（生成参数与 SHA256）。生成需要开发依赖 opentype.js 1.3.4（通过 `OPENTYPE_MODULE` 指向临时安装）；构建皮肤直接使用仓库中的 OTF，不依赖生成工具。随本仓库按 MIT License 提供。
