export type Language = 'fr' | 'en' | 'de' | 'ru' | 'ja';

export type TranslationKey =
  | 'translationTitle'
  | 'translationSubtitle'
  | 'translationQuote'
  | 'writeIn'
  | 'translate'
  | 'translating'
  | 'listenPronunciation'
  | 'dataFromSupabase'
  | 'loading'
  | 'errorOccurred'
  | 'socialTitle'
  | 'socialSubtitle'
  | 'home'
  | 'aboutUs'
  | 'project'
  | 'bikes'
  | 'admin'
  | 'social'
  | 'equipmentTitle'
  | 'protectionSafety'
  | 'gauthierEquipmentTitle'
  | 'gauthierEquipmentList'
  | 'magaliEquipmentTitle'
  | 'magaliEquipmentList'
  | 'luggageNavigationTitle'
  | 'luggageNavigationSubtitle'
  | 'luggageNavigationList'
  | 'campingSurvivalTitle'
  | 'campingSurvivalList'
  | string; // ajoute toutes les clés nécessaires ici

export const translations: Record<Language, Record<TranslationKey, any>> = {
  fr: {
    translationTitle: "Traduction",
    translationSubtitle: "Traduisez instantanément",
    translationQuote: "La langue est la route de l’aventure.",
    writeIn: "Écrire en",
    translate: "Traduire",
    translating: "Traduction en cours...",
    listenPronunciation: "Écouter la prononciation",
    dataFromSupabase: "Données de Supabase",
    loading: "Chargement...",
    errorOccurred: "Une erreur est survenue",
    socialTitle: "Suivez-nous",
    socialSubtitle: "Réseaux sociaux et plus",
    home: "Accueil",
    aboutUs: "À propos",
    project: "Notre Projet",
    bikes: "Nos Motos",
    admin: "Démarches administratives",
    social: "Communauté",

    equipmentTitle: "Notre Équipement",
    protectionSafety: "Protection & Sécurité",
    gauthierEquipmentTitle: "Équipement de Gauthier",
    gauthierEquipmentList: [
      "Casque Klim Kryos Carbon",
      "Veste temps froid Bering Hurricane",
      "Veste temps chaud Revit Nucleon",
      "Pantalon Bering Hurricane",
      "Bottes Sidi Adventure",
      "Gants chauffants Alpinestar HT-7"
    ],
    magaliEquipmentTitle: "Équipement de Magali",
    magaliEquipmentList: [
      "Casque Shoei ADV Hornet",
      "Veste temps froid Ixon Tour Adventure",
      "Bottes Forma Adventure Evo"
    ],
    luggageNavigationTitle: "Bagages & Navigation",
    luggageNavigationSubtitle: "Sur chaque moto",
    luggageNavigationList: [
      "Valises latérales Lonerider",
      "Sac de selle Lonerider Overlander",
      "Sacoches crash bar Lonerider 6L",
      "Sacoche de guidon Lonerider",
      "GPS Carpuride"
    ],
    campingSurvivalTitle: "Camping & Survie",
    campingSurvivalList: [
      "Mototent Lonerider",
      "Sacs de couchage",
      "Réchaud",
      "Gourdes filtrantes Öko",
      "Trousse de premiers secours"
    ],
    // Ajoute ici les autres clés et traductions françaises...
  },

  en: {
    translationTitle: "Translation",
    translationSubtitle: "Instant translation",
    translationQuote: "Language is the road to adventure.",
    writeIn: "Write in",
    translate: "Translate",
    translating: "Translating...",
    listenPronunciation: "Listen to pronunciation",
    dataFromSupabase: "Data from Supabase",
    loading: "Loading...",
    errorOccurred: "An error occurred",
    socialTitle: "Follow us",
    socialSubtitle: "Social networks and more",
    home: "Home",
    aboutUs: "About Us",
    project: "Our Project",
    bikes: "Our Bikes",
    admin: "Administrative steps",
    social: "Community",

    equipmentTitle: "Our Equipment",
    protectionSafety: "Protection & Safety",
    gauthierEquipmentTitle: "Gauthier's Equipment",
    gauthierEquipmentList: [
      "Klim Kryos Carbon Helmet",
      "Bering Hurricane Cold Weather Jacket",
      "Revit Nucleon Warm Weather Jacket",
      "Bering Hurricane Pants",
      "Sidi Adventure Boots",
      "Alpinestar HT-7 Heated Gloves"
    ],
    magaliEquipmentTitle: "Magali's Equipment",
    magaliEquipmentList: [
      "Shoei ADV Hornet Helmet",
      "Ixon Tour Adventure Cold Weather Jacket",
      "Forma Adventure Evo Boots"
    ],
    luggageNavigationTitle: "Luggage & Navigation",
    luggageNavigationSubtitle: "On each bike",
    luggageNavigationList: [
      "Lonerider Side Cases",
      "Lonerider Overlander Seat Bag",
      "Lonerider 6L Crash Bar Bags",
      "Lonerider Handlebar Bag",
      "Carpuride GPS"
    ],
    campingSurvivalTitle: "Camping & Survival",
    campingSurvivalList: [
      "Lonerider Mototent",
      "Sleeping Bags",
      "Camping Stove",
      "Öko Water Filter Bottles",
      "First Aid Kit"
    ],
    // Add other English keys here...
  },

  de: {
    translationTitle: "Übersetzung",
    translationSubtitle: "Sofortige Übersetzung",
    translationQuote: "Sprache ist der Weg zum Abenteuer.",
    writeIn: "Schreiben in",
    translate: "Übersetzen",
    translating: "Übersetzen...",
    listenPronunciation: "Aussprache anhören",
    dataFromSupabase: "Daten von Supabase",
    loading: "Laden...",
    errorOccurred: "Ein Fehler ist aufgetreten",
    socialTitle: "Folge uns",
    socialSubtitle: "Soziale Netzwerke und mehr",
    home: "Startseite",
    aboutUs: "Über uns",
    project: "Unser Projekt",
    bikes: "Unsere Motorräder",
    admin: "Behördliche Schritte",
    social: "Gemeinschaft",

    equipmentTitle: "Unsere Ausrüstung",
    protectionSafety: "Schutz & Sicherheit",
    gauthierEquipmentTitle: "Ausrüstung von Gauthier",
    gauthierEquipmentList: [
      "Klim Kryos Carbon Helm",
      "Bering Hurricane Winterjacke",
      "Revit Nucleon Sommerjacke",
      "Bering Hurricane Hose",
      "Sidi Adventure Stiefel",
      "Alpinestar HT-7 beheizte Handschuhe"
    ],
    magaliEquipmentTitle: "Ausrüstung von Magali",
    magaliEquipmentList: [
      "Shoei ADV Hornet Helm",
      "Ixon Tour Adventure Winterjacke",
      "Forma Adventure Evo Stiefel"
    ],
    luggageNavigationTitle: "Gepäck & Navigation",
    luggageNavigationSubtitle: "Auf jedem Motorrad",
    luggageNavigationList: [
      "Lonerider Seitenkoffer",
      "Lonerider Overlander Satteltasche",
      "Lonerider 6L Crash Bar Taschen",
      "Lonerider Lenker Tasche",
      "Carpuride GPS"
    ],
    campingSurvivalTitle: "Camping & Überleben",
    campingSurvivalList: [
      "Lonerider Mototent",
      "Schlafsäcke",
      "Campingkocher",
      "Öko Wasserfilterflaschen",
      "Erste-Hilfe-Set"
    ],
    // Weitere deutsche Schlüssel hier...
  },

  ru: {
    translationTitle: "Перевод",
    translationSubtitle: "Мгновенный перевод",
    translationQuote: "Язык - это дорога к приключениям.",
    writeIn: "Писать на",
    translate: "Перевести",
    translating: "Перевод...",
    listenPronunciation: "Послушать произношение",
    dataFromSupabase: "Данные из Supabase",
    loading: "Загрузка...",
    errorOccurred: "Произошла ошибка",
    socialTitle: "Подписывайтесь на нас",
    socialSubtitle: "Социальные сети и многое другое",
    home: "Главная",
    aboutUs: "О нас",
    project: "Наш проект",
    bikes: "Наши мотоциклы",
    admin: "Административные шаги",
    social: "Сообщество",

    equipmentTitle: "Наше оборудование",
    protectionSafety: "Защита и безопасность",
    gauthierEquipmentTitle: "Экипировка Готье",
    gauthierEquipmentList: [
      "Шлем Klim Kryos Carbon",
      "Куртка Bering Hurricane для холодной погоды",
      "Куртка Revit Nucleon для теплой погоды",
      "Штаны Bering Hurricane",
      "Боты Sidi Adventure",
      "Подогреваемые перчатки Alpinestar HT-7"
    ],
    magaliEquipmentTitle: "Экипировка Магали",
    magaliEquipmentList: [
      "Шлем Shoei ADV Hornet",
      "Куртка Ixon Tour Adventure для холодной погоды",
      "Боты Forma Adventure Evo"
    ],
    luggageNavigationTitle: "Багаж и навигация",
    luggageNavigationSubtitle: "На каждом мотоцикле",
    luggageNavigationList: [
      "Боковые кофры Lonerider",
      "Седельная сумка Lonerider Overlander",
      "Сумки на рамку Lonerider 6L",
      "Сумка на руль Lonerider",
      "GPS Carpuride"
    ],
    campingSurvivalTitle: "Кемпинг и выживание",
    campingSurvivalList: [
      "Палатка Mototent Lonerider",
      "Спальные мешки",
      "Плита для кемпинга",
      "Фильтрующие бутылки Öko",
      "Аптечка первой помощи"
    ],
    // Другие ключи...
  },

  ja: {
    translationTitle: "翻訳",
    translationSubtitle: "即時翻訳",
    translationQuote: "言語は冒険への道です。",
    writeIn: "書く言語",
    translate: "翻訳する",
    translating: "翻訳中...",
    listenPronunciation: "発音を聞く",
    dataFromSupabase: "Supabaseからのデータ",
    loading: "読み込み中...",
    errorOccurred: "エラーが発生しました",
    socialTitle: "フォローしてください",
    socialSubtitle: "ソーシャルネットワークなど",
    home: "ホーム",
    aboutUs: "私たちについて",
    project: "私たちのプロジェクト",
    bikes: "私たちのバイク",
    admin: "管理手続き",
    social: "コミュニティ",

    equipmentTitle: "私たちの装備",
    protectionSafety: "保護と安全",
    gauthierEquipmentTitle: "ガティエの装備",
    gauthierEquipmentList: [
      "Klim Kryos Carbon ヘルメット",
      "Bering Hurricane 寒冷地用ジャケット",
      "Revit Nucleon 暖かい季節用ジャケット",
      "Bering Hurricane パンツ",
      "Sidi Adventure ブーツ",
      "Alpinestar HT-7 ヒーター付きグローブ"
    ],
    magaliEquipmentTitle: "マガリの装備",
    magaliEquipmentList: [
      "Shoei ADV Hornet ヘルメット",
      "Ixon Tour Adventure 寒冷地用ジャケット",
      "Forma Adventure Evo ブーツ"
    ],
    luggageNavigationTitle: "荷物＆ナビゲーション",
    luggageNavigationSubtitle: "各バイクに装備",
    luggageNavigationList: [
      "Lonerider サイドケース",
      "Lonerider Overlander シートバッグ",
      "Lonerider 6L クラッシュバー用バッグ",
      "Lonerider ハンドルバー バッグ",
      "Carpuride GPS"
    ],
    campingSurvivalTitle: "キャンプ＆サバイバル",
    campingSurvivalList: [
      "Lonerider モトテント",
      "寝袋",
      "キャンプ用ストーブ",
      "Öko 浄水ボトル",
      "救急セット"
    ],
    // ...
  }
};
