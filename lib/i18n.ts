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
    hubTitle: "GRAIN ROT Wiki: Spielguides, Koop, Gegner & Lösungen", hubDescription: "Entdecke im GRAIN ROT Wiki Spielguides, Koop- und Spielerzahlen, Gegner, Einstellungen, Fortschritt, Steam, Preis, Plattformen und Lösungen für häufige Probleme.", hubHeading: "GRAIN ROT Wiki", hubKicker: "Unabhängiger, quellengeprüfter Spieler-Guide", hubIntro: "Ein umfassender Guide zu Spielablauf, Koop, Fortschritt, Gegnern, Einstellungen, Plattformen und häufigen Problemen – mit klar belegten Antworten.",
    ui: { home: "Start", allGuides: "Alle Guides", updated: "Aktualisiert", readingSuffix: "Lesezeit", directAnswer: "DIREKTE ANTWORT", versionCheck: "Versionsprüfung", versionNote: "Diese Seite wurde am {date} geprüft. Patchdetails können sich ändern; verlinkte offizielle Quellen haben Vorrang.", onThisPage: "Auf dieser Seite", sourcePolicy: "Quellenrichtlinie", sourceCopy: "Wir trennen offizielle Fakten, Community-Beobachtungen und unbekannte Details.", howWeVerify: "So prüfen wir", keepReading: "WEITERLESEN", relatedGuides: "Ähnliche Guides", relatedCopy: "Weitere geprüfte Antworten für deine nächste Runde.", searchWiki: "Wiki durchsuchen", searchPlaceholder: "Guides und Antworten suchen...", searchArticles: "Artikel suchen", closeSearch: "Suche schließen", suggested: "Empfohlene Seiten", indexedTopics: "erfasste Themen", matches: "Treffer", noMatches: "Keine Wiki-Seite passt zu dieser Suche.", languages: "Sprachen", breadcrumb: "Brotkrümelnavigation" },
  },
  fr: {
    href: "/fr/", hreflang: "fr", htmlLang: "fr", ogLocale: "fr_FR", dateLocale: "fr-FR", shortLabel: "FR", nativeName: "Français",
    hubTitle: "Wiki GRAIN ROT : guides, coop, ennemis et solutions", hubDescription: "Explorez le wiki GRAIN ROT : guides de jeu, coop et nombre de joueurs, ennemis, réglages, progression, Steam, prix, plateformes et solutions courantes.", hubHeading: "Wiki GRAIN ROT", hubKicker: "Guide indépendant fondé sur des sources", hubIntro: "Un guide complet sur le gameplay, la coop, la progression, les ennemis, les réglages, les plateformes et les problèmes courants, avec des réponses sourcées.",
    ui: { home: "Accueil", allGuides: "Tous les guides", updated: "Mis à jour", readingSuffix: "de lecture", directAnswer: "RÉPONSE DIRECTE", versionCheck: "Vérification de version", versionNote: "Cette page a été vérifiée le {date}. Les détails des mises à jour peuvent changer ; les sources officielles liées font foi.", onThisPage: "Sur cette page", sourcePolicy: "Politique des sources", sourceCopy: "Nous séparons les faits officiels, les observations de la communauté et les éléments inconnus.", howWeVerify: "Notre méthode", keepReading: "À LIRE AUSSI", relatedGuides: "Guides associés", relatedCopy: "D'autres réponses vérifiées pour votre prochaine partie.", searchWiki: "Rechercher dans le wiki", searchPlaceholder: "Rechercher des guides et réponses...", searchArticles: "Rechercher des articles", closeSearch: "Fermer la recherche", suggested: "Pages suggérées", indexedTopics: "sujets indexés", matches: "résultats", noMatches: "Aucune page du wiki ne correspond à cette recherche.", languages: "Langues", breadcrumb: "Fil d’Ariane" },
  },
  es: {
    href: "/es/", hreflang: "es", htmlLang: "es", ogLocale: "es_419", dateLocale: "es-419", shortLabel: "ES", nativeName: "Español (Latinoamérica)",
    hubTitle: "Wiki de GRAIN ROT: guías, cooperativo, enemigos y soluciones", hubDescription: "Explora la wiki de GRAIN ROT con guías, cooperativo y número de jugadores, enemigos, ajustes, progreso, Steam, precio, plataformas y soluciones frecuentes.", hubHeading: "Wiki de GRAIN ROT", hubKicker: "Guía independiente basada en fuentes", hubIntro: "Una guía completa del ciclo de juego, cooperativo, progreso, enemigos, ajustes, plataformas y problemas frecuentes, con respuestas bien documentadas.",
    ui: { home: "Inicio", allGuides: "Todas las guías", updated: "Actualizado", readingSuffix: "de lectura", directAnswer: "RESPUESTA DIRECTA", versionCheck: "Comprobación de versión", versionNote: "Esta página se revisó el {date}. Los detalles de los parches pueden cambiar; las fuentes oficiales enlazadas tienen prioridad.", onThisPage: "En esta página", sourcePolicy: "Política de fuentes", sourceCopy: "Separamos los datos oficiales, las observaciones de la comunidad y los detalles desconocidos.", howWeVerify: "Cómo verificamos", keepReading: "SIGUE LEYENDO", relatedGuides: "Guías relacionadas", relatedCopy: "Más respuestas verificadas para tu próxima partida.", searchWiki: "Buscar en la wiki", searchPlaceholder: "Buscar guías y respuestas...", searchArticles: "Buscar artículos", closeSearch: "Cerrar búsqueda", suggested: "Páginas sugeridas", indexedTopics: "temas indexados", matches: "resultados", noMatches: "Todavía no hay una página que coincida con esta búsqueda.", languages: "Idiomas", breadcrumb: "Migas de pan" },
  },
  "pt-br": {
    href: "/pt-br/", hreflang: "pt-BR", htmlLang: "pt-BR", ogLocale: "pt_BR", dateLocale: "pt-BR", shortLabel: "PT", nativeName: "Português (Brasil)",
    hubTitle: "Wiki de GRAIN ROT: guias, co-op, inimigos e soluções", hubDescription: "Explore a wiki de GRAIN ROT com guias, co-op e número de jogadores, inimigos, configurações, progresso, Steam, preço, plataformas e soluções comuns.", hubHeading: "Wiki de GRAIN ROT", hubKicker: "Guia independente baseado em fontes", hubIntro: "Um guia completo do ciclo de jogo, co-op, progresso, inimigos, configurações, plataformas e problemas comuns, com respostas bem documentadas.",
    ui: { home: "Início", allGuides: "Todos os guias", updated: "Atualizado", readingSuffix: "de leitura", directAnswer: "RESPOSTA DIRETA", versionCheck: "Verificação de versão", versionNote: "Esta página foi revisada em {date}. Detalhes de atualizações podem mudar; as fontes oficiais vinculadas têm prioridade.", onThisPage: "Nesta página", sourcePolicy: "Política de fontes", sourceCopy: "Separamos fatos oficiais, observações da comunidade e detalhes desconhecidos.", howWeVerify: "Como verificamos", keepReading: "CONTINUE LENDO", relatedGuides: "Guias relacionados", relatedCopy: "Mais respostas verificadas para sua próxima partida.", searchWiki: "Pesquisar na wiki", searchPlaceholder: "Pesquisar guias e respostas...", searchArticles: "Pesquisar artigos", closeSearch: "Fechar pesquisa", suggested: "Páginas sugeridas", indexedTopics: "tópicos indexados", matches: "resultados", noMatches: "Nenhuma página da wiki corresponde a esta pesquisa.", languages: "Idiomas", breadcrumb: "Navegação estrutural" },
  },
  ru: {
    href: "/ru/", hreflang: "ru", htmlLang: "ru", ogLocale: "ru_RU", dateLocale: "ru-RU", shortLabel: "RU", nativeName: "Русский",
    hubTitle: "Вики GRAIN ROT: гайды, кооператив, враги и решения", hubDescription: "Изучайте вики GRAIN ROT: гайды, кооператив и число игроков, враги, настройки, прогресс, Steam, цены, платформы и решения частых проблем.", hubHeading: "Вики GRAIN ROT", hubKicker: "Независимый гайд с проверенными источниками", hubIntro: "Полный гайд по игровому циклу, кооперативу, прогрессу, врагам, настройкам, платформам и частым проблемам с подтверждёнными ответами.",
    ui: { home: "Главная", allGuides: "Все гайды", updated: "Обновлено", readingSuffix: "чтения", directAnswer: "КОРОТКИЙ ОТВЕТ", versionCheck: "Проверка версии", versionNote: "Страница проверена {date}. Детали патчей могут меняться; приоритет у официальных источников по ссылкам.", onThisPage: "На этой странице", sourcePolicy: "Политика источников", sourceCopy: "Мы разделяем официальные факты, наблюдения сообщества и неизвестные детали.", howWeVerify: "Как мы проверяем", keepReading: "ЧИТАТЬ ДАЛЬШЕ", relatedGuides: "Похожие гайды", relatedCopy: "Другие проверенные ответы для следующей игры.", searchWiki: "Поиск по вики", searchPlaceholder: "Искать гайды и ответы...", searchArticles: "Искать статьи", closeSearch: "Закрыть поиск", suggested: "Рекомендуемые страницы", indexedTopics: "тем в индексе", matches: "результатов", noMatches: "По этому запросу ничего не найдено.", languages: "Языки", breadcrumb: "Навигационная цепочка" },
  },
  ja: {
    href: "/ja/", hreflang: "ja", htmlLang: "ja", ogLocale: "ja_JP", dateLocale: "ja-JP", shortLabel: "JA", nativeName: "日本語",
    hubTitle: "GRAIN ROT Wiki：攻略・協力プレイ・敵・不具合対処", hubDescription: "GRAIN ROT Wikiで、遊び方、協力プレイと人数、敵、設定、進行、Steam、価格、対応機種、よくある不具合の対処法を確認できます。", hubHeading: "GRAIN ROT Wiki", hubKicker: "根拠を明記した独立プレイヤーガイド", hubIntro: "ゲームの流れ、協力プレイ、進行、敵、設定、対応機種、よくある問題を網羅し、すべての回答で情報源を明確にしています。",
    ui: { home: "ホーム", allGuides: "すべてのガイド", updated: "更新日", readingSuffix: "で読めます", directAnswer: "結論", versionCheck: "バージョン確認", versionNote: "このページは {date} に確認しました。パッチ内容は変わる可能性があるため、リンク先の公式情報を優先してください。", onThisPage: "目次", sourcePolicy: "情報源について", sourceCopy: "公式情報、コミュニティの観察、未確認事項を区別しています。", howWeVerify: "確認方法", keepReading: "次に読む", relatedGuides: "関連ガイド", relatedCopy: "次のプレイに役立つ確認済みの回答です。", searchWiki: "Wikiを検索", searchPlaceholder: "ガイドや回答を検索...", searchArticles: "記事を検索", closeSearch: "検索を閉じる", suggested: "おすすめのページ", indexedTopics: "件の登録トピック", matches: "件", noMatches: "該当するWikiページはありません。", languages: "言語", breadcrumb: "パンくずリスト" },
  },
  ko: {
    href: "/ko/", hreflang: "ko", htmlLang: "ko", ogLocale: "ko_KR", dateLocale: "ko-KR", shortLabel: "KO", nativeName: "한국어",
    hubTitle: "GRAIN ROT 위키: 공략, 협동, 적, 문제 해결", hubDescription: "GRAIN ROT 위키에서 플레이 공략, 협동과 인원수, 적, 설정, 진행, Steam, 가격, 플랫폼, 자주 발생하는 문제 해결법을 확인하세요.", hubHeading: "GRAIN ROT 위키", hubKicker: "출처를 명확히 밝힌 독립 플레이어 가이드", hubIntro: "게임 흐름, 협동, 진행, 적, 설정, 플랫폼, 자주 발생하는 문제를 아우르며 모든 답변의 근거를 명확히 제시합니다.",
    ui: { home: "홈", allGuides: "모든 공략", updated: "업데이트", readingSuffix: "분량", directAnswer: "바로 답변", versionCheck: "버전 확인", versionNote: "이 페이지는 {date}에 확인했습니다. 패치 세부 내용은 바뀔 수 있으므로 링크된 공식 출처를 우선하세요.", onThisPage: "이 페이지의 내용", sourcePolicy: "출처 원칙", sourceCopy: "공식 사실, 커뮤니티 관찰, 확인되지 않은 내용을 구분합니다.", howWeVerify: "검증 방법", keepReading: "계속 읽기", relatedGuides: "관련 공략", relatedCopy: "다음 플레이에 필요한 다른 검증된 답변입니다.", searchWiki: "Wiki 검색", searchPlaceholder: "공략과 답변 검색...", searchArticles: "문서 검색", closeSearch: "검색 닫기", suggested: "추천 페이지", indexedTopics: "개 등록 주제", matches: "개 결과", noMatches: "검색과 일치하는 Wiki 페이지가 없습니다.", languages: "언어", breadcrumb: "이동 경로" },
  },
  uk: {
    href: "/uk/", hreflang: "uk", htmlLang: "uk", ogLocale: "uk_UA", dateLocale: "uk-UA", shortLabel: "UK", nativeName: "Українська",
    hubTitle: "Вікі GRAIN ROT: гайди, кооператив, вороги та рішення", hubDescription: "Досліджуйте вікі GRAIN ROT: гайди, кооператив і кількість гравців, вороги, налаштування, прогрес, Steam, ціни, платформи та вирішення частих проблем.", hubHeading: "Вікі GRAIN ROT", hubKicker: "Незалежний гайд із перевіреними джерелами", hubIntro: "Повний гайд про ігровий цикл, кооператив, прогрес, ворогів, налаштування, платформи й часті проблеми з чітко підтвердженими відповідями.",
    ui: { home: "Головна", allGuides: "Усі гайди", updated: "Оновлено", readingSuffix: "читання", directAnswer: "КОРОТКА ВІДПОВІДЬ", versionCheck: "Перевірка версії", versionNote: "Сторінку перевірено {date}. Деталі оновлень можуть змінюватися; пріоритет мають офіційні джерела за посиланнями.", onThisPage: "На цій сторінці", sourcePolicy: "Політика джерел", sourceCopy: "Ми відокремлюємо офіційні факти, спостереження спільноти та невідомі деталі.", howWeVerify: "Як ми перевіряємо", keepReading: "ЧИТАТИ ДАЛІ", relatedGuides: "Пов’язані гайди", relatedCopy: "Інші перевірені відповіді для наступної гри.", searchWiki: "Пошук у вікі", searchPlaceholder: "Шукати гайди та відповіді...", searchArticles: "Шукати статті", closeSearch: "Закрити пошук", suggested: "Рекомендовані сторінки", indexedTopics: "тем у покажчику", matches: "результатів", noMatches: "За цим запитом сторінок не знайдено.", languages: "Мови", breadcrumb: "Навігаційний ланцюжок" },
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
