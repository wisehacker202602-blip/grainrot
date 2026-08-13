export const localeCodes = [
  "en",
  "de",
  "fr",
  "es",
  "pt-br",
  "ru",
  "ja",
  "ko",
  "uk",
] as const;

export type ArticleLocale = (typeof localeCodes)[number];

type LocaleUi = {
  home: string;
  allGuides: string;
  updated: string;
  readingSuffix: string;
  directAnswer: string;
  versionCheck: string;
  versionNote: string;
  onThisPage: string;
  sourcePolicy: string;
  sourceCopy: string;
  howWeVerify: string;
  keepReading: string;
  relatedGuides: string;
  relatedCopy: string;
  searchWiki: string;
  searchPlaceholder: string;
  searchArticles: string;
  closeSearch: string;
  suggested: string;
  indexedTopics: string;
  matches: string;
  noMatches: string;
  languages: string;
  breadcrumb: string;
};

type LocaleConfig = {
  href: string;
  hreflang: string;
  htmlLang: string;
  ogLocale: string;
  dateLocale: string;
  shortLabel: string;
  nativeName: string;
  hubTitle: string;
  hubDescription: string;
  hubHeading: string;
  hubKicker: string;
  hubIntro: string;
  ui: LocaleUi;
};

export const localeConfig: Record<ArticleLocale, LocaleConfig> = {
  en: {
    href: "/", hreflang: "en", htmlLang: "en", ogLocale: "en_US", dateLocale: "en-US", shortLabel: "EN", nativeName: "English",
    hubTitle: "GRAIN ROT Wiki: Game Guides, Co-op, Enemies & Fixes", hubDescription: "Explore the GRAIN ROT Wiki for how-to-play guides, co-op and player-count details, enemies, settings, progression, Steam, price, platforms, and common fixes.", hubHeading: "GRAIN ROT Wiki", hubKicker: "Independent, evidence-led player reference", hubIntro: "A complete player guide to the core loop, co-op, progression, enemies, settings, platforms, and common problems, with every answer clearly sourced.",
    ui: { home: "Home", allGuides: "All guides", updated: "Updated", readingSuffix: "read", directAnswer: "DIRECT ANSWER", versionCheck: "Version check", versionNote: "This page was reviewed on {date}. Patch details and live storefront values can change; the linked official sources take priority.", onThisPage: "On this page", sourcePolicy: "Source policy", sourceCopy: "We separate official facts, community observations, and unknown details.", howWeVerify: "How we verify", keepReading: "KEEP READING", relatedGuides: "Related guides", relatedCopy: "Next answers from the same part of the game.", searchWiki: "Search wiki", searchPlaceholder: "Search platforms, fixes, enemies...", searchArticles: "Search articles", closeSearch: "Close search", suggested: "Suggested wiki pages", indexedTopics: "indexed topics", matches: "matches", noMatches: "No wiki page matches that search yet.", languages: "Languages", breadcrumb: "Breadcrumb" },
  },
  de: {
    href: "/de/", hreflang: "de", htmlLang: "de", ogLocale: "de_DE", dateLocale: "de-DE", shortLabel: "DE", nativeName: "Deutsch",
    hubTitle: "GRAIN ROT Wiki: Guides, Koop, Gegner & Lösungen", hubDescription: "Im GRAIN ROT Wiki findest du Guides und Informationen zu Koop und Spielerzahl, Gegnern, Einstellungen, Fortschritt, Steam, Preis und Plattformen sowie Lösungen für häufige Probleme.", hubHeading: "GRAIN ROT Wiki", hubKicker: "Unabhängiges Spieler-Wiki mit geprüften Quellen", hubIntro: "Ein umfassender Guide zu Gameplay, Koop, Fortschritt, Gegnern, Einstellungen, Plattformen und häufigen Problemen – mit klar belegten Antworten.",
    ui: { home: "Startseite", allGuides: "Alle Guides", updated: "Stand:", readingSuffix: "Lesezeit", directAnswer: "DIREKTE ANTWORT", versionCheck: "Versionsprüfung", versionNote: "Diese Seite wurde am {date} geprüft. Patchdetails und aktuelle Shop-Angaben können sich ändern; maßgeblich sind die verlinkten offiziellen Quellen.", onThisPage: "Auf dieser Seite", sourcePolicy: "Quellenrichtlinie", sourceCopy: "Wir unterscheiden zwischen offiziellen Fakten, Community-Beobachtungen und noch ungeklärten Punkten.", howWeVerify: "So prüfen wir", keepReading: "WEITERLESEN", relatedGuides: "Weitere Guides", relatedCopy: "Weitere geprüfte Antworten für deine nächste Runde.", searchWiki: "Wiki durchsuchen", searchPlaceholder: "Guides und Antworten suchen...", searchArticles: "Artikel suchen", closeSearch: "Suche schließen", suggested: "Empfohlene Wiki-Seiten", indexedTopics: "erfasste Themen", matches: "Treffer", noMatches: "Keine Wiki-Seite passt zu dieser Suche.", languages: "Sprachen", breadcrumb: "Brotkrümelnavigation" },
  },
  fr: {
    href: "/fr/", hreflang: "fr", htmlLang: "fr", ogLocale: "fr_FR", dateLocale: "fr-FR", shortLabel: "FR", nativeName: "Français",
    hubTitle: "Wiki GRAIN ROT : guides, coop, ennemis et solutions", hubDescription: "Consultez le wiki GRAIN ROT pour trouver des guides de jeu et des informations sur la coop, le nombre de joueurs, les ennemis, les réglages, la progression, Steam, le prix et les plateformes, ainsi que des solutions aux problèmes courants.", hubHeading: "Wiki GRAIN ROT", hubKicker: "Guide indépendant fondé sur des sources vérifiables", hubIntro: "Toutes les informations utiles sur le gameplay, la coop, la progression, les ennemis, les réglages, les plateformes et les problèmes courants, avec des réponses clairement sourcées.",
    ui: { home: "Accueil", allGuides: "Tous les guides", updated: "Mis à jour le", readingSuffix: "de lecture", directAnswer: "RÉPONSE DIRECTE", versionCheck: "Vérification de la version", versionNote: "Cette page a été vérifiée le {date}. Les notes de mise à jour et les informations affichées sur les boutiques peuvent changer ; les sources officielles vers lesquelles nous renvoyons font foi.", onThisPage: "Sur cette page", sourcePolicy: "Règles relatives aux sources", sourceCopy: "Nous distinguons les informations officielles, les observations de la communauté et les points encore inconnus.", howWeVerify: "Notre méthode de vérification", keepReading: "À LIRE AUSSI", relatedGuides: "Guides associés", relatedCopy: "D’autres réponses vérifiées pour votre prochaine partie.", searchWiki: "Rechercher dans le wiki", searchPlaceholder: "Rechercher un guide ou une réponse…", searchArticles: "Rechercher des articles", closeSearch: "Fermer la recherche", suggested: "Pages suggérées", indexedTopics: "sujets indexés", matches: "au total", noMatches: "Aucune page du wiki ne correspond à cette recherche.", languages: "Langues", breadcrumb: "Fil d’Ariane" },
  },
  es: {
    href: "/es/", hreflang: "es", htmlLang: "es", ogLocale: "es_419", dateLocale: "es-419", shortLabel: "ES", nativeName: "Español (Latinoamérica)",
    hubTitle: "Wiki de GRAIN ROT: guías, modo cooperativo, enemigos y soluciones", hubDescription: "Encuentra en la wiki de GRAIN ROT guías de juego, información sobre el modo cooperativo y el número de jugadores, enemigos, configuración, progreso, Steam, precio, plataformas y soluciones a problemas comunes.", hubHeading: "Wiki de GRAIN ROT", hubKicker: "Guía independiente para jugadores, basada en fuentes", hubIntro: "Una guía completa sobre el ciclo principal del juego, el modo cooperativo, el progreso, los enemigos, la configuración, las plataformas y los problemas más comunes, con respuestas respaldadas por fuentes claras.",
    ui: { home: "Inicio", allGuides: "Todas las guías", updated: "Actualizado", readingSuffix: "de lectura", directAnswer: "RESPUESTA DIRECTA", versionCheck: "Verificación de la versión", versionNote: "Esta página se revisó el {date}. Los detalles de los parches y los datos actuales de las tiendas pueden cambiar; prevalecen las fuentes oficiales enlazadas.", onThisPage: "En esta página", sourcePolicy: "Política de fuentes", sourceCopy: "Distinguimos entre información oficial, observaciones de la comunidad y datos aún desconocidos.", howWeVerify: "Cómo verificamos la información", keepReading: "SEGUIR LEYENDO", relatedGuides: "Guías relacionadas", relatedCopy: "Más respuestas verificadas sobre esta parte del juego.", searchWiki: "Buscar en la wiki", searchPlaceholder: "Buscar plataformas, soluciones, enemigos...", searchArticles: "Buscar artículos", closeSearch: "Cerrar la búsqueda", suggested: "Páginas sugeridas", indexedTopics: "temas indexados", matches: "resultados", noMatches: "Todavía no hay ninguna página que coincida con esta búsqueda.", languages: "Idiomas", breadcrumb: "Ruta de navegación" },
  },
  "pt-br": {
    href: "/pt-br/", hreflang: "pt-BR", htmlLang: "pt-BR", ogLocale: "pt_BR", dateLocale: "pt-BR", shortLabel: "PT", nativeName: "Português (Brasil)",
    hubTitle: "Wiki de GRAIN ROT: guias, coop, inimigos e soluções", hubDescription: "Consulte a wiki de GRAIN ROT para encontrar guias de jogo e informações sobre modo cooperativo, número de jogadores, inimigos, configurações, progressão, Steam, preço e plataformas, além de soluções para problemas comuns.", hubHeading: "Wiki de GRAIN ROT", hubKicker: "Guia independente para jogadores, com fontes verificáveis", hubIntro: "Um guia completo sobre o ciclo principal do jogo, o modo cooperativo, a progressão, os inimigos, as configurações, as plataformas e os problemas mais comuns, sempre com fontes claramente indicadas.",
    ui: { home: "Início", allGuides: "Todos os guias", updated: "Atualizado em", readingSuffix: "de leitura", directAnswer: "RESPOSTA DIRETA", versionCheck: "Verificação da versão", versionNote: "Esta página foi revisada em {date}. Os detalhes dos patches e as informações exibidas nas lojas podem mudar; em caso de divergência, prevalecem as fontes oficiais indicadas nos links.", onThisPage: "Nesta página", sourcePolicy: "Política de fontes", sourceCopy: "Separamos informações oficiais, observações da comunidade e pontos ainda desconhecidos.", howWeVerify: "Como verificamos", keepReading: "CONTINUE LENDO", relatedGuides: "Guias relacionados", relatedCopy: "Mais respostas verificadas sobre esta parte do jogo.", searchWiki: "Pesquisar na wiki", searchPlaceholder: "Pesquisar plataformas, correções, inimigos...", searchArticles: "Pesquisar artigos", closeSearch: "Fechar pesquisa", suggested: "Páginas sugeridas", indexedTopics: "tópicos indexados", matches: "resultados", noMatches: "Ainda não há nenhuma página da wiki que corresponda a esta pesquisa.", languages: "Idiomas", breadcrumb: "Trilha de navegação" },
  },
  ru: {
    href: "/ru/", hreflang: "ru", htmlLang: "ru", ogLocale: "ru_RU", dateLocale: "ru-RU", shortLabel: "RU", nativeName: "Русский",
    hubTitle: "Вики по GRAIN ROT: гайды, кооператив, враги и решение проблем", hubDescription: "Вики по GRAIN ROT с гайдами по игровым механикам, кооперативу, врагам, настройкам и прогрессу, а также сведениями о Steam, цене, платформах и решениях частых проблем.", hubHeading: "Вики по GRAIN ROT", hubKicker: "Независимая вики для игроков с проверяемыми источниками", hubIntro: "Разбираем игровой процесс, кооператив, развитие, врагов, настройки, платформы и частые проблемы. Каждый ответ сопровождается понятной ссылкой на источник.",
    ui: { home: "Главная", allGuides: "Все гайды", updated: "Обновлено", readingSuffix: "чтения", directAnswer: "КОРОТКИЙ ОТВЕТ", versionCheck: "Проверка версии", versionNote: "Эта страница проверена {date}. Сведения о патчах и актуальные данные в магазинах могут меняться; при расхождениях ориентируйтесь на официальные источники по ссылкам.", onThisPage: "На этой странице", sourcePolicy: "Работа с источниками", sourceCopy: "Мы отделяем официальные сведения от наблюдений сообщества и пока неподтверждённых деталей.", howWeVerify: "Как мы проверяем информацию", keepReading: "ЧИТАТЬ ДАЛЬШЕ", relatedGuides: "Похожие гайды", relatedCopy: "Другие проверенные ответы по этой части игры.", searchWiki: "Поиск по вики", searchPlaceholder: "Искать гайды и ответы...", searchArticles: "Искать статьи", closeSearch: "Закрыть поиск", suggested: "Рекомендуемые страницы", indexedTopics: "тем в каталоге", matches: "результатов", noMatches: "По этому запросу ничего не найдено.", languages: "Языки", breadcrumb: "Навигационная цепочка" },
  },
  ja: {
    href: "/ja/", hreflang: "ja", htmlLang: "ja", ogLocale: "ja_JP", dateLocale: "ja-JP", shortLabel: "JA", nativeName: "日本語",
    hubTitle: "GRAIN ROT 攻略Wiki：遊び方・協力プレイ・敵・不具合対処", hubDescription: "GRAIN ROTの攻略Wiki。遊び方、協力プレイの人数、敵、設定、進行、Steam版の価格・対応プラットフォーム、よくある不具合の対処法を出典付きでまとめています。", hubHeading: "GRAIN ROT 攻略Wiki", hubKicker: "出典を明記した独立系プレイヤー向けWiki", hubIntro: "ゲームの基本的な流れ、協力プレイ、進行、敵、設定、対応プラットフォーム、よくある問題を、確認できた情報源とともに解説します。",
    ui: { home: "ホーム", allGuides: "日本語ガイド一覧へ", updated: "更新日", readingSuffix: "", directAnswer: "結論", versionCheck: "情報の確認日", versionNote: "このページは{date}に内容を確認しました。パッチ内容やストアの掲載情報は変更される場合があります。内容が異なる場合は、リンク先の公式情報を優先してください。", onThisPage: "目次", sourcePolicy: "情報源について", sourceCopy: "公式情報、コミュニティで報告された内容、未確認の情報を区別しています。", howWeVerify: "検証方法", keepReading: "次に読む", relatedGuides: "関連ガイド", relatedCopy: "同じテーマに関する、出典を確認済みのガイドです。", searchWiki: "Wiki内を検索", searchPlaceholder: "ガイド、操作方法、不具合を検索…", searchArticles: "記事を検索", closeSearch: "検索を閉じる", suggested: "おすすめのWikiページ", indexedTopics: "件の登録ページ", matches: "件の検索結果", noMatches: "該当するページは見つかりませんでした。", languages: "言語を選択", breadcrumb: "パンくずリスト" },
  },
  ko: {
    href: "/ko/", hreflang: "ko", htmlLang: "ko", ogLocale: "ko_KR", dateLocale: "ko-KR", shortLabel: "KO", nativeName: "한국어",
    hubTitle: "GRAIN ROT 위키: 공략, 협동, 적, 문제 해결", hubDescription: "GRAIN ROT 공략 위키에서 게임 공략, 협동 플레이와 플레이 인원, 적, 설정, 진행, Steam 가격, 지원 플랫폼, 자주 발생하는 문제의 해결 방법을 확인하세요.", hubHeading: "GRAIN ROT 위키", hubKicker: "출처를 명확히 밝힌 독립 게임 위키", hubIntro: "게임 흐름, 협동, 진행, 적, 설정, 플랫폼, 자주 발생하는 문제를 아우르며 모든 답변의 근거를 명확히 제시합니다.",
    ui: { home: "홈", allGuides: "모든 공략", updated: "최종 업데이트", readingSuffix: "분량", directAnswer: "핵심 답변", versionCheck: "버전 확인", versionNote: "이 페이지는 {date}에 검토했습니다. 패치 내용과 스토어의 최신 정보는 변경될 수 있으므로 링크된 공식 출처를 우선하세요.", onThisPage: "이 페이지의 내용", sourcePolicy: "출처 원칙", sourceCopy: "공식 사실, 커뮤니티 관찰, 확인되지 않은 내용을 구분합니다.", howWeVerify: "검증 방법", keepReading: "계속 읽기", relatedGuides: "관련 공략", relatedCopy: "같은 주제의 출처가 확인된 공략입니다.", searchWiki: "Wiki 검색", searchPlaceholder: "플랫폼, 오류 해결, 적 검색…", searchArticles: "문서 검색", closeSearch: "검색 닫기", suggested: "추천 페이지", indexedTopics: "등록된 주제", matches: "검색 결과", noMatches: "검색어와 일치하는 위키 페이지가 없습니다.", languages: "언어", breadcrumb: "이동 경로" },
  },
  uk: {
    href: "/uk/", hreflang: "uk", htmlLang: "uk", ogLocale: "uk_UA", dateLocale: "uk-UA", shortLabel: "UK", nativeName: "Українська",
    hubTitle: "Вікі GRAIN ROT: гайди, кооператив, вороги та розв’язання проблем", hubDescription: "У вікі GRAIN ROT зібрано гайди, відомості про кооператив і кількість гравців, ворогів, налаштування, прогрес, ціну в Steam, платформи та розв’язання поширених проблем.", hubHeading: "Вікі GRAIN ROT", hubKicker: "Незалежна вікі для гравців із перевіреними джерелами", hubIntro: "Повний довідник з основ гри, кооперативу, прогресу, ворогів, налаштувань, платформ і поширених проблем. Кожна відповідь має чітко вказане джерело.",
    ui: { home: "Головна", allGuides: "Усі гайди", updated: "Оновлено", readingSuffix: "читання", directAnswer: "КОРОТКА ВІДПОВІДЬ", versionCheck: "Перевірка версії", versionNote: "Сторінку перевірено {date}. Відомості про оновлення й актуальні дані в магазинах можуть змінюватися; пріоритет мають офіційні джерела за посиланнями.", onThisPage: "На цій сторінці", sourcePolicy: "Політика джерел", sourceCopy: "Ми відокремлюємо офіційні факти, спостереження спільноти та невідомі деталі.", howWeVerify: "Як ми перевіряємо", keepReading: "ЧИТАТИ ДАЛІ", relatedGuides: "Пов’язані гайди", relatedCopy: "Інші перевірені відповіді з цього розділу гри.", searchWiki: "Пошук у вікі", searchPlaceholder: "Шукати гайди та відповіді...", searchArticles: "Шукати статті", closeSearch: "Закрити пошук", suggested: "Рекомендовані сторінки", indexedTopics: "тем у покажчику", matches: "результатів", noMatches: "За цим запитом сторінок не знайдено.", languages: "Мови", breadcrumb: "Навігаційний ланцюжок" },
  },
};

export const localizedLocales = localeCodes.filter((locale) => locale !== "en");

export function isArticleLocale(value: string): value is ArticleLocale {
  return localeCodes.includes(value as ArticleLocale);
}

export function getLocaleFromPathname(pathname: string): ArticleLocale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isArticleLocale(firstSegment) ? firstSegment : "en";
}

export function getLocaleIndexAlternates(): Record<string, string> {
  return {
    "x-default": "/",
    ...Object.fromEntries(localeCodes.map((locale) => [localeConfig[locale].hreflang, localeConfig[locale].href])),
  };
}

export function formatSearchCount(locale: ArticleLocale, count: number, kind: "topics" | "matches") {
  if (locale === "ja") return `${count}${localeConfig[locale].ui[kind === "topics" ? "indexedTopics" : "matches"]}`;
  if (locale === "ko") return kind === "topics" ? `등록된 주제 ${count}개` : `검색 결과 ${count}개`;
  if (locale !== "ru" && locale !== "uk") return `${count} ${localeConfig[locale].ui[kind === "topics" ? "indexedTopics" : "matches"]}`;

  const category = new Intl.PluralRules(locale === "ru" ? "ru-RU" : "uk-UA").select(count);
  if (locale === "uk") {
    const forms: Record<Intl.LDMLPluralRule, string> = kind === "topics"
      ? { zero: "тем у покажчику", one: "тема в покажчику", two: "теми в покажчику", few: "теми в покажчику", many: "тем у покажчику", other: "теми в покажчику" }
      : { zero: "результатів", one: "результат", two: "результати", few: "результати", many: "результатів", other: "результати" };
    return `${count} ${forms[category]}`;
  }

  const forms: Record<Intl.LDMLPluralRule, string> = kind === "topics"
    ? { zero: "тем в каталоге", one: "тема в каталоге", two: "темы в каталоге", few: "темы в каталоге", many: "тем в каталоге", other: "темы в каталоге" }
    : { zero: "результатов", one: "результат", two: "результата", few: "результата", many: "результатов", other: "результата" };
  return `${count} ${forms[category]}`;
}
