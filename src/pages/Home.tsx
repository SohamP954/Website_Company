import { useState, useEffect } from 'react';
import JourneySection from '../components/JourneySection';
import { publicImage } from '../utils/publicImage';

type Page = 'home' | 'about' | 'products' | 'contact';

interface HomeProps {
  setPage: (page: Page) => void;
}

// Hero slideshow data with full-bleed background images & synchronized text
const HERO_SLIDES = [
  {
    id: 1,
    image: publicImage('turmeric_hero_slide1_1790762582982.jpg'),
    tag: 'Expogold Exim — Est. 2009',
    titleLine1: 'The Gold of',
    titleHighlight: "India's Soil",
    titleLine2: 'to the World',
    desc: 'Premium-grade turmeric, sourced responsibly from the finest farms across Maharashtra. Export-ready, certified, and trusted by 40+ nations.',
    btnPrimary: 'Explore Products',
    btnPrimaryPage: 'products' as Page,
    btnSecondary: 'Request a Sample',
    btnSecondaryPage: 'contact' as Page,
  },
  {
    id: 2,
    image: publicImage('turmeric_hero_slide2_1790762978799.jpg'),
    tag: 'Direct Farm Sourcing — Sangli, Maharashtra',
    titleLine1: 'Pure Harvest from',
    titleHighlight: 'Fertile Agro-Belts',
    titleLine2: 'to Global Importers',
    desc: 'Partnered directly with generational turmeric farmers. High natural curcumin content, traditional sun-curing, and 100% farm-level traceability.',
    btnPrimary: 'Our Farm Story',
    btnPrimaryPage: 'about' as Page,
    btnSecondary: 'Send Inquiry',
    btnSecondaryPage: 'contact' as Page,
  },
  {
    id: 3,
    image: publicImage('turmeric_hero_slide3_1790762998825.jpg'),
    tag: 'Export-Grade Processing & QC',
    titleLine1: 'Double-Polished Fingers &',
    titleHighlight: 'Micro-Milled Powder',
    titleLine2: 'Rigidly Tested',
    desc: 'Clean stone-milled powder and double-polished Salem & Nizamabad fingers packed in international export jute bags and vacuum pouches.',
    btnPrimary: 'View Products',
    btnPrimaryPage: 'products' as Page,
    btnSecondary: 'Get Custom Quote',
    btnSecondaryPage: 'contact' as Page,
  },
  {
    id: 4,
    image: publicImage('turmeric_export_shipping_1790763063948.jpg'),
    tag: 'Worldwide Sea & Air Freight',
    titleLine1: 'Direct Container',
    titleHighlight: 'Port Logistics',
    titleLine2: 'via JNPT Mumbai',
    desc: 'Prompt 20ft / 40ft container dispatch with complete Certificate of Analysis (COA), Phytosanitary clearance, and Certificate of Origin.',
    btnPrimary: 'Send an Inquiry',
    btnPrimaryPage: 'contact' as Page,
    btnSecondary: 'Contact Us',
    btnSecondaryPage: 'contact' as Page,
  },
];

const stats = [
  { value: '2026', label: 'COMPANY ESTABLISHED' },
  { value: 'INDIA', label: 'SOURCING ORIGIN' },
  { value: '2', label: 'INITIAL PRODUCT FOCUS' },
  { value: 'GLOBAL', label: 'MARKET VISION' },
];



export default function Home({ setPage }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide rotation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div>
      {/* 1. HERO WITH FULL-BLEED AUTOMATIC SLIDESHOW */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-warm-900">
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.tag}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000"
        />

        {/* Original gradient overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Hero text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 w-full">
          <div className="max-w-2xl text-left">
            <p
              key={`tag-${currentSlide}`}
              className="section-label mb-5 text-gold-300 animate-in fade-in duration-300"
              style={{ color: '#FAC830' }}
            >
              {slide.tag}
            </p>
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-in fade-in duration-500"
              style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.08 }}
            >
              {slide.titleLine1}
              <br />
              <em className="not-italic" style={{ color: '#FAC830' }}>
                {slide.titleHighlight}
              </em>
              <br />
              {slide.titleLine2}
            </h1>
            <p
              key={`desc-${currentSlide}`}
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg animate-in fade-in duration-500"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {slide.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => nav(slide.btnPrimaryPage)}
                className="px-8 py-3.5 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors text-sm tracking-wide"
                style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#C8941A' }}
              >
                {slide.btnPrimary}
              </button>
              <button
                onClick={() => nav(slide.btnSecondaryPage)}
                className="px-8 py-3.5 border border-white/40 text-white font-semibold rounded hover:border-white hover:bg-white/10 transition-all text-sm tracking-wide"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {slide.btnSecondary}
              </button>
            </div>

            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-2 mt-12">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-gold-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* 2. STATS BAR (GOLD THEME WITH ANIMATIONS & EXACT SCREENSHOT CONTENT) */}
      <section className="bg-gold-500 py-10 relative overflow-hidden shadow-lg" style={{ backgroundColor: '#C8941A' }}>
        {/* Subtle decorative background light shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className="text-center text-white px-4 pt-4 md:pt-0 group cursor-default transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <p
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white transition-all duration-300 group-hover:scale-110 group-hover:text-gold-100 drop-shadow-sm"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[11px] sm:text-xs mt-2 font-bold tracking-[0.2em] uppercase text-white/90 group-hover:text-white transition-all duration-300 group-hover:tracking-[0.25em]"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {s.label}
                </p>
                {/* Subtle animated indicator under each stat */}
                <div className="w-0 h-0.5 bg-white/80 mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER */}
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
                Founded by Prathamesh Chavan, Expogold Exim was built on a simple belief — that India's extraordinary turmeric deserves to reach the world in its purest, most potent form.
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
                <img
                  src={publicImage('turmeric_farmer_harvest_1790763043941.jpg')}
                  alt="Farmer harvesting turmeric"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-gold-100">
                <img
                  src={publicImage('turmeric_hero_slide1_1790762582982.jpg')}
                  alt="Premium turmeric powder"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden bg-gold-100">
                <img
                  src={publicImage('turmeric_hero_slide3_1790762998825.jpg')}
                  alt="Turmeric sorting and export packing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION (EXACT MATCHING SCREENSHOT) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image: Aerial Port Logistics */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#EAE6DC] h-[480px] lg:h-[560px] bg-warm-900 group">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85&auto=format&fit=crop"
                  alt="Aerial view of export shipping container terminal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FAC830]">Export Infrastructure</p>
                  <p className="text-xs font-semibold text-white/90 mt-0.5">JNPT Mumbai Sea Port Gateway</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 relative">
              {/* Ghost Watermark "WHY US" */}
              <div
                className="absolute right-0 top-0 text-[80px] sm:text-[130px] font-black text-[#E8E6E0]/40 select-none pointer-events-none leading-none z-0"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                WHY US
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-0.5 bg-[#D97706]" />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.25em] text-[#D97706]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    WHY CHOOSE EXPOGOLD EXIM
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1208] leading-tight mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Reliable Supply. Clear Communication. Global Perspective.
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  International sourcing requires more than product availability. Buyers need consistent specifications, dependable supply, appropriate packaging, documentation and coordinated shipment execution.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Expogold Exim is building its export operations around these requirements.
                </p>

                {/* 8 Feature points (2-Column Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-10 py-6 border-t border-b border-[#EAE6DC]">
                  {[
                    'Quality-focused Sourcing',
                    'Competitive Pricing',
                    'Reliable Supply Network',
                    'Customized Packaging',
                    'Quality Inspection',
                    'Documentation Support',
                    'Transparent Communication',
                    'Long-Term Partnerships',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1208]">
                      <span className="w-4 h-4 rounded-full bg-[#FEF3D0] text-[#D97706] flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                      <span className="font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => nav('contact')}
                  className="px-8 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#D97706' }}
                >
                  <span>GET A QUOTE</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR PRODUCTS SECTION */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Consistent Site-Wide Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="section-label mb-4">Our Products</p>
              <div className="gold-divider mb-5" />
              <h2
                className="text-4xl lg:text-5xl font-bold text-warm-900 leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Premium Turmeric Range
              </h2>
            </div>
            <button
              onClick={() => nav('products')}
              className="text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors shrink-0 flex items-center gap-1.5"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}
            >
              <span>View full catalog</span>
              <span>→</span>
            </button>
          </div>

          {/* 2 Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Turmeric Powder */}
            <div className="bg-white rounded-3xl border border-[#EAE6DC] shadow-xl overflow-hidden flex flex-col justify-between card-hover">
              <div>
                {/* Image & Tag */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-warm-900 group">
                  <img
                    src={publicImage('turmeric_hero_slide1_1790762582982.jpg')}
                    alt="Premium Indian Turmeric Powder in Bowl"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <span
                    className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/80 text-[#FAC830] border border-[#FAC830]/40 backdrop-blur-sm shadow-md"
                  >
                    PROCESSED SPICE
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9">
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#1A1208] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Pure Turmeric Powder
                  </h3>

                  <p className="text-xs font-bold text-[#D97706] tracking-wider uppercase mb-4 flex items-center gap-1.5">
                    <span>📍</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif' }}>SANGLI, MAHARASHTRA · INDIA</span>
                  </p>

                  <p className="text-sm leading-relaxed text-[#5A4535] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Cold stone-milled from choice fingers for vibrant natural golden hue, strong volatile oil aroma, and consistent curcumin potency.
                  </p>

                  {/* Checklist 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-8">
                    {[
                      'Indian Origin Guaranteed',
                      'Direct Sangli Farm Sourcing',
                      'Curcumin: 2.5% – 5.5% Min',
                      '60–100 Mesh Ultra-Fine',
                      'Custom Bulk & Retail Bags',
                      'Private Labeling Options',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2806]">
                        <span className="w-4 h-4 rounded-full bg-[#FEF3D0] text-[#D97706] flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span className="font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-3 flex flex-wrap items-center gap-4 border-t border-[#EAE6DC]">
                <button
                  onClick={() => nav('products')}
                  className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#D97706' }}
                >
                  <span>VIEW PRODUCT</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => nav('contact')}
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1208] hover:text-[#D97706] transition-colors flex items-center gap-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <span>REQUEST A QUOTE</span>
                  <span className="text-[#D97706]">→</span>
                </button>
              </div>
            </div>

            {/* Card 2: Finger Turmeric */}
            <div className="bg-white rounded-3xl border border-[#EAE6DC] shadow-xl overflow-hidden flex flex-col justify-between card-hover">
              <div>
                {/* Image & Tag */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-warm-900 group">
                  <img
                    src={publicImage('turmeric_hero_slide3_1790762998825.jpg')}
                    alt="Whole Finger Turmeric Export Sacks"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <span
                    className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/80 text-[#FAC830] border border-[#FAC830]/40 backdrop-blur-sm shadow-md"
                  >
                    WHOLE SPICE
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-9">
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#1A1208] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Whole Finger Turmeric
                  </h3>

                  <p className="text-xs font-bold text-[#D97706] tracking-wider uppercase mb-4 flex items-center gap-1.5">
                    <span>📍</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif' }}>SANGLI, MAHARASHTRA · INDIA</span>
                  </p>

                  <p className="text-sm leading-relaxed text-[#5A4535] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Sun-cured Salem & Nizamabad whole rhizomes, double-polished to eliminate impurities with high natural density and intense aroma.
                  </p>

                  {/* Checklist 2 Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-8">
                    {[
                      '100% Whole Dried Rhizomes',
                      'Double-Polished & Sorted',
                      'High Curcumin (3.5% – 7.0%)',
                      'Low Moisture (<9% Guaranteed)',
                      'Farm-Direct Sangli Auctions',
                      'Full 20ft / 40ft FCL Container',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#3A2806]">
                        <span className="w-4 h-4 rounded-full bg-[#FEF3D0] text-[#D97706] flex items-center justify-center text-[10px] font-bold shrink-0">
                          ✓
                        </span>
                        <span className="font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-3 flex flex-wrap items-center gap-4 border-t border-[#EAE6DC]">
                <button
                  onClick={() => nav('products')}
                  className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#D97706' }}
                >
                  <span>VIEW PRODUCT</span>
                  <span>→</span>
                </button>
                <button
                  onClick={() => nav('contact')}
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1208] hover:text-[#D97706] transition-colors flex items-center gap-1"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <span>REQUEST A QUOTE</span>
                  <span className="text-[#D97706]">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FROM SOURCE TO SHIPMENT JOURNEY SECTION */}
      <JourneySection setPage={setPage} />

      {/* 7. RESPONSIBLE SOURCING SECTION (EXACT MATCHING SCREENSHOT) */}
      <section className="py-24 bg-[#FBFBFA] relative overflow-hidden border-t border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Top Banner Image: Farmer Hands Holding Rich Soil */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-72 sm:h-96 relative bg-warm-900">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=85&auto=format&fit=crop"
              alt="Hands holding rich fertile Indian soil"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Overlapping Floating Responsible Sourcing Card */}
          <div className="relative -mt-36 sm:-mt-44 z-10 max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#EAE6DC] shadow-2xl">
            
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-8 h-0.5 bg-[#D97706]" />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.25em] text-[#D97706]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    RESPONSIBLE SOURCING
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-extrabold text-[#1A1208] leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Growing Through Responsible Supply Chains
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pt-3">
                <p className="text-sm sm:text-base text-[#5A4535] leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Our objective is a supply chain where farmers and suppliers receive sustainable business opportunities, customers receive reliable quality, and Expogold Exim grows responsibly.
                </p>
              </div>
            </div>

            {/* 8 Pillars (4-Column Responsive Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 py-8 border-t border-b border-[#EAE6DC]">
              {[
                {
                  icon: '🌱',
                  title: 'Farmer Relationships',
                  desc: 'Direct, long-term relationships with farmers and farmer groups wherever practical.',
                },
                {
                  icon: '🤝',
                  title: 'Supplier Relationships',
                  desc: 'Working with processors and reliable suppliers beyond one-off transactions.',
                },
                {
                  icon: '🍃',
                  title: 'Responsible Sourcing',
                  desc: 'Suppliers selected for quality, consistency, traceability, compliance and responsible practices.',
                },
                {
                  icon: '🔗',
                  title: 'Traceability',
                  desc: 'Maintaining traceability so product origin and supply chain can be better documented.',
                },
                {
                  icon: '♻️',
                  title: 'Waste Reduction',
                  desc: 'Reducing avoidable waste through grading, processing, packaging, storage and logistics.',
                },
                {
                  icon: '📦',
                  title: 'Sustainable Packaging',
                  desc: 'Promoting sustainable packaging where commercially and technically practical.',
                },
                {
                  icon: '🛡️',
                  title: 'Compliance',
                  desc: 'Following applicable food-safety, export, environmental and destination-country requirements.',
                },
                {
                  icon: '🧡',
                  title: 'Long-Term Partnerships',
                  desc: 'Creating stable market opportunities for quality producers and suppliers over time.',
                },
              ].map((item) => (
                <div key={item.title} className="space-y-1.5">
                  <span className="text-xl block mb-2">{item.icon}</span>
                  <p className="text-xs font-bold text-[#1A1208] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {item.title}
                  </p>
                  <p className="text-xs text-[#5A4535] leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <button
                onClick={() => nav('about')}
                className="px-8 py-3.5 bg-[#1C1814] hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md transition-all inline-flex items-center gap-2"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <span>LEARN ABOUT OUR APPROACH</span>
                <span className="text-gold-400">→</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 8. BANNER / CTA */}
      <section className="relative py-24 overflow-hidden bg-warm-900">
        <img
          src={publicImage('turmeric_export_shipping_1790763063948.jpg')}
          alt="Turmeric export logistics"
          loading="lazy"
          decoding="async"
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
    </div>
  );
}

