export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass =
    "font-nav text-[12px] tracking-[0.06em] uppercase text-slate-400 hover:text-primary transition-colors";

  const sections = [
    {
      title: "Platform",
      links: ["Intelligence", "Risk Modeling", "Integrations", "Security"],
    },
  ];

  return (
    <footer className="bg-[#011E24] pt-24 pb-12 px-8 lg:px-16 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
          {/* Brand & Info Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <img
              alt="Ceres Technology"
              className="h-10 w-auto self-start"
              src="https://lh3.googleusercontent.com/aida/ADBb0uiHWVC-l6diLbBhrXEhZnVxage5Id5PwQ6JSHPa7L6CQ0zuu4vdGcsm9yJmfE9zDw9xLpytU76UkzUEnLBio1PS__PhKf1d0UE3qGV3g356m07_EV4aqPD3AmexYvCvitHt5AsjhpGh7wZLvbEhsE-_BVtb0UfZi89CDnPDi80QggrRUBRXxAgEoCFKeMtxMz6QLMh6BZsTKtjfXd1okRy7r-sc_RUZX-bENTuKxCwrbC443OFhRflUHsN9RzbivuQDTK7ih0EJ"
            />

            <div className="flex flex-col gap-4">
              <p className="font-nav text-[12px] tracking-[0.06em] uppercase text-slate-500 leading-relaxed max-w-[200px]">
                Architecting resilience through predictive intelligence and external signal integration.
              </p>

              <a className="flex items-center gap-2 group" href="#">
                <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center transition-colors group-hover:bg-primary-container">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>

                <span className="font-nav text-[12px] tracking-[0.06em] uppercase text-slate-400 group-hover:text-white transition-colors">
                  LinkedIn Connect
                </span>
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div className="flex flex-col gap-6" key={section.title}>
              <h4 className="font-nav text-[11px] font-medium tracking-[0.08em] uppercase text-white/40 border-b border-white/10 pb-2">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a className={linkClass} href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Resources Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-nav text-[11px] font-medium tracking-[0.08em] uppercase text-white/40 border-b border-white/10 pb-2">
              Resources
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a className={linkClass} href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a className={`${linkClass} flex items-center gap-2`} href="#">
                  API Status
                  <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                </a>
              </li>
              <li>
                <a className={linkClass} href="#">
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Meta */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="font-nav text-[12px] tracking-[0.06em] uppercase text-slate-400">
              © {currentYear} Ceres Technology. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              className="font-nav text-[12px] tracking-[0.06em] uppercase text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-nav text-[12px] tracking-[0.06em] uppercase text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
