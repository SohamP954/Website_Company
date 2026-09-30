type Page = 'home' | 'about' | 'products' | 'contact';

interface AboutProps {
  setPage: (page: Page) => void;
}

const values = [
  {
    title: 'Farmer Integrity',
    desc: 'Direct ethical partnerships with 200+ farming families across Sangli and Nizamabad, eliminating intermediaries and ensuring fair crop compensation.',
  },
  {
    title: 'High Curcumin Quality',
    desc: 'We never compromise on purity or chemical parameters. Every export batch is third-party lab tested with verifiable Certificates of Analysis (COA).',
  },
  {
    title: 'Sustainable Agriculture',
    desc: 'Promoting organic composting, natural pest protection, and traditional sun-curing that preserves the biological potency of curcuminoids.',
  },
  {
    title: 'Global Export Reliability',
    desc: 'Fast documentation turnaround, compliant phytosanitary packaging, and transparent shipment tracking for buyers across 40+ countries.',
  },
];

const milestones = [
  { year: '2009', event: 'Expogold Exim founded by Mr. Prathamesh Chavan in Vita, Sangli district, Maharashtra.' },
  { year: '2013', event: 'First international container shipment of double-polished turmeric fingers to Middle East & Southeast Asia.' },
  { year: '2017', event: 'Achieved ISO 22000 Food Safety Management and APEDA Export Registration.' },
  { year: '2020', event: 'Launched USDA & EU certified organic turmeric line with dedicated organic partner farm clusters.' },
  { year: '2023', event: 'Crossed 500 MT annual export milestone, serving spice importers and extract laboratories in 40+ countries.' },
  { year: '2025', event: 'Upgraded processing facility with automated stone-milling, vacuum packing, and direct WhatsApp quotation portal.' },
];

export default function About({ setPage }: AboutProps) {
  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-80 lg:h-[420px] flex items-end overflow-hidden bg-warm-900">
        <img
          src="/images/turmeric_hero_slide2_1790762978799.jpg"
          alt="Turmeric farm crop in Maharashtra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,14,6,0.92) 0%, rgba(20,14,6,0.4) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <p className="section-label mb-3 text-gold-300" style={{ color: '#FAC830' }}>
            Our Heritage & Roots
          </p>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Expogold Exim
          </h1>
        </div>
      </section>

      {/* STORY SECTION WITH TURMERIC FARM IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Soil & Origin</p>
              <div className="gold-divider mb-6" />
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6 leading-snug"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Rooted in the
                <br />
                <em style={{ color: '#C8941A' }}>Golden Agro-Belt of Maharashtra</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                <strong>Expogold Exim</strong> was established with a profound commitment to India’s most revered spice — <em>Curcuma longa</em> (Turmeric). Headquartered in Vita, District Sangli — known globally as the capital of Indian turmeric trade — we bridge the fertile farms of Western India with importers worldwide.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                Over fifteen years of agricultural dedication, founder <strong>Mr. Prathamesh Chavan</strong> has cultivated a direct network of more than 200 certified farming families. By removing unnecessary intermediaries, we ensure maximum freshness, authentic high-curcumin retention, and full batch traceability.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                Whether supplying whole dried Salem fingers, bright yellow organic ground powder, or high-curcumin extract grades, our hallmark is uncompromising consistency and ethical integrity.
              </p>
            </div>

            {/* Gallery Grid of Authentic Turmeric Operations */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="rounded-xl overflow-hidden bg-gold-100 h-60 shadow-sm relative group">
                <img
                  src="/images/turmeric_farmer_harvest_1790763043941.jpg"
                  alt="Turmeric Farmer Harvest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 text-white text-xs font-semibold">
                  Fresh Farm Harvest
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gold-100 h-60 shadow-sm relative group">
                <img
                  src="/images/turmeric_hero_slide1_1790762582982.jpg"
                  alt="Premium Turmeric Powder and Botanical Leaves"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 text-white text-xs font-semibold">
                  Pure Golden Haldi
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gold-100 col-span-2 h-48 shadow-sm relative group">
                <img
                  src="/images/turmeric_hero_slide3_1790762998825.jpg"
                  alt="Turmeric Sorting & Export Packing Facility"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 text-white text-xs font-semibold">
                  Modern Export Grading & Bagging Facility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="absolute -top-4 -left-4 w-32 h-32 rounded-full opacity-15"
                style={{ backgroundColor: '#C8941A' }}
              />
              <div className="relative rounded-2xl overflow-hidden h-[460px] bg-gold-100 shadow-xl">
                <img
                  src="/images/founder.jpg"
                  alt="Mr. Prathamesh Chavan, Founder & Managing Director"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: 'linear-gradient(to top, rgba(20,14,6,0.92), transparent)' }}
                >
                  <p className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Mr. Prathamesh Chavan
                  </p>
                  <p className="text-gold-300 text-sm font-medium mt-0.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#FAC830' }}>
                    Founder & Managing Director · Expogold Exim
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label mb-4">Leadership</p>
              <div className="gold-divider mb-6" />
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Mr. Prathamesh Chavan
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                With deep agricultural roots in Sangli district and extensive experience in international spice trade logistics, Prathamesh established <strong>Expogold Exim</strong> to ensure Indian farmers receive their rightful value while global clients receive unadulterated, export-certified turmeric.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                His hands-on presence at every level — from farm soil inspection to container seal verification at JNPT port — guarantees that every shipment bearing the Expogold Exim seal exceeds client expectations.
              </p>
              <p className="text-base italic leading-relaxed mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#7D590E' }}>
                "We don't simply trade commodities; we export the authentic spirit of Indian soil with international transparency and utmost respect for our partners."
              </p>
              <div
                className="p-5 rounded-xl border-l-4 shadow-sm"
                style={{ borderColor: '#C8941A', backgroundColor: '#FEF3D0' }}
              >
                <p className="text-sm font-semibold text-warm-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Direct Founder Contact:
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-xs font-medium text-warm-900">
                  <a href="mailto:prathameshc753@gmail.com" className="text-gold-700 hover:underline">
                    ✉ prathameshc753@gmail.com
                  </a>
                  <a href="https://wa.me/918010036756" target="_blank" rel="noopener noreferrer" className="text-gold-700 hover:underline">
                    💬 WhatsApp: +91 8010036756
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Commitments</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              Expogold Core Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-hover p-7 rounded-2xl border text-center bg-warm-50"
                style={{ borderColor: '#EAE6DC' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold text-white shadow"
                  style={{ backgroundColor: '#C8941A', fontFamily: 'Outfit, sans-serif' }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Growth Story</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              Company Timeline
            </h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ backgroundColor: '#EAE6DC' }}
            />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div
                      className="inline-block px-5 py-3.5 rounded-xl border shadow-sm"
                      style={{ borderColor: '#EAE6DC', backgroundColor: 'white' }}
                    >
                      <p className="text-sm font-bold text-gold-600 mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        {m.year}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#3a2806' }}>
                        {m.event}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute left-4 md:left-1/2 top-4 w-3.5 h-3.5 rounded-full -translate-x-1/2 border-2 border-white shadow"
                    style={{ backgroundColor: '#C8941A' }}
                  />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-gold-500 text-white" style={{ backgroundColor: '#C8941A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Partner with Expogold Exim for Turmeric Export
            </h3>
            <p className="mt-1 text-white/90 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Direct farm sourcing · Rigorous lab analysis · Global shipping compliance
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => nav('products')}
              className="px-6 py-3 border border-white/40 hover:border-white text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              View Products
            </button>
            <button
              onClick={() => nav('contact')}
              className="px-6 py-3 bg-white text-warm-900 text-sm font-semibold rounded-lg hover:bg-warm-100 shadow transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
