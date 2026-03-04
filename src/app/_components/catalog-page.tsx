"use client";

import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export type Lang = "de" | "en" | "ru";

type Dictionary = {
  nav: { home: string; portfolio: string; contact: string };
  hero: {
    headline: string;
    subline: string;
    ctaSamples: string;
    ctaContact: string;
    heroAlt: string;
  };
  trustBar: {
    warehouseTitle: string;
    warehouseValue: string;
    leadTimeTitle: string;
    leadTimeValue: string;
    minimumTitle: string;
    minimumValue: string;
  };
  about: {
    headline: string;
    p1: string;
    p2: string;
    p3: string;
  };
  strengths: { title: string; description: string }[];
  portfolio: {
    headline: string;
    description: string;
    note: string;
    ctaSamples: string;
  };
  footer: {
    company: string;
    address: string[];
    email: string;
    phone: string;
    legalNotice: string;
    privacyPolicy: string;
    rights: string;
    requestSamples: string;
  };
  metadata: { brand: string; tagline: string };
};

const languages: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

const portfolioImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=85&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85&fit=crop",
];

/* ────────────────────── Navigation ────────────────────── */

function Navigation({ lang, content }: { lang: Lang; content: Dictionary }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-semibold tracking-tight text-offwhite font-sans">
            {content.metadata.brand}
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-coolgray font-sans">
            {content.metadata.tagline}
          </p>
        </div>

        {/* Desktop nav + lang switcher */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-sm text-offwhite/70 font-sans">
            <a href="#home" className="transition hover:text-offwhite">
              {content.nav.home}
            </a>
            <a href="#portfolio" className="transition hover:text-offwhite">
              {content.nav.portfolio}
            </a>
            <NextLink
              href={`/${lang}/contact`}
              className="transition hover:text-offwhite"
            >
              {content.nav.contact}
            </NextLink>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] font-sans">
            {languages.map((item, index) => (
              <span key={item.code} className="inline-flex items-center gap-1">
                <NextLink
                  href={`/${item.code}`}
                  className={`px-1 py-0.5 transition ${
                    item.code === lang
                      ? "text-forest-light underline underline-offset-4 decoration-forest-light"
                      : "text-offwhite/40 hover:text-offwhite/70"
                  }`}
                >
                  {item.label}
                </NextLink>
                {index < languages.length - 1 && (
                  <span className="text-offwhite/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex items-center justify-center md:hidden text-offwhite"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="border-t border-offwhite/5 bg-navy-deep px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm text-offwhite/70 font-sans">
            <a
              href="#home"
              className="transition hover:text-offwhite"
              onClick={() => setMenuOpen(false)}
            >
              {content.nav.home}
            </a>
            <a
              href="#portfolio"
              className="transition hover:text-offwhite"
              onClick={() => setMenuOpen(false)}
            >
              {content.nav.portfolio}
            </a>
            <NextLink
              href={`/${lang}/contact`}
              className="transition hover:text-offwhite"
              onClick={() => setMenuOpen(false)}
            >
              {content.nav.contact}
            </NextLink>
          </nav>
          <div className="mt-4 flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] font-sans">
            {languages.map((item, index) => (
              <span key={item.code} className="inline-flex items-center gap-1">
                <NextLink
                  href={`/${item.code}`}
                  className={`px-1 py-0.5 transition ${
                    item.code === lang
                      ? "text-forest-light underline underline-offset-4 decoration-forest-light"
                      : "text-offwhite/40 hover:text-offwhite/70"
                  }`}
                >
                  {item.label}
                </NextLink>
                {index < languages.length - 1 && (
                  <span className="text-offwhite/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ────────────────────── Hero Section ────────────────────── */

function HeroSection({ lang, content }: { lang: Lang; content: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep">
      <div className="relative min-h-[70vh] w-full md:min-h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2400&q=80"
          alt={content.hero.heroAlt}
          fill
          className="object-cover animate-slow-zoom [filter:saturate(0.6)_brightness(0.3)_contrast(1.1)]"
          priority
        />
        <div
          className="absolute inset-0 bg-navy-deep/50"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold leading-tight text-offwhite md:text-6xl text-balance font-serif">
                {content.hero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-offwhite/65 md:text-xl font-sans">
                {content.hero.subline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <NextLink
                  href={`/${lang}/contact`}
                  className="inline-flex items-center rounded-sm px-7 py-3.5 text-sm font-medium bg-forest text-offwhite transition hover:bg-forest-light font-sans"
                >
                  {content.hero.ctaSamples}
                </NextLink>
                <a
                  href="#footer-contact"
                  className="inline-flex items-center rounded-sm border border-offwhite/20 px-7 py-3.5 text-sm font-medium text-offwhite/80 transition hover:border-offwhite/40 hover:text-offwhite font-sans"
                >
                  {content.hero.ctaContact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Trust Bar ────────────────────── */

function TrustBar({ content }: { content: Dictionary }) {
  const items = [
    { title: content.trustBar.warehouseTitle, value: content.trustBar.warehouseValue },
    { title: content.trustBar.leadTimeTitle, value: content.trustBar.leadTimeValue },
    { title: content.trustBar.minimumTitle, value: content.trustBar.minimumValue },
  ];

  return (
    <section className="border-b border-warmgray bg-offwhite">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-10 sm:flex-row">
        {items.map((item, index) => (
          <div key={item.title} className="flex items-center">
            <div className="px-8 py-3 text-center">
              <p className="text-xs font-light uppercase tracking-[0.2em] text-navy/50 font-serif">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm font-medium text-navy font-sans">
                {item.value}
              </p>
            </div>
            {index < items.length - 1 && (
              <div className="hidden h-10 w-px bg-warmgray sm:block" aria-hidden="true" />
            )}
            {index < items.length - 1 && (
              <div className="block h-px w-16 bg-warmgray sm:hidden" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────── About Us Section ────────────────────── */

function AboutSection({ content }: { content: Dictionary }) {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-3xl font-bold text-navy md:text-4xl font-serif text-center">
          {content.about.headline}
        </h2>
        <div className="mt-10 flex flex-col gap-5 text-base leading-relaxed text-navy/70 font-sans">
          <p>{content.about.p1}</p>
          <p>{content.about.p2}</p>
          <p>{content.about.p3}</p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Portfolio Section ────────────────────── */

function PortfolioSection({ lang, content }: { lang: Lang; content: Dictionary }) {
  return (
    <section id="portfolio" className="bg-navy-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-offwhite md:text-4xl text-balance font-serif">
            {content.portfolio.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-offwhite/60 font-sans">
            {content.portfolio.description}
          </p>
          <p className="mt-3 text-sm text-offwhite/40 font-sans">
            {content.portfolio.note}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioImages.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt={`Material texture sample ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105 [filter:saturate(0.7)_brightness(0.8)]"
              />
              <div className="absolute inset-0 bg-navy-deep/20 transition group-hover:bg-navy-deep/10" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <NextLink
            href={`/${lang}/contact`}
            className="inline-flex items-center rounded-sm px-7 py-3.5 text-sm font-medium bg-forest text-offwhite transition hover:bg-forest-light font-sans"
          >
            {content.portfolio.ctaSamples}
          </NextLink>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Core Strengths Section ────────────────────── */

function StrengthsSection({ content }: { content: Dictionary }) {
  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.strengths.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center px-4 py-6 text-center"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-navy font-sans">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-navy/50 font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Footer ────────────────────── */

function SiteFooter({ lang, content }: { lang: Lang; content: Dictionary }) {
  return (
    <footer id="footer-contact" className="bg-navy-deep">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <p className="text-base font-semibold text-offwhite font-sans">
              {content.footer.company}
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-coolgray font-sans">
              {content.metadata.tagline}
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin size={15} className="mt-0.5 shrink-0 text-forest-light" />
            <div className="text-sm leading-relaxed text-offwhite/60 font-sans">
              {content.footer.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Mail size={15} className="shrink-0 text-forest-light" />
              <a
                href={`mailto:${content.footer.email}`}
                className="text-sm text-offwhite/60 transition hover:text-offwhite font-sans"
              >
                {content.footer.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={15} className="shrink-0 text-forest-light" />
              <a
                href={`tel:${content.footer.phone.replace(/\s/g, "")}`}
                className="text-sm text-offwhite/60 transition hover:text-offwhite font-sans"
              >
                {content.footer.phone}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2 text-sm text-offwhite/40 font-sans">
            <a href="#" className="transition hover:text-offwhite/70">
              {content.footer.legalNotice}
            </a>
            <a href="#" className="transition hover:text-offwhite/70">
              {content.footer.privacyPolicy}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-offwhite/5 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-offwhite/30 sm:flex-row font-sans">
            <p>
              {"© "}
              {new Date().getFullYear()} {content.footer.company}.{" "}
              {content.footer.rights}
            </p>
            <NextLink
              href={`/${lang}/contact`}
              className="text-xs text-offwhite/40 transition hover:text-offwhite/70 font-sans"
            >
              {content.footer.requestSamples}
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────── Main Page ────────────────────── */

export default function CatalogPage({
  lang,
  dictionary,
}: {
  lang: Lang;
  dictionary: Dictionary;
}) {
  return (
    <main className="min-h-screen bg-offwhite text-navy font-sans">
      <Navigation lang={lang} content={dictionary} />
      <HeroSection lang={lang} content={dictionary} />
      <TrustBar content={dictionary} />
      <AboutSection content={dictionary} />
      <PortfolioSection lang={lang} content={dictionary} />
      <StrengthsSection content={dictionary} />
      <SiteFooter lang={lang} content={dictionary} />
    </main>
  );
}
