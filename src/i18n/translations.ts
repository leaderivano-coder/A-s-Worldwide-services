export type SupportedLanguage = 'en' | 'zh' | 'fr' | 'ru' | 'es' | 'ar';

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'zh', label: 'Chinese', nativeLabel: '简体中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦', dir: 'rtl' },
];

export interface TranslationDictionary {
  [key: string]: {
    [lang in SupportedLanguage]?: string;
  };
}

export const DICTIONARY: TranslationDictionary = {
  // Top Banner & Location
  'nav.location': {
    en: 'Hangzhou (Fuyang District), Zhejiang Province, China',
    zh: '中国浙江省杭州市富阳区',
    fr: 'Hangzhou (District de Fuyang), Province du Zhejiang, Chine',
    ru: 'Ханчжоу (район Фуян), провинция Чжэцзян, Китай',
    es: 'Hangzhou (Distrito de Fuyang), Provincia de Zhejiang, China',
    ar: 'هانغتشو (منطقة فويانغ)، مقاطعة تشجيانغ، الصين',
  },
  'nav.established': {
    en: 'Established in 2020',
    zh: '成立于2020年',
    fr: 'Établi en 2020',
    ru: 'Основано в 2020 году',
    es: 'Establecido en 2020',
    ar: 'تأسست في عام 2020',
  },
  'nav.whatsapp': {
    en: 'WhatsApp:',
    zh: '微信 / WhatsApp:',
    fr: 'WhatsApp :',
    ru: 'WhatsApp:',
    es: 'WhatsApp:',
    ar: 'واتساب:',
  },

  // Navbar Links
  'nav.story': {
    en: 'Our Story',
    zh: '关于我们',
    fr: 'Notre Histoire',
    ru: 'Наша история',
    es: 'Nuestra Historia',
    ar: 'قصتنا',
  },
  'nav.services': {
    en: 'What We Do',
    zh: '核心业务',
    fr: 'Nos Services',
    ru: 'Услуги',
    es: 'Nuestros Servicios',
    ar: 'خدماتنا',
  },
  'nav.goodsLogistics': {
    en: 'Goods & Logistics',
    zh: '货源与物流',
    fr: 'Marchandises & Logistique',
    ru: 'Товары и логистика',
    es: 'Bienes y Logística',
    ar: 'البضائع واللوجستيات',
  },
  'nav.whyPickUs': {
    en: 'Why Choose Us',
    zh: '为何选择我们',
    fr: 'Pourquoi Nous Choisir',
    ru: 'Почему мы',
    es: 'Por Qué Elegirnos',
    ar: 'لماذا تختارنا',
  },
  'nav.testimonials': {
    en: 'Stories',
    zh: '客户案例',
    fr: 'Témoignages',
    ru: 'Отзывы клиентов',
    es: 'Testimonios',
    ar: 'قصص النجاح',
  },
  'nav.contact': {
    en: 'Contact & Credentials',
    zh: '资质与联系',
    fr: 'Contact & Licences',
    ru: 'Контакты и лицензии',
    es: 'Contacto y Credenciales',
    ar: 'التواصل والاعتمادات',
  },
  'nav.letsTalk': {
    en: "Let's Talk",
    zh: '在线咨询',
    fr: 'Contactez-nous',
    ru: 'Связаться с нами',
    es: 'Hablemos',
    ar: 'تواصل معنا',
  },

  // Hero Section
  'hero.tag': {
    en: 'Licensed Full-Service Agency in Zhejiang, China',
    zh: '中国浙江正规注册全方位综合服务机构',
    fr: 'Agence Agréée Tous Services au Zhejiang, Chine',
    ru: 'Лицензированное агентство полного цикла в Чжэцзяне, Китай',
    es: 'Agencia Oficial de Servicios Integrales en Zhejiang, China',
    ar: 'وكالة خدمات شاملة ومرخصة في تشجيانغ، الصين',
  },
  'hero.titleLine1': {
    en: 'Your Dedicated Partner',
    zh: '您在中国的贴心伙伴',
    fr: 'Votre Partenaire Dédié',
    ru: 'Ваш надежный партнер',
    es: 'Su Socio Dedicado',
    ar: 'شريكك الموثوق',
  },
  'hero.titleLine2': {
    en: 'On The Ground in China.',
    zh: '扎根中国，实地护航。',
    fr: 'Sur le Terrain en Chine.',
    ru: 'Непосредственно в Китае.',
    es: 'Directamente en China.',
    ar: 'على أرض الواقع في الصين.',
  },
  'hero.subtitle': {
    en: "Headquartered in Hangzhou, Zhejiang, we bridge international students, entrepreneurs, and global professionals with legitimate universities, direct factory wholesale markets, and transparent China services.",
    zh: '总部位于中国浙江杭州。我们协助国际留学生、企业采购商及专业人士对接顶尖中国高校、义乌直采货源、验货物流及签证居留，提供全程透明真实的实地服务。',
    fr: 'Basés à Hangzhou (Zhejiang), nous accompagnons étudiants internationaux, acheteurs et professionnels : admissions universitaires, bourses du gouvernement chinois, sourcing direct à Yiwu, contrôle qualité et visas.',
    ru: 'Штаб-квартира в Ханчжоу (Чжэцзян). Помогаем студентам, предпринимателям и специалистам: поступление в вузы Китая, гранты CSC, закупка товаров в Иу, контроль качества на фабриках и рабочие визы.',
    es: 'Con sede en Hangzhou, Zhejiang, conectamos a estudiantes, empresarios y profesionales con universidades legítimas, mercados mayoristas directos en Yiwu, inspección en fábrica y visados de trabajo.',
    ar: 'يقع مقرنا في هانغتشو، تشجيانغ، ونربط الطلاب ورواد الأعمال بالجامعات الصينية المرموقة، وأسواق الجملة المباشرة في إيوو، وفحص الجودة والشحن وتأشيرات العمل.',
  },
  'hero.ctaConsult': {
    en: 'Consult With Us',
    zh: '立即咨询',
    fr: 'Consultation Gratuite',
    ru: 'Получить консультацию',
    es: 'Consultar con Nosotros',
    ar: 'استشرنا الآن',
  },
  'hero.ctaWhatsApp': {
    en: 'Message on WhatsApp',
    zh: 'WhatsApp 直连',
    fr: 'Écrire sur WhatsApp',
    ru: 'Написать в WhatsApp',
    es: 'Mensaje por WhatsApp',
    ar: 'مراسلة عبر واتساب',
  },
  'hero.statsSuccess': {
    en: '98%+ Placement Rate',
    zh: '98%+ 录取与奖学金通过率',
    fr: '98%+ Taux d’Admission & Bourses',
    ru: '98%+ Успешных поступлений',
    es: '98%+ Tasa de Admisiones',
    ar: '98%+ نسبة قبول ونجاح المنح',
  },
  'hero.statsSuccessSub': {
    en: 'Bachelor, Master, PhD & Language courses',
    zh: '本科、硕士、博士及中文研修项目',
    fr: 'Licence, Master, Doctorat et Langue',
    ru: 'Бакалавриат, магистратура, PhD и язык',
    es: 'Grado, Máster, Doctorado e Idioma',
    ar: 'بكالوريوس، ماجستير، دكتوراه ولغة',
  },
  'hero.statsFactories': {
    en: '500+ Verified Suppliers',
    zh: '500+ 实地核验合作厂家',
    fr: '500+ Fournisseurs Vérifiés',
    ru: '500+ Проверенных фабрик',
    es: '500+ Proveedores Verificados',
    ar: '500+ مورد ومصنع معتمد',
  },
  'hero.statsFactoriesSub': {
    en: 'In Yiwu, Ningbo, Hangzhou & nationwide',
    zh: '分布于义乌、宁波、杭州及全国产业带',
    fr: 'À Yiwu, Ningbo, Hangzhou et toute la Chine',
    ru: 'В Иу, Нинбо, Ханчжоу и по всему Китаю',
    es: 'En Yiwu, Ningbo, Hangzhou y todo el país',
    ar: 'في إيوو، نينغبو، هانغتشو وكافة أنحاء الصين',
  },
  'hero.statsLocal': {
    en: 'Established in 2020',
    zh: '2020年正规注册成立',
    fr: 'Fondée en 2020',
    ru: 'Работаем с 2020 года',
    es: 'Fundada en 2020',
    ar: 'تأسست في عام 2020',
  },
  'hero.statsLocalSub': {
    en: 'Zhejiang licensed corporate legal entity',
    zh: '具有独立法人资质的正规实体企业',
    fr: 'Entité légale enregistrée au Zhejiang',
    ru: 'Официальное юридическое лицо в Китае',
    es: 'Entidad corporativa legal en Zhejiang',
    ar: 'كيان قانوني مسجل رسمياً في تشجيانغ',
  },

  // Services Section
  'services.badge': {
    en: 'Our Core Services',
    zh: '核心专业服务',
    fr: 'Nos Services Clés',
    ru: 'Наши основные услуги',
    es: 'Nuestros Servicios Principales',
    ar: 'خدماتنا الرئيسية',
  },
  'services.title': {
    en: 'How We Support You in China',
    zh: '我们如何在全流程为您提供实地支持',
    fr: 'Comment Nous Vous Accompagnons en Chine',
    ru: 'Как мы помогаем вам на территории Китая',
    es: 'Cómo Le Apoyamos en China',
    ar: 'كيف ندعمك ونساندك على أرض الصين',
  },
  'services.subtitle': {
    en: 'Whether for your higher education, your international supply chain, or your professional career, we provide genuine hands-on assistance every step of the way.',
    zh: '无论是高等学府深造、跨境供应链采购，还是中国工作与商务拓展，我们的在华团队全程亲力亲为。',
    fr: 'Que ce soit pour vos études supérieures, votre chaîne logistique ou votre carrière, nous vous assistons personnellement à chaque étape.',
    ru: 'Будь то высшее образование, закупка товаров или карьера в Китае — наша команда обеспечивает личную поддержку на каждом этапе.',
    es: 'Ya sea para sus estudios superiores, su cadena de suministro o su carrera profesional, brindamos asistencia personal y cercana en cada paso.',
    ar: 'سواء كان ذلك لدراستك الجامعية، أو سلسلة التوريد التجارية، أو مسيرتك المهنية، فإننا نقدم المساعدة الميدانية خطوة بخطوة.',
  },
  'services.inquireBtn': {
    en: 'Inquire About This',
    zh: '咨询此项服务',
    fr: 'Se renseigner',
    ru: 'Узнать подробности',
    es: 'Consultar Servicio',
    ar: 'استفسر عن هذه الخدمة',
  },
  'services.commitment': {
    en: 'Our Personal Commitment:',
    zh: '我们的实地承诺：',
    fr: 'Notre Engagement Personnel :',
    ru: 'Наше личное обязательство:',
    es: 'Nuestro Compromiso Personal:',
    ar: 'التزامنا الشخصي:',
  },
  'services.included': {
    en: 'What is included:',
    zh: '包含的核心项目：',
    fr: 'Ce qui est inclus :',
    ru: 'Что входит в услугу:',
    es: 'Qué incluye:',
    ar: 'ما تتضمنه الخدمة:',
  },
  'services.customRequest': {
    en: 'Have a custom request or specific question?',
    zh: '有特殊的定制需求或具体疑问？',
    fr: 'Une demande particulière ou une question ?',
    ru: 'Есть особый запрос или вопрос?',
    es: '¿Tiene una solicitud personalizada o pregunta?',
    ar: 'هل لديك استفسار محدد أو طلب مخصص؟',
  },
  'services.customRequestSub': {
    en: "We understand every student and every business has unique requirements. Reach out directly and we'll reply personally from Hangzhou.",
    zh: '我们深知每位留学生和每家企业的需求各不相同。欢迎随时联系我们，杭州本地团队为您亲自解答。',
    fr: 'Chaque projet est unique. Contactez-nous directement, nous vous répondrons personnellement depuis Hangzhou.',
    ru: 'Каждый студент и бизнес уникальны. Напишите нам, и мы ответим вам лично из Ханчжоу.',
    es: 'Entendemos que cada estudiante y negocio tiene necesidades únicas. Contáctenos directamente desde Hangzhou.',
    ar: 'ندرك أن لكل طالب ولكل مشروع متطلبات فريدة. تواصل معنا وسنجيبك شخصياً من هانغتشو.',
  },

  // Goods Showcase Section
  'goods.badge': {
    en: 'On-The-Ground Operations in China',
    zh: '实地业务巡礼',
    fr: 'Opérations sur le Terrain en Chine',
    ru: 'Операции на территории Китая',
    es: 'Operaciones Directas en China',
    ar: 'عمليات ميدانية في الصين',
  },
  'goods.title': {
    en: 'China Sourcing, Goods & Global Logistics',
    zh: '中国货源直采、验货与全球物流',
    fr: 'Sourcing en Chine, Marchandises & Fret Mondial',
    ru: 'Закупки в Китае, товары и международная логистика',
    es: 'Sourcing en China, Mercancías y Logística Global',
    ar: 'توريد البضائع الصينية والفحص والشحن العالمي',
  },
  'goods.subtitle': {
    en: 'Take a firsthand look at our sourcing operations across Zhejiang province—from bustling wholesale showrooms in Yiwu to factory floor quality checks, organized warehousing, and Ningbo container shipping.',
    zh: '直击我们在浙江的实地作业——从义乌国际商贸城的琳琅货架，到制造车间的专业验货、集运仓储打包，以及宁波舟山港的集装箱直装远航。',
    fr: 'Découvrez nos opérations au Zhejiang : du grand marché de gros de Yiwu aux inspections en usine, au stockage sécurisé et aux expéditions portuaires à Ningbo.',
    ru: 'Взгляните на нашу работу в провинции Чжэцзян: от оптовых рынков Иу до инспекции на фабриках, консолидации на складах и отправки контейнеров из Нинбо.',
    es: 'Vea nuestras operaciones en Zhejiang: desde los pabellones de Yiwu hasta inspecciones de calidad, almacenamiento y envíos de contenedores en Ningbo.',
    ar: 'شاهد عملياتنا الميدانية في مقاطعة تشجيانغ: من أسواق إيوو العالمية للجملة إلى الفحص بالمصانع، والتخزين المنظم، والشحن البحري بالحاويات عبر نينغبو.',
  },
  'goods.all': {
    en: 'All Operations',
    zh: '全部业务展示',
    fr: 'Toutes les Opérations',
    ru: 'Все направления',
    es: 'Todas las Operaciones',
    ar: 'جميع العمليات',
  },
  'goods.wholesale': {
    en: 'Wholesale & Consumer Goods',
    zh: '批发与大众消费品',
    fr: 'Commerce de Gros',
    ru: 'Оптовые закупки',
    es: 'Venta al por Mayor',
    ar: 'تجارة الجملة والبضائع',
  },
  'goods.inspection': {
    en: 'Factory Inspections',
    zh: '工厂质量验货',
    fr: 'Inspections d’Usine',
    ru: 'Инспекции на фабриках',
    es: 'Inspección de Fábrica',
    ar: 'فحص جودة المصانع',
  },
  'goods.warehouse': {
    en: 'Warehouse Staging',
    zh: '集运仓储打托',
    fr: 'Entrepôt & Consolidation',
    ru: 'Складская консолидация',
    es: 'Almacén y Consolidación',
    ar: 'التخزين والتجميع',
  },
  'goods.shipping': {
    en: 'Container Shipping',
    zh: '海运集装箱物流',
    fr: 'Fret Maritime & Conteneurs',
    ru: 'Контейнерные перевозки',
    es: 'Envíos Marítimos',
    ar: 'شحن الحاويات',
  },
  'goods.requestQuote': {
    en: 'Request Sourcing Quote',
    zh: '获取采购报价',
    fr: 'Demander un Devis',
    ru: 'Запросить расчёт',
    es: 'Solicitar Cotización',
    ar: 'طلب تسعير التوريد',
  },

  // About Section
  'about.badge': {
    en: 'About A’S WorldWide SERVICES',
    zh: '关于 A’S 全球服务',
    fr: 'À Propos d’A’S WorldWide',
    ru: 'Об агентстве A’S WorldWide',
    es: 'Acerca de A’S WorldWide',
    ar: 'عن وكالة A’S WorldWide',
  },
  'about.title': {
    en: 'Connecting People, Bridging Businesses',
    zh: '连接中外人才，赋能跨境商务',
    fr: 'Connecter les Talents, Rapprocher les Entreprises',
    ru: 'Объединяем людей, открываем возможности бизнеса',
    es: 'Conectando Personas, Uniendo Negocios',
    ar: 'نربط الشعوب، ونجسر الأعمال التجارية',
  },
  'about.storyHeading': {
    en: 'Our Roots in Zhejiang',
    zh: '扎根浙江沃土',
    fr: 'Nos Racines au Zhejiang',
    ru: 'Наши корни в Чжэцзяне',
    es: 'Nuestras Raíces en Zhejiang',
    ar: 'جذورنا في تشجيانغ',
  },
  'about.storyP1': {
    en: "Founded in 2020 in Hangzhou's Fuyang District, A'S WorldWide SERVICES was born out of a real need: helping foreigners navigate the reality of studying, working, and sourcing in China without confusing middlemen or inflated promises.",
    zh: '2020年创立于中国杭州富阳区，A’S 全球综合服务的初心纯粹而坚定：帮助外籍人士避开虚假中介与夸大宣传，踏实安全地在中国留学深造、开拓采购及发展事业。',
    fr: 'Fondée en 2020 dans le district de Fuyang à Hangzhou, A’S WorldWide SERVICES est née d’une mission concrète : accompagner les étrangers dans leurs études, leur carrière et leurs achats en Chine, en toute transparence.',
    ru: 'Основанное в 2020 году в Ханчжоу (Фуян), агентство A’S WorldWide SERVICES создано для прозрачной и честной помощи иностранцам в учебе, работе и закупках в Китае без переплат и ложных обещаний.',
    es: 'Fundada en 2020 en el distrito de Fuyang de Hangzhou, A’S WorldWide SERVICES nació con el propósito de ayudar a extranjeros a estudiar, trabajar y abastecerse en China de manera honesta y directa.',
    ar: 'تأسست وكالتنا في عام 2020 في منطقة فويانغ بهانغتشو بهدف واضح: مساعدة الوافدين والطلاب ورجال الأعمال في الدراسة والعمل والتوريد في الصين بنزاهة وشفافية.',
  },

  // Why Choose Us
  'why.badge': {
    en: 'Our Differences',
    zh: '我们的核心优势',
    fr: 'Nos Points Forts',
    ru: 'Наши преимущества',
    es: 'Nuestras Ventajas',
    ar: 'مميزاتنا التنافسية',
  },
  'why.title': {
    en: 'Why Trust A’S WorldWide SERVICES',
    zh: '为何信赖 A’S 全球服务',
    fr: 'Pourquoi Faire Confiance à A’S WorldWide',
    ru: 'Почему нам доверяют',
    es: 'Por Qué Confiar en A’S WorldWide',
    ar: 'لماذا يثق بنا عملاؤنا',
  },

  // Testimonials
  'testimonials.badge': {
    en: 'Real Success Stories',
    zh: '真实服务反馈',
    fr: 'Témoignages Réels',
    ru: 'Реальные истории успеха',
    es: 'Historias Reales',
    ar: 'تجارب وقصص نجاح حقيقية',
  },
  'testimonials.title': {
    en: 'Trusted by Students & Global Importers',
    zh: '国际留学生与全球采购商的真诚推荐',
    fr: 'La Confiance des Étudiants et Importateurs',
    ru: 'Нам доверяют студенты и предприниматели',
    es: 'Avalado por Estudiantes e Importadores',
    ar: 'ثقة الطلاب والمستوردين من شتى أنحاء العالم',
  },

  // FAQ
  'faq.badge': {
    en: 'Common Inquiries',
    zh: '常见问题解答',
    fr: 'Questions Fréquentes',
    ru: 'Частые вопросы',
    es: 'Preguntas Frecuentes',
    ar: 'الأسئلة الشائعة',
  },
  'faq.title': {
    en: 'Answers to Your Questions',
    zh: '解答您的疑问',
    fr: 'Réponses à Vos Questions',
    ru: 'Ответы на ваши вопросы',
    es: 'Respuestas a Sus Preguntas',
    ar: 'إجابات على استفساراتك',
  },

  // Footer & Contact
  'footer.companyDesc': {
    en: 'Officially licensed full-service agency established in 2020 in Hangzhou, Zhejiang, China. Dedicated to transparent university admissions, scholarship placement, factory procurement, on-site quality inspection, and legal visa facilitation.',
    zh: '中国浙江省杭州市正规注册综合服务机构（成立于2020年）。专注中国大学录取与奖学金申请、源头工厂采购、现场质量验货与工作签证代办。',
    fr: 'Agence multiservices officielle fondée en 2020 à Hangzhou, Zhejiang. Admissions universitaires, bourses, approvisionnement direct en usine, contrôle qualité et visas légaux.',
    ru: 'Лицензированное агентство в Ханчжоу (Чжэцзян), основано в 2020 году. Поступление в вузы, стипендии, прямые закупки, контроль качества и оформление рабочих виз.',
    es: 'Agencia multiservicios oficial fundada en 2020 en Hangzhou, Zhejiang. Admisiones universitarias, becas, compras en fábrica, control de calidad y visados.',
    ar: 'وكالة رسمية متكاملة تأسست عام 2020 في هانغتشو، تشجيانغ. متخصصة في قبول الجامعات والمنح الدراسية وتوريد المصانع وفحص الجودة وتأشيرات العمل.',
  },
  'footer.contactDirectly': {
    en: 'Contact Us Directly in China',
    zh: '直接联系我们在华团队',
    fr: 'Contactez-nous Directement en Chine',
    ru: 'Свяжитесь с нами напрямую в Китае',
    es: 'Contáctenos Directamente en China',
    ar: 'تواصل معنا مباشرة في الصين',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    zh: '保留所有权利。',
    fr: 'Tous droits réservés.',
    ru: 'Все права защищены.',
    es: 'Todos los derechos reservados.',
    ar: 'جميع الحقوق محفوظة.',
  },
};
