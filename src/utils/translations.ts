export type Language = 'fr' | 'en' | 'de' | 'ru' | 'ja';

export type TranslationKey =
  | 'socialTitle'
  | 'socialSubtitle'
  | 'projectTitle'
  | 'centralEurope'
  | 'centralEuropeCountries'
  | 'balkans'
  | 'balkansCountries'
  | 'caucasus'
  | 'caucasusCountries'
  | 'centralAsia'
  | 'centralAsiaCountries'
  | 'farEast'
  | 'farEastCountries'
  | 'dataFromSupabase'
  | 'loading'
  | 'errorOccurred'
  | 'home'
  | 'social'
  | 'aboutUs'
  | 'project'
  | 'bikes'
  | 'admin'
  | 'translationTitle'
  | 'translationSubtitle'
  | 'translationQuote'
  | 'writeIn'
  | 'translate'
  | 'translating'
  | 'listenPronunciation'
  | 'usefulPhrases'
  // Ajoute toutes les autres clés utilisées...

export const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    socialTitle: "Suivez notre aventure",
    socialSubtitle: "Partagez nos aventures et découvrez nos photos",
    projectTitle: "Notre projet",
    centralEurope: "Europe centrale",
    centralEuropeCountries: "Allemagne, Autriche, Slovénie, Croatie, Bosnie, Monténégro, Macédoine du Nord",
    balkans: "Balkans",
    balkansCountries: "Serbie, Kosovo, Albanie, Macédoine, etc.",
    caucasus: "Caucase",
    caucasusCountries: "Géorgie, Arménie, Azerbaïdjan",
    centralAsia: "Asie centrale",
    centralAsiaCountries: "Kazakhstan, Ouzbékistan, Turkménistan, Tadjikistan, Kirghizistan",
    farEast: "Extrême-Orient",
    farEastCountries: "Russie (Sibérie), Mongolie, Corée, Japon",
    dataFromSupabase: "Données depuis Supabase",
    loading: "Chargement...",
    errorOccurred: "Une erreur est survenue",
    home: "Accueil",
    social: "Réseaux",
    aboutUs: "À propos",
    project: "Notre projet",
    bikes: "Nos motos",
    admin: "Démarches administratives",
    translationTitle: "Traduction",
    translationSubtitle: "Traduisez instantanément le site dans votre langue",
    translationQuote: "La langue est la route de la culture, la clé de la compréhension.",
    writeIn: "Écrire en",
    translate: "Traduire",
    translating: "Traduction en cours...",
    listenPronunciation: "Écouter la prononciation",
    usefulPhrases: "Phrases utiles",
  },
  en: {
    socialTitle: "Follow our adventure",
    socialSubtitle: "Share our journeys and discover our photos",
    projectTitle: "Our project",
    centralEurope: "Central Europe",
    centralEuropeCountries: "Germany, Austria, Slovenia, Croatia, Bosnia, Montenegro, North Macedonia",
    balkans: "Balkans",
    balkansCountries: "Serbia, Kosovo, Albania, Macedonia, etc.",
    caucasus: "Caucasus",
    caucasusCountries: "Georgia, Armenia, Azerbaijan",
    centralAsia: "Central Asia",
    centralAsiaCountries: "Kazakhstan, Uzbekistan, Turkmenistan, Tajikistan, Kyrgyzstan",
    farEast: "Far East",
    farEastCountries: "Russia (Siberia), Mongolia, Korea, Japan",
    dataFromSupabase: "Data from Supabase",
    loading: "Loading...",
    errorOccurred: "An error occurred",
    home: "Home",
    social: "Social",
    aboutUs: "About us",
    project: "Our project",
    bikes: "Our bikes",
    admin: "Admin procedures",
    translationTitle: "Translation",
    translationSubtitle: "Instantly translate the site into your language",
    translationQuote: "Language is the road to culture, the key to understanding.",
    writeIn: "Write in",
    translate: "Translate",
    translating: "Translating...",
    listenPronunciation: "Listen to pronunciation",
    usefulPhrases: "Useful phrases",
  },
  de: {
    socialTitle: "Folgen Sie unserem Abenteuer",
    socialSubtitle: "Teilen Sie unsere Reisen und entdecken Sie unsere Fotos",
    projectTitle: "Unser Projekt",
    centralEurope: "Mitteleuropa",
    centralEuropeCountries: "Deutschland, Österreich, Slowenien, Kroatien, Bosnien, Montenegro, Nordmazedonien",
    balkans: "Balkan",
    balkansCountries: "Serbien, Kosovo, Albanien, Mazedonien, usw.",
    caucasus: "Kaukasus",
    caucasusCountries: "Georgien, Armenien, Aserbaidschan",
    centralAsia: "Zentralasien",
    centralAsiaCountries: "Kasachstan, Usbekistan, Turkmenistan, Tadschikistan, Kirgisistan",
    farEast: "Fernost",
    farEastCountries: "Russland (Sibirien), Mongolei, Korea, Japan",
    dataFromSupabase: "Daten von Supabase",
    loading: "Wird geladen...",
    errorOccurred: "Ein Fehler ist aufgetreten",
    home: "Startseite",
    social: "Soziales",
    aboutUs: "Über uns",
    project: "Unser Projekt",
    bikes: "Unsere Motorräder",
    admin: "Verwaltungsverfahren",
    translationTitle: "Übersetzung",
    translationSubtitle: "Übersetzen Sie die Seite sofort in Ihre Sprache",
    translationQuote: "Sprache ist der Weg zur Kultur, der Schlüssel zum Verständnis.",
    writeIn: "Schreiben in",
    translate: "Übersetzen",
    translating: "Übersetzen...",
    listenPronunciation: "Aussprache anhören",
    usefulPhrases: "Nützliche Sätze",
  },
  ru: {
    socialTitle: "Следите за нашим приключением",
    socialSubtitle: "Делитесь нашими путешествиями и смотрите наши фотографии",
    projectTitle: "Наш проект",
    centralEurope: "Центральная Европа",
    centralEuropeCountries: "Германия, Австрия, Словения, Хорватия, Босния, Черногория, Северная Македония",
    balkans: "Балканы",
    balkansCountries: "Сербия, Косово, Албания, Македония и др.",
    caucasus: "Кавказ",
    caucasusCountries: "Грузия, Армения, Азербайджан",
    centralAsia: "Центральная Азия",
    centralAsiaCountries: "Казахстан, Узбекистан, Туркменистан, Таджикистан, Кыргызстан",
    farEast: "Дальний Восток",
    farEastCountries: "Россия (Сибирь), Монголия, Корея, Япония",
    dataFromSupabase: "Данные из Supabase",
    loading: "Загрузка...",
    errorOccurred: "Произошла ошибка",
    home: "Главная",
    social: "Социальные сети",
    aboutUs: "О нас",
    project: "Наш проект",
    bikes: "Наши мотоциклы",
    admin: "Административные процедуры",
    translationTitle: "Перевод",
    translationSubtitle: "Мгновенный перевод сайта на ваш язык",
    translationQuote: "Язык — это дорога к культуре, ключ к пониманию.",
    writeIn: "Писать на",
    translate: "Перевести",
    translating: "Перевод...",
    listenPronunciation: "Послушать произношение",
    usefulPhrases: "Полезные фразы",
  },
  ja: {
    socialTitle: "私たちの冒険をフォローしてください",
    socialSubtitle: "私たちの旅を共有し、写真を見てください",
    projectTitle: "私たちのプロジェクト",
    centralEurope: "中央ヨーロッパ",
    centralEuropeCountries: "ドイツ、オーストリア、スロベニア、クロアチア、ボスニア、モンテネグロ、北マケドニア",
    balkans: "バルカン半島",
    balkansCountries: "セルビア、コソボ、アルバニア、マケドニアなど",
    caucasus: "コーカサス",
    caucasusCountries: "ジョージア、アルメニア、アゼルバイジャン",
    centralAsia: "中央アジア",
    centralAsiaCountries: "カザフスタン、ウズベキスタン、トルクメニスタン、タジキスタン、キルギス",
    farEast: "極東",
    farEastCountries: "ロシア（シベリア）、モンゴル、韓国、日本",
    dataFromSupabase: "Supabaseからのデータ",
    loading: "読み込み中...",
    errorOccurred: "エラーが発生しました",
    home: "ホーム",
    social: "ソーシャル",
    aboutUs: "私たちについて",
    project: "私たちのプロジェクト",
    bikes: "私たちのバイク",
    admin: "管理手続き",
    translationTitle: "翻訳",
    translationSubtitle: "サイトをあなたの言語に即時翻訳",
    translationQuote: "言語は文化への道、理解への鍵です。",
    writeIn: "で書く",
    translate: "翻訳する",
    translating: "翻訳中...",
    listenPronunciation: "発音を聞く",
    usefulPhrases: "役に立つフレーズ",
  },
};
