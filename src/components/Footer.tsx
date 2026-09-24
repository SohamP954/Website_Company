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
    <footer className="bg-warm-900 text-white" style={{ backgroundColor: '#1A1208' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="font-display text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Expolite Exim
              </p>
              <p className="text-gold-400 text-xs tracking-widest uppercase mt-0.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#C8941A' }}>
                Premium Turmeric Exports
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#a89880', fontFamily: 'Outfit, sans-serif' }}>
              Connecting the finest Indian turmeric with global markets. Quality, purity, and trust since our founding.
            </p>
            <div className="mt-6 flex gap-4">
              {['LinkedIn', 'WhatsApp', 'Email'].map((s) => (
                <span
                  key={s}
                  className="text-xs px-3 py-1.5 border rounded cursor-pointer transition-colors hover:border-gold-500 hover:text-gold-400"
                  style={{ borderColor: '#3a2806', fontFamily: 'Outfit, sans-serif', color: '#a89880' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label mb-5">Company</p>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'About Us', page: 'about' as Page },
                { label: 'Products', page: 'products' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => nav(page)}
                    className="text-sm transition-colors hover:text-gold-400"
                    style={{ color: '#a89880', fontFamily: 'Outfit, sans-serif' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="section-label mb-5">Contact</p>
            <ul className="space-y-3 text-sm" style={{ color: '#a89880', fontFamily: 'Outfit, sans-serif' }}>
              <li>
                <span className="block text-white text-xs mb-0.5">Owner</span>
                Prathamesh Chavan
              </li>
              <li>
                <span className="block text-white text-xs mb-0.5">Email</span>
                info@expoliteexim.com
              </li>
              <li>
                <span className="block text-white text-xs mb-0.5">Phone</span>
                +91 98765 43210
              </li>
              <li>
                <span className="block text-white text-xs mb-0.5">Location</span>
                Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: '#3a2806', color: '#6b5030', fontFamily: 'Outfit, sans-serif' }}>
          <p>© {new Date().getFullYear()} Expolite Exim. All rights reserved.</p>
          <p>Crafted with care · Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}
