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

export default function LocalizedPage({ params }: LocalizedPageProps) {
  if (!LANGS.includes(params.lang as Lang)) {
    notFound();
  }

  return <CatalogPage lang={params.lang as Lang} />;
}
