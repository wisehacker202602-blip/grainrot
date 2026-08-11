# grain rot spark cannot move

- 分类：Troubleshooting
- 调研日期：2026-08-11
- 状态：已完成首轮调研
- 建议页面：`/grain-rot-spark-cannot-move`

## 搜索意图

用户在 Spark 形态下无法移动，想判断这是 Glow 能量机制、操作方式还是游戏卡死，并寻找不会丢失进度的解决方法。

## 当前结论

“Spark 无法移动”至少有两种情况，不能混为同一个 Bug：

1. **Glow 耗尽导致的机制限制**：Steam 玩家讨论描述，Spark 的 Glow 持续流失后会逐渐无法跳跃或漂浮；靠近光源或友方可以恢复 Glow。这更像设计机制。
2. **Glow 尚存但输入完全失效**：目前没有找到官方补丁说明确认具体原因或固定解决方案，应按潜在卡死、输入锁或多人同步问题处理，并向官方报告。

## 官方资料

### 1. Steam 商店的 Spark 机制说明

- URL：https://store.steampowered.com/app/4450620/GRAIN_ROT/
- 官方说明要点：躯壳损坏后，玩家会以 Spark 形态留在本次探索中；可以引导队友并寻找具有新能力的宿主；需要在光芒完全消散前重新进入躯壳。
- 可用结论：Spark 有会消散的 Glow / 时间压力，移动能力变化不能自动认定为技术 Bug。

### 2. 官方更新日志

- URL：https://store.steampowered.com/news/app/4450620
- 已检查补丁：Patch 1.01、1.02、1.03、1.04、1.05。
- 本次结果：这些补丁摘要修复了拾取、门、存档黑屏、好友加入和客户端物品等问题，没有明确提到 “Spark cannot move”。
- 使用提醒：后续补丁可能新增相关修复，发布页面前应再次搜索更新日志。

### 3. 官方支持入口

- Discord：https://discord.gg/xxHrFJTt3J
- Steam 讨论区：https://steamcommunity.com/app/4450620/discussions/
- Steam Store API 中的支持邮箱：support@neem.com
- 报告时应提供：单人/多人、是否为房主、Glow 是否为空、所在区域、发生前动作、游戏版本、能否转动镜头、重连后是否恢复。

## Steam 社区素材

### 4. Initial Runs Impression

- URL：https://steamcommunity.com/app/4450620/discussions/0/582805206889151919/
- 日期：2026-08-11
- 来源类型：玩家讨论，非官方答案
- 症状：发帖者称 Spark 的 Glow 消散后，会逐渐到无法在房间中跳跃或漂浮的程度。
- 玩家回复：Spark 在光源和友方附近恢复；发帖者也确认已经观察到 Spark 会因光源和敌人而获得或失去能量。
- 可用结论：先检查 Glow 是否耗尽以及附近是否有恢复条件，再判断是否为 Bug。
- 使用限制：回复没有开发者标记，具体恢复速度和范围不能写成确定数值。

### 5. Steam 讨论搜索

- URL：https://steamcommunity.com/app/4450620/discussions/search/?q=spark%20move
- 结果：本次共找到 3 条相关讨论；最直接的一条是上述 Glow 耗尽导致移动能力下降。

## Google / 竞对资料

### 6. grainrot-wiki.wiki 故障页

- URL：https://www.grainrot-wiki.wiki/guides/Grain-Rot-spark-cannot-move
- 来源类型：非官方竞对页面
- 页面声称原因包括服务器不同步、Grinder 碰撞、装备损坏、UI 锁定，并给出未经来源支持的成功率。
- 使用限制：没有提供官方补丁、开发者回复或可核验测试；其中“到 Outpost 更换身体”“Grinder 导致 Spark 卡死”等说法不可写成事实。只可参考其覆盖的搜索问题结构。

### 7. grainrot.org Spark 指南

- URL：https://www.grainrot.org/guide/spark-possession/
- 来源类型：非官方攻略站
- 搜索摘要：躯壳被摧毁后 Spark 仍留在本次探索，可寻找新躯壳。
- 交叉验证：该核心机制与 Steam 官方说明一致；细节仍以官方说明和实机为准。

## YouTube 素材

### 8. 10 Things the Game Doesn't Tell You

- URL：https://www.youtube.com/watch?v=iMLcl_YD9Vc
- 标题：GRAIN ROT: 10 Things the Game DOESN'T Tell You!
- 频道：Gaming Plus TV
- 时长：9:44
- 可用方向：补充游戏没有明确说明的操作与 Spark 机制。
- 使用限制：本轮未取得完整字幕，不把视频标题之外的细节写成已核验事实。

### 9. Infinite Spark Mode

- URL：https://www.youtube.com/watch?v=gmEmv66fgsE
- 标题：Grain Rot Tip: Infinite Spark Mode (pt 2)
- 频道：PapaRossi
- 时长：1:26
- 使用提醒：发布时间早于正式版，可能基于 Demo；必须先对照正式版版本验证，不能直接发布为当前技巧。

## 建议的排查顺序

以下顺序区分“设计机制”和“技术故障”，其中没有官方确认的部分必须写成建议而非保证：

1. 查看 Glow 是否已经耗尽；如果是，优先靠近友方或光源，并寻找可附身的新躯壳。
2. 确认能否转动镜头、打开菜单，以及队友看到的角色位置是否一致，记录是否只影响移动输入。
3. 如果 Glow 尚存且所有移动输入仍失效，记录版本号和触发动作；多人游戏可在队伍安全时尝试退出并重新加入。
4. 在 Steam 验证游戏文件，重启游戏，并确认控制设置没有被改动。
5. 若问题复现，向官方 Discord、Steam 讨论区或支持邮箱报告，不要只写“Spark stuck”，应附上复现步骤。

## 可用于内容生成的素材摘要

当 GRAIN ROT 的 Spark 无法移动时，先检查 Glow。社区实测显示，Glow 消散会让 Spark 逐渐失去跳跃和漂浮能力，而光源或友方可以帮助恢复。Steam 官方说明也强调 Spark 必须在光芒完全消散前寻找新宿主。因此 Glow 耗尽是首要排查项。

如果 Glow 尚存、靠近恢复条件后仍不能移动，才更像技术问题。目前 Patch 1.01–1.05 没有明确记录 Spark 移动修复；应记录复现环境并提交给官方支持。

## 冲突、缺口与禁止写成事实的内容

- 不要把所有“不能移动”都称为服务器不同步或碰撞 Bug。
- 不要引用竞对页给出的 30%、45%、95% 等所谓修复成功率；这些数字没有来源。
- 不要承诺重连不会丢失本次探索进度。
- 不要把 Demo 的 Infinite Spark 技巧直接写成正式版当前机制。
- Glow 恢复的精确范围、速度和敌人影响数值仍需正式版实机或开发者说明确认。

