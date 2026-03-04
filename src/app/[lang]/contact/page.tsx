import { notFound } from "next/navigation";
import { redirect } from "next/navigation";
import { type Lang } from "../../_components/catalog-page";

type LocalizedPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const LANGS: Lang[] = ["de", "en", "ru"];

export default async function ContactPage({ params }: LocalizedPageProps) {
  const { lang } = await params;

  if (!LANGS.includes(lang as Lang)) {
    notFound();
  }

  // Redirect to the main page contact section
  redirect(`/${lang}#contact`);
}
