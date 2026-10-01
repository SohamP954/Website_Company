import { publicImage } from '../utils/publicImage';

type Page = 'home' | 'about' | 'products' | 'contact';

interface ProductsProps {
  setPage: (page: Page) => void;
}

const PRODUCTS_DATA = [
  {
    id: '01',
    category: 'PROCESSED SPICE / FOOD GRADE',
    title: 'TURMERIC POWDER',
    origin: 'SANGLI, MAHARASHTRA, INDIA',
    desc: 'A vibrant golden-yellow spice made from the dried and ground rhizomes of the Curcuma longa plant, a member of the ginger family — sourced from Sangli, Maharashtra.',
    image: publicImage('turmeric_hero_slide1_1790762582982.jpg'),
    specs: [
      { label: 'GRADES', value: 'Curcumin 2–5% min. · Premium 5%+' },
      { label: 'MESH SIZE', value: '60–100 mesh (Fine / Ultra-Fine)' },
      { label: 'PACKAGING', value: '100 g – 20 kg, or buyer requirement' },
      { label: 'MOQ', value: '1 container (20ft FCL / 18–20 MT)' },
      { label: 'HS CODE', value: '0910 30 30' },
    ],
    features: [
      'Indian origin',
      'Sangli sourcing',
      'Curcumin-based grades',
      'Multiple mesh options',
      'Flexible packaging',
      'Private-label options',
    ],
  },
  {
    id: '02',
    category: 'WHOLE AGRICULTURAL SPICE',
    title: 'FINGER TURMERIC',
    origin: 'SANGLI, MAHARASHTRA, INDIA',
    desc: 'Whole sun-dried and double-polished rhizomes of the Curcuma longa plant, carefully selected and graded from premier harvests in Sangli, Maharashtra for maximum curcumin retention, density, and authentic aroma.',
    image: publicImage('turmeric_hero_slide3_1790762998825.jpg'),
    specs: [
      { label: 'GRADES', value: 'Salem · Nizamabad · Rajapore (Curcumin 3–7%)' },
      { label: 'PROCESSING', value: 'Double Polished / Single Polished / Raw Unpolished' },
      { label: 'PACKAGING', value: '25 kg / 50 kg Jute or PP bags, or custom bulk' },
      { label: 'MOQ', value: '1 container (20ft FCL / 18–20 MT)' },
      { label: 'HS CODE', value: '0910 30 20' },
    ],
    features: [
      '100% Whole dried rhizomes',
      'Double-polished & sorted',
      'High natural curcumin',
      'Low moisture (<9% guaranteed)',
      'Direct Sangli farm sourcing',
      'Phytosanitary certified',
    ],
  },
];

const certs = [
  { name: 'APEDA', desc: 'Agricultural & Processed Food Products Export Development' },
  { name: 'FSSAI', desc: 'Food Safety & Standards Authority of India' },
  { name: 'ISO 22000', desc: 'International Food Safety Management Standard' },
  { name: 'USDA Organic', desc: 'US National Organic Program Certification' },
  { name: 'EU Organic', desc: 'European Union Organic Agriculture Standard' },
  { name: 'Phytosanitary', desc: 'Export Quarantine & Plant Health Clearance' },
];

export default function Products({ setPage }: ProductsProps) {
  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInquiry = (productName: string) => {
    const url = `https://wa.me/918010036756?text=${encodeURIComponent(
      `Hello Expogold Exim, I am interested in ordering/inquiring about ${productName}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FBFBFA]">
      {/* HERO */}
      <section className="relative h-80 lg:h-96 flex items-end overflow-hidden bg-warm-900">
        <img
          src={publicImage('turmeric_hero_slide1_1790762582982.jpg')}
          alt="Expogold Turmeric Catalog"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,14,6,0.92) 0%, rgba(20,14,6,0.4) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <p className="section-label mb-2 text-gold-300" style={{ color: '#FAC830' }}>
            EXPORT PRODUCT LINE
          </p>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Products
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-white border-b border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p
              className="text-base sm:text-lg leading-relaxed text-[#5a4030]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Expogold Exim specializes exclusively in the highest quality Indian turmeric. Directly sourced from Sangli, Maharashtra, our product offerings are strictly tested, graded, and packaged to meet global phytosanitary and food safety import standards.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS SHOWCASE (2 PRODUCTS) */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 lg:space-y-24">
          {PRODUCTS_DATA.map((p, idx) => (
            <div
              key={p.id}
              className="bg-white rounded-3xl border border-[#EAE6DC] shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                
                {/* Product Image Column */}
                <div className={`lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-warm-900 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Dark subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  
                  {/* Top-left Product badge matching screenshot */}
                  <div className="absolute top-6 left-6 z-10">
                    <span
                      className="px-3.5 py-1.5 rounded bg-black/80 text-gold-400 font-mono text-xs font-bold uppercase tracking-widest border border-gold-500/40 shadow-md"
                    >
                      PRODUCT {p.id}
                    </span>
                  </div>
                </div>

                {/* Product Content Column */}
                <div className={`lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Category */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-0.5 bg-[#D97706]" />
                      <span
                        className="text-xs font-bold tracking-[0.22em] uppercase text-[#D97706]"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {p.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1208] uppercase tracking-tight mb-2"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {p.title}
                    </h2>

                    {/* Origin */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#A67714] tracking-widest uppercase mb-6">
                      <span>📍</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif' }}>ORIGIN: {p.origin}</span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-8"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {p.desc}
                    </p>

                    {/* Specifications Table */}
                    <div className="divide-y divide-[#EAE6DC] border-t border-b border-[#EAE6DC] mb-8">
                      {p.specs.map((s) => (
                        <div key={s.label} className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                          <span
                            className="text-xs font-bold uppercase tracking-wider text-[#8A7050] sm:w-36 shrink-0"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          >
                            {s.label}
                          </span>
                          <span
                            className="font-bold text-[#1A1208] text-right sm:text-left sm:flex-1"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          >
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Checklist Grid (2 Columns) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3A2806]">
                          <span className="w-4 h-4 rounded-full bg-[#FEF3D0] text-[#D97706] flex items-center justify-center text-[10px] font-bold shrink-0">
                            ✓
                          </span>
                          <span className="font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => nav('contact')}
                      className="px-7 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                      style={{ backgroundColor: '#D97706', fontFamily: 'Outfit, sans-serif' }}
                    >
                      <span>VIEW PRODUCT</span>
                      <span>→</span>
                    </button>
                    <button
                      onClick={() => handleInquiry(p.title)}
                      className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1208] hover:text-[#D97706] transition-colors flex items-center gap-1.5"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      <span>REQUEST A QUOTE</span>
                      <span className="text-[#D97706]">→</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS & EXPORT COMPLIANCE */}
      <section className="py-20 bg-white border-t border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="section-label mb-3 text-[#D97706]">EXPORT COMPLIANCE</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-warm-900"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              Certified for International Markets
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto text-sm leading-relaxed text-[#5A4535]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Every consignment from Expogold Exim is backed by full laboratory analysis and phytosanitary clearance for seamless customs processing across Europe, the Americas, Gulf, and Asia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certs.map((c) => (
              <div
                key={c.name}
                className="card-hover text-center p-5 rounded-2xl border border-[#EAE6DC] bg-[#FAFAF8]"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-sm font-bold shadow"
                  style={{ backgroundColor: '#D97706', fontFamily: 'Outfit, sans-serif' }}
                >
                  ✓
                </div>
                <p className="text-sm font-bold mb-1 text-[#1A1208]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {c.name}
                </p>
                <p className="text-xs leading-snug text-[#8a6040]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
