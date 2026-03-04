"use client";

import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Clock,
  Ruler,
  Truck,
  MessageCircle,
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
  positioning: { line1: string; line2: string };
  strengths: { title: string; description: string }[];
  portfolio: {
    headline: string;
    description: string;
    note: string;
    ctaSamples: string;
  };
  cta: {
    headline: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };
  europe: { line1: string; line2: string };
  footer: {
    company: string;
    address: string[];
    email: string;
    phone: string;
    legalNotice: string;
    privacyPolicy: string;
    rights: string;
  };
  metadata: { brand: string; tagline: string };
};

const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

const strengthIcons = [Clock, Ruler, Truck, MessageCircle] as const;

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
    <header className="sticky top-0 z-40 border-b border-navy-light/30 bg-navy-deep/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-semibold tracking-tight text-offwhite font-sans">
            {content.metadata.brand}
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-coolgray">
            {content.metadata.tagline}
          </p>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6 text-sm text-offwhite/80 font-sans">
            <a href="#home" className="transition hover:text-steel-light">
              {content.nav.home}
            </a>
            <a href="#portfolio" className="transition hover:text-steel-light">
              {content.nav.portfolio}
            </a>
            <a href="#contact" className="transition hover:text-steel-light">
              {content.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-1.5 text-xs font-sans">
            {languages.map((item, index) => (
              <span key={item.code} className="inline-flex items-center gap-1.5">
                <NextLink
                  href={`/${item.code}`}
                  className={`px-1 py-0.5 transition ${
                    item.code === lang
                      ? "text-steel-light font-medium"
                      : "text-offwhite/50 hover:text-offwhite"
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
        <div className="border-t border-navy-light/20 bg-navy-deep px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm text-offwhite/80 font-sans">
            <a
              href="#home"
              className="transition hover:text-steel-light"
              onClick={() => setMenuOpen(false)}
            >
              {content.nav.home}
            </a>
            <a
              href="#portfolio"
              className="transition hover:text-steel-light"
              onClick={() => setMenuOpen(false)}
            >
              {content.nav.portfolio}
            </a>
            <a
              href="#contact"
              className="transition hover:text-steel-light"
              onClick={() => setMenuOpen(false)}
            >
              {content.nav.contact}
            </a>
          </nav>
          <div className="mt-4 flex items-center gap-2 text-xs font-sans">
            {languages.map((item, index) => (
              <span key={item.code} className="inline-flex items-center gap-1.5">
                <NextLink
                  href={`/${item.code}`}
                  className={`transition ${
                    item.code === lang
                      ? "text-steel-light font-medium"
                      : "text-offwhite/50 hover:text-offwhite"
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

function HeroSection({ content }: { content: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-deep">
      <div className="relative min-h-[70vh] w-full md:min-h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2400&q=80"
          alt={content.hero.heroAlt}
          fill
          className="object-cover animate-slow-zoom [filter:saturate(0.7)_brightness(0.35)_contrast(1.1)]"
          priority
        />
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0z' fill='%23fff' fill-opacity='.3'/%3E%3C/svg%3E\")",
            backgroundSize: "4px 4px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-navy-deep/50"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold leading-tight text-offwhite md:text-6xl text-balance font-sans">
                {content.hero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-offwhite/75 md:text-xl font-sans">
                {content.hero.subline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded px-7 py-3.5 text-sm font-semibold bg-steel text-offwhite transition hover:bg-steel-light font-sans"
                >
                  {content.hero.ctaSamples}
                </a>
                <a
                  href="#footer-contact"
                  className="inline-flex items-center rounded border border-offwhite/25 px-7 py-3.5 text-sm font-medium text-offwhite/90 transition hover:border-offwhite/50 hover:text-offwhite font-sans"
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

/* ────────────────────── Positioning Section ────────────────────── */

function PositioningSection({ content }: { content: Dictionary }) {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg leading-relaxed text-navy md:text-xl font-sans">
          {content.positioning.line1}
        </p>
        <p className="mt-4 text-base text-navy/60 font-sans">
          {content.positioning.line2}
        </p>
      </div>
    </section>
  );
}

/* ────────────────────── Core Strengths Section ────────────────────── */

function StrengthsSection({ content }: { content: Dictionary }) {
  return (
    <section className="border-y border-warmgray bg-offwhite py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.strengths.map((item, index) => {
            const Icon = strengthIcons[index] ?? Clock;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded border border-warmgray bg-card px-6 py-8 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-navy/5 text-steel">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-navy font-sans">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy/60 font-sans">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Portfolio Section ────────────────────── */

function PortfolioSection({ content }: { content: Dictionary }) {
  return (
    <section id="portfolio" className="bg-navy-deep py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold text-offwhite md:text-4xl text-balance font-sans">
            {content.portfolio.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-offwhite/70 font-sans">
            {content.portfolio.description}
          </p>
          <p className="mt-3 text-sm text-steel-light font-sans">
            {content.portfolio.note}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioImages.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded"
            >
              <Image
                src={src}
                alt={`Material texture sample ${index + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105 [filter:saturate(0.8)_brightness(0.85)]"
              />
              <div className="absolute inset-0 bg-navy-deep/20 transition group-hover:bg-navy-deep/10" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded px-7 py-3.5 text-sm font-semibold bg-steel text-offwhite transition hover:bg-steel-light font-sans"
          >
            {content.portfolio.ctaSamples}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── CTA / Sample Request Form ────────────────────── */

function CtaSection({ content }: { content: Dictionary }) {
  return (
    <section id="contact" className="bg-offwhite py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center text-3xl font-bold text-navy md:text-4xl text-balance font-sans">
          {content.cta.headline}
        </h2>

        <form
          className="mt-12 flex flex-col gap-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-wide text-navy/70 font-sans"
              >
                {content.cta.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                placeholder={content.cta.namePlaceholder}
                className="rounded border border-warmgray bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel font-sans"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="company"
                className="text-xs font-medium uppercase tracking-wide text-navy/70 font-sans"
              >
                {content.cta.companyLabel}
              </label>
              <input
                id="company"
                type="text"
                placeholder={content.cta.companyPlaceholder}
                className="rounded border border-warmgray bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel font-sans"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wide text-navy/70 font-sans"
            >
              {content.cta.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              placeholder={content.cta.emailPlaceholder}
              className="rounded border border-warmgray bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel font-sans"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium uppercase tracking-wide text-navy/70 font-sans"
            >
              {content.cta.messageLabel}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={content.cta.messagePlaceholder}
              className="rounded border border-warmgray bg-card px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-steel focus:outline-none focus:ring-1 focus:ring-steel resize-none font-sans"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded bg-steel px-7 py-3.5 text-sm font-semibold text-offwhite transition hover:bg-steel-light font-sans"
          >
            {content.cta.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

/* ────────────────────── European Presence Section ────────────────────── */

function EuropeSection({ content }: { content: Dictionary }) {
  return (
    <section className="border-y border-warmgray bg-warmgray/50 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg font-medium text-navy font-sans">
          {content.europe.line1}
        </p>
        <p className="mt-3 text-base text-navy/60 font-sans">
          {content.europe.line2}
        </p>
      </div>
    </section>
  );
}

/* ────────────────────── Footer ────────────────────── */

function SiteFooter({ content }: { content: Dictionary }) {
  return (
    <footer id="footer-contact" className="bg-navy-deep border-t border-navy-light/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <p className="text-base font-semibold text-offwhite font-sans">
              {content.footer.company}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-coolgray font-sans">
              {content.metadata.tagline}
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-steel" />
            <div className="text-sm leading-relaxed text-offwhite/70 font-sans">
              {content.footer.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-steel" />
              <a
                href={`mailto:${content.footer.email}`}
                className="text-sm text-offwhite/70 transition hover:text-steel-light font-sans"
              >
                {content.footer.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-steel" />
              <a
                href={`tel:${content.footer.phone.replace(/\s/g, "")}`}
                className="text-sm text-offwhite/70 transition hover:text-steel-light font-sans"
              >
                {content.footer.phone}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2 text-sm text-offwhite/50 font-sans">
            <a href="#" className="transition hover:text-offwhite/80">
              {content.footer.legalNotice}
            </a>
            <a href="#" className="transition hover:text-offwhite/80">
              {content.footer.privacyPolicy}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-light/15 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-offwhite/40 sm:flex-row font-sans">
            <p>
              {"© "}
              {new Date().getFullYear()} {content.footer.company}.{" "}
              {content.footer.rights}
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="transition hover:text-steel-light"
              >
                {content.cta.submit}
              </a>
            </div>
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
      <HeroSection content={dictionary} />
      <PositioningSection content={dictionary} />
      <StrengthsSection content={dictionary} />
      <PortfolioSection content={dictionary} />
      <CtaSection content={dictionary} />
      <EuropeSection content={dictionary} />
      <SiteFooter content={dictionary} />
    </main>
  );
}
