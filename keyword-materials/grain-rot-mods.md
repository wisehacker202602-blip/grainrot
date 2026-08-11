# grain rot mods

- 分类：Community Resources
- 调研日期：2026-08-11
- 状态：已完成首轮调研
- 建议页面：`/grain-rot-mods`

## 搜索意图

玩家想找可下载的 GRAIN ROT Mod、模组管理器、Steam Workshop / Nexus Mods 页面、安装说明，或修改人数、画质、物品和 Spark 等玩法。

## 当前结论

截至 **2026-08-11**，GRAIN ROT 已有一个刚建立的 **Thunderstore 社区**，但尚处于加载器基础设施阶段：列表中只有 2 个包，分别是 Grain Rot 专用的 UE4SS community overlay 和它依赖的通用 `unreal_shimloader`。专用包当前显示 25 次下载、0 评分、0 个依赖包；因此 **还不能把它描述成已有成熟的玩法 / 内容 Mod 库**。

Steam 商店及社区导航没有 Workshop 入口，未找到开发者发布官方 Mod SDK、Workshop 支持或 Mod 政策。也未找到 GRAIN ROT 的 Nexus Mods 游戏主页。当前最准确的页面定位是“Mod status / emerging Thunderstore support”，而不是“best mods download list”。

## 官方 / Steam 资料

### 1. Steam 商店页

- URL：https://store.steampowered.com/app/4450620/GRAIN_ROT/
- App ID：4450620
- 当前功能：单人、在线合作、家庭共享。
- 商店和 Steam Community 导航未显示 `Steam Workshop`；功能区也未列出 Workshop 支持。
- 官方 Mod 状态：未找到开发者公告、SDK、Workshop 路线图或 Mod 使用政策。
- 表述边界：可写“Steam Workshop is not available as of August 11, 2026”，不能写“开发者永远不会支持 Mod”。

### 2. Steam 新闻与官方渠道

- Steam 新闻：https://store.steampowered.com/news/app/4450620
- 官方 Discord：https://discord.gg/xxHrFJTt3J
- 支持邮箱：support@neem.com
- 使用方向：发布 Mod 页面时应把 Steam 新闻和 Discord 作为未来官方支持状态的复查入口。

## Thunderstore 资料

### 3. Grain Rot Thunderstore 社区

- URL：https://old.thunderstore.io/c/grain-rot/
- 2026-08-11 直接访问结果：共显示 2 个包。
- `GrainRot UE4SS`：Grain Rot 专用 community overlay。
- `unreal shimloader`：为 RE-UE4SS 提供 Thunderstore Mod Manager / r2modmanPlus 支持的通用依赖。
- 当前结论：已有第三方加载器基础，但列表里尚无角色、画质、物品、人数、地图或 QoL 等实际内容 Mod。

### 4. GrainRot UE4SS 包

- URL：https://old.thunderstore.io/c/grain-rot/p/Thunderstore/GrainRot_UE4SS/
- 发布者：Thunderstore
- 当前版本依赖字符串：`Thunderstore-GrainRot_UE4SS-1.0.1`
- 2026-08-11 页面状态：约 13 小时前更新；25 次下载；0 个 Like；0 个其他包依赖。
- 包说明：为 `unreal-shimloader` 提供 Grain Rot community overlay，而不是一个实际玩法 Mod。
- 技术细节：页面称游戏使用 Unreal Engine 5.7；标准 UE4SS 在该构建中无法解析 3 个符号，会出现 `Fatal Error: PS scan timed out`，此 overlay 提供 AOB signature overrides。
- 安全相关设计：页面称它会禁用 shimloader 的 `CheatManagerEnablerMod`、`ConsoleEnablerMod` 和 `ConsoleCommandsMod`，避免暴露游戏自身的 `Debug*` 命令；Blueprint loader 仍保持启用。
- 来源代码：https://github.com/thunderstore-io/unreal-shimloader

### 5. unreal shimloader

- URL：https://old.thunderstore.io/c/grain-rot/p/Thunderstore/unreal_shimloader/
- 页面描述：Thunderstore Mod Manager 和 r2modmanPlus 对 RE-UE4SS 的支持层。
- `GrainRot UE4SS` 页面列出的首选依赖版本：1.1.7。
- 使用限制：通用 loader 的总下载量不能当作 GRAIN ROT Mod 下载量；其中绝大多数使用可能来自其他 Unreal 游戏。

## Google / 网页素材

### 6. XMODhub “15 Best Mods”

- URL：https://www.xmodhub.com/info/lists/best-grain-rot-mods/
- 标题：The 15 Best GRAIN ROT Mods in 2026
- 搜索日期：页面约 1 天前发布。
- 冲突：Thunderstore 实际列表只有 2 个基础设施包且没有内容 Mod，Steam / Nexus 也没有对应成熟库，因此“15 best mods”标题没有可验证的真实生态支撑。
- 访问结果：页面在当前浏览器导航超时，未能直接核验其清单与下载链接。
- 处理方式：不要引用或链接其中的所谓 Mod 下载；不要运行来历不明的安装器。

### 7. WeMod / Trainer 页面

- URL：https://www.wemod.com/cheats/grain-rot-trainers
- Google AI 结果把它描述为单人 Trainer 预览。
- 使用限制：Trainer / cheat 不是社区内容 Mod，也不是官方支持；未直接核验功能和当前可用状态。
- 风险：在线合作中使用会改变公平性、造成不同步或违反平台 / 房主规则。没有证据时不要声称游戏有或没有反作弊系统。

### 8. Nexus Mods 与 Steam Workshop 搜索

- 查询：`"GRAIN ROT" Nexus Mods Steam Workshop`
- 未找到 GRAIN ROT 的 Nexus Mods 游戏主页或 Steam Workshop 页面。
- Steam Community 的实际导航包含讨论、截图、艺术作品、视频、新闻、指南和评测，但没有 Workshop。
- 使用提醒：Google AI 生成的“没有官方支持”不是独立证据；页面结论应基于平台当前实际状态，并注明访问日期。

## YouTube 素材

### 9. 当前没有可靠的 Mod 安装视频

- 精确搜索没有找到展示真实 GRAIN ROT 内容 Mod、版本号、依赖和安装结果的可信 YouTube 教程。
- 搜索结果主要是新手攻略、隐藏机制或普通升级视频，不属于 Mod。
- 误判示例：https://www.youtube.com/watch?v=gmEmv66fgsE
- 标题：Grain Rot Tip: Infinite Spark Mode (pt 2)
- 频道：PapaRossi
- 时长：1:26
- 使用限制：标题中的 `Mode` / 无限效果不能自动归类为 Mod，可能是游戏机制、Demo 行为或漏洞。

## 安全安装建议素材

1. 先确认资源来自 Grain Rot 的 Thunderstore 社区，并核对作者、版本、依赖、更新日期、Source 和被依赖数量。
2. 当前只有加载器基础包，没有必要为了“尝鲜”下载声称包含 15 个功能的陌生整合安装器。
3. 使用 Mod Manager 时为原版存档备份；游戏更新后先禁用全部 Mod，再逐个恢复，以定位崩溃或加载失败。
4. 联机前确认所有队友是否接受 Mod，以及 Host / Client 是否需要相同依赖；当前没有官方兼容规则，不要承诺跨版本或混合客户端能工作。
5. 不在公开合作房间使用 Trainer、物品生成、无限资源或其他影响公平性的工具。
6. 遇到故障时先用无 Mod 配置复现，再联系 Mod 作者；官方支持很可能无法诊断第三方注入器造成的问题。

## 可用于内容生成的素材摘要

GRAIN ROT Modding 在 2026 年 8 月 11 日刚进入基础设施阶段。Thunderstore 已出现 Grain Rot 社区和 `GrainRot UE4SS` 兼容层，用于让 UE4SS 在游戏的 Unreal Engine 5.7 构建上初始化，但目前没有实际玩法或内容 Mod，专用包也尚无其他依赖包。Steam Workshop 和 Nexus Mods 页面均未找到，开发者也没有公开 Mod SDK 或支持政策。

页面应把实时状态和安全提醒放在最前：链接到 Thunderstore 社区，列出当前包数和访问日期，并明确 loader 不等于 content mod。后续可以定期复查 Thunderstore；只有出现可直接核验的 Mod 页面后，再建立名称、作者、版本、功能、依赖、联机要求和风险表。

## 冲突、缺口与禁止写成事实的内容

- 不要写“GRAIN ROT currently has 15 best mods”；真实 Thunderstore 页面不支持。
- 不要把 `GrainRot UE4SS` 称为官方 SDK、官方 Mod 支持或一个实际玩法 Mod。
- Thunderstore 发布者名称为 `Thunderstore`，不代表 Beck & Branch Games 官方背书。
- 不要把通用 `unreal shimloader` 的 247,250 总下载量算作 GRAIN ROT 下载量。
- 不要声称使用 Mod 一定安全、一定不会封禁或一定能联机；未找到官方 Mod 政策或反作弊说明。
- 不要推荐不明 GitHub 可执行文件、Trainer、DLL 镜像或第三方“all mods”安装器。
- 当前无 Workshop / Nexus 页面只代表 2026-08-11 的状态，未来可能变化，页面必须显示复查日期。

