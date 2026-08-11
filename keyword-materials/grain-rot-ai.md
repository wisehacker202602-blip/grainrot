# grain rot ai

- 分类：AI
- 调研日期：2026-08-11
- 状态：已完成首轮调研
- 建议页面：`/grain-rot-ai`

## 搜索意图

这个关键词有两种可能意图：玩家一是想确认 GRAIN ROT 是否使用了生成式 AI，尤其是角色配音；二是想了解 Corrupted 的敌人 AI。搜索结果中前一种意图更明确，因为 Steam 的历史披露和新闻报道都直接讨论了 AI voice-over。敌人行为应放到独立的 `grain rot enemies` 页面，避免混写。

## 当前结论

GRAIN ROT 开发团队在下架前的 **Demo Steam 商店页**公开写过：团队可能在部分开发环节使用 AI-assisted tools，但创意方向、玩法和最终素材决策由开发者掌控。Steam 搜索索引与同期媒体还记录了更具体的披露：**生成式 AI 用于少量游戏角色的 voice-over**。

截至 2026-08-11，正式版 Steam 商店页的可见正文和 App Details API 中没有 AI Generated Content Disclosure，旧 Demo 页也已不能正常打开完整商店内容。因此最稳妥的写法是：

- 开发者在预发行阶段披露过少量角色旁白使用生成式 AI。
- 没有可靠公开资料说明具体是哪些角色、使用什么模型或工具、生成了多少句台词。
- 不能据此声称全部配音、画面、代码、玩法或最终美术由 AI 生成。
- 当前正式版商店页是否主动撤下或仅因页面迁移而不再显示该披露，无法从公开资料确认。

## 官方 / Steam 资料

### 1. GRAIN ROT Demo Steam 历史披露

- 历史 URL：https://store.steampowered.com/app/4731790/GRAIN_ROT_Demo/
- 当前状态：Demo App 4731790 已停止公开分发，直接打开不再显示原来的完整商店详情。
- Brave / Steam 搜索索引保留的原文：`We're a team of two veteran developers building this game with passion and care. We may use AI-assisted tools in parts of development, to make the best game we possibly can, while creative vision, gameplay, and all final asset decisions remain our own.`
- 可用结论：开发者承认在部分开发环节可能使用 AI 辅助工具，同时明确创意方向、玩法和最终素材决策属于团队。
- 限制：这段话没有说明具体工具、资产、角色或用量，不能自行扩写。

### 2. 正式版 Steam 当前页面

- URL：https://store.steampowered.com/app/4450620/GRAIN_ROT/
- App Details API：https://store.steampowered.com/api/appdetails?appids=4450620&l=english&cc=us
- 2026-08-11 核验：页面正文没有可检索到 `AI`、`generative`、`AI-generated` 或 `artificial intelligence`；API 的 `content_descriptors.notes` 为 `null`。
- 页面仍明确列出开发者 Beck & Branch Games、发行商 Neem Interactive、发行日 2026-08-07。
- 内容边界：当前页面没有可见披露，不等于可以否认历史使用；也不能反过来宣称正式版当前所有配音仍与 Demo 完全一致。

## Google / 网页素材

### 3. Tech Times 同期报道

- URL：https://www.techtimes.com/articles/322612/20260801/grain-rot-gives-discord-members-free-full-game-access-today-before-august-launch.htm
- 标题：Grain Rot Gives Discord Members Free Full-Game Access Today Before August Launch
- 作者：John Bright
- 发布日期：2026-08-01
- 报道内容：其核查到的 Steam 披露称，生成式 AI 用于少量游戏角色的 voice-over；开发者没有说明使用什么工具，也没有公开受影响角色数量或身份。
- 报道还记录 Steam 社区中既有反对 AI voice 的玩家，也有认为应按成品质量判断的回应。
- 来源层级：独立媒体对当时 Steam 页面内容的转述，可用于补全已消失的商店披露，但不应替代开发者原文去推断更多细节。

### 4. iGame Magazine 搜索摘要

- URL：https://igamemag.com/grain-rot-release-date-gameplay-co-op-and-everything-we-know/
- 搜索摘要同样写明：`The Steam disclosure states that generative AI is used for the voice-over of a few in-game characters.`
- 使用限制：作为第二个网页交叉信号即可；正文的其他机制、价格和版本信息不应未经复核直接采用。

### 5. Steam Community 争议讨论

- URL：https://steamcommunity.com/app/4450620/discussions/0/572667758937028878/
- 搜索摘要显示玩家围绕 AI voice actors 展开争论。
- 使用限制：社区帖子能证明玩家关注点，不能证明“所有声音都是 AI”之类的留言。玩家措辞不是开发者技术说明。

## YouTube / 视频素材

### 6. 官方 Announcement Trailer

- URL：https://www.youtube.com/watch?v=lXkl8oywpQ4
- 标题：GRAIN ROT | Announcement Trailer
- 频道：Neem Interactive and Beck & Branch Games
- 时长：1:13
- 用途：提供官方游戏画面与声音风格，可作为页面中的官方媒体。
- 限制：视频及简介没有标注哪些声音由生成式 AI 制作；不能靠听感判断或点名角色。

### 7. 官方 Launch Trailer

- URL：https://www.youtube.com/watch?v=kdGuY_pZCzk
- 标题：Grain Rot - Official Launch Trailer
- 发布频道：IGN
- 发布日期：2026-07-31
- 时长：1:35
- 用途：展示正式版发布前的实际音画素材。
- 限制：Trailer 只适合展示成品，不是 AI 制作流程证据。

### 8. 当前专门视频缺口

- 查询 `GRAIN ROT AI`、`GRAIN ROT AI voices` 时，YouTube 主要返回普通玩法、评测和 Trailer，没有找到由开发者讲解 AI 工具、配音流程或受影响角色的可靠视频。
- 因此页面不应添加“AI 配音角色名单”或工具教程；如果未来开发者发布说明，再补充官方视频。

## 可直接使用的问答素材

### Does GRAIN ROT use AI?

Yes, the developers disclosed during the demo period that AI-assisted tools could be used in parts of development. Contemporary reporting of the Steam disclosure says generative AI was used for the voice-over of a small number of in-game characters. The developers did not identify the characters or tool, and the current full-game Steam page does not visibly reproduce that disclosure.

### Is all of GRAIN ROT AI-generated?

No reliable source supports that claim. The developer's historical statement says creative vision, gameplay, and final asset decisions remained their own. The only specific use documented by contemporary reporting is voice-over for a few characters.

### Which voices are AI-generated?

Not publicly identified. Do not publish a character list based on voice similarity, player guesses, or Steam discussion comments.

## 可用于内容生成的素材摘要

GRAIN ROT 的开发者曾在 Demo Steam 商店页公开说明，团队可能在部分开发环节使用 AI 辅助工具，同时保留对创意、玩法和最终素材的决策权。2026-08-01 的 Tech Times 报道进一步引用当时的 Steam 披露，称生成式 AI 用于少量游戏角色的旁白，但开发者没有公开工具、角色或具体用量。

正式版 Steam 页面在 2026-08-11 已没有可见的 AI Generated Content Disclosure，所以文章应明确区分“预发行时期已经公开的事实”和“正式版当前页面能看到的内容”。首屏可以直接回答 `Yes, for some character voice-over according to the pre-release Steam disclosure`，随后列出未知项，不把争议扩大成无证据的结论。

## 冲突、缺口与禁止写成事实的内容

- 不要写“GRAIN ROT entirely uses AI”或“all voices are AI”；没有证据。
- 不要猜测 Biggie、Murch、Scrappie、Corrupted 或任何具体角色使用 AI 配音。
- 不要写开发者使用 ElevenLabs、OpenAI、Microsoft、Google 或其他特定工具；官方没有点名。
- 不要根据 Steam 社区留言推断团队预算、动机或专业配音成本。
- 不要把 AI voice disclosure 与敌人 AI 混为一谈；Corrupted 的感知行为应引用 Steam 对 sound、movement 和 each other 的官方描述。
- 当前正式版页面没有可见披露，不足以证明正式版完全未使用 AI，也不足以证明开发者刻意删除；保持“current page no longer displays it”这一可核验表述。
- Tech Times 报道发布于正式版前，文中的人数、价格和 Demo 可用性已有过时信息；本页只使用其对当时 Steam AI 披露的记录。
