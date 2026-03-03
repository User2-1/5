"use client";

import NextLink from "next/link";
import { ArrowRight, FileText, MapPin, Package, Truck } from "lucide-react";

export type Lang = "de" | "en" | "ru";

type MaterialCard = {
  id: string;
  name: string;
  series: string;
  shortDescription: string;
  technicalHighlights: string[];
};

type LocaleContent = {
  nav: { id: string; label: string }[];
  hero: {
    headline: string;
    subheadline: string;
    trustLine: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustBar: string[];
  materialsSectionTitle: string;
  materialsSectionSubtitle: string;
  materialPlaceholders: {
    image: string;
    colors: string;
    price: string;
    details: string;
  };
  materials: MaterialCard[];
  applications: {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    download: string;
    chart: string;
    logistics: string;
    base: string;
  };
  portfolio: {
    title: string;
    intro: string;
    items: string[];
    details: string;
    legal: string;
  };
  technical: {
    title: string;
    text: string;
  };
  principles: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  conversion: {
    title: string;
    text: string;
    sample: string;
    pricing: string;
    technical: string;
  };
  contact: {
    title: string;
    intro: string;
    shipping: string;
    minOrder: string;
  };
  footer: {
    positioning: string;
    rights: string;
  };
};

const contentByLang: Record<Lang, LocaleContent> = {
  de: {
    nav: [
      { id: "home", label: "Start" },
      { id: "materials", label: "Materialien" },
      { id: "collections", label: "Anwendungen" },
      { id: "about", label: "Über uns" },
      { id: "contact", label: "Kontakt" },
    ],
    hero: {
      headline: "",
      subheadline: "",
      trustLine: "In-stock from 1 meter · 2–4 day delivery across Europe",
      primaryCta: "Muster anfragen",
      secondaryCta: "Materialien ansehen",
    },
    trustBar: [
      "Lagernde Materialien in Österreich",
      "Europaweite Lieferung",
      "B2B-Spezialist für Automotive-Innenräume",
      "Flexible Bestellmengen ab 1 Meter",
    ],
    materialsSectionTitle: "Serien und Varianten",
    materialsSectionSubtitle: "Materialien",
    materialPlaceholders: {
      image: "Produktbild (Platzhalter)",
      colors: "Farbvarianten (Platzhalter)",
      price: "Preisbereich (Platzhalter)",
      details: "Details ansehen / Muster anfragen",
    },
    materials: [
      {
        id: "black-matte",
        name: "Schwarz Matt",
        series: "Schwarz Serie",
        shortDescription: "Ruhige matte Oberfläche für hochwertige Innenraumkonzepte in Automotive-Projekten.",
        technicalHighlights: ["Stärke: 1.0-1.2 mm", "Abriebfestigkeit: 80k+ Martindale", "Rollenbreite: 140 cm"],
      },
      {
        id: "black-dynamic",
        name: "Schwarz Dynamic",
        series: "Schwarz Serie",
        shortDescription: "Strukturierte Narbung mit kontrollierter Tiefenwirkung für professionelle Verarbeitungsprozesse.",
        technicalHighlights: ["Stärke: 1.1-1.3 mm", "Abriebfestigkeit: 100k+ Martindale", "Rollenbreite: 140 cm"],
      },
      {
        id: "black-suede",
        name: "Schwarz Velours",
        series: "Schwarz Serie",
        shortDescription: "Velours-ähnliche Haptik mit niedriger Reflexion für Premium-Interieurs.",
        technicalHighlights: ["Stärke: 0.9-1.1 mm", "Abriebfestigkeit: 70k+ Martindale", "Rollenbreite: 145 cm"],
      },
      {
        id: "stone-matte",
        name: "Stone Matt",
        series: "Stone Serie",
        shortDescription: "Neutraler Farbton für konsistente Ergebnisse in Sitzen, Paneelen und Verkleidungen.",
        technicalHighlights: ["Stärke: 1.0-1.2 mm", "Abriebfestigkeit: 80k+ Martindale", "Rollenbreite: 140 cm"],
      },
      {
        id: "stone-dynamic",
        name: "Stone Dynamic",
        series: "Stone Serie",
        shortDescription: "Lineare Struktur für moderne Innenraumlayouts und abgestimmte Materialprogramme.",
        technicalHighlights: ["Stärke: 1.1-1.3 mm", "Abriebfestigkeit: 90k+ Martindale", "Rollenbreite: 140 cm"],
      },
      {
        id: "sand-soft",
        name: "Sand Soft",
        series: "Natural Serie",
        shortDescription: "Warme Tonalität und feine Oberflächenwirkung für exklusive Polsteranwendungen.",
        technicalHighlights: ["Stärke: 0.9-1.1 mm", "Abriebfestigkeit: 60k+ Martindale", "Rollenbreite: 145 cm"],
      },
    ],
    applications: {
      title: "Anwendungen",
      intro: "Von Leder Stoffe gelieferte Materialien werden eingesetzt in:",
      items: [
        {
          title: "Pkw-Innenräume",
          description: "Strapazierfähige Materialien für Sitze, Armaturenbereiche und Türverkleidungen.",
        },
        {
          title: "Nutzfahrzeuge und Lkw",
          description: "Pflegeleichte Oberflächen für stark beanspruchte Fahrer- und Kabinenbereiche.",
        },
        {
          title: "Busse und Flottenumbauten",
          description: "Homogene Materiallösungen für langlebige, wiederholbare Ausbaukonzepte.",
        },
        {
          title: "Marine- und Yachtinterieurs",
          description: "Ausgewählte Materialien für hochwertige Innenausstattung in maritimen Projekten.",
        },
        {
          title: "Möbel- und Polsteranwendungen",
          description: "Präzise Oberflächen für professionelle Objektausstattung und Serienpolsterung.",
        },
      ],
    },
    about: {
      title: "Über Leder Stoffe",
      p1: "Leder Stoffe ist ein spezialisierter Materialdistributor mit Sitz in Zell am See, Österreich, und beliefert Automotive-Innenraumspezialisten, Polsterbetriebe, Verarbeiter und Handelspartner in ganz Europa.",
      p2: "Das Portfolio umfasst ein breites Spektrum an PU- und PVC-basierten synthetischen Materialien in unterschiedlichen Oberflächenstrukturen, Farben und technischen Ausführungen - ausgewählt nach Haltbarkeit, Oberflächenkonsistenz und professioneller Verarbeitbarkeit.",
      p3: "Mit lagernder Ware und verlässlicher Logistik bietet Leder Stoffe flexible Bestellmengen ab 1 Meter sowie Lieferzeiten von 2-4 Werktagen innerhalb Europas.",
      download: "PDF-Katalog herunterladen",
      chart: "Farbübersicht ansehen",
      logistics: "Lagerware und schnelle Lieferung in ganz Europa.",
      base: "Standort Österreich, internationale Belieferung von Geschäftspartnern.",
    },
    portfolio: {
      title: "Materialportfolio",
      intro: "Das Produktsortiment umfasst:",
      items: [
        "PU-basierte Automotive-Kunstleder",
        "PVC-basierte beschichtete Materialien",
        "Spezielle Oberflächenfinishes",
        "Ausgewählte Premiummaterialien wie Alcantara®",
      ],
      details: "Detaillierte Spezifikationen, Farbvarianten und Muster sind auf Anfrage erhältlich.",
      legal: "Alcantara® ist eine eingetragene Marke der Alcantara S.p.A.",
    },
    technical: {
      title: "Technische Einordnung",
      text: "Die Materialien werden für professionelle Innenraumanwendungen ausgewählt. Vollständige technische Dokumentationen und Datenblätter sind auf Anfrage verfügbar.",
    },
    principles: {
      title: "Auswahlkriterien",
      intro: "Das Leder Stoffe Portfolio basiert auf vier zentralen Kriterien:",
      items: [
        { title: "Haltbarkeit", text: "Ausgewählt für den langfristigen Einsatz im Innenraum." },
        { title: "Oberflächenpräzision", text: "Konstante Narbung und gleichmäßige Rollenqualität." },
        {
          title: "Verarbeitungskompatibilität",
          text: "Geeignet für branchenübliche Schneid-, Klebe- und Nähprozesse.",
        },
        { title: "Professionelle Ästhetik", text: "Präzise Texturen und konsistente Farbwiedergabe." },
      ],
    },
    conversion: {
      title: "Muster oder Preisinformationen anfragen",
      text: "Kontaktieren Sie uns für Muster, Preise oder technische Dokumentation.",
      sample: "Muster anfragen",
      pricing: "Preis anfragen",
      technical: "Technische Information anfragen",
    },
    contact: {
      title: "Information anfragen",
      intro: "Für Muster, Preisanfragen oder technische Unterlagen kontaktieren Sie Leder Stoffe direkt.",
      shipping: "Versand in ganz Europa",
      minOrder: "Bestellungen ab 1 Meter",
    },
    footer: {
      positioning: "Österreichischer Distributor für Automotive- und Polstermaterialien mit Lagerware und schneller Europa-Lieferung.",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: [
      { id: "home", label: "Home" },
      { id: "materials", label: "Materials" },
      { id: "collections", label: "Applications" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    hero: {
      headline: "",
      subheadline: "",
      trustLine: "In-stock from 1 meter · 2–4 day delivery across Europe",
      primaryCta: "Request Samples",
      secondaryCta: "View Materials",
    },
    trustBar: [
      "In-stock materials in Austria",
      "Europe-wide delivery",
      "B2B specialist for automotive interiors",
      "Flexible order quantities from 1 meter",
    ],
    materialsSectionTitle: "Series and Variants",
    materialsSectionSubtitle: "Materials",
    materialPlaceholders: {
      image: "Product image placeholder",
      colors: "Color variations placeholder",
      price: "Price range placeholder",
      details: "View Details / Request Sample",
    },
    materials: [
      {
        id: "black-matte",
        name: "Black Matte",
        series: "Black Series",
        shortDescription: "Refined matte surface for premium interior concepts across automotive projects.",
        technicalHighlights: ["Thickness: 1.0-1.2 mm", "Abrasion: 80k+ Martindale", "Roll width: 140 cm"],
      },
      {
        id: "black-dynamic",
        name: "Black Dynamic",
        series: "Black Series",
        shortDescription: "Structured grain with controlled depth for professional trimming workflows.",
        technicalHighlights: ["Thickness: 1.1-1.3 mm", "Abrasion: 100k+ Martindale", "Roll width: 140 cm"],
      },
      {
        id: "black-suede",
        name: "Black Suede Touch",
        series: "Black Series",
        shortDescription: "Low-reflection suede-style finish for high-end interior compositions.",
        technicalHighlights: ["Thickness: 0.9-1.1 mm", "Abrasion: 70k+ Martindale", "Roll width: 145 cm"],
      },
      {
        id: "stone-matte",
        name: "Stone Matte",
        series: "Stone Series",
        shortDescription: "Neutral tone selected for consistent use in seats, panels, and trim surfaces.",
        technicalHighlights: ["Thickness: 1.0-1.2 mm", "Abrasion: 80k+ Martindale", "Roll width: 140 cm"],
      },
      {
        id: "stone-dynamic",
        name: "Stone Dynamic",
        series: "Stone Series",
        shortDescription: "Linear texture for contemporary interior layouts and coordinated material programs.",
        technicalHighlights: ["Thickness: 1.1-1.3 mm", "Abrasion: 90k+ Martindale", "Roll width: 140 cm"],
      },
      {
        id: "sand-soft",
        name: "Sand Soft",
        series: "Natural Series",
        shortDescription: "Warm tone and soft finish designed for premium upholstery applications.",
        technicalHighlights: ["Thickness: 0.9-1.1 mm", "Abrasion: 60k+ Martindale", "Roll width: 145 cm"],
      },
    ],
    applications: {
      title: "Applications",
      intro: "Materials supplied by Leder Stoffe are used in:",
      items: [
        {
          title: "Passenger Car Interiors",
          description: "Durable materials for seats, dashboards, and door panels.",
        },
        {
          title: "Commercial Vehicles and Trucks",
          description: "Resilient surfaces for high-use cabins and driver environments.",
        },
        {
          title: "Buses and Fleet Conversions",
          description: "Consistent materials for repeatable interior retrofit programs.",
        },
        {
          title: "Marine and Yacht Interiors",
          description: "Selected finishes for premium marine interior fit-outs.",
        },
        {
          title: "Furniture and Upholstery",
          description: "Professional-grade surfaces for tailored upholstery and furniture projects.",
        },
      ],
    },
    about: {
      title: "About Leder Stoffe",
      p1: "Leder Stoffe is a specialized material distributor based in Zell am See, Austria, supplying automotive interior specialists, upholsterers, converters, and trade partners across Europe.",
      p2: "The portfolio includes a wide range of PU and PVC based synthetic materials in various surface structures, colors, and technical configurations - selected for durability, surface consistency, and professional processing.",
      p3: "With stocked inventory and reliable logistics, Leder Stoffe offers flexible order quantities starting from 1 meter and delivery within 2-4 business days across Europe.",
      download: "Download PDF Catalog",
      chart: "View Color Chart Overview",
      logistics: "Stocked inventory and fast delivery across Europe.",
      base: "Based in Austria, serving trade partners internationally.",
    },
    portfolio: {
      title: "Material Portfolio",
      intro: "The product range includes:",
      items: [
        "PU-based automotive synthetic leather",
        "PVC-based coated materials",
        "Specialty surface finishes",
        "Selected premium materials such as Alcantara®",
      ],
      details: "Detailed specifications, color variations, and samples are available upon request.",
      legal: "Alcantara® is a registered trademark of Alcantara S.p.A.",
    },
    technical: {
      title: "Technical Performance",
      text: "Materials are selected for professional interior applications. Full technical documentation and datasheets are available upon request.",
    },
    principles: {
      title: "Selection Principles",
      intro: "The Leder Stoffe portfolio is structured around four key criteria:",
      items: [
        { title: "Durability", text: "Selected for sustained interior use." },
        { title: "Surface Precision", text: "Consistent grain structure and uniform roll quality." },
        {
          title: "Processing Compatibility",
          text: "Suitable for industry-standard cutting, bonding, and sewing.",
        },
        { title: "Professional Aesthetics", text: "Refined textures and color consistency." },
      ],
    },
    conversion: {
      title: "Request Samples or Pricing Information",
      text: "Contact us for samples, pricing, or technical documentation.",
      sample: "Request Samples",
      pricing: "Request Pricing",
      technical: "Request Technical Information",
    },
    contact: {
      title: "Request Information",
      intro: "For samples, pricing inquiries, or technical documentation, please contact Leder Stoffe directly.",
      shipping: "Shipping across Europe",
      minOrder: "Orders available from 1 meter",
    },
    footer: {
      positioning: "Austrian-based automotive and upholstery material distributor with stocked inventory and fast European delivery.",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: [
      { id: "home", label: "Главная" },
      { id: "materials", label: "Материалы" },
      { id: "collections", label: "Применение" },
      { id: "about", label: "О компании" },
      { id: "contact", label: "Контакты" },
    ],
    hero: {
      headline: "",
      subheadline: "",
      trustLine: "In-stock from 1 meter · 2–4 day delivery across Europe",
      primaryCta: "Запросить образцы",
      secondaryCta: "Смотреть материалы",
    },
    trustBar: [
      "Материалы в наличии в Австрии",
      "Доставка по всей Европе",
      "B2B-специалист по автомобильным интерьерам",
      "Гибкие заказы от 1 метра",
    ],
    materialsSectionTitle: "Серии и варианты",
    materialsSectionSubtitle: "Материалы",
    materialPlaceholders: {
      image: "Плейсхолдер изображения",
      colors: "Плейсхолдер цветовых вариаций",
      price: "Плейсхолдер ценового диапазона",
      details: "Подробнее / Запросить образец",
    },
    materials: [
      {
        id: "black-matte",
        name: "Black Matte",
        series: "Черная серия",
        shortDescription: "Сдержанная матовая поверхность для премиальных автомобильных интерьеров.",
        technicalHighlights: ["Толщина: 1.0-1.2 мм", "Износ: 80k+ Martindale", "Ширина рулона: 140 см"],
      },
      {
        id: "black-dynamic",
        name: "Black Dynamic",
        series: "Черная серия",
        shortDescription: "Структурированная фактура с контролируемой глубиной для профессиональной перетяжки.",
        technicalHighlights: ["Толщина: 1.1-1.3 мм", "Износ: 100k+ Martindale", "Ширина рулона: 140 см"],
      },
      {
        id: "black-suede",
        name: "Black Suede Touch",
        series: "Черная серия",
        shortDescription: "Замшевая фактура с низким отражением для интерьерных решений премиум-класса.",
        technicalHighlights: ["Толщина: 0.9-1.1 мм", "Износ: 70k+ Martindale", "Ширина рулона: 145 см"],
      },
      {
        id: "stone-matte",
        name: "Stone Matte",
        series: "Серия Stone",
        shortDescription: "Нейтральный оттенок для стабильного применения в сиденьях, панелях и вставках.",
        technicalHighlights: ["Толщина: 1.0-1.2 мм", "Износ: 80k+ Martindale", "Ширина рулона: 140 см"],
      },
      {
        id: "stone-dynamic",
        name: "Stone Dynamic",
        series: "Серия Stone",
        shortDescription: "Линейная структура для современных интерьерных проектов и согласованных коллекций.",
        technicalHighlights: ["Толщина: 1.1-1.3 мм", "Износ: 90k+ Martindale", "Ширина рулона: 140 см"],
      },
      {
        id: "sand-soft",
        name: "Sand Soft",
        series: "Серия Natural",
        shortDescription: "Теплый оттенок и мягкий визуальный характер для премиальной обивки.",
        technicalHighlights: ["Толщина: 0.9-1.1 мм", "Износ: 60k+ Martindale", "Ширина рулона: 145 см"],
      },
    ],
    applications: {
      title: "Применение",
      intro: "Материалы Leder Stoffe применяются в:",
      items: [
        {
          title: "Интерьеры легковых автомобилей",
          description: "Износостойкие материалы для сидений, панели приборов и дверных карт.",
        },
        {
          title: "Коммерческий транспорт и грузовики",
          description: "Надежные поверхности для интенсивно используемых кабин и рабочих зон.",
        },
        {
          title: "Автобусы и переоборудование автопарков",
          description: "Стабильные материалы для повторяемых и долговечных интерьерных решений.",
        },
        {
          title: "Морские и яхтенные интерьеры",
          description: "Отобранные материалы для премиальных интерьерных проектов в marine-сегменте.",
        },
        {
          title: "Мебель и обивка",
          description: "Профессиональные поверхности для индивидуальных обивочных и мебельных задач.",
        },
      ],
    },
    about: {
      title: "О Leder Stoffe",
      p1: "Leder Stoffe - специализированный дистрибьютор материалов с офисом в Целль-ам-Зее, Австрия. Компания поставляет материалы для специалистов по автомобильным интерьерам, обивщиков, переработчиков и торговых партнёров по всей Европе.",
      p2: "Портфель включает широкий выбор синтетических материалов на основе PU и PVC с различной структурой поверхности, цветами и техническими конфигурациями - отобранных по критериям износостойкости, стабильности поверхности и профессиональной обработки.",
      p3: "Благодаря складским запасам и надежной логистике Leder Stoffe обеспечивает гибкие объемы поставки от 1 метра и доставку по Европе в течение 2-4 рабочих дней.",
      download: "Скачать PDF-каталог",
      chart: "Открыть карту цветов",
      logistics: "Складские запасы и быстрая доставка по Европе.",
      base: "Базирование в Австрии, поставки международным B2B-партнёрам.",
    },
    portfolio: {
      title: "Портфель материалов",
      intro: "Ассортимент включает:",
      items: [
        "Автомобильные синтетические материалы на основе PU",
        "Покрытые материалы на основе PVC",
        "Специальные варианты финишной поверхности",
        "Отдельные премиальные материалы, включая Alcantara®",
      ],
      details: "Подробные спецификации, цветовые варианты и образцы предоставляются по запросу.",
      legal: "Alcantara® является зарегистрированным товарным знаком Alcantara S.p.A.",
    },
    technical: {
      title: "Технический уровень",
      text: "Материалы отбираются для профессионального применения в интерьерных проектах. Полная техническая документация и datasheets предоставляются по запросу.",
    },
    principles: {
      title: "Критерии отбора",
      intro: "Портфель Leder Stoffe сформирован по четырём ключевым критериям:",
      items: [
        { title: "Долговечность", text: "Отбор для длительной эксплуатации в интерьере." },
        { title: "Точность поверхности", text: "Стабильная структура зерна и равномерное качество рулонов." },
        {
          title: "Совместимость с обработкой",
          text: "Подходит для стандартных процессов резки, склеивания и пошива.",
        },
        { title: "Профессиональная эстетика", text: "Выверенные текстуры и стабильная цветопередача." },
      ],
    },
    conversion: {
      title: "Запросить образцы или информацию по цене",
      text: "Свяжитесь с нами для получения образцов, цен или технической документации.",
      sample: "Запросить образцы",
      pricing: "Запросить цену",
      technical: "Запросить техническую информацию",
    },
    contact: {
      title: "Запрос информации",
      intro: "Для образцов, запросов цен или технической документации свяжитесь с Leder Stoffe напрямую.",
      shipping: "Доставка по Европе",
      minOrder: "Заказы от 1 метра",
    },
    footer: {
      positioning: "Австрийский дистрибьютор материалов для автомобильной и мебельной обивки со складскими запасами и быстрой доставкой по Европе.",
      rights: "Все права защищены.",
    },
  },
};

const languages: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const companyAddress = ["Leder Stoffe", "Kitzsteinhornstraße 63", "5700 Zell am See", "Austria"];
const trustIcons = [Package, Truck, MapPin, ArrowRight, FileText] as const;

export default function CatalogPage({ lang }: { lang: Lang }) {
  const content = contentByLang[lang];

  return (
    <main className="min-h-screen bg-[#111111] text-[#ECEAE4]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">Leder Stoffe</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A774]">Material Distributor | Austria</p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
              {content.nav.map((link) => (
                <a key={link.id} href={`#${link.id}`} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70">
              {languages.map((item, index) => (
                <span key={item.code} className="inline-flex items-center gap-2">
                  <NextLink
                    href={`/${item.code}`}
                    className={`transition ${item.code === lang ? "text-[#C8A774]" : "text-white/70 hover:text-white"}`}
                  >
                    {item.label}
                  </NextLink>
                  {index < languages.length - 1 ? <span className="text-white/30">|</span> : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

        <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#0D0D0D]">
          <div className="relative aspect-[16/9] min-h-[60vh] w-full md:min-h-[72vh]">
            <img
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2400&q=80"
              alt="Premium automotive leather interior with stitching detail"
              className="h-full w-full object-cover [filter:saturate(0.85)_brightness(0.74)_contrast(1.08)_hue-rotate(8deg)]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#111111]" aria-hidden="true" />
            <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.45)]" aria-hidden="true" />

            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16">
                <div className="max-w-3xl space-y-5">
                  <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{content.hero.headline}</h1>
                  {content.hero.subheadline && <p className="max-w-2xl text-base text-white/85 md:text-xl">{content.hero.subheadline}</p>}
                  <p className="text-sm text-white/75 md:text-base">{content.hero.trustLine}</p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href="#contact"
                      className="rounded-full bg-[#C8A774] px-5 py-2.5 text-sm font-medium text-[#111111] transition hover:bg-[#d1b486]"
                    >
                      {content.hero.primaryCta}
                    </a>
                    <a
                      href="#materials"
                      className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/90 transition hover:border-white/50"
                    >
                      {content.hero.secondaryCta}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-3 px-6 py-5 md:grid-cols-2 lg:grid-cols-4">
            {content.trustBar.map((item, index) => {
              const Icon = trustIcons[index] ?? FileText;
              return (
                <div key={item} className="flex items-start gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-3 text-sm text-white/80">
                  <Icon size={15} className="mt-0.5 shrink-0 text-[#C8A774]" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section id="materials" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A774]">{content.materialsSectionSubtitle}</p>
            <h2 className="mt-2 text-3xl font-semibold">{content.materialsSectionTitle}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.materials.map((material) => (
              <article key={material.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/30 text-xs uppercase tracking-[0.16em] text-white/45">
                  {content.materialPlaceholders.image}
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">{material.series}</p>
                  <h3 className="mt-1 text-xl font-medium">{material.name}</h3>
                  <p className="mt-2 text-sm text-white/75">{material.shortDescription}</p>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-white/80">
                  {material.technicalHighlights.slice(0, 3).map((highlight) => (
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>

                <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">{content.materialPlaceholders.colors}</p>
                  <div className="mt-2 flex gap-2">
                    <span className="h-5 w-5 rounded-full border border-white/20 bg-white/10" />
                    <span className="h-5 w-5 rounded-full border border-white/20 bg-white/5" />
                    <span className="h-5 w-5 rounded-full border border-white/20 bg-black/50" />
                    <span className="h-5 w-5 rounded-full border border-white/20 bg-[#6a6a6a]" />
                  </div>
                </div>

                <div className="mt-3 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70">
                  {content.materialPlaceholders.price}
                </div>

                <button className="mt-4 w-full rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:border-white/45">
                  {content.materialPlaceholders.details}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="collections" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h3 className="text-3xl font-semibold">{content.applications.title}</h3>
            <p className="mt-2 text-white/75">{content.applications.intro}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.applications.items.map((application) => (
                <div key={application.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm font-medium text-white">{application.title}</p>
                  <p className="mt-2 text-sm text-white/75">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-3xl font-semibold">{content.about.title}</h3>
              <p className="mt-4 text-white/75">{content.about.p1}</p>
              <p className="mt-4 text-white/75">{content.about.p2}</p>
              <p className="mt-4 text-white/75">{content.about.p3}</p>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/80">
              <div className="flex items-start gap-2 rounded-lg border border-white/10 px-3 py-2">
                <Truck size={15} className="mt-0.5" />
                <p>{content.about.logistics}</p>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-white/10 px-3 py-2">
                <MapPin size={15} className="mt-0.5" />
                <p>{content.about.base}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h3 className="text-3xl font-semibold">{content.portfolio.title}</h3>
            <p className="mt-5 text-white/75">{content.portfolio.intro}</p>
            <ul className="mt-4 space-y-2 text-white/80">
              {content.portfolio.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/75">{content.portfolio.details}</p>
            <p className="mt-3 text-xs text-white/60">{content.portfolio.legal}</p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
            <h3 className="text-3xl font-semibold">{content.conversion.title}</h3>
            <p className="mt-3 max-w-3xl text-white/75">{content.conversion.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-[#C8A774] px-4 py-2 text-sm font-medium text-[#111111]">
                {content.conversion.sample}
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90">
                {content.conversion.pricing}
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90">
                {content.conversion.technical}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black/25">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h3 className="text-3xl font-semibold">{content.contact.title}</h3>
          <p className="mt-4 max-w-3xl text-white/75">{content.contact.intro}</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/80">
            {companyAddress.map((line, index) => (
              <p key={line} className={index === 0 ? "font-medium text-white" : ""}>
                {line}
              </p>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/75">
            <span className="rounded-full border border-white/20 px-3 py-1.5">{content.contact.shipping}</span>
            <span className="rounded-full border border-white/20 px-3 py-1.5">{content.contact.minOrder}</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0C0C0C]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Leder Stoffe - {content.footer.positioning}</p>
          <p>
            © {new Date().getFullYear()} Leder Stoffe. {content.footer.rights}
          </p>
        </div>
      </footer>
    </main>
  );
}
