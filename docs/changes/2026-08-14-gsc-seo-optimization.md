# 2026-08-14 GSC SEO 优化记录

## 背景与数据依据

本轮优化依据 `grain-rot.online-Performance-on-Search-2026-08-14.xlsx` 中的 GSC 数据进行。当前数据窗口较短，只适合识别方向，不适合频繁重写全站 TDH。

- 日语内容已经产生明确需求：日语页面贡献了样本中 34 / 40 次点击，因此优先补齐已被验证的日语搜索意图。
- 首页对 `grain rot wiki` 的承接仍然偏弱，需要让首屏正文和内部链接更清楚地表达 Wiki、攻略、人数、平台、价格与故障解决等主题。
- `player limit`、`lobby size`、`how many players` 属于同一组“可玩人数”意图，应集中由一个页面承接，避免多个页面使用相近标题争夺同一查询。
- `/` 与 `/wiki/` 原先都强调 Wiki，页面角色不够清楚：主页应承接品牌 Wiki 总入口，`/wiki/` 应承接完整攻略目录。

## 本次改动

### 1. 明确主页与目录页的关键词归属

- 保留主页 Title `GRAIN ROT Wiki: Game Guides, Co-op, Enemies & Fixes` 和 H1 `GRAIN ROT Wiki`，避免在短期 GSC 数据下反复改动核心 TDH。
- 强化主页首屏可见正文，明确覆盖 Wiki、co-op player limits、enemies、Steam、price、platforms 和 fixes。
- 将主页指向 `/wiki/` 的链接文案改为 `Browse all guides`、`guide directory` 等更明确的描述。
- 将 `/wiki/` 的 Title 改为 `All GRAIN ROT Guides: Complete Topic Directory`，H1 改为 `All GRAIN ROT Guides`，并使用绝对标题，避免再次附加 `GRAIN ROT Wiki`。
- 将导航中的 `Wiki` 改为 `Directory`，让用户和搜索引擎都能区分主页与目录页的职责。

原因：一个主要搜索意图应有一个最明确的主页面。主页负责品牌 Wiki 查询，目录页负责“全部攻略/主题目录”，可降低两页之间的关键词内耗。

### 2. 集中承接玩家人数相关查询

- 将 Player Count 页的 Title 和 H1 调整为 `GRAIN ROT Player Limit & Lobby Size`。
- 首个 H2 改为 `What is the GRAIN ROT player limit?`。
- 正文同时回答官方 1-4 人、单人支持、自定义最大人数设置，以及官方尚未公布硬上限的事实边界。
- 主页入口文案同步使用 `Player limit and lobby size`。

原因：`player limit`、`lobby size` 和 `how many players` 的用户都在寻找同一个答案。集中在一个页面可增强相关性，同时避免凭空写出官方未发布的硬上限。

### 3. 扩展已验证的日语内容

- 新增 `/ja/how-to-play/`。
- 新增 `/ja/player-count/`。
- 新增 `/ja/steam-price/`。
- 为对应英文页面增加 `translationKey`，连接 canonical、hreflang、语言切换、相关文章和 sitemap。

原因：GSC 已经显示日语用户带来大部分早期点击。优先覆盖玩法、人数和价格这些高价值搜索意图，比无数据支撑地一次性翻译所有页面更可靠。

### 4. 修正跨页面语言上下文

- 新增统一的 locale context，使用户从本地化页面进入尚未翻译的英文页面时，顶部导航、底部链接、搜索和语言标识仍保持当前语言环境。
- 统一 Header、Footer、文章卡片、分类页、搜索弹窗、MDX 内链和跳转链接的本地化处理。
- 切换语言时优先进入当前文章的对应译文；无译文时回到该语言入口或保留语言上下文。
- 同步更新页面 `lang`、跳过导航链接及 404 等公共界面的语言状态。

原因：此前语言只由 URL 路径判断，从本地化页面跳到英文路径后，顶部和底部会恢复英文，造成语言状态不一致。统一上下文后，页面内容可以暂时使用英文，但站点操作界面仍保持用户所选语言。

## 验证结果

- `npm run typecheck`：通过。
- `npm run build`：通过，共生成 64 个路由。
- 静态站内链接扫描：检查 63 个 HTML 页面，未发现失效内部链接。
- sitemap：新增的三个日语 URL 均已收录。
- SEO：关键页面均只有一个 H1，canonical 和 hreflang 正常。
- 多语言：9 个语言入口的现有 SEO 检查通过，共生成 27 个非英语 HTML 页面。
- 视觉复查：1440px 桌面端和 390px 移动端无横向滚动、表格溢出、控制台警告或错误。

## 上线后观察计划

1. 部署后在 GSC 请求首页、目录页、Player Count 页和三个新增日语页重新编入索引。
2. 至少 14 天内保持主页 Title、Description 和 H1 稳定，积累足够数据后再判断是否需要调整。
3. 分别观察 `grain rot wiki`、`player limit / lobby size / how many players` 以及日语玩法、人数、价格查询的展示、点击和平均排名。
4. 如果多个页面仍对同一查询同时获得展示，再依据实际落地页和排名处理内耗，不机械堆砌关键词。
