import Logo from './Logo';

type Page = 'home' | 'about' | 'products' | 'contact';

interface FooterProps {
  setPage: (page: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-warm-900 text-white" style={{ backgroundColor: '#140E06' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <Logo variant="dark" size="lg" />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mt-3" style={{ color: '#b5a58e', fontFamily: 'Outfit, sans-serif' }}>
              Premier exporters of high-curcumin Indian turmeric. Directly connecting Maharashtra's rich fertile soils with international importers, food processors, and pharmaceutical manufacturers worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918010036756?text=Hello%20Expogold%20Exim,%20I%20am%20interested%20in%20an%20export%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 border rounded-lg transition-all hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10"
                style={{ borderColor: '#3a2806', fontFamily: 'Outfit, sans-serif', color: '#FAC830' }}
              >
                <span>💬</span> WhatsApp Inquiry
              </a>
              <a
                href="mailto:prathameshc753@gmail.com?subject=Export%20Inquiry%20-%20Expogold%20Exim"
                className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 border rounded-lg transition-all hover:border-gold-400 hover:text-gold-300"
                style={{ borderColor: '#3a2806', fontFamily: 'Outfit, sans-serif', color: '#b5a58e' }}
              >
                <span>✉</span> prathameshc753@gmail.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label mb-5" style={{ color: '#FAC830' }}>Navigation</p>
            <ul className="space-y-3">
              {[
                { label: 'Home Overview', page: 'home' as Page },
                { label: 'About Expogold', page: 'about' as Page },
                { label: 'Turmeric Products', page: 'products' as Page },
                { label: 'Send Inquiry / Quote', page: 'contact' as Page },
              ].map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => nav(page)}
                    className="text-sm transition-colors hover:text-gold-300 flex items-center gap-1.5 group"
                    style={{ color: '#b5a58e', fontFamily: 'Outfit, sans-serif' }}
                  >
                    <span className="text-gold-500 transition-transform group-hover:translate-x-1">›</span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="section-label mb-5" style={{ color: '#FAC830' }}>Direct Contact</p>
            <ul className="space-y-3.5 text-sm" style={{ color: '#b5a58e', fontFamily: 'Outfit, sans-serif' }}>
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#FAC830' }}>Owner</span>
                Mr. Prathamesh Chavan
              </li>
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#FAC830' }}>Email</span>
                <a href="mailto:prathameshc753@gmail.com" className="break-words hover:text-gold-300 transition-colors">
                  prathameshc753@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#FAC830' }}>Phone / WhatsApp</span>
                <a href="https://wa.me/918010036756" target="_blank" rel="noopener noreferrer" className="hover:text-gold-300 transition-colors">
                  +91 8010036756
                </a>
              </li>
              <li>
                <span className="block text-white text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#FAC830' }}>Address & Processing Hub</span>
                Sambhaji Nagar, Vita, District Sangli, Maharashtra – 415311, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: '#332310', color: '#8c7659', fontFamily: 'Outfit, sans-serif' }}>
          <p>© {new Date().getFullYear()} Expogold Exim. All rights reserved.</p>
          <p>Exporters of Indian Turmeric · Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
