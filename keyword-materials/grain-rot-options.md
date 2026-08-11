# grain rot options

- 分类：Settings
- 调研日期：2026-08-11
- 状态：已完成首轮调研
- 建议页面：`/grain-rot-options`

## 搜索意图

玩家想了解 GRAIN ROT 的 Options / Settings 菜单：如何改键、调整手柄和鼠标、降低 head bob / motion sickness、配置画质和帧率、分别调整音量，以及 Host 如何设置 Lobby privacy、人数和玩家麦克风音量。

## 当前结论

正式版官方确认提供 **expanded Game, Audio & Video Settings** 和 **Gamepad Support**。Steam 当前还标记 Full Controller Support、Custom Volume Controls、Stereo Sound、Playable without Timed Input 和 Playable at Your Own Pace。

发布后补丁进一步确认：

- Patch 1.03 声称修复自定义键位不能正确保存。
- Patch 1.04 新增 Lobby privacy、max player count、单个玩家 mic volume、kick / ban。
- Patch 1.05 修复 Friends privacy 下无法加入好友。

官方没有公开逐项菜单清单或推荐值。社区实机报告确认 `Options > Accessibility > Camera Shake` 调到 `0` 可消除 head bob；但 FOV slider、Invert Y、DLSS / FSR / Frame Generation 和所有画质项是否存在或是否有效，没有官方 1.0 说明。页面必须把玩家报告与官方功能分开。

## 官方 / Steam 资料

### 1. 正式版 1.0 设置范围

- Steam 公告：https://store.steampowered.com/news/app/4450620/view/683007398702483305
- RSS：https://store.steampowered.com/feeds/news/app/4450620/?cc=US&l=english
- 标题：Get Ready for the Wasteland - We're Launching 7th August!
- 发布日期：2026-07-14
- 官方 1.0 清单包含：`Gamepad Support`、`Expanded Game, Audio & Video Settings`、`Performance Optimizations`。
- 可用结论：正式版相比 Demo 扩展了三类设置并正式支持手柄。
- 限制：公告没有列出 FOV、反转 Y、View Bob、升频技术或每个音量滑块的名称。

### 2. Steam 当前功能与无障碍标签

- 商店页：https://store.steampowered.com/app/4450620/GRAIN_ROT/
- App Details API：https://store.steampowered.com/api/appdetails?appids=4450620&l=english&cc=us
- 当前类别：Full controller support、Custom Volume Controls、Playable at Your Own Pace、Playable without Timed Input、Stereo Sound。
- Steam 的 Custom Volume Controls 标签可以支持“存在分项音量控制”的结论，但不能据此猜滑块名称、默认值或数量。
- Steam 列出 11 种界面 / 字幕语言；只有 English 标有 full audio support。

### 3. Patch 1.03：键位保存

- URL：https://store.steampowered.com/news/app/4450620/view/703275952293020479
- 发布日期：2026-08-09
- 官方条目：`Fixed bug where key bindings did not save correctly.`
- 建议写法：自定义键位在 1.03 获得官方修复；若当前版本仍重置，先更新游戏，再记录输入设备和绑定项向官方报告。
- 重要限制：同日补丁发布后仍有玩家报告重置问题，不能保证所有设备或配置都已解决。

### 4. Patch 1.04：多人设置

- URL：https://store.steampowered.com/news/app/4450620/view/703275952293021047
- 发布日期：2026-08-10
- 新增：Lobby privacy 和 max player count。
- 新增 View Lobby 菜单：可调整每位玩家的 mic volume，并可 kick / ban。
- 可用结论：Host / Lobby 管理属于 Options 页面不可遗漏的正式版设置。
- 限制：补丁没有给出可选最大人数范围，也没有说明 mic input device、push-to-talk 或降噪设置。

### 5. Patch 1.05：Friends privacy 修复

- URL：https://store.steampowered.com/news/app/4450620/view/703275952293021063
- 发布日期：2026-08-10
- 修复：Lobby privacy 设为 friends 时无法加入好友。
- 使用方向：好友加入失败时先确认至少为 1.05，再检查 Lobby privacy；不要继续引用 1.04 当天的旧故障作为当前固定行为。

### 6. Patch 1.01：性能修复

- URL：https://store.steampowered.com/news/app/4450620/view/703275952293020395
- 发布日期：2026-08-08
- 修复：light invalidation 导致性能低于预期。
- 使用方向：遇到低帧率时，第一步是更新游戏，而不是先改配置文件或安装第三方 DLL。

## Google / 社区素材

### 7. Head bob / Camera Shake

- URL：https://steamcommunity.com/app/4450620/discussions/0/582804662258968988/
- 主题：head bob
- 2026-08-08 的玩家回复给出当前菜单路径：`Options > Accessibility > Camera Shake`，设为 `0` 可关闭 head bob。
- 可靠性：这是正式版发布后的可复现社区操作，比 Demo 请求帖更接近当前 UI。
- 使用限制：尚无官方菜单截图或补丁文字点名该路径；页面应写 `players report`，并建议按当前 UI 核对。

### 8. Demo 的 FOV 与 motion sickness 反馈

- URL：https://steamcommunity.com/app/4450620/discussions/0/564785528365498403/
- 主题：Some accessibility settings (for motion sickness) would be appreciated!
- 日期：2026-06-14，Demo 时期。
- 玩家当时请求关闭 view bobbing、调整 FOV，并提到 Demo 已能降低 motion blur。
- 版本处理：Camera Shake 在正式版已有社区可复核路径；FOV slider 仍未在官方 1.0 公告或当前补丁中得到确认。

### 9. 正式版画质与性能讨论

- URL：https://steamcommunity.com/app/4450620/discussions/0/582804934666377050/
- 主题：The game's graphical settings actually doesn't change anything. VKD3D modding improvements!
- 日期：2026-08-09
- 玩家在配置中观察到 `ResolutionQuality`、`ShadowQuality` 和 `PostProcessQuality`，并讨论 VSync、FPS cap、Anti-Aliasing 与动态分辨率预设。
- 同期其他玩家声称没有 DLSS、FSR 或 Frame Generation，并质疑部分画质项对性能的影响。
- 使用限制：这是单机配置和硬件环境下的社区观察；不要推广替换 DirectX DLL、VKD3D 或手改 Unreal 配置作为通用方案，也不要承诺特定 FPS 增幅。

### 10. 键位保存仍有玩家报告

- URL：https://steamcommunity.com/app/4450620/discussions/0/582804934666371091/
- 主题：Keybindings keep resetting
- 日期：2026-08-09
- 玩家在 Patch 1.03 发布日仍报告每次启动需重新绑定。
- 与官方冲突：Patch 1.03 已声称修复，所以这可能是未更新、特定输入设备、配置权限或残留 Bug，公开资料不能确定原因。
- 推荐处理：不要教玩家把配置设为只读或复制陌生配置；先核对版本，再通过官方 Discord / support 提交复现信息。

### 11. Multiplayer privacy 的社区 UI 名称

- Steam 搜索页：https://steamcommunity.com/app/4450620/discussions/search/?q=options
- Patch 1.04 后玩家称 `Options > Multiplayer` 中可选择 Public、Private 或 Friends Only。
- 可靠性：选项类别与官方补丁一致；三个显示名称来自玩家，不是补丁原文。
- 注意：Friends Only 加入问题已在 Patch 1.05 修复，旧帖不能作为当前故障结论。

## YouTube / 视频素材

### 12. 正式版新手指南

- URL：https://www.youtube.com/watch?v=EAQEtW0rYbE
- 标题：GRAIN ROT Beginner Guide (2026) | 15 Essential Tips to Survive Your First Run
- 频道：PapaRossi
- 发布日期：2026-08-07
- 时长：25:41
- 用途：正式版 UI 和默认控制提示的视觉参考，可用于后续截取当前菜单画面。
- 限制：标题、简介和可检索转录没有提供完整 Options 清单；不能从普通玩法画面反推隐藏设置。

### 13. 正式版无旁白 PC Gameplay

- URL：https://www.youtube.com/watch?v=_E9wfaK2oas
- 标题：GRAIN ROT | Gameplay PC
- 频道：MAZAVS - Games Channel
- 发布日期：2026-08-08
- 时长：49:50
- 用途：展示正式版实际画面、字幕和镜头效果，可用于比较 Camera Shake / Motion Blur 调整前后的视觉表现。
- 限制：视频未提供设置值，不能当作最佳画质配置教程。

### 14. 当前专门视频缺口

- 查询 `GRAIN ROT best settings`、`GRAIN ROT graphics settings FPS`、`GRAIN ROT FOV head bob`、`GRAIN ROT keybind settings` 时，没有找到专门展示正式版完整菜单并逐项测试的可靠 YouTube 教程。
- 现阶段页面配图应优先自行从最新版 `Options` 的 Game、Audio、Video、Accessibility、Controls 和 Multiplayer 页面截取，而不是引用无设置值的玩法视频。

## 可直接使用的操作素材

### Reduce head bob / motion sickness

1. 打开 `Options`。
2. 进入 `Accessibility`。
3. 把 `Camera Shake` 调到 `0`；这是 2026-08-08 正式版玩家报告的有效路径。
4. 再按个人舒适度降低 Motion Blur；Demo 已存在该调节，但正式版准确标签和范围应在当前 UI 核对。
5. FOV slider 暂无官方 1.0 证据，不要承诺一定存在。

### Fix keybinds that reset

1. 更新至 Patch 1.03 或更高版本，官方补丁声称已修复绑定保存。
2. 重新绑定后正常退出游戏并再次启动测试。
3. 若仍重置，记录键盘 / 鼠标或控制器型号、被重置的动作、游戏版本和复现步骤。
4. 不建议先把配置文件设为只读；这可能阻止其他设置保存，并掩盖真实 Bug。

### Configure a private lobby

1. 更新至至少 Patch 1.05。
2. 在 `Options > Multiplayer` 查找 Lobby privacy；社区报告的选择为 Public、Private、Friends Only。
3. Host 可设置 max player count。
4. 在 View Lobby 中可调整单个玩家 mic volume，并 kick / ban。
5. 官方补丁没有公布自定义人数硬上限，不要填未经核验的数字。

### Start with performance troubleshooting

1. 先更新游戏；Patch 1.01 修复了 light invalidation 性能问题。
2. 记录分辨率、VSync、FPS cap、阴影、后处理、抗锯齿和动态分辨率预设的改动前后表现。
3. 一次只改一个选项，用同一场景比较 FPS 和帧时间。
4. 不推荐下载陌生 DLL、套用其他游戏的 Engine.ini 或保证某个“最佳设置”适合所有硬件。

## 可用于内容生成的素材摘要

GRAIN ROT 正式版官方确认扩展了 Game、Audio 和 Video 设置，并加入 Gamepad Support。Steam 当前标记 Full Controller Support、Custom Volume Controls、Stereo Sound 及两项节奏 / 限时输入无障碍功能。发布后的 1.03–1.05 补丁又分别处理键位保存、Lobby privacy / max player count / 玩家麦克风音量 / kick / ban，以及 Friends lobby 加入问题。

动作不适页面可以给出一个有版本依据的社区操作：`Options > Accessibility > Camera Shake = 0` 用于关闭 head bob。FOV slider、Invert Y、DLSS / FSR / Frame Generation 和详细画质字段没有官方完整表，因此应标为未证实或社区反馈，不要编造推荐值。性能页的首要建议是更新补丁并逐项测试，而不是推广第三方 DLL 或未经验证的 Unreal 配置。

## 冲突、缺口与禁止写成事实的内容

- 不要声称正式版一定有 FOV slider 或 Invert Y；官方没有确认，公开讨论主要是玩家请求。
- 不要声称 Camera Shake 路径是官方文档；它来自正式版社区回复，发布前应在当前 UI 截图复核。
- 不要保证 Patch 1.03 对所有玩家彻底解决键位重置；同日仍有玩家报告。
- 不要编造 Master / Music / SFX / Voice Chat 等滑块名称或默认百分比；Steam 只确认 Custom Volume Controls。
- 不要猜测 Lobby 的 max player count 硬上限。
- 不要推荐替换 DX12 DLL、安装 VKD3D、下载所谓 FPS pack 或复制陌生 Engine.ini；社区帖子无法证明安全性和普适收益。
- 不要把 Demo 时期缺失的设置直接描述成正式版仍缺失；官方已明确说 1.0 扩展了设置。
- 不要承诺 Lowest、Performance 或关闭 Shadows 一定提高固定比例 FPS；社区已报告部分选项表现不一致。
- 不要写 DLSS、FSR、Frame Generation 或动态分辨率的正式支持状态，除非在当前版本菜单或官方补丁中直接核验。
