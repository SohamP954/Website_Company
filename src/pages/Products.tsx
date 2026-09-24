type Page = 'home' | 'about' | 'products' | 'contact';

const HERO = 'https://images.unsplash.com/photo-1606951444141-e5533feb55be?w=1920&h=700&fit=crop&auto=format';

const products = [
  {
    id: 1,
    title: 'Turmeric Finger (Whole)',
    category: 'Whole Spice',
    img: 'https://images.unsplash.com/photo-1768729341078-9da4e0ea959e?w=700&h=560&fit=crop&auto=format',
    curcumin: '3–7%',
    moisture: '≤10%',
    form: 'Whole dried rhizome',
    desc: 'Our premium turmeric fingers are sun-dried whole rhizomes sourced from Sangli and Nizamabad — the heartland of Indian turmeric production. Rich amber colour, intense aroma.',
    certs: ['FSSAI', 'ISO 22000', 'APEDA'],
    tag: 'Bestseller',
  },
  {
    id: 2,
    title: 'Turmeric Powder',
    category: 'Ground Spice',
    img: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=700&h=560&fit=crop&auto=format',
    curcumin: '3–5%',
    moisture: '≤8%',
    form: 'Fine / coarse milled',
    desc: 'Stone-milled from select turmeric fingers, our powder delivers consistent colour (60–65 ASTA units), superior curcumin, and clean flavour. Available in various mesh sizes.',
    certs: ['FSSAI', 'ISO 22000', 'APEDA', 'Halal'],
    tag: 'High Demand',
  },
  {
    id: 3,
    title: 'Organic Turmeric Finger',
    category: 'Organic',
    img: 'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=700&h=560&fit=crop&auto=format',
    curcumin: '4–6%',
    moisture: '≤10%',
    form: 'Whole dried rhizome',
    desc: 'Cultivated without synthetic inputs. Certified by USDA NOP and EU Organic. Traceable from seed to shipment through our farm partner registry.',
    certs: ['USDA Organic', 'EU Organic', 'FSSAI', 'ISO 22000'],
    tag: 'Certified Organic',
  },
  {
    id: 4,
    title: 'Organic Turmeric Powder',
    category: 'Organic',
    img: 'https://images.unsplash.com/photo-1702041295331-840d4d9aa7c9?w=700&h=560&fit=crop&auto=format',
    curcumin: '3–5%',
    moisture: '≤8%',
    form: 'Fine milled',
    desc: 'Milled from USDA and EU certified organic fingers. Zero pesticide residue, non-irradiated. Ideal for nutraceutical, supplement, and premium food brands.',
    certs: ['USDA Organic', 'EU Organic', 'Halal', 'Kosher'],
    tag: 'Premium',
  },
  {
    id: 5,
    title: 'High-Curcumin Powder',
    category: 'Specialty',
    img: 'https://images.unsplash.com/photo-1606951444141-e5533feb55be?w=700&h=560&fit=crop&auto=format',
    curcumin: '5–8%',
    moisture: '≤7%',
    form: 'Extra fine milled',
    desc: 'Specially cultivated and selected for nutraceutical and extract applications. Curcumin content guaranteed at 5% minimum per batch, with COA documentation.',
    certs: ['ISO 22000', 'FSSAI', 'Lab Certified'],
    tag: 'Specialty',
  },
  {
    id: 6,
    title: 'Turmeric Extract (Curcumin 95%)',
    category: 'Extract',
    img: 'https://images.unsplash.com/photo-1606914469030-681790351049?w=700&h=560&fit=crop&auto=format',
    curcumin: '95%',
    moisture: '≤5%',
    form: 'Standardised extract',
    desc: 'Pharmaceutical-grade curcuminoid extract standardised to 95%. Ideal for capsules, tablets, and functional food applications. Full COA and COO provided.',
    certs: ['GMP', 'ISO 22000', 'Halal', 'Kosher'],
    tag: 'Pharma Grade',
  },
];

const certs = [
  { name: 'FSSAI', desc: 'Food Safety & Standards Authority of India' },
  { name: 'ISO 22000', desc: 'International Food Safety Management' },
  { name: 'APEDA', desc: 'Agricultural & Processed Food Products Export' },
  { name: 'USDA Organic', desc: 'United States Dept. of Agriculture Certified' },
  { name: 'EU Organic', desc: 'European Union Organic Certification' },
  { name: 'Halal', desc: 'Halal Certification for Muslim markets' },
];

interface ProductsProps {
  setPage: (page: Page) => void;
}

export default function Products({ setPage }: ProductsProps) {
  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-80 lg:h-[420px] flex items-end overflow-hidden bg-warm-900">
        <img src={HERO} alt="Turmeric powder" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.9) 0%, rgba(26,18,8,0.3) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <p className="section-label mb-3" style={{ color: '#FAC830' }}>What We Offer</p>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Product Range
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}
            >
              From whole fingers to pharmaceutical-grade extracts, every Expolite Exim product is backed by third-party lab testing, full batch documentation, and our commitment to purity. MOQ and packaging are fully customisable to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="pb-24 pt-4 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                className="card-hover rounded-xl overflow-hidden bg-white shadow-sm border flex flex-col"
                style={{ borderColor: '#EAE6DC' }}
              >
                <div className="relative h-52 bg-gold-100 overflow-hidden shrink-0">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded"
                    style={{ backgroundColor: '#C8941A', color: 'white', fontFamily: 'Outfit, sans-serif' }}
                  >
                    {p.tag}
                  </span>
                  <span
                    className="absolute top-3 right-3 text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#7D590E', fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                  >
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}
                  >
                    {p.desc}
                  </p>

                  {/* Specs */}
                  <div
                    className="grid grid-cols-3 gap-2 p-3 rounded-lg mb-5 text-center"
                    style={{ backgroundColor: '#FEF3D0' }}
                  >
                    <div>
                      <p className="text-xs font-bold" style={{ color: '#A67714', fontFamily: 'Outfit, sans-serif' }}>Curcumin</p>
                      <p className="text-xs mt-0.5" style={{ color: '#5a4030', fontFamily: 'Outfit, sans-serif' }}>{p.curcumin}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold" style={{ color: '#A67714', fontFamily: 'Outfit, sans-serif' }}>Moisture</p>
                      <p className="text-xs mt-0.5" style={{ color: '#5a4030', fontFamily: 'Outfit, sans-serif' }}>{p.moisture}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold" style={{ color: '#A67714', fontFamily: 'Outfit, sans-serif' }}>Form</p>
                      <p className="text-xs mt-0.5" style={{ color: '#5a4030', fontFamily: 'Outfit, sans-serif' }}>{p.form}</p>
                    </div>
                  </div>

                  {/* Certs */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.certs.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2 py-0.5 rounded border"
                        style={{ borderColor: '#EAE6DC', color: '#7D590E', fontFamily: 'Outfit, sans-serif', backgroundColor: 'white' }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => nav('contact')}
                    className="mt-auto w-full py-2.5 text-sm font-semibold text-white rounded hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#C8941A', fontFamily: 'Outfit, sans-serif' }}
                  >
                    Request Quote / Sample
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Compliance</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              Our Certifications
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-sm leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}
            >
              Every product we export is compliant with the destination country's food safety regulations. We maintain full documentation for customs, lab reports, and traceability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certs.map((c) => (
              <div
                key={c.name}
                className="card-hover text-center p-5 rounded-xl border"
                style={{ borderColor: '#EAE6DC' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xs font-bold"
                  style={{ backgroundColor: '#C8941A', fontFamily: 'Outfit, sans-serif' }}
                >
                  ✓
                </div>
                <p className="text-sm font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}>{c.name}</p>
                <p className="text-xs leading-tight" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING & MOQ */}
      <section className="py-16 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bulk Packaging',
                desc: '25 kg, 50 kg HDPE bags, jute bags, or PP woven bags. Suitable for processors and distributors.',
                icon: '📦',
              },
              {
                title: 'Retail Ready',
                desc: 'Vacuum-sealed pouches from 50g to 5kg with custom label printing for your brand.',
                icon: '🏷️',
              },
              {
                title: 'Custom MOQ',
                desc: 'Starting from 500 kg for trial orders. No rigid minimums for long-term partnerships.',
                icon: '🤝',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-xl border bg-white"
                style={{ borderColor: '#EAE6DC' }}
              >
                <span className="text-2xl">{item.icon}</span>
                <h3
                  className="text-lg font-bold mt-4 mb-2"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
