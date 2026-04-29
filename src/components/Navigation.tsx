import { useState } from 'react';

const navLinkClass =
  "font-['DM_Mono'] text-[11px] tracking-[0.08em] uppercase text-[#8A8D91] hover:text-white transition-colors";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;
  const withBase = (path: string) => `${baseUrl.replace(/\/?$/, '/')}${path.replace(/^\/+/, '')}`;

  const navLinks = [
    { label: 'Home', path: '' },
    { label: 'About Us', path: 'about/' },
    { label: 'Integrations', path: 'integrations/' },
    { label: 'Security & Trust', path: 'security-trust/' },
    { label: 'Pharmaceutical Supply', path: 'pharma/' },
    { label: 'Investment Firms', path: 'investment-firms/' },
    { label: 'Enterprise Console', path: 'enterprise-console/' },
    { label: 'Data Analysis', path: 'data-analysis/' },
    { label: 'Automated Planning', path: 'automated-planning/' },
    { label: 'Contact Us', path: 'book-a-demo/' },
  ];

  return (
    <>
      <nav className="bg-[#0B0E14] text-[#F37221] fixed top-0 left-0 w-full px-6 h-14 flex justify-between items-center z-50 border-b-2 border-[#1D2026]">
        <a href={baseUrl} className="flex items-center">
          <img
            alt="Ceres Technology"
            className="h-8 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0uiHWVC-l6diLbBhrXEhZnVxage5Id5PwQ6JSHPa7L6CQ0zuu4vdGcsm9yJmfE9zDw9xLpytU76UkzUEnLBio1PS__PhKf1d0UE3qGV3g356m07_EV4aqPD3AmexYvCvitHt5AsjhpGh7wZLvbEhsE-_BVtb0UfZi89CDnPDi80QggrRUBRXxAgEoCFKeMtxMz6QLMh6BZsTKtjfXd1okRy7r-sc_RUZX-bENTuKxCwrbC443OFhRflUHsN9RzbivuQDTK7ih0EJ"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="relative group">
            <button className={`${navLinkClass} flex items-center gap-2`}>
              EXAMPLE CASES
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            <div className="absolute left-0 mt-0 w-72 bg-[#1D2026] border border-[#363940] hidden group-hover:block z-50">
              {navLinks.map(({ label, path }) => (
                <a key={path} href={withBase(path)} className={`block px-4 py-2 ${navLinkClass} hover:bg-[#363940]`}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <a href={withBase('integrations/')} className={navLinkClass}>
            Integrations
          </a>
          <a href={withBase('about/')} className={navLinkClass}>
            Company
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://nxt.cerestech.co" className={navLinkClass}>
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
            {navLinks.map(({ label, path }) => (
              <a
                key={path}
                href={withBase(path)}
                className="block py-3 border-b border-[#1D2026] font-['DM_Mono'] text-[12px] tracking-[0.08em] uppercase text-[#8A8D91] hover:text-white transition-colors"
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
