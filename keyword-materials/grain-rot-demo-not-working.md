# grain rot demo not working

- 分类：Troubleshooting
- 调研日期：2026-08-11
- 状态：已完成首轮调研
- 建议页面：`/grain-rot-demo-not-working`

## 搜索意图

用户已经安装、收藏或通过旧链接打开过 GRAIN ROT Demo，但现在遇到下载按钮消失、商店页跳转、无法启动或找不到试玩版等问题，想判断是本机故障还是官方状态变化。

## 当前结论

截至 **2026-08-11**，最应优先排查的不是显卡驱动或运行库，而是 **Demo 已不再公开可用**：历史 Demo App 4731790 的商店链接会跳回 Steam 首页，Steam Store API 返回 `success: false`，正式版 App 4450620 的页面也没有 Demo 下载按钮。因此，旧 Demo 无法下载或商店页打不开通常不代表用户电脑损坏。

如果用户打开的是已经安装在本地的历史 Demo，则只能提供通用、低风险的 Steam 排查步骤；无法把任何特定故障原因写成已证实事实。当前可靠路径是改用正式版，或通过官方 Discord / Steam 新闻等待官方是否重新开放试玩。

## 官方 / Steam 资料

### 1. 历史 Demo App 当前不可用

- 历史 App ID：4731790
- 历史 URL：https://store.steampowered.com/app/4731790/GRAIN_ROT_Demo/
- 2026-08-11 访问结果：链接跳转到 Steam 商店首页，没有独立商店页或下载按钮。
- Steam Store API：https://store.steampowered.com/api/appdetails?appids=4731790
- API 结果：`{"4731790":{"success":false}}`
- 可用判断：遇到 “page not found”、回到商店首页或无法重新下载时，应先说明 Demo 当前不可获取。

### 2. 正式版可用，但不是免费 Demo

- 正式版 App ID：4450620
- URL：https://store.steampowered.com/app/4450620/GRAIN_ROT/
- 发行日期：2026-08-07
- 当前状态：Windows PC 正式版可购买；商店页没有显示 Demo 下载入口。
- 使用提醒：不要把购买正式版包装成“修复 Demo”；这是从已结束的试玩版本迁移到正式发行版本。

### 3. 官方支持渠道

- Steam 新闻：https://store.steampowered.com/news/app/4450620
- 官方 Discord：https://discord.gg/xxHrFJTt3J
- 支持邮箱：support@neem.com
- 适用情况：用户确认自己运行的是正式版、完成 Steam 通用排查后仍无法启动，或需要确认旧 Demo 存档是否兼容时，再联系官方并附上系统信息、报错原文和复现步骤。

## Google / 网页素材

### 4. “Demo Goes Down” 下线时间线线索

- Google / Reddit 搜索摘要中可见标题或摘录：`Demo Goes Down July 12th at 11:59PM EST`。
- 使用限制：未找到可直接打开并核验的 Steam 官方公告页面，因此 **7 月 12 日 23:59 ET** 只能作为社区搜索线索，不能写成官方确认的精确下线时间。
- 与当前状态的关系：官方商店链接和 API 的实时结果可以独立证明 Demo 目前不可用，不需要依赖该日期才能回答用户。

### 5. 第三方故障页

- 搜索结果中存在页面将问题归因于 Visual C++ 运行库、DirectX 或 GPU 驱动。
- 核验结果：没有找到 GRAIN ROT 开发者或 Steam 官方材料证明这些是该 Demo 的已知特定故障。
- 使用限制：只能把更新驱动、验证文件等写成通用排查步骤，不能声称某个运行库就是根因，也不要引用第三方给出的“成功率”。

## YouTube 素材

### 6. 历史 Demo Gameplay

- URL：https://www.youtube.com/watch?v=gBaOyrhDsTA
- 标题：GRAIN ROT Demo Gameplay
- 频道：VibesOfGaming
- 发布日期：2026-06-13
- 时长：21:01
- 用途：证明 Demo 在 6 月曾正常公开运行并展示其界面；不能证明 8 月仍可下载，也不能作为故障修复依据。

### 7. Demo 房间等级与 Perk 视频

- URL：https://www.youtube.com/watch?v=1Oq3EkzZ5EU
- 标题：Grain Rot Tip: Max Room Levels and perks For Demo Version
- 频道：PapaRossi
- 时长：2:44
- 用途：仅作历史版本参考。正式版机制、存档和数值可能变化，不应用该视频诊断正式版问题。

## 建议排查流程

1. 先在 Steam 库和商店链接中确认 App：`4731790` 是历史 Demo，`4450620` 是正式版。
2. 如果 4731790 的页面跳回首页、没有下载按钮或无法重新安装，解释 Demo 当前已不可公开获取；不要继续把它当作本机故障修复。
3. 如果旧 Demo 仍留在本地但无法启动，可尝试 Steam 的“验证游戏文件完整性”、重启 Steam、更新 Windows 和显卡驱动；这些是通用步骤，不保证恢复已停止分发的版本。
4. 不要从第三方下载站获取所谓 Demo 或替换文件，以免遇到过期版本和安全风险。
5. 想继续游玩时转到正式版 App 4450620；遇到正式版启动故障时，应另按正式版问题收集报错、日志和硬件信息。
6. 旧 Demo 存档能否迁移到正式版未获官方资料确认，先备份存档，不要承诺兼容。

## 可用于内容生成的素材摘要

GRAIN ROT Demo 无法下载或商店页打不开，当前最可能是官方试玩条目已经停止公开分发，而不是玩家电脑缺少某个特定组件。2026 年 8 月 11 日复查时，历史 Demo App 4731790 的 Steam 页面会返回商店首页，公开 API 也返回失败；正式版 App 4450620 已于 8 月 7 日发行，但没有 Demo 按钮。

故障页应先帮助用户区分 Demo 与正式版，再给出有限的 Steam 通用排查，并把正式版商店、Steam 新闻、官方 Discord 和支持邮箱作为下一步。页面标题可以直答 “The demo is no longer publicly available”，同时明确这不是对永久下架原因的推断。

## 冲突、缺口与禁止写成事实的内容

- 不要写“Demo 仍可在 Steam 免费下载”；当前官方状态不支持。
- 不要把搜索摘要中的 **2026-07-12 23:59 ET** 写成已核验的官方下线时间。
- 不要声称缺少 Visual C++、DirectX、驱动过旧或杀毒软件拦截就是 GRAIN ROT Demo 的确定根因。
- 不要推荐第三方下载镜像、破解包或手动 DLL 下载站。
- 不要承诺旧 Demo 存档、设置或多人数据能迁移到正式版。
- API 返回 `success: false` 和商店跳转只能证明当前公开状态，不能证明 Demo 永久下架或未来绝不会重新开放。

