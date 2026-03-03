import { notFound } from "next/navigation";
import { type Lang } from "../../_components/catalog-page";
import { Mail, Phone, MapPin, Truck, Package, ArrowLeft } from "lucide-react";
import NextLink from "next/link";

type LocalizedPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const LANGS: Lang[] = ["de", "en", "ru"];

const dictionaries = {
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
};

export default async function ContactPage({ params }: LocalizedPageProps) {
  const { lang } = await params;
  
  if (!LANGS.includes(lang as Lang)) {
    notFound();
  }

  const content = await dictionaries[lang as Lang]();

  return (
    <main className="min-h-screen bg-[#111111] text-[#ECEAE4]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <NextLink href={`/${lang}`} className="flex items-center gap-2 text-sm text-white/70 transition hover:text-[#C8A774]">
            <ArrowLeft size={16} />
            <span>{content.nav.home}</span>
          </NextLink>
          <div className="text-right">
            <p className="text-sm font-semibold tracking-tight">{content.metadata.brand}</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A774]">{content.nav.contact}</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{content.contact.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            {content.contact.intro}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-[#C8A774]/50">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A774]/10 text-[#C8A774]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#C8A774]/60">{content.contact.phoneLabel}</p>
                  <a
                    href={`tel:${content.contact.phoneValue.replace(/\s/g, "")}`}
                    className="mt-1 block text-xl font-medium text-white transition hover:text-[#C8A774]"
                  >
                    {content.contact.phoneValue}
                  </a>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-[#C8A774]/50">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A774]/10 text-[#C8A774]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#C8A774]/60">{content.contact.emailLabel}</p>
                  <a
                    href={`mailto:${content.contact.emailValue}`}
                    className="mt-1 block text-xl font-medium text-white transition hover:text-[#C8A774]"
                  >
                    {content.contact.emailValue}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Info */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A774]/10 text-[#C8A774]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#C8A774]/60">{content.nav.contact}</p>
                  <div className="mt-2 space-y-1 text-lg text-white/90">
                    {content.contact.address.map((line, index) => (
                      <p key={line} className={index === 0 ? "font-semibold text-white" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
                <Truck size={20} className="mb-3 text-[#C8A774]" />
                <p className="text-xs font-medium text-white/80">{content.contact.shipping}</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-6 text-center">
                <Package size={20} className="mb-3 text-[#C8A774]" />
                <p className="text-xs font-medium text-white/80">{content.contact.minOrder}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 border-t border-white/10 bg-[#0C0C0C]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} {content.metadata.brand}. {content.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}
