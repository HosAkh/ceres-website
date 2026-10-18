export default function Footer() {
  const currentYear = new Date().getFullYear();
  const baseUrl = import.meta.env.BASE_URL;
  const withBase = (path: string) => `${baseUrl.replace(/\/?$/, '/')}${path.replace(/^\/+/, '')}`;

  // text-secondary (#b5cacf) on surface-cta (#011e24) = 9.8:1 — replaces
  // slate-400/500 which failed or sat near the 4.5:1 AA threshold.
  const linkClass =
    "font-nav text-[12px] tracking-[0.06em] uppercase text-secondary hover:text-primary transition-colors";

  const sections = [
    {
      title: "Platform",
      links: [
        { label: "Integrations", path: "integrations/" },
        { label: "Security & Trust", path: "security-trust/" },
        { label: "Book a Demo", path: "book-a-demo/" },
      ],
    },
    {
      title: "Example Cases",
      links: [
        { label: "Tier 1 Automotive", path: "tier-one/" },
        { label: "Pharmaceutical Supply", path: "pharma/" },
        { label: "Hospitals & Health Systems", path: "hospitals/" },
        { label: "Consumer Packaged Goods", path: "cpg/" },
        { label: "Investment Firms", path: "investment-firms/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", path: "about/" },
      ],
    },
  ];

  return (
    <footer className="bg-surface-cta pt-24 pb-12 px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand & Info Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <img
              alt="Ceres Technology"
              className="h-10 w-auto self-start"
              width="179"
              height="70"
              src={`${baseUrl}images/logo.png`}
            />

            <div className="flex flex-col gap-4">
              <p className="font-nav text-[12px] tracking-[0.06em] uppercase text-secondary leading-relaxed max-w-[220px]">
                The AI planning layer between your ERP and your decisions.
              </p>

              <a
                className="flex items-center gap-2 group"
                href="https://www.linkedin.com/company/ceres-technology/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ceres Technology on LinkedIn (opens in a new tab)"
              >
                <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center transition-colors group-hover:bg-primary-container">
                  <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>

                <span className="font-nav text-[12px] tracking-[0.06em] uppercase text-secondary group-hover:text-white transition-colors">
                  LinkedIn Connect
                </span>
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div className="flex flex-col gap-6" key={section.title}>
              <h3 className="font-nav text-[12px] font-medium tracking-[0.08em] uppercase text-secondary border-b border-white/10 pb-2">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a className={linkClass} href={withBase(link.path)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Meta */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="font-nav text-[12px] tracking-[0.06em] uppercase text-secondary">
              © {currentYear} Ceres Technology. All rights reserved.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
