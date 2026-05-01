import { useState } from 'react';

interface Props {
  currentPath?: string;
}

export default function Navigation({ currentPath = '' }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;
  const withBase = (path: string) => `${baseUrl.replace(/\/?$/, '/')}${path.replace(/^\/+/, '')}`;

  const isActive = (path: string) => {
    if (!currentPath) return false;
    if (path === '') {
      return currentPath === '/' || currentPath === baseUrl || currentPath === baseUrl.replace(/\/$/, '') + '/';
    }
    return currentPath.includes(path.replace(/\/$/, ''));
  };

  const navLinkBase = "font-['DM_Mono'] text-[11px] tracking-[0.08em] uppercase transition-colors";
  const navLinkClass = (path: string) =>
    `${navLinkBase} ${isActive(path) ? 'text-[#F37221]' : 'text-[#8A8D91] hover:text-white'}`;

  const dropdownLinks = [
    { label: 'Pharmaceutical Supply', path: 'pharma/' },
    { label: 'Investment Firms', path: 'investment-firms/' },
    { label: 'Enterprise Console', path: 'enterprise-console/' },
    { label: 'Data Analysis', path: 'data-analysis/' },
    { label: 'Automated Planning', path: 'automated-planning/' },
  ];

  const mobileLinks = [
    ...dropdownLinks,
    { label: 'Company', path: 'about/' },
  ];

  return (
    <>
      <nav className="bg-[#0B0E14] text-[#F37221] fixed top-0 left-0 w-full px-6 h-14 flex justify-between items-center z-50 border-b-2 border-[#1D2026]">
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
          <div className="relative group">
            <button className={`${navLinkBase} text-[#8A8D91] hover:text-white flex items-center gap-2`}>
              EXAMPLE CASES
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            <div className="absolute left-0 mt-0 w-72 bg-[#1D2026] border border-[#363940] hidden group-hover:block z-50">
              {dropdownLinks.map(({ label, path }) => (
                <a key={path} href={withBase(path)} className={`block px-4 py-2 ${navLinkClass(path)} hover:bg-[#363940]`}>
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
          <a href="https://nxt.cerestech.co" className={`${navLinkBase} text-[#8A8D91] hover:text-white`}>
            Login
          </a>
          <a
            href={withBase('book-a-demo/')}
            className="bg-[#F37221] text-[#0B0E14] px-4 py-2 hover:bg-[#ffb691] transition-all active:scale-95 font-['DM_Mono'] text-[11px] tracking-[0.07em] uppercase"
          >
            REQUEST DEMO
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#8A8D91] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-5 h-px bg-[#8A8D91] transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-px bg-[#8A8D91] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0E14] pt-14 overflow-y-auto md:hidden">
          <div className="flex flex-col px-6 py-8 gap-1">
            {mobileLinks.map(({ label, path }) => (
              <a
                key={path}
                href={withBase(path)}
                className={`block py-3 border-b border-[#1D2026] font-['DM_Mono'] text-[12px] tracking-[0.08em] uppercase transition-colors ${isActive(path) ? 'text-[#F37221]' : 'text-[#8A8D91] hover:text-white'}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://nxt.cerestech.co"
              className="block py-3 border-b border-[#1D2026] font-['DM_Mono'] text-[12px] tracking-[0.08em] uppercase text-[#8A8D91] hover:text-white transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
