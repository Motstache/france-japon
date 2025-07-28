export type Language =
  | "fr"
  | "en"
  | "de"
  | "ru"
  | "ja";

export type TranslationKey = keyof typeof translations["fr"];

export const translations = {
  fr: {
    home: "Accueil",
    social: "Réseaux",
    aboutUs: "À propos",
    project: "Notre projet",
    bikes: "Nos motos",
    admin: "Démarches",
    translationTitle: "Traduction instantanée",
    translationSubtitle: "Traduisez tout le site avec un clic",
    translationQuote: "La langue est la route vers le monde.",
    loading: "Chargement...",
    errorOccurred: "Une erreur est survenue",
    send: "Envoyer",
    listenPronunciation: "Écouter la prononciation",
    translating: "Traduction...",
    translate: "Traduire",
    writeIn: "Écrire en",
    usefulPhrases: "Phrases utiles",

    // Barre Navigation
    navigationTitle: "Menu principal",

    // Section Hero
    heroTitle: "Bienvenue dans notre aventure",
    heroSubtitle: "Un voyage épique à moto à travers 23 pays",

    // Section Social
    socialTitle: "Suivez-nous sur les réseaux",
    socialSubtitle: "Partagez notre aventure",

    // Section About
    aboutTitle: "À propos de nous",
    aboutSubtitle: "Magali & Gauthier, passionnés de moto et d'aventure",

    // Section Project
    projectTitle: "Notre projet",
    projectSubtitle: "Découvrez notre itinéraire détaillé",

    // Section Bikes
    bikesTitle: "Nos motos",
    bikesSubtitle: "Yamaha Ténéré 700, prêtes pour l'aventure",

    // Section Admin
    adminTitle: "Démarches administratives",
    adminSubtitle: "Tout ce qu'il faut savoir pour voyager en moto de l'Europe au Japon",

  },

  en: {
    home: "Home",
    social: "Social",
    aboutUs: "About Us",
    project: "Our Project",
    bikes: "Our Bikes",
    admin: "Admin",
    translationTitle: "Instant Translation",
    translationSubtitle: "Translate the whole site with one click",
    translationQuote: "Language is the road to the world.",
    loading: "Loading...",
    errorOccurred: "An error occurred",
    send: "Send",
    listenPronunciation: "Listen to pronunciation",
    translating: "Translating...",
    translate: "Translate",
    writeIn: "Write in",
    usefulPhrases: "Useful phrases",

    // Navigation Bar
    navigationTitle: "Main menu",

    // Hero Section
    heroTitle: "Welcome to our adventure",
    heroSubtitle: "An epic motorcycle journey through 23 countries",

    // Social Section
    socialTitle: "Follow us on social media",
    socialSubtitle: "Share our adventure",

    // About Section
    aboutTitle: "About us",
    aboutSubtitle: "Magali & Gauthier, passionate about motorcycles and adventure",

    // Project Section
    projectTitle: "Our project",
    projectSubtitle: "Discover our detailed itinerary",

    // Bikes Section
    bikesTitle: "Our bikes",
    bikesSubtitle: "Yamaha Ténéré 700, ready for adventure",

    // Admin Section
    adminTitle: "Administrative steps",
    adminSubtitle: "Everything you need to know to travel by motorcycle from Europe to Japan",

  },

  de: {
    home: "Startseite",
    social: "Sozial",
    aboutUs: "Über uns",
    project: "Unser Projekt",
    bikes: "Unsere Motorräder",
    admin: "Verwaltung",
    translationTitle: "Sofortige Übersetzung",
    translationSubtitle: "Übersetzen Sie die gesamte Website mit einem Klick",
    translationQuote: "Sprache ist der Weg zur Welt.",
    loading: "Wird geladen...",
    errorOccurred: "Ein Fehler ist aufgetreten",
    send: "Senden",
    listenPronunciation: "Aussprache anhören",
    translating: "Übersetzen...",
    translate: "Übersetzen",
    writeIn: "Schreiben in",
    usefulPhrases: "Nützliche Phrasen",

    navigationTitle: "Hauptmenü",
    heroTitle: "Willkommen zu unserem Abenteuer",
    heroSubtitle: "Eine epische Motorradtour durch 23 Länder",
    socialTitle: "Folge uns in den sozialen Medien",
    socialSubtitle: "Teilen Sie unser Abenteuer",
    aboutTitle: "Über uns",
    aboutSubtitle: "Magali & Gauthier, leidenschaftlich für Motorräder und Abenteuer",
    projectTitle: "Unser Projekt",
    projectSubtitle: "Entdecken Sie unsere detaillierte Reiseroute",
    bikesTitle: "Unsere Motorräder",
    bikesSubtitle: "Yamaha Ténéré 700, bereit für das Abenteuer",
    adminTitle: "Verwaltungsschritte",
    adminSubtitle: "Alles, was Sie wissen müssen, um mit dem Motorrad von Europa nach Japan zu reisen",
  },

  ru: {
    home: "Главная",
    social: "Социальные сети",
    aboutUs: "О нас",
    project: "Наш проект",
    bikes: "Наши мотоциклы",
    admin: "Администрирование",
    translationTitle: "Мгновенный перевод",
    translationSubtitle: "Переведите весь сайт одним кликом",
    translationQuote: "Язык — это дорога в мир.",
    loading: "Загрузка...",
    errorOccurred: "Произошла ошибка",
    send: "Отправить",
    listenPronunciation: "Послушать произношение",
    translating: "Перевод...",
    translate: "Перевести",
    writeIn: "Писать на",
    usefulPhrases: "Полезные фразы",

    navigationTitle: "Главное меню",
    heroTitle: "Добро пожаловать в наше приключение",
    heroSubtitle: "Эпическое мотопутешествие через 23 страны",
    socialTitle: "Следите за нами в соцсетях",
    socialSubtitle: "Поделитесь нашим приключением",
    aboutTitle: "О нас",
    aboutSubtitle: "Магали и Готье, увлечённые мотоциклами и приключениями",
    projectTitle: "Наш проект",
    projectSubtitle: "Ознакомьтесь с нашим подробным маршрутом",
    bikesTitle: "Наши мотоциклы",
    bikesSubtitle: "Yamaha Ténéré 700, готовые к приключениям",
    adminTitle: "Административные шаги",
    adminSubtitle: "Всё, что нужно знать для путешествия на мотоцикле из Европы в Японию",

  },

  ja: {
    home: "ホーム",
    social: "ソーシャル",
    aboutUs: "私たちについて",
    project: "私たちのプロジェクト",
    bikes: "私たちのバイク",
    admin: "管理",
    translationTitle: "即時翻訳",
    translationSubtitle: "ワンクリックでサイト全体を翻訳",
    translationQuote: "言語は世界への道です。",
    loading: "読み込み中...",
    errorOccurred: "エラーが発生しました",
    send: "送信",
    listenPronunciation: "発音を聞く",
    translating: "翻訳中...",
    translate: "翻訳する",
    writeIn: "書く",
    usefulPhrases: "便利なフレーズ",

    navigationTitle: "メインメニュー",
    heroTitle: "私たちの冒険へようこそ",
    heroSubtitle: "23カ国を巡る壮大なバイクの旅",
    socialTitle: "ソーシャルメディアでフォローしてください",
    socialSubtitle: "私たちの冒険を共有しましょう",
    aboutTitle: "私たちについて",
    aboutSubtitle: "モーターサイクルと冒険を愛するマガリとゴーチエ",
    projectTitle: "私たちのプロジェクト",
    projectSubtitle: "詳細な旅程をご覧ください",
    bikesTitle: "私たちのバイク",
    bikesSubtitle: "冒険に備えたヤマハ テネレ700",
    adminTitle: "管理手続き",
    adminSubtitle: "ヨーロッパから日本へのバイク旅行に必要なこと",

  }
};
