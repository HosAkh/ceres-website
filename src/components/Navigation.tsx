import { useEffect, useRef, useState } from 'react';

interface Props {
  currentPath?: string;
}

export default function Navigation({ currentPath = '' }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [casesOpen, setCasesOpen] = useState(false);
  const casesRef = useRef<HTMLDivElement>(null);
  const baseUrl = import.meta.env.BASE_URL;
  const withBase = (path: string) => `${baseUrl.replace(/\/?$/, '/')}${path.replace(/^\/+/, '')}`;

  const isActive = (path: string) => {
    if (!currentPath) return false;
    if (path === '') {
      return currentPath === '/' || currentPath === baseUrl || currentPath === baseUrl.replace(/\/$/, '') + '/';
    }
    return currentPath.includes(path.replace(/\/$/, ''));
  };

  // Close the dropdown on outside click or Escape (keyboard accessibility).
  useEffect(() => {
    if (!casesOpen) return;
    const onDocClick = (e: MouseEvent) => {
      if (casesRef.current && !casesRef.current.contains(e.target as Node)) setCasesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCasesOpen(false);
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [casesOpen]);

  // 12px is the legibility floor for interactive mono text.
  const navLinkBase = "font-nav text-[12px] tracking-[0.08em] uppercase transition-colors";
  const navLinkClass = (path: string) =>
    `${navLinkBase} ${isActive(path) ? 'text-primary' : 'text-outline hover:text-on-surface'}`;

  const dropdownLinks = [
    { label: 'Tier 1 Automotive', path: 'tier-one/' },
    { label: 'Pharmaceutical Supply', path: 'pharma/' },
    { label: 'Hospitals & Health Systems', path: 'hospitals/' },
    { label: 'Consumer Packaged Goods', path: 'cpg/' },
    { label: 'Investment Firms', path: 'investment-firms/' },
  ];

  const mobileLinks = [
    ...dropdownLinks,
    { label: 'Security & Trust', path: 'security-trust/' },
    { label: 'Integrations', path: 'integrations/' },
    { label: 'Company', path: 'about/' },
  ];

  return (
    <>
      <nav
        aria-label="Primary"
        className="bg-surface-container-lowest fixed top-0 left-0 w-full px-6 h-14 flex justify-between items-center z-50 border-b border-outline-variant/30"
      >
        <a href={baseUrl} className="flex items-center">
          <img
            alt="Ceres Technology"
            className="h-8 w-auto"
            width="179"
            height="70"
            src={`${baseUrl}images/logo.png`}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="relative group" ref={casesRef}>
            <button
              className={`${navLinkBase} text-outline hover:text-on-surface flex items-center gap-2`}
              aria-expanded={casesOpen}
              aria-haspopup="true"
              onClick={() => setCasesOpen(!casesOpen)}
            >
              EXAMPLE CASES
              <span aria-hidden="true" className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            <div
              className={`absolute left-0 mt-0 w-72 bg-surface-container-high border border-outline-variant/30 z-50 ${casesOpen ? 'block' : 'hidden group-hover:block'}`}
            >
              {dropdownLinks.map(({ label, path }) => (
                <a
                  key={path}
                  href={withBase(path)}
                  className={`block px-4 py-2.5 ${navLinkClass(path)} hover:bg-surface-container-highest`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <a href={withBase('security-trust/')} className={navLinkClass('security-trust/')}>
            Security &amp; Trust
          </a>
          <a href={withBase('integrations/')} className={navLinkClass('integrations/')}>
            Integrations
          </a>
          <a href={withBase('about/')} className={navLinkClass('about/')}>
            Company
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Inline Login is hidden on phones (it lives in the mobile menu) to keep the bar uncrowded */}
          <a href="https://nxt.cerestech.co" className={`${navLinkBase} text-outline hover:text-on-surface hidden sm:block`}>
            Login
          </a>
          <a
            href={withBase('book-a-demo/')}
            className="bg-primary text-on-primary px-4 py-2 hover:opacity-90 transition-all active:scale-95 font-nav text-[12px] tracking-[0.07em] uppercase whitespace-nowrap"
          >
            REQUEST DEMO
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-outline transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-px bg-outline transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-px bg-outline transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-surface-container-lowest pt-14 overflow-y-auto md:hidden">
          <div className="flex flex-col px-6 py-8 gap-1">
            {mobileLinks.map(({ label, path }) => (
              <a
                key={path}
                href={withBase(path)}
                className={`block py-3 border-b border-outline-variant/30 font-nav text-[12px] tracking-[0.08em] uppercase transition-colors ${isActive(path) ? 'text-primary' : 'text-outline hover:text-on-surface'}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://nxt.cerestech.co"
              className="block py-3 border-b border-outline-variant/30 font-nav text-[12px] tracking-[0.08em] uppercase text-outline hover:text-on-surface transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
