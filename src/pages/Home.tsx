type Page = 'home' | 'about' | 'products' | 'contact';

const HERO_IMG = 'https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?w=1920&h=1080&fit=crop&auto=format';
const TURMERIC_POWDER = 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=800&h=700&fit=crop&auto=format';
const SPICE_POUR = 'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=800&h=700&fit=crop&auto=format';
const FARM_WOMAN = 'https://images.unsplash.com/photo-1707811179851-c1f93698ad46?w=900&h=700&fit=crop&auto=format';
const HARVEST = 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=700&h=900&fit=crop&auto=format';
const FIELD = 'https://images.unsplash.com/photo-1622183526757-7aac23115ffb?w=1200&h=700&fit=crop&auto=format';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '40+', label: 'Countries Served' },
  { value: '500MT', label: 'Annual Export Volume' },
  { value: '100%', label: 'Organic Certified' },
];

const features = [
  {
    icon: '✦',
    title: 'Farm-to-Export',
    desc: 'Direct sourcing from curated farms in Maharashtra and Andhra Pradesh ensures maximum freshness and traceability.',
  },
  {
    icon: '✦',
    title: 'Quality Assurance',
    desc: 'Every batch undergoes rigorous lab testing for curcumin content, moisture, and microbial purity before export.',
  },
  {
    icon: '✦',
    title: 'Global Compliance',
    desc: 'FSSAI, ISO 22000, and USDA Organic certified. We meet the strictest international food safety standards.',
  },
  {
    icon: '✦',
    title: 'Custom Packaging',
    desc: 'Tailored packaging solutions — from bulk jute bags to retail-ready vacuum packs — for every market requirement.',
  },
];

const testimonials = [
  {
    quote: 'Expolite Exim consistently delivers the highest curcumin-grade turmeric we have ever sourced. Exceptional quality, every shipment.',
    name: 'Michael Hoffmann',
    role: 'Procurement Director, EuroSpice GmbH',
    country: 'Germany',
  },
  {
    quote: 'Their attention to documentation and compliance made our FDA import process seamless. Highly recommended for US importers.',
    name: 'Sarah Chen',
    role: 'Supply Chain Manager, NutraWell Inc.',
    country: 'United States',
  },
  {
    quote: 'We have been sourcing from Prathamesh and his team for six years. The consistency and communication are unmatched.',
    name: 'Yuki Tanaka',
    role: 'Head of Procurement, Kanso Foods',
    country: 'Japan',
  },
];

interface HomeProps {
  setPage: (page: Page) => void;
}

export default function Home({ setPage }: HomeProps) {
  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-900">
        <img
          src={HERO_IMG}
          alt="Turmeric root, slices and powder on wood"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
          <div className="max-w-2xl">
            <p className="section-label mb-5 text-gold-300" style={{ color: '#FAC830' }}>Expolite Exim — Est. 2009</p>
            <h1
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.08 }}
            >
              The Gold of
              <br />
              <em className="not-italic" style={{ color: '#FAC830' }}>India's Soil</em>
              <br />
              to the World
            </h1>
            <p
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Premium-grade turmeric, sourced responsibly from the finest farms across Maharashtra. Export-ready, certified, and trusted by 40+ nations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => nav('products')}
                className="px-8 py-3.5 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors text-sm tracking-wide"
                style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#C8941A' }}
              >
                Explore Products
              </button>
              <button
                onClick={() => nav('contact')}
                className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded hover:border-white hover:bg-white/10 transition-all text-sm tracking-wide"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Request a Sample
              </button>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gold-500 py-8" style={{ backgroundColor: '#C8941A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <p className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</p>
                <p className="text-xs mt-1 text-white/80 tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="section-label mb-4">Our Story</p>
              <div className="gold-divider mb-6" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-warm-900 leading-snug mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Where Tradition Meets
                <br />
                <em style={{ color: '#C8941A' }}>Global Precision</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                Founded by Prathamesh Chavan, Expolite Exim was built on a simple belief — that India's extraordinary turmeric deserves to reach the world in its purest, most potent form.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                We work directly with farmers in Maharashtra, ensuring fair practices, sustainable cultivation, and uncompromising quality at every step — from root to export.
              </p>
              <button
                onClick={() => nav('about')}
                className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold hover:gap-4 transition-all"
                style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}
              >
                Learn more about us <span>→</span>
              </button>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3 h-96 lg:h-[480px]">
              <div className="rounded-lg overflow-hidden bg-gold-100 row-span-2">
                <img src={HARVEST} alt="Harvesting in India" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gold-100">
                <img src={TURMERIC_POWDER} alt="Premium turmeric powder" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gold-100">
                <img src={FARM_WOMAN} alt="Farm harvest" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / WHY US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Why Choose Us</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2
              className="text-4xl lg:text-5xl font-bold text-warm-900"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              The Expolite Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover p-7 border rounded-lg bg-warm-50"
                style={{ borderColor: '#EAE6DC', backgroundColor: '#FAFAF8' }}
              >
                <span className="text-gold-500 text-xl" style={{ color: '#C8941A' }}>{f.icon}</span>
                <h3
                  className="text-lg font-bold mt-4 mb-3 text-warm-900"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="section-label mb-4">Our Products</p>
              <div className="gold-divider mb-5" />
              <h2
                className="text-4xl font-bold text-warm-900"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Premium Turmeric Range
              </h2>
            </div>
            <button
              onClick={() => nav('products')}
              className="text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors shrink-0"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}
            >
              View all products →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.unsplash.com/photo-1702041295331-840d4d9aa7c9?w=600&h=500&fit=crop&auto=format',
                title: 'Turmeric Finger',
                desc: 'Whole dried rhizomes, sun-dried. High curcumin, 3–7%. Preferred by processors worldwide.',
                tag: 'Bestseller',
              },
              {
                img: TURMERIC_POWDER,
                title: 'Turmeric Powder',
                desc: 'Finely milled from premium fingers. Consistent colour, aroma, and curcumin content.',
                tag: 'High Demand',
              },
              {
                img: SPICE_POUR,
                title: 'Organic Turmeric',
                desc: 'USDA & EU Organic certified. Chemical-free cultivation for health-conscious markets.',
                tag: 'Certified',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="card-hover rounded-xl overflow-hidden bg-white shadow-sm border"
                style={{ borderColor: '#EAE6DC' }}
              >
                <div className="relative h-52 bg-gold-100 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded"
                    style={{ backgroundColor: '#C8941A', color: 'white', fontFamily: 'Outfit, sans-serif' }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                    {p.desc}
                  </p>
                  <button
                    onClick={() => nav('contact')}
                    className="text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}
                  >
                    Enquire now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER / CTA */}
      <section className="relative py-24 overflow-hidden bg-warm-900">
        <img
          src={FIELD}
          alt="Lush turmeric fields"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="section-label mb-4" style={{ color: '#FAC830' }}>Ready to partner with us?</p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-snug"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Start Your Turmeric
            <br />
            Export Journey Today
          </h2>
          <p className="text-white/70 mb-10 max-w-md mx-auto text-base" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Get a personalised quote, request lab reports, or simply ask us anything. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => nav('contact')}
              className="px-8 py-3.5 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors text-sm"
              style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#C8941A' }}
            >
              Contact Us
            </button>
            <button
              onClick={() => nav('products')}
              className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors text-sm"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              View Products
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Trusted Globally</p>
            <div className="gold-divider mx-auto mb-5" />
            <h2
              className="text-4xl font-bold text-warm-900"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              What Our Partners Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 border rounded-xl bg-warm-50 card-hover"
                style={{ borderColor: '#EAE6DC', backgroundColor: '#FAFAF8' }}
              >
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-gold-400 text-sm" style={{ color: '#E8A800' }}>★</span>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed italic mb-6"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#3a2806', fontSize: '0.95rem' }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-semibold text-warm-900" style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>{t.role}</p>
                  <p className="text-xs mt-0.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a7050' }}>{t.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
