import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, BookOpen, ExternalLink } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { EvidenceBadge } from "@/components/evidence-badge";
import { getAllArticles } from "@/lib/content";
import { localeConfig, getLocaleIndexAlternates, type ArticleLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { LocaleLink as Link } from "@/components/locale-context";

type LocalizedLocale = Exclude<ArticleLocale, "en">;

type LocaleHomeCopy = {
  trailerTitle: string;
  translatedGuideCount: string;
  released: string;
  platform: string;
  mode: string;
  developer: string;
  modeValue: string;
  guideIndex: string;
  guideHeading: string;
  guideIntro: string;
  evidenceIndex: string;
  evidenceHeading: string;
  evidenceIntro: string;
  ctaKicker: string;
  ctaHeading: string;
  startReading: string;
  viewOnSteam: string;
};

const localeHomeCopy: Record<LocalizedLocale, LocaleHomeCopy> = {
  de: {
    trailerTitle: "Offizieller Launch-Trailer von GRAIN ROT", translatedGuideCount: "Deutschsprachige Guides: {count}", released: "Veröffentlichung", platform: "Plattform", mode: "Modus", developer: "Entwickler", modeValue: "Solo & Online-Koop", guideIndex: "01 / GUIDES AUF DEUTSCH", guideHeading: "Guides auf Deutsch", guideIntro: "Hier findest du alle derzeit vollständig übersetzten Guides – mit denselben Quellen- und Versionshinweisen wie im englischsprachigen Wiki.", evidenceIndex: "02 / QUELLEN", evidenceHeading: "Fakten, Beobachtungen und offene Fragen klar getrennt", evidenceIntro: "Offizielle Angaben haben Vorrang. Community-Beobachtungen kennzeichnen wir ausdrücklich; unbestätigte Angaben weisen wir als ungeklärt aus.", ctaKicker: "Für deine nächste Runde", ctaHeading: "Antwort finden. Quelle prüfen. Weiterspielen.", startReading: "Guides öffnen", viewOnSteam: "Auf Steam ansehen",
  },
  fr: {
    trailerTitle: "Bande-annonce de lancement officielle de GRAIN ROT", translatedGuideCount: "{count} guides disponibles en français", released: "Date de sortie", platform: "Plateforme", mode: "Mode de jeu", developer: "Développeur", modeValue: "Solo et coopération en ligne", guideIndex: "01 / GUIDES EN FRANÇAIS", guideHeading: "Guides en français", guideIntro: "Retrouvez tous les guides actuellement traduits dans leur intégralité, avec les mêmes indications de sources et de version que dans le wiki anglais.", evidenceIndex: "02 / SOURCES", evidenceHeading: "Faits, observations et incertitudes clairement distingués", evidenceIntro: "Les informations officielles sont prioritaires. Les observations de la communauté sont signalées comme telles, et nous ne présentons jamais une donnée non confirmée comme un fait.", ctaKicker: "Pour votre prochaine partie", ctaHeading: "Trouvez la réponse. Vérifiez la source. Reprenez votre partie.", startReading: "Consulter les guides", viewOnSteam: "Voir sur Steam",
  },
  es: {
    trailerTitle: "Tráiler oficial de lanzamiento de GRAIN ROT", translatedGuideCount: "{count} guías disponibles en español", released: "Fecha de lanzamiento", platform: "Plataforma", mode: "Modo de juego", developer: "Desarrollador", modeValue: "Un jugador + cooperativo en línea", guideIndex: "01 / GUÍAS EN ESPAÑOL", guideHeading: "Guías en español", guideIntro: "Aquí encontrarás todas las guías traducidas por completo, con las mismas referencias y notas de versión que la wiki en inglés.", evidenceIndex: "02 / FUENTES", evidenceHeading: "Distinguimos entre hechos, observaciones e información no confirmada", evidenceIntro: "La información oficial tiene prioridad. Identificamos claramente las observaciones de la comunidad y no presentamos los datos sin confirmar como hechos.", ctaKicker: "Para tu próxima partida", ctaHeading: "Encuentra la respuesta. Revisa la fuente. Vuelve al juego.", startReading: "Ver las guías", viewOnSteam: "Ver en Steam",
  },
  "pt-br": {
    trailerTitle: "Trailer oficial de lançamento de GRAIN ROT", translatedGuideCount: "{count} guias em português do Brasil", released: "Data de lançamento", platform: "Plataforma", mode: "Modo de jogo", developer: "Desenvolvedora", modeValue: "Um jogador e cooperativo online", guideIndex: "01 / GUIAS EM PORTUGUÊS", guideHeading: "Guias em português do Brasil", guideIntro: "Aqui estão todos os guias já traduzidos na íntegra, com as mesmas indicações de fontes e de versão da wiki em inglês.", evidenceIndex: "02 / FONTES", evidenceHeading: "Fatos, observações e incertezas claramente separados", evidenceIntro: "As informações oficiais têm prioridade. Identificamos claramente as observações da comunidade e não apresentamos dados não confirmados como fatos.", ctaKicker: "Para a próxima partida", ctaHeading: "Encontre a resposta. Confira a fonte. Volte a jogar.", startReading: "Ver os guias", viewOnSteam: "Ver no Steam",
  },
  ru: {
    trailerTitle: "Официальный релизный трейлер GRAIN ROT", translatedGuideCount: "Гайды на русском: {count}", released: "Дата выхода", platform: "Платформа", mode: "Режим", developer: "Разработчик", modeValue: "Одиночная игра и сетевой кооператив", guideIndex: "01 / ГАЙДЫ НА РУССКОМ", guideHeading: "Гайды на русском", guideIntro: "Здесь собраны все гайды, полностью переведённые на русский. Как и в английской версии вики, в них указаны источники и версия игры, на которой проверялась информация.", evidenceIndex: "02 / ИСТОЧНИКИ", evidenceHeading: "Отделяем факты от наблюдений и неподтверждённой информации", evidenceIntro: "В первую очередь мы опираемся на официальные сведения, отдельно отмечаем наблюдения игроков и не выдаём неподтверждённые данные за факты.", ctaKicker: "Перед следующим заходом", ctaHeading: "Найдите ответ. Проверьте источник. Возвращайтесь в игру.", startReading: "Читать гайды", viewOnSteam: "Страница в Steam",
  },
  ja: {
    trailerTitle: "GRAIN ROT 公式リリーストレーラー", translatedGuideCount: "日本語ガイド：{count}件", released: "発売日", platform: "プラットフォーム", mode: "プレイモード", developer: "開発元", modeValue: "ソロプレイ／オンライン協力プレイ", guideIndex: "01 / 日本語ガイド", guideHeading: "日本語ガイド", guideIntro: "現在公開中の、本文まで全編を日本語化したガイドです。英語版Wikiと同じく、出典と情報を確認したゲームバージョンを明記しています。", evidenceIndex: "02 / 情報源", evidenceHeading: "公式情報、コミュニティでの観察、未確認情報を明確に区別", evidenceIntro: "公式情報を優先し、コミュニティで報告された挙動はその旨を明記します。裏付けのない数値を事実として掲載しません。", ctaKicker: "次のプレイに備えて", ctaHeading: "答えを見つけ、出典を確かめて、ゲームに戻る。", startReading: "日本語ガイドを見る", viewOnSteam: "Steamストアを見る",
  },
  ko: {
    trailerTitle: "GRAIN ROT 공식 출시 트레일러", translatedGuideCount: "한국어 공략 {count}개", released: "출시일", platform: "플랫폼", mode: "모드", developer: "개발사", modeValue: "싱글 플레이 + 온라인 협동", guideIndex: "01 / 한국어 공략", guideHeading: "한국어 공략", guideIntro: "현재 공개된 한국어 공략은 본문까지 모두 번역되어 있으며, 영어 위키와 동일하게 출처와 정보를 확인한 게임 버전을 표시합니다.", evidenceIndex: "02 / 출처", evidenceHeading: "공식 정보, 커뮤니티 관찰, 미확인 내용을 구분합니다", evidenceIntro: "공식 정보를 우선하며, 커뮤니티에서 관찰된 내용은 별도로 표시하고 확인되지 않은 정보는 사실처럼 단정하지 않습니다.", ctaKicker: "다음 플레이를 위해", ctaHeading: "답을 찾고, 출처를 확인하고, 다시 플레이하세요.", startReading: "한국어 공략 열기", viewOnSteam: "Steam에서 보기",
  },
  uk: {
    trailerTitle: "Офіційний релізний трейлер GRAIN ROT", translatedGuideCount: "Гайди українською: {count}", released: "Дата виходу", platform: "Платформа", mode: "Режим", developer: "Розробник", modeValue: "Одиночна гра та онлайн-кооператив", guideIndex: "01 / ГАЙДИ УКРАЇНСЬКОЮ", guideHeading: "Гайди українською", guideIntro: "Усі доступні гайди повністю перекладено; у них збережено ті самі позначки джерел і версій, що й в англомовній вікі.", evidenceIndex: "02 / ДЖЕРЕЛА", evidenceHeading: "Факти, спостереження та непідтверджені дані чітко розмежовано", evidenceIntro: "Офіційна інформація має пріоритет. Спостереження спільноти позначаємо окремо, а непідтверджені дані не подаємо як факти.", ctaKicker: "Перед наступною грою", ctaHeading: "Знайдіть відповідь. Перевірте джерело. Повертайтеся до гри.", startReading: "Відкрити гайди", viewOnSteam: "Переглянути в Steam",
  },
};

export function createLocaleHubMetadata(locale: LocalizedLocale): Metadata {
  const config = localeConfig[locale];
  return createPageMetadata({
    title: config.hubTitle,
    description: config.hubDescription,
    path: config.href,
    locale: config.ogLocale,
    languages: getLocaleIndexAlternates(),
    absoluteTitle: true,
  });
}

export function LocaleHub({ locale }: { locale: LocalizedLocale }) {
  const config = localeConfig[locale];
  const copy = localeHomeCopy[locale];
  const articles = getAllArticles(locale);
  const firstArticle = articles[0];
  const displayDate = new Intl.DateTimeFormat(config.dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${siteConfig.updatedIso}T00:00:00Z`));

  return (
    <div lang={config.htmlLang}>
      <section className="home-hero">
        <Image className="home-hero__image" src="/images/hero.webp" alt="GRAIN ROT Deep Layers" fill priority sizes="100vw" />
        <div className="home-hero__shade" />
        <div className="home-hero__content shell">
          <div className="home-hero__copy">
            <span className="kicker"><span />{config.hubKicker}</span>
            <h1>{config.hubHeading}</h1>
            <p>{config.hubIntro}</p>
            {firstArticle && (
              <div className="home-hero__actions">
                <Link className="button button--primary" href={firstArticle.href}><BookOpen size={18} />{copy.startReading}</Link>
                <a className="button button--ghost" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">{copy.viewOnSteam} <ExternalLink size={17} /></a>
              </div>
            )}
            <div className="home-hero__trust">
              <span><BadgeCheck size={16} />{copy.translatedGuideCount.replace("{count}", String(articles.length))}</span>
              <span>{config.ui.updated} {displayDate}</span>
            </div>
          </div>
          <div className="home-hero__video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/kdGuY_pZCzk?rel=0"
              title={copy.trailerTitle}
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <div className="home-hero__rail" aria-label="GRAIN ROT">
          <div><small>{copy.released}</small><strong>2026-08-07</strong></div>
          <div><small>{copy.platform}</small><strong>Steam PC</strong></div>
          <div><small>{copy.mode}</small><strong>{copy.modeValue}</strong></div>
          <div><small>{copy.developer}</small><strong>Beck &amp; Branch Games</strong></div>
        </div>
      </section>

      <section className="section-band section-band--paper">
        <div className="shell">
          <div className="section-heading section-heading--dark">
            <span className="section-index">{copy.guideIndex}</span>
            <div><h2>{copy.guideHeading}</h2><p>{copy.guideIntro}</p></div>
          </div>
          <div className="article-grid">
            {articles.map((article) => <ArticleCard article={article} key={article.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-band section-band--ink">
        <div className="shell">
          <div className="section-heading">
            <span className="section-index">{copy.evidenceIndex}</span>
            <div><h2>{copy.evidenceHeading}</h2><p>{copy.evidenceIntro}</p></div>
          </div>
          <div className="evidence-strip">
            <div><strong>{config.ui.sourcePolicy}</strong><p>{config.ui.sourceCopy}</p></div>
            <EvidenceBadge level="Official" locale={locale} />
            <EvidenceBadge level="Official + community" locale={locale} />
            <EvidenceBadge level="Community observed" locale={locale} />
          </div>
        </div>
      </section>

      {firstArticle && (
        <section className="section-band final-cta">
          <div className="shell final-cta__inner">
            <div><span className="kicker"><span />{copy.ctaKicker}</span><h2>{copy.ctaHeading}</h2></div>
            <div className="final-cta__actions">
              <Link className="button button--primary" href={firstArticle.href}><BookOpen size={18} />{copy.startReading}</Link>
              <a className="button button--ghost" href={siteConfig.steamUrl} target="_blank" rel="noreferrer">{copy.viewOnSteam} <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
