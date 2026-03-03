"use client";

import NextLink from "next/link";
import { ArrowRight, MapPin, Package, Truck } from "lucide-react";

export type Lang = "de" | "en" | "ru";

type MaterialCard = {
  id: string;
  name: string;
  series: string;
  shortDescription: string;
  technicalHighlights: string[];
};

type Dictionary = {
  nav: {
    home: string;
    materials: string;
    applications: string;
    about: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    paragraph: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustBar: string[];
  materials: {
    sectionTitle: string;
    sectionSubtitle: string;
    placeholders: {
      image: string;
      colors: string;
      price: string;
      details: string;
    };
    items: MaterialCard[];
  };
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
  };
  contact: {
    title: string;
    intro: string;
    shipping: string;
    minOrder: string;
    address: string[];
  };
  footer: {
    positioning: string;
    rights: string;
  };
  metadata: {
    brand: string;
    distributor: string;
  };
};

const languages: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const trustIcons = [Package, Truck, MapPin, ArrowRight] as const;

export default function CatalogPage({ lang, dictionary }: { lang: Lang; dictionary: Dictionary }) {
  const content = dictionary;

  return (
    <main className="min-h-screen bg-[#111111] text-[#ECEAE4]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-tight">{content.metadata.brand}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A774]">{content.metadata.distributor}</p>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
              <a href="#home" className="transition hover:text-white">{content.nav.home}</a>
              <a href="#materials" className="transition hover:text-white">{content.nav.materials}</a>
              <a href="#collections" className="transition hover:text-white">{content.nav.applications}</a>
              <a href="#about" className="transition hover:text-white">{content.nav.about}</a>
              <a href="#contact" className="transition hover:text-white">{content.nav.contact}</a>
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
            alt="Premium automotive leather interior"
            className="h-full w-full object-cover [filter:saturate(0.85)_brightness(0.74)_contrast(1.08)_hue-rotate(8deg)]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#111111]" aria-hidden="true" />
          <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.45)]" aria-hidden="true" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-6 pb-12 md:pb-16">
              <div className="max-w-3xl space-y-5">
                <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{content.hero.headline}</h1>
                <p className="max-w-2xl text-base text-white/85 md:text-xl">{content.hero.subheadline}</p>
                <p className="text-sm text-white/75 md:text-base">{content.hero.paragraph}</p>
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
            const Icon = trustIcons[index] ?? Package;
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#C8A774]">{content.materials.sectionSubtitle}</p>
          <h2 className="mt-2 text-3xl font-semibold">{content.materials.sectionTitle}</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.materials.items.map((material) => (
            <article key={material.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/30 text-xs uppercase tracking-[0.16em] text-white/45">
                {content.materials.placeholders.image}
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
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">{content.materials.placeholders.colors}</p>
                <div className="mt-2 flex gap-2">
                  <span className="h-5 w-5 rounded-full border border-white/20 bg-white/10" />
                  <span className="h-5 w-5 rounded-full border border-white/20 bg-white/5" />
                  <span className="h-5 w-5 rounded-full border border-white/20 bg-black/50" />
                  <span className="h-5 w-5 rounded-full border border-white/20 bg-[#6a6a6a]" />
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/70">
                {content.materials.placeholders.price}
              </div>

              <button className="mt-4 w-full rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:border-white/45">
                {content.materials.placeholders.details}
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
              <p>{content.contact.shipping}</p>
            </div>
            <div className="flex items-start gap-2 rounded-lg border border-white/10 px-3 py-2">
              <MapPin size={15} className="mt-0.5" />
              <p>{content.contact.address[3]}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black/25">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h3 className="text-3xl font-semibold">{content.contact.title}</h3>
          <p className="mt-4 max-w-3xl text-white/75">{content.contact.intro}</p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/80">
            {content.contact.address.map((line, index) => (
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
          <p>{content.metadata.brand} - {content.footer.positioning}</p>
          <p>
            © {new Date().getFullYear()} {content.metadata.brand}. {content.footer.rights}
          </p>
        </div>
      </footer>
    </main>
  );
}
