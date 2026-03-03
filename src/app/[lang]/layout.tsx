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
    title: "Leder Stoffe | Premium Automotive Materialien",
    description: "Spezialisierter Distributor für hochwertige PU- und PVC-Materialien ab Lager Österreich. Europaweite Lieferung in 2-4 Werktagen.",
  },
  en: {
    title: "Leder Stoffe | Premium Automotive Materials",
    description: "Specialized distributor of high-quality PU and PVC materials based in Austria. Fast delivery across Europe.",
  },
  ru: {
    title: "Leder Stoffe | Премиальные автомобильные материалы",
    description: "Специализированный дистрибьютор высококачественных материалов PU и PVC со склада в Австрии. Доставка по всей Европе.",
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
