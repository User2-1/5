import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Lang } from "../_components/catalog-page";

type LocalizedLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

const LANGS: Lang[] = ["de", "en", "ru"];

const metadataByLang: Record<Lang, Metadata> = {
  de: {
    title: "Leder Stoffe | Hochwertige Materialien für Automotive & Polsteranwendungen",
    description:
      "Leder Stoffe ist ein österreichischer Distributor für PU- und PVC-basierte Materialien für Automotive, Marine und Polsteranwendungen - ab Lager, ab 1 Meter, europaweit in 2-4 Tagen lieferbar.",
  },
  en: {
    title: "Leder Stoffe | Premium Automotive & Upholstery Materials",
    description:
      "Leder Stoffe is an Austrian distributor of PU and PVC based materials for automotive, marine and upholstery applications, available from stock from 1 meter with 2-4 day delivery across Europe.",
  },
  ru: {
    title: "Leder Stoffe | Премиальные материалы для автомобильных и мебельных интерьеров",
    description:
      "Leder Stoffe — австрийский дистрибьютор материалов на основе PU и PVC для автомобильных, морских и мебельных интерьеров: поставка со склада, заказ от 1 метра, доставка по Европе за 2-4 рабочих дня.",
  },
};

export async function generateMetadata({ params }: Omit<LocalizedLayoutProps, "children">): Promise<Metadata> {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) {
    notFound();
  }

  return metadataByLang[lang as Lang];
}

export default function LocalizedLayout({ children }: LocalizedLayoutProps) {
  return children;
}
