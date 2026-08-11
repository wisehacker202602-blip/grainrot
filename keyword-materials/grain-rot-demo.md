# grain rot demo

- 分类：Availability
- 调研日期：2026-08-11
- 状态：已完成首轮调研
- 建议页面：`/grain-rot-demo`

## 搜索意图

用户想下载免费试玩版、确认 Demo 是否仍可用、了解试玩内容，或解决试玩版与正式版的区别。

## 当前结论

GRAIN ROT Demo 曾于 **2026-06-12** 在 Steam 上线，但截至 **2026-08-11**，独立 Demo App 已无法从官方商店正常打开：Demo App 4731790 的 Steam Store API 返回 `success: false`，直接商店链接会重定向到 Steam 首页，正式版商店也没有显示 Demo 下载按钮。当前应视为**试玩版已下架或不可公开获取**，除非官方重新开放。

## 官方 / Steam 资料

### 1. 正式版 Steam 商店页

- URL：https://store.steampowered.com/app/4450620/GRAIN_ROT/
- 当前状态：正式版可购买，但页面没有 Demo 下载区。
- Steam Store API：主 App 返回 `is_free: false`，且数据中没有关联 Demo 列表。

### 2. 历史 Demo App

- 历史 App ID：4731790
- 历史 URL：https://store.steampowered.com/app/4731790/GRAIN_ROT_Demo/
- 2026-08-11 访问结果：链接重定向到 Steam 商店首页。
- Steam Store API：https://store.steampowered.com/api/appdetails?appids=4731790
- API 结果：`{"4731790":{"success":false}}`
- 可用结论：不能继续提供“Download Demo”按钮或声称当前仍可下载。

### 3. Games Press 官方发布稿

- URL：https://www.gamespress.com/GRAIN-ROT-IS-OUT-NOW-ON-STEAM
- 日期：2026-08-07
- 历史数据：发布稿称 Demo 下载量超过 350,000，并进入 Steam Next Fest 最受欢迎 Demo 前 15。
- 使用提醒：这是 Demo 的历史表现，不代表 2026-08-11 仍开放下载。

## Google / 网页素材

### 4. mxdwn Games Demo 报道

- URL：https://games.mxdwn.com/news/grain-rot-demo-has-received-over-100000-wishlists/
- 标题：Grain Rot Demo Has Received Over 100,000 Wishlists
- 作者与日期：Anthony Toczydlowski，2026-06-23
- 核验内容：Demo 于 2026-06-12 发布；截至 6 月 15 日已有 60,000 次下载；报道链接到 Steam 官方新闻。
- 使用方向：描述试玩期的社区热度和反馈作用。

### 5. SteamDB 历史条目

- URL：https://steamdb.info/app/4731790/info/
- Google 搜索摘要：GRAIN ROT Demo，Steam Release Date 为 2026-06-12。
- 使用限制：SteamDB 当前访问受限，发布日期由 mxdwn 与其链接的 Steam 新闻交叉验证；不要引用未直接核验的其他 SteamDB 数值。

### 6. Playtester 历史页面

- URL：https://playtester.io/grain-rot
- 来源类型：第三方试玩聚合页
- 可用方向：试玩版历史简介。
- 使用限制：不能用第三方旧页面证明 Demo 当前仍可下载。

## YouTube 素材

### 7. Demo Gameplay

- URL：https://www.youtube.com/watch?v=gBaOyrhDsTA
- 标题：GRAIN ROT Demo Gameplay
- 频道：VibesOfGaming
- 发布日期：2026-06-13
- 时长：21:01
- 可用方向：记录早期 Demo 的实际玩法和界面。

### 8. Demo 房间等级与 Perk

- URL：https://www.youtube.com/watch?v=1Oq3EkzZ5EU
- 标题：Grain Rot Tip: Max Room Levels and perks For Demo Version
- 频道：PapaRossi
- 时长：2:44
- 使用限制：标题明确针对 Demo；正式版数值和机制可能已改变，不能直接用于正式版攻略。

### 9. Demo 合作实况

- URL：https://www.youtube.com/watch?v=plVEMa2hvDo&t=423
- 标题：We Played Grain Rot's Demo and It Was Pure Chaos (Co-op Horror)
- 频道：Nerd Logic
- 可用方向：展示试玩版多人合作、混乱物理互动与怪物遭遇。

## 可用于内容生成的素材摘要

GRAIN ROT Demo 在 2026 年 6 月 12 日上线，是正式发行前收集玩家反馈和参加 Steam Next Fest 的试玩版本。官方发布稿称其累计下载超过 350,000 次。不过在 2026 年 8 月 11 日复查时，Demo 的独立 Steam App 已不可用，商店链接会返回首页，正式版页面也没有 Demo 下载按钮。

页面应使用 “The demo was previously available” 的历史语态，并把主要行动按钮改为查看正式版 Steam 商店或加入官方 Discord 获取未来试玩消息。

## 冲突、缺口与禁止写成事实的内容

- Google AI 摘要仍称可以从 Steam 下载 Demo，但官方商店与 API 的当前状态不支持这一说法，应以官方实时状态为准。
- 不要提供失效的 Demo 下载按钮，也不要链接第三方游戏下载站。
- Demo 视频中的房间等级、Perk、敌人数量和设置可能不同于正式版，必须在正式版中重新验证。
- “Steam Store API 返回失败”只能证明当前不可通过该公开条目获取，不能确定开发商是永久下架还是临时隐藏。

