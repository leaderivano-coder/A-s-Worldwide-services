import { ServiceItem, ValueProposition, Testimonial, Certificate } from '../types';

export const COMPANY_CONTACT = {
  name: "A'S WorldWide SERVICES",
  tagline: "CONNECTING PEOPLE • BRIDGING BUSINESSES • DELIVERING OPPORTUNITIES",
  location: "HANGZHOU 富阳",
  locationSub: "Fuyang District, Hangzhou, Zhejiang, China",
  whatsapp: "+8615715745747",
  whatsappUrl: "https://wa.me/8615715745747",
  email: "asworldwideservices.cn@gmail.com",
  instagram: "@asworldwideservice.cn",
  instagramUrl: "https://www.instagram.com/asworldwideservice.cn?stkn=ZWFjYTI3d2JsODFu&utm_source=qr",
  facebook: "A'S WorldWide SERVICES",
  facebookUrl: "https://www.facebook.com/share/19qJcbwjVS/?mibextid=wwXIfr",
  foundedYear: "2020",
};

export const CORE_BADGES = [
  { id: 'global-reach', label: 'GLOBAL REACH', sublabel: 'Connecting Continents', icon: 'Globe' },
  { id: 'trusted-partner', label: 'TRUSTED PARTNER', sublabel: 'Transparent & Reliable', icon: 'Handshake' },
  { id: 'quality-assured', label: 'QUALITY ASSURED', sublabel: 'Hands-on Inspection', icon: 'PackageCheck' },
  { id: 'worldwide-shipping', label: 'WORLDWIDE SHIPPING', sublabel: 'Air & Sea Freight', icon: 'Plane' },
  { id: 'study-in-china', label: 'STUDY IN CHINA', sublabel: 'Campuses & Scholarships', icon: 'GraduationCap' },
];

export const WHEEL_SERVICES = [
  {
    id: 'admissions',
    title: 'ADMISSIONS TO STUDY IN CHINA',
    sub: 'Full scholarship & university guidance',
    icon: 'GraduationCap',
    angle: 270, // Top (12 o'clock)
    color: '#0284C7',
  },
  {
    id: 'work-permit',
    title: 'WORK PERMIT APPLICATION',
    sub: 'Foreign expert & employment visas',
    icon: 'FileCheck',
    angle: 330, // Top-Right (2 o'clock)
    color: '#0EA5E9',
  },
  {
    id: 'product-sourcing',
    title: 'PRODUCT SOURCING & QUALITY CHECK AT AFFORDABLE PRICE',
    sub: 'Factory direct procurement & safety',
    icon: 'PackageCheck',
    angle: 30, // Right-Center (3-4 o'clock)
    color: '#0369A1',
  },
  {
    id: 'china-tours',
    title: 'CHINA TOURS',
    sub: 'Factory visits & cultural trips',
    icon: 'Landmark',
    angle: 90, // Bottom-Right (5-6 o'clock)
    color: '#0284C7',
  },
  {
    id: 'global-business',
    title: 'GLOBAL BUSINESS CONNECTIONS',
    sub: 'International supply chains & partners',
    icon: 'Handshake',
    angle: 150, // Bottom-Left (7-8 o'clock)
    color: '#0EA5E9',
  },
  {
    id: 'translation',
    title: 'TRANSLATION CHINESE ↔ ENGLISH / ENGLISH ↔ CHINESE',
    sub: 'Certified document & business translation',
    icon: 'Languages',
    angle: 210, // Top-Left (10 o'clock)
    color: '#0369A1',
  },
];

export const ABOUT_TEXTS = {
  paragraph1:
    "Founded in 2020, our company was born from a passion for global connection and a deep understanding of the international landscape. We began our journey by immersing ourselves in the intricacies of international education, visa processes, and global trade. This initial learning phase was crucial, allowing us to build a strong foundation of knowledge and practical experience.",
  paragraph2:
    "Over the past few years, we've dedicated ourselves to refining our expertise. We've worked closely with students, businesses, and individuals, learning firsthand about their challenges and aspirations. This hands-on experience has shaped our approach, enabling us to develop streamlined, effective solutions for studying abroad, sourcing products, and navigating international requirements. Our commitment is to leverage this accumulated knowledge and experience to empower you in achieving your global goals.",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'study-abroad',
    title: 'STUDY ABROAD AND SCHOLARSHIPS',
    shortTitle: 'Study Abroad',
    badgeText: 'ADMISSIONS & SCHOLARSHIPS',
    description:
      'Dream of studying overseas? We connect you with top universities and secure scholarships, making your international education journey a reality. We handle the admissions process from start to finish, so you can focus on your future.',
    category: 'education',
    iconName: 'GraduationCap',
    features: [
      'Top University Placements in China and Worldwide',
      'Scholarship Application & Financial Grant Assistance',
      'End-to-End Admission Paperwork & Acceptance Letters',
      'Pre-departure Orientation & Airport Reception Support',
    ],
  },
  {
    id: 'sourcing-china',
    title: 'SOURCING PRODUCTS FROM CHINA',
    shortTitle: 'Product Sourcing',
    badgeText: 'SOURCING PRODUCTS FROM CHINA',
    description:
      'Access the world\'s manufacturing hub with confidence. We expertly source high-quality products directly from China, ensuring competitive pricing and reliable supply chains for your business needs.',
    category: 'sourcing',
    iconName: 'Building2',
    features: [
      'Direct Factory Supplier Identification & Negotiation',
      'Bulk Commercial Cargo & Appliance Logistics (Hisense, TCL, etc.)',
      'Contract Drafting, Transparent Pricing & Safe Payment Escrow',
      'Optimized Packaging & Strategic Weight Reduction for Freight',
    ],
  },
  {
    id: 'quality-checking',
    title: 'QUALITY PRODUCT CHECKING',
    shortTitle: 'Quality Check',
    badgeText: 'QUALITY PRODUCT CHECKING',
    description:
      'Guarantee excellence before it ships. We provide meticulous quality control and inspection services for products sourced from China, ensuring they meet your exact standards and expectations.',
    category: 'inspection',
    iconName: 'ShieldCheck',
    features: [
      'On-site Factory Audits & Production Monitoring',
      'Precision Measurement, Calliper & Digital Scale Verification',
      'Barcode, Labeling & Export Carton Compliance Checks',
      'Detailed Pre-Shipment Inspection Reports with Photo Evidence',
    ],
  },
  {
    id: 'work-visas',
    title: 'GLOBAL WORK VISAS',
    shortTitle: 'Work Visas',
    badgeText: 'GLOBAL WORK VISAS',
    description:
      'Expand your horizons with ease. We assist individuals and businesses in navigating the complexities of work visa applications worldwide, opening doors to international career opportunities.',
    category: 'visa',
    iconName: 'Briefcase',
    features: [
      'Notification Letter for Foreigner\'s Work Permit in PR China',
      'Degree Authentication, Apostille & Non-Criminal Record Clearance',
      'Category A/B Foreign Expert Talent Evaluation & Endorsements',
      'Residence Permit Conversion & Family Dependent Visas',
    ],
  },
  {
    id: 'translation-services',
    title: 'TRANSLATION SERVICES',
    shortTitle: 'Translation',
    badgeText: 'TRANSLATION SERVICES',
    description:
      'Break down language barriers. Our professional translation services ensure your message is clear, accurate, and impactful across all languages, facilitating smooth communication for your business or personal needs.',
    category: 'translation',
    iconName: 'Languages',
    features: [
      'Certified Chinese ↔ English Legal & Academic Translations',
      'Official Notarized Stamp for Embassy & Government Bureaus',
      'Commercial Contract & Technical Product Specification Translation',
      'On-site Bilingual Interpreters for Business Meetings & Tours',
    ],
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: 'vp-comprehensive',
    title: 'Comprehensive Solutions',
    description:
      'We offer a complete suite of services, from securing your dream study abroad placement and scholarships to sourcing products from China, providing expert translation, ensuring quality checks, and assisting with global work visas. We\'re your one-stop shop for all things international.',
    imageCategory: 'all_in_one',
  },
  {
    id: 'vp-experience',
    title: 'Founded on Experience',
    description:
      'Established in 2020, A\'S Worldwide Services has rapidly built a solid reputation through dedicated learning and practical experience. We understand the complexities of global markets and are equipped to guide you every step of the way.',
    imageCategory: 'experience',
  },
  {
    id: 'vp-personalized',
    title: 'Personalized Approach',
    description:
      'We believe every client is unique. We take the time to understand your specific needs and goals, tailoring our services to provide the most effective and efficient solutions for you.',
    imageCategory: 'personalized',
  },
  {
    id: 'vp-quality',
    title: 'Commitment to Quality',
    description:
      'Whether it\'s ensuring the quality of products sourced from China or the accuracy of our translation and visa services, excellence is at the core of everything we do. We strive to exceed your expectations.',
    badge: '100% Quality Inspected',
    imageCategory: 'quality_seal',
  },
  {
    id: 'vp-simplicity',
    title: 'Simplicity and Professionalism',
    description:
      'We simplify complex international processes, making them accessible and manageable for everyone. Our professional approach ensures a smooth and stress-free experience.',
    imageCategory: 'simplicity',
  },
  {
    id: 'vp-smart-savings',
    title: 'Quality Products, Smart Savings',
    description:
      'We specialize in sourcing high-quality products from China at genuinely affordable prices. Our team personally handles the packing process, meticulously ensuring the safety of your goods. We\'re strategic about reducing weight by removing unnecessary packaging, which translates into significant cost savings for you on shipping.',
    imageCategory: 'savings',
  },
  {
    id: 'vp-global-reach',
    title: 'Global Reach, Local Understanding',
    description:
      'We bridge continents, bringing you the best opportunities and services from around the world, all while maintaining a keen understanding of your individual requirements.',
    imageCategory: 'global',
  },
  {
    id: 'vp-student-support',
    title: 'Holistic Support for Students',
    description:
      'Beyond just getting you accepted into a program abroad, we focus on your entire journey. We provide comprehensive pre-departure orientation, giving you a clear understanding of your new country\'s culture, customs, and daily life. This ensures you feel confident and prepared before you even arrive.',
    imageCategory: 'students',
  },
  {
    id: 'vp-china-connection',
    title: 'Your China Connection',
    description:
      'Whether you\'re looking to visit factories to find the perfect suppliers or planning a memorable vacation in China, our local tour guides are here to make it happen. They\'ll take you directly to the right places and ensure you have an enriching experience.',
    imageCategory: 'tours',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tristan Clousso',
    location: 'South Africa',
    quote:
      'I was overwhelmed by the university application process and had no idea where to start. Thanks to A\'S Worldwide Services\' admissions and scholarship guidance, I successfully secured admission to a university abroad and received a scholarship that significantly reduced my financial burden. The support was professional, timely, and incredibly helpful throughout the entire process. I highly recommend these services to any student seeking international education opportunities.',
    serviceUsed: 'University Admission & Scholarship',
    avatarInitials: 'TC',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Shani Mensah',
    location: 'Uganda',
    quote:
      'I needed assistance sourcing products and shipping them internationally, and the service exceeded my expectations. Communication was excellent, the products arrived on time, and the entire shipping process was handled professionally. I appreciated the regular updates and attention to detail. I will definitely use these services again for future orders.',
    serviceUsed: 'China Sourcing & International Freight',
    avatarInitials: 'SM',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Chikondi Amolyn',
    location: 'Zambia',
    quote:
      'I required accurate translation of important documents for my academic application. The translations were completed quickly, professionally, and gave me confidence that my documents met all requirements. I am extremely satisfied with the quality of work provided.',
    serviceUsed: 'Certified Academic Translation',
    avatarInitials: 'CA',
    verified: true,
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-iso',
    title: 'Quality Management System Certificate',
    chineseTitle: '质量管理体系认证证书',
    issuer: 'IAF / CNAS Accredited Certification Authority',
    description:
      'Certified compliance with international quality management standards (ISO 9001:2015 / GB/T 19001-2016) for international consultancy, sourcing coordination, and education services.',
    credentialId: 'QMS-2022-CNAS-8819',
    type: 'iso',
  },
  {
    id: 'cert-edu',
    title: 'Higher Education Academic Record & Verification',
    chineseTitle: '外国留学生在华学术认证与学籍证明',
    issuer: 'Chinese Ministry of Education Verified Institution',
    description:
      'Official academic credentials and foreign student verification validating direct liaison with Chinese universities and education administrative bureaus.',
    credentialId: 'EDU-HZ-2021-940',
    type: 'education',
  },
  {
    id: 'cert-lct',
    title: 'London College of Teachers Accreditation',
    chineseTitle: '英国伦敦教师学院认证证书',
    issuer: 'London College of Teachers & Trainers',
    description:
      'International accreditation in English Language Instruction and Cross-Cultural Educational Communication (120-Hour International Certification).',
    credentialId: 'LCT-INT-77412-GB',
    type: 'credential',
  },
  {
    id: 'cert-work',
    title: 'Global Operations Work Experience Certificate',
    chineseTitle: '国际业务与全球市场工作资历认证',
    issuer: 'BluePrint Global Management & Operations',
    description:
      'Certificate of excellence awarded for overseas market development, supply-chain logistics coordination, and international student guidance.',
    credentialId: 'EXP-AW-2023-014',
    type: 'experience',
  },
];
