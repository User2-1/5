import { notFound } from "next/navigation";
import CatalogPage, { type Lang } from "../_components/catalog-page";

type LocalizedPageProps = {
  params: {
    lang: string;
  };
};

const LANGS: Lang[] = ["de", "en", "ru"];

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) {
    notFound();
  }

  return <CatalogPage lang={lang as Lang} />;
}
