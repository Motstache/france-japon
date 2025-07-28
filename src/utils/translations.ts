export type Language = 'fr' | 'en' | 'de' | 'ru' | 'ja';

export type TranslationKey =
  | 'heroTitle'
  | 'heroSubtitle'
  | 'home'
  | 'socialTitle'
  | 'socialSubtitle'
  | 'aboutUs'
  | 'project'
  | 'projectSubtitle'
  | 'bikesTitle'
  | 'adminTitle'
  | 'adminSubtitle'
  | 'dataFromSupabase'
  | 'loading'
  | 'errorOccurred'
  | 'followUs'
  | 'supportUs'
  | 'supportMakesADifference'
  | 'gauthierDesc'
  | 'magaliDesc'
  | 'engine'
  | 'engineValue'
  | 'equipmentTitle'
  | 'protectionSafety'
  | 'demandesAdmin'
  | 'passports'
  | 'visas'
  | 'carnet'
  | 'insurance'
  | 'contact'
  | 'footerText'
  | 'translationTitle'
  | 'translationSubtitle'
  | 'translationQuote'
  | 'translating'
  | 'translate'
  | 'writeIn'
  | 'listenPronunciation'
  | 'usefulPhrases'
  // ajoute ici toutes les clés utilisées sur le site
  ;

export const translations: Record<Language, Record<TranslationKey, string>> = {
  fr: {
    heroTitle: "L'aventure commence ici",
    heroSubtitle: "35 000 km à moto de la France au Japon",
    home: "Accueil",
    socialTitle: "Réseaux",
    socialSubtitle: "Suivez-nous sur les réseaux sociaux",
    aboutUs: "À propos",
    project: "Notre projet",
    projectSubtitle: "Découvrez notre itinéraire et aventures",
    bikesTitle: "Nos motos",
    adminTitle: "Démarches administratives",
    adminSubtitle: "Tout ce qu'il faut savoir pour voyager",
    dataFromSupabase: "Données Supabase",
    loading: "Chargement...",
    errorOccurred: "Une erreur est survenue",
    followUs: "Suivez-nous",
    supportUs: "Soutenez-nous",
    supportMakesADifference: "Votre soutien fait la différence !",
    gauthierDesc: "Passionné de moto et d'aventure, Gauthier conduit la route.",
    magaliDesc: "Amoureuse du Japon et compagne de route de Gauthier.",
    engine: "Moteur",
    engineValue: "Yamaha Ténéré 700",
    equipmentTitle: "Équipement embarqué",
    protectionSafety: "Protection & Sécurité",
    demandesAdmin: "Démarches administratives",
    passports: "Passeports",
    visas: "Visas",
    carnet: "Carnet de Passage",
    insurance: "Assurance",
    contact: "Contactez-nous",
    footerText: "© 2026 Motstache. Tous droits réservés.",
    translationTitle: "Traduction instantanée",
    translationSubtitle: "Traduisez rapidement le contenu du site",
    translationQuote: "La langue est la clé du voyage",
    translating: "Traduction en cours...",
    translate: "Traduire",
    writeIn: "Écrire en",
    listenPronunciation: "Écouter la prononciation",
    usefulPhrases: "Phrases utiles",
  },
  en: {
    heroTitle: "The adventure begins here",
    heroSubtitle: "35,000 km motorcycle trip from France to Japan",
    home: "Home",
    socialTitle: "Social",
    socialSubtitle: "Follow us on social media",
    aboutUs: "About Us",
    project: "Our Project",
    projectSubtitle: "Discover our route and adventures",
    bikesTitle: "Our Bikes",
    adminTitle: "Administrative Steps",
    adminSubtitle: "Everything you need to know to travel",
    dataFromSupabase: "Supabase Data",
    loading: "Loading...",
    errorOccurred: "An error occurred",
    followUs: "Follow us",
    supportUs: "Support us",
    supportMakesADifference: "Your support makes a difference!",
    gauthierDesc: "Motorcycle and adventure enthusiast, Gauthier leads the ride.",
    magaliDesc: "Japan lover and Gauthier's travel partner.",
    engine: "Engine",
    engineValue: "Yamaha Ténéré 700",
    equipmentTitle: "Onboard Equipment",
    protectionSafety: "Protection & Safety",
    demandesAdmin: "Administrative Steps",
    passports: "Passports",
    visas: "Visas",
    carnet: "Carnet de Passage",
    insurance: "Insurance",
    contact: "Contact Us",
    footerText: "© 2026 Motstache. All rights reserved.",
    translationTitle: "Instant Translation",
    translationSubtitle: "Quickly translate site content",
    translationQuote: "Language is the key to travel",
    translating: "Translating...",
    translate: "Translate",
    writeIn: "Write in",
    listenPronunciation: "Listen to pronunciation",
    usefulPhrases: "Useful phrases",
  },
  de: {
    heroTitle: "Das Abenteuer beginnt hier",
    heroSubtitle: "35.000 km Motorradtour von Frankreich nach Japan",
    home: "Startseite",
    socialTitle: "Soziale Medien",
    socialSubtitle: "Folgen Sie uns in den sozialen Medien",
    aboutUs: "Über uns",
    project: "Unser Projekt",
    projectSubtitle: "Entdecken Sie unsere Route und Abenteuer",
    bikesTitle: "Unsere Motorräder",
    adminTitle: "Verwaltungsschritte",
    adminSubtitle: "Alles, was Sie für die Reise wissen müssen",
    dataFromSupabase: "Supabase-Daten",
    loading: "Laden...",
    errorOccurred: "Ein Fehler ist aufgetreten",
    followUs: "Folgen Sie uns",
    supportUs: "Unterstützen Sie uns",
    supportMakesADifference: "Ihre Unterstützung macht einen Unterschied!",
    gauthierDesc: "Motorrad- und Abenteuer-Enthusiast, Gauthier führt die Fahrt.",
    magaliDesc: "Japanliebhaberin und Gauthiers Reisebegleiterin.",
    engine: "Motor",
    engineValue: "Yamaha Ténéré 700",
    equipmentTitle: "An Bord Ausrüstung",
    protectionSafety: "Schutz & Sicherheit",
    demandesAdmin: "Verwaltungsschritte",
    passports: "Pässe",
    visas: "Visa",
    carnet: "Carnet de Passage",
    insurance: "Versicherung",
    contact: "Kontaktieren Sie uns",
    footerText: "© 2026 Motstache. Alle Rechte vorbehalten.",
    translationTitle: "Sofortige Übersetzung",
    translationSubtitle: "Schnell Website-Inhalte übersetzen",
    translationQuote: "Sprache ist der Schlüssel zum Reisen",
    translating: "Übersetzen...",
    translate: "Übersetzen",
    writeIn: "Schreiben in",
    listenPronunciation: "Aussprache anhören",
    usefulPhrases: "Nützliche Phrasen",
  },
  ru: {
    heroTitle: "Приключение начинается здесь",
    heroSubtitle: "35000 км на мотоцикле из Франции в Японию",
    home: "Главная",
    socialTitle: "Социальные сети",
    socialSubtitle: "Следите за нами в соцсетях",
    aboutUs: "О нас",
    project: "Наш проект",
    projectSubtitle: "Ознакомьтесь с нашим маршрутом и приключениями",
    bikesTitle: "Наши мотоциклы",
    adminTitle: "Административные шаги",
    adminSubtitle: "Всё, что нужно знать для путешествия",
    dataFromSupabase: "Данные Supabase",
    loading: "Загрузка...",
    errorOccurred: "Произошла ошибка",
    followUs: "Следите за нами",
    supportUs: "Поддержите нас",
    supportMakesADifference: "Ваша поддержка важна!",
    gauthierDesc: "Любитель мотоциклов и приключений, Готье ведёт поездку.",
    magaliDesc: "Любительница Японии и спутница Готье.",
    engine: "Двигатель",
    engineValue: "Yamaha Ténéré 700",
    equipmentTitle: "Снаряжение на борту",
    protectionSafety: "Защита и безопасность",
    demandesAdmin: "Административные вопросы",
    passports: "Паспорта",
    visas: "Визы",
    carnet: "Карнет де Пассаж",
    insurance: "Страховка",
    contact: "Связаться с нами",
    footerText: "© 2026 Motstache. Все права защищены.",
    translationTitle: "Мгновенный перевод",
    translationSubtitle: "Быстро переводите содержимое сайта",
    translationQuote: "Язык — ключ к путешествию",
    translating: "Перевод...",
    translate: "Перевести",
    writeIn: "Писать на",
    listenPronunciation: "Послушать произношение",
    usefulPhrases: "Полезные фразы",
  },
  ja: {
    heroTitle: "冒険はここから始まる",
    heroSubtitle: "フランスから日本への35000kmのバイク旅",
    home: "ホーム",
    socialTitle: "ソーシャル",
    socialSubtitle: "SNSでフォローしてください",
    aboutUs: "私たちについて",
    project: "私たちのプロジェクト",
    projectSubtitle: "ルートと冒険を発見する",
    bikesTitle: "私たちのバイク",
    adminTitle: "行政手続き",
    adminSubtitle: "旅行に必要な情報すべて",
    dataFromSupabase: "Supabaseのデータ",
    loading: "読み込み中...",
    errorOccurred: "エラーが発生しました",
    followUs: "フォローしてください",
    supportUs: "サポートしてください",
    supportMakesADifference: "あなたの支援が違いを生みます！",
    gauthierDesc: "バイクと冒険が好きなゴーチェが旅をリードします。",
    magaliDesc: "日本好きでゴーチェの旅のパートナーです。",
    engine: "エンジン",
    engineValue: "ヤマハテネレ700",
    equipmentTitle: "装備",
    protectionSafety: "保護と安全",
    demandesAdmin: "行政手続き",
    passports: "パスポート",
    visas: "ビザ",
    carnet: "通関手帳",
    insurance: "保険",
    contact: "お問い合わせ",
    footerText: "© 2026 Motstache。全著作権所有。",
    translationTitle: "即時翻訳",
    translationSubtitle: "サイトのコンテンツをすばやく翻訳",
    translationQuote: "言語は旅の鍵です",
    translating: "翻訳中...",
    translate: "翻訳する",
    writeIn: "書く言語",
    listenPronunciation: "発音を聴く",
    usefulPhrases: "便利なフレーズ",
  }
};
