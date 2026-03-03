export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/6 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span
              className="text-[#C6A75E] text-[0.6rem] tracking-[0.5em] uppercase font-light"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Synthetix
            </span>
            <span className="w-px h-3 bg-[#C6A75E]/25" />
            <span className="text-white/25 text-[0.6rem] tracking-[0.3em] uppercase font-light">
              Automotive Materials
            </span>
          </div>
          <p className="text-white/18 text-[0.6rem] tracking-wide">
            Premium synthetic leather supplier. Materials only.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
              { label: "Materials", href: "#philosophy" },
              { label: "Colors", href: "#colors" },
              { label: "Technical", href: "#technical" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/25 hover:text-[#C6A75E]/70 text-[0.6rem] tracking-[0.25em] uppercase transition-colors duration-300"
              >
                {label}
              </a>
            ))}
        </nav>

        {/* Copyright */}
        <p className="text-white/15 text-[0.6rem] tracking-[0.2em] uppercase whitespace-nowrap">
          &copy; {year} Synthetix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
