const navLinkClass =
  "font-['DM_Mono'] text-[11px] tracking-[0.08em] uppercase text-[#8A8D91] hover:text-white transition-colors";

export default function Navigation() {
  return (
    <nav className="bg-[#0B0E14] text-[#F37221] fixed top-0 left-0 w-full px-6 h-14 flex justify-between items-center z-50 border-b-2 border-[#1D2026]">
      <a href="/" className="flex items-center">
        <img
          alt="Ceres Technology"
          className="h-8 w-auto"
          src="https://lh3.googleusercontent.com/aida/ADBb0uiHWVC-l6diLbBhrXEhZnVxage5Id5PwQ6JSHPa7L6CQ0zuu4vdGcsm9yJmfE9zDw9xLpytU76UkzUEnLBio1PS__PhKf1d0UE3qGV3g356m07_EV4aqPD3AmexYvCvitHt5AsjhpGh7wZLvbEhsE-_BVtb0UfZi89CDnPDi80QggrRUBRXxAgEoCFKeMtxMz6QLMh6BZsTKtjfXd1okRy7r-sc_RUZX-bENTuKxCwrbC443OFhRflUHsN9RzbivuQDTK7ih0EJ"
        />
      </a>

      <div className="hidden md:flex gap-8 items-center">
        {/* Example Cases Dropdown */}
        <div className="relative group">
          <button className={`${navLinkClass} flex items-center gap-2`}>
            EXAMPLE CASES
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </button>
          <div className="absolute left-0 mt-0 w-56 bg-[#1D2026] border border-[#363940] hidden group-hover:block z-50">
            <a href="/pharma" className={`block px-4 py-2 ${navLinkClass} hover:bg-[#363940]`}>
              Pharmaceutical Supply
            </a>
            <a href="/investment-firms" className={`block px-4 py-2 ${navLinkClass} hover:bg-[#363940]`}>
              Investment Firms
            </a>
            <a href="/enterprise-console" className={`block px-4 py-2 ${navLinkClass} hover:bg-[#363940]`}>
              Enterprise Console
            </a>
          </div>
        </div>
        <a href="/integrations" className={navLinkClass}>
          Integrations
        </a>
        <a href="/about" className={navLinkClass}>
          Company
        </a>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://nxt.cerestech.co" className={navLinkClass}>
          Login
        </a>
        <a
          href="/book-a-demo"
          className="bg-[#F37221] text-[#0B0E14] px-4 py-2 hover:bg-[#ffb691] transition-all active:scale-95 font-['DM_Mono'] text-[11px] tracking-[0.14em] uppercase"
        >
          REQUEST DEMO
        </a>
      </div>
    </nav>
  );
}
