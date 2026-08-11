# 图片文字提取

> 已按 9 张截图的顺序合并，去除了侧边目录、页面按钮、水印及相邻截图中的重复内容。正文内嵌的网页示例图仅保留与说明相关、清晰可辨的文字。

## 01. 具体步骤

游戏攻略站的内容必须有事实依据。

如果直接让 AI 编——它会把不同游戏的信息混在一起，或者编出不存在的人物、兑换码、关卡。

Google 一旦发现内容不准确，就不会给你排名。

这一关的核心原则：**AI 用于过滤和整理，不用于凭空编造。事实必须来自真实信息源。**

## 1. 首页：首页就是网站的主页面。

首页通常用来围绕游戏主词，它适合放游戏的整体信息和游戏核心关键词模块。

**推荐数据来源：** ChatGPT 网页端直接联网搜索

**目标：** 获取网站开发所需的全部基础信息——官方链接、SEO 元数据、主题色、多语言优先级。

### SEO 元数据

网页给 Google 看的「后台说明」，决定你的站能不能被搜到、搜索结果里长什么样。

主要 3 样：title（搜索结果那条蓝色大标题）、description（标题下的灰色小字介绍）、keywords（一组相关词，权重低但写上没坏处）。提前写好填进去，用户搜相关词时才容易找到你、点进来。

示例：

- farevergame.wiki
- https://farevergame.wiki/
- Farever Wiki — Co-op Action RPG Guide, Classes & Roadmap
- Farever is a co-op action RPG by Shiro Games, now in Steam Early Access. Get the latest release info, classes, jobs, weapons, dungeons, beginner guide and 2026 ...

### 官方链接

游戏的官方 / 权威入口：官网、Discord、YouTube、Reddit、平台页（Roblox / Steam）等。

首页“开始游戏”“加入 Discord”按钮跳转的就是它们；

提示词写清楚：只放官方和正经社群、不留打不开的 404 链接。

### 主题色

网站主色调（导航栏、按钮、强调色），让视觉风格贴近游戏调性，不用通用蓝白配色——恐怖游戏用暗红深紫、童话游戏用粉蓝暖黄，玩家一眼“对味”。提示词 ##3 让 ChatGPT 参考游戏官网 / 宣传图给 HSL 色值。

### 多语言优先级

游戏面向全球，可同时做多语言版本（英语 / 西语 / 日语……）让不同语言玩家都搜得到。“优先级”就是定先做哪门、顺序怎么排。提示词 ##4 按各地区热度排，最多 4 门、必须有英语；新手先把英语做扎实，再加其他语言。

除了上面 4 样基础信息，提示词那个 JSON 里还有首页从上到下要填的内容字段，也说一下是啥：

**hero（首屏主区）：** 进站第一眼的大区域。title 是大标题（游戏名），eyebrow 是上方小标语，description 是一两句玩法介绍，stats 是首屏核心数据，三个 Cta 是行动按钮，videoLabel 是官方视频标签。

**start（新手引导区）：** “Start Here”区，cards 是 4 张新手引导卡片：第 1 张固定新手入门，后 3 张挑玩家前两小时最常搜的内容、类型互不重复。

**aboutGame（游戏介绍区）：** “What is 游戏名？”区，paragraphs 是 2–3 句玩法介绍，stats 是数据表（开发商 / 平台 / 类型 / 访问量等），用 label + value 成对。

**finalCta（底部号召区）：** 页底号召区，title 是号召标题，primary / secondary 是两个按钮。

**footer（页脚）：** 每页底部信息区，含站点介绍、官方社群入口、法律页等。

【实操环节】

下面是直接丢给 chatgpt 的提示词：

> 截图到此处只露出代码块标题“Python”，未显示提示词正文。

## 2. 网站图标（Favorite Icon）生成

Favorite Icon，译为网站图标 / 收藏夹图标，是显示在浏览器标签、收藏夹、历史记录里的小图标，尺寸一般很小（16×16、32×32 像素），文件格式常为 .ico。

### 2.1 生成图标描述

```text
游戏词：{TOPIC}
直接适合该网站的 favicon logo 英文绘画提示词，目标格式为：512*512 png
```

### 2.2 图标生成

方法 1：ChatGPT 图片生成（上述提示词直接丢给 chatgpt）

方法 2：调用 AI 图片生成模型

### 2.3 加工成各种格式

免费网站：https://favicon.io/favicon-converter

下载一个压缩包：里面包括各种格式图标 png（各种尺寸、桌面/移动），你交给编程工具放到合适位置。

截图中显示的文件名：

- site.webmanifest
- favicon.ico
- android-chrome-512x512.png
- android-chrome-192x192.png

## 3. 内页——获取游戏长尾关键词流量的重要途径

内页就是网站下具体页面，内页通常承接**具体游戏细分关键词**的搜索需求。内页案例，如：https://farevergame.wiki/classes

比如用户只想找 classes，就可以直接进入 classes 页面。

### 内页信息去哪找？

| 信息渠道 | 适合获取什么 | 怎么用 | 注意事项 |
| --- | --- | --- | --- |
| ChatGPT / AI | 实时调研搜索所有信息 | 给 AI 长尾关键词名称，让它联网搜索调研信息 | 不适合当事实来源，尤其是新游戏细节 |
| YouTube | 试玩攻略、角色评测、操作教学 | 搜索对应关键词 → 视频转写提取内容 | UP 主常比 Google 文章更早发布新游戏攻略 |
| Discord | 角色机制、更新说明、官方一手信息 | 加入游戏的官方 Discord → 看公告频道和 FAQ | 海外游戏社区核心阵地，信息最接近官方 |
| Google 搜索 | 已有攻略文章、Wiki 页面 | 搜“游戏名 guide”“游戏名 wiki” | 参考结构，不复制内容 |
| 竞对网站 | 页面结构参考、信息缺口发现 | 看已有攻略站覆盖了什么需求 | 不能简单复制，主要用于发现信息缺口 |
| 官网 / Steam 页面 | 游戏基本介绍、角色列表、更新日志 | 直接获取官方信息 | 最适合做首页和角色介绍 |

### 多渠道收集内页素材

不要只靠一个来源，同一个信息至少在 2 个来源交叉验证。（准备一个文档，收集的信息都放进一个文档里面）

上一步我们得到了“keywords.json”，那么这一步我们需要为这 10–20 个关键词，分别搜集更具体的“关键词素材”。我们需要在该游戏项目文件内新建一个“关键词素材.md”，将下文收集到的素材，放进“关键词素材.md”里。

具体操作方法如下（以一个关键词“farever classes”为实例）：

### 3.1 先搜 Google

看该内页关键词需求是否有现成的攻略文章和 Wiki。

选择“farever classes”为主题、排名前二的网页点进去。

直接复制这两个网页的内容，如图，复制网页 1 的内容。

如图，复制网页 2 的 4 个板块内容。以上 2 个页面复制的内容，全部放进一个以“farever classes”命名的关键词文档。

示例网页中清晰可辨的主要文字：

- The Classes of Farever — Questlog.gg
- The Classes of Farever. Pick your path: Warrior, Rogue, Mage, or Priest. Each class shapes your stats, your skills, and the way you fight.
- FAREVER CLASS TIER LIST
- ALL CLASSES IN FAREVER RANKED
- The Classes of Farever
- Rogue / Priest / Warrior / Mage

### 3.2 再去 YouTube 搜索游戏内页关键词等

用插件提取字幕，然后交给 gpt 等大模型提取关键内容。

1）下载 YouTube 脚本生成器 - YouTube TranscriptGenerator

下载地址：https://chromewebstore.google.com/detail/olhmdeioemochcmndjfcgfnpmhkckgif?utm_source=item-share-cb

2）去 YouTube 搜索“farever classes”，然后选择 2 个时间较新、观看量较大的视频，点进去，这时插件就会自动加载。点击插件中间 Pro Transcription 开始提取字幕。字母提取完毕，选择语言为简体中文，点击左侧 export 复制字幕文本。

截图中的示例视频标题：ULTIMATE CLASS GUIDE - Farever Class Breakdown
