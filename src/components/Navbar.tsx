import { useState, useEffect } from 'react';
import Logo from './Logo';

type Page = 'home' | 'about' | 'products' | 'contact';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Products', page: 'products' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    setPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('home')}
          className="focus:outline-none text-left"
          aria-label="Expogold Exim Home"
        >
          <Logo variant={scrolled || menuOpen ? 'light' : 'dark'} size="md" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                currentPage === page ? 'active' : ''
              } ${
                scrolled || menuOpen
                  ? currentPage === page
                    ? 'text-gold-600'
                    : 'text-warm-900 hover:text-gold-600'
                  : currentPage === page
                  ? 'text-gold-300'
                  : 'text-white hover:text-gold-300'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="ml-2 px-5 py-2 bg-gold-500 text-white text-sm font-semibold rounded hover:bg-gold-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 ${
            scrolled || menuOpen ? 'text-warm-900' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-warm-200 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`text-left text-sm font-medium py-1 transition-colors ${
                currentPage === page ? 'text-gold-600' : 'text-warm-900 hover:text-gold-600'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="w-full py-2.5 bg-gold-500 text-white text-sm font-semibold rounded hover:bg-gold-600 transition-colors"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
}
