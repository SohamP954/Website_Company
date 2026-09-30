import { useState } from 'react';

type Page = 'home' | 'about' | 'products' | 'contact';

interface JourneySectionProps {
  setPage: (page: Page) => void;
}

const STEPS = [
  {
    id: '01',
    navLabel: 'SOURCE',
    badge: '01 OUR SOURCING NETWORK',
    title: 'Sourcing Indian Products at the Source',
    desc1:
      'We work with farmers, processors and suppliers across India to identify suitable products based on quality, consistency, availability, pricing and buyer requirements.',
    desc2:
      'Our current sourcing network is based in Maharashtra, around Sangli, Satara and Kolhapur.',
    regionHighlight: 'SANGLI • SATARA • KOLHAPUR',
    regionSub: 'Maharashtra, India',
    image: '/images/turmeric_farmer_harvest_1790763043941.jpg',
    evalTitle: 'HOW WE EVALUATE SUPPLIERS',
    evalChips: ['Quality', 'Consistency', 'Capacity', 'Pricing', 'Documentation', 'Export compliance'],
    ctaText: 'HOW WE SOURCE RESPONSIBLY →',
  },
  {
    id: '02',
    navLabel: 'QUALITY',
    badge: '02 QUALITY ASSURANCE',
    title: 'Quality According to Product & Buyer Requirements',
    desc1:
      'Quality requirements vary across product categories. We coordinate sourcing, inspection, testing and documentation according to the product, agreed specifications and destination-market requirements.',
    desc2:
      'Every consignment is subjected to strict lab parameters for curcumin percentage, moisture limits, and zero pesticide residues.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=900&q=80&auto=format&fit=crop', // Lab testing microscope
    qualityCards: [
      {
        icon: '📋',
        title: 'Product Specifications',
        desc: 'Quality parameters defined according to the product and buyer requirements.',
        isDark: false,
      },
      {
        icon: '🔬',
        title: 'Inspection & Testing',
        desc: 'Inspection or laboratory testing can be coordinated where required.',
        isDark: false,
      },
      {
        icon: '📝',
        title: 'Buyer Requirements',
        desc: 'Specifications and quality documentation are aligned with agreed product requirements and destination market.',
        isDark: false,
      },
      {
        icon: '📄',
        title: 'Documentation',
        desc: 'Relevant product and quality documentation (COA, Phytosanitary, COO) coordinated as applicable.',
        isDark: true,
      },
    ],
  },
  {
    id: '03',
    navLabel: 'PACKAGING',
    badge: '03 PACKAGING SOLUTIONS',
    title: 'Packaging Designed Around the Product',
    desc1:
      'We coordinate packaging according to product characteristics, buyer requirements, order quantities and intended market, with customized options available where applicable.',
    desc2:
      'From bulk 25kg / 50kg jute sacks for industrial grinders to retail vacuum pouches with private label stenciling.',
    image: '/images/turmeric_hero_slide3_1790762998825.jpg',
    packagingCards: [
      {
        icon: '📦',
        title: 'RETAIL & CONSUMER FORMATS',
        desc: 'Suitable packaging formats for products intended for retail markets (100g – 5kg).',
        highlight: false,
      },
      {
        icon: '🏷️',
        title: 'BULK PACKAGING',
        desc: 'Larger formats for commercial and industrial requirements (25kg & 50kg bags).',
        highlight: false,
      },
      {
        icon: '✨',
        title: 'CUSTOMIZED PACKAGING',
        desc: 'Packaging developed according to buyer requirements and product characteristics.',
        highlight: true,
      },
      {
        icon: '🔖',
        title: 'PRIVATE LABEL',
        desc: 'Available where applicable and agreed with the buyer with custom brand printing.',
        highlight: false,
      },
    ],
  },
  {
    id: '04',
    navLabel: 'EXPORT',
    badge: '04 EXPORT SOLUTIONS',
    title: 'Support from Sourcing to Shipment',
    desc1:
      'From supplier coordination and quality requirements to packaging, documentation and logistics, we coordinate the key stages involved in preparing an order for international markets.',
    desc2:
      'Direct dispatch via JNPT Mumbai (Nhava Sheva Sea Port) with comprehensive customs and freight handling.',
    image: '/images/turmeric_export_shipping_1790763063948.jpg',
    exportFeatures: [
      {
        icon: '🔍',
        title: 'Product Sourcing',
        desc: 'We identify suitable Indian suppliers based on quality, specifications, availability, pricing and buyer requirements.',
      },
      {
        icon: '🧪',
        title: 'Quality & Testing',
        desc: 'Laboratory testing and inspection can be coordinated according to product and destination-market requirements.',
      },
      {
        icon: '📦',
        title: 'Customized Packaging',
        desc: 'Retail, bulk and private-label packaging solutions based on buyer requirements.',
      },
      {
        icon: '🚢',
        title: 'Shipment Coordination',
        desc: 'Full 20ft / 40ft container dispatch, sea freight booking, and export customs clearance.',
      },
    ],
  },
  {
    id: '05',
    navLabel: 'GLOBAL',
    badge: '05 GLOBAL MARKETS',
    title: 'Connecting India to International Buyers',
    desc1:
      'We deliver reliable agricultural trade partnerships across the Middle East, Europe, United States, and Asia-Pacific.',
    desc2:
      'Transparent communication, on-time delivery schedules, and dedicated post-dispatch shipment tracking.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80&auto=format&fit=crop',
    evalTitle: 'DESTINATION COMPLIANCE',
    evalChips: ['US FDA Compliant', 'EU Organic Standards', 'Gulf Standards (SFDA)', 'Phytosanitary Cleared', 'Direct Port Sea Freight', 'Air Cargo Options'],
    ctaText: 'REQUEST INTERNATIONAL QUOTATION →',
  },
];

export default function JourneySection({ setPage }: JourneySectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const step = STEPS[activeStep];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-[#EAE6DC]">
      {/* Background Watermark */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-8 text-[100px] sm:text-[160px] lg:text-[220px] font-black text-[#E8E6E0]/40 select-none pointer-events-none leading-none z-0 tracking-wider"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        JOURNEY
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#D97706]" />
            <span
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#D97706]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              FROM SOURCE TO SHIPMENT
            </span>
            <span className="w-6 h-0.5 bg-[#D97706]" />
          </div>

          <h2
            className="text-3xl sm:text-5xl font-bold text-[#1A1208] leading-tight mb-5"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            One Coordinated Route
            <br />
            from India to Your Market
          </h2>

          <p
            className="text-sm sm:text-base text-[#5A4535] leading-relaxed"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Every product category has its own specifications, quality requirements and packaging needs. This is how we coordinate each one — from Indian sources to buyers in international markets.
          </p>
        </div>

        {/* Interactive Step Navigation Timeline */}
        <div className="mb-16 border-t border-b border-[#EAE6DC] py-4 bg-[#FAFAF8] rounded-2xl shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 max-w-4xl mx-auto px-4">
            <span
              className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#8A7050] hidden sm:inline-block border-r border-[#EAE6DC] pr-4"
            >
              SOURCE → SHIPMENT
            </span>

            <div className="flex flex-1 items-center justify-between gap-1 sm:gap-2">
              {STEPS.map((s, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-[#1C1814] text-white shadow-md transform scale-105'
                        : 'text-[#5A4535] hover:text-[#D97706] hover:bg-white'
                    }`}
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? 'bg-[#D97706]' : 'bg-[#D1CBC0]'
                      }`}
                    />
                    <span className="opacity-70 text-[10px]">{s.id}</span>
                    <span>{s.navLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step Dynamic Content Showcase */}
        <div className="bg-[#FDFBF7] rounded-3xl border border-[#EAE6DC] p-8 sm:p-12 lg:p-14 shadow-xl transition-all duration-500">
          
          {/* STEP 1: SOURCING NETWORK */}
          {activeStep === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1814] text-[#D97706] text-xs font-mono font-bold tracking-wider mb-4">
                  <span>{step.id}</span>
                  <span>OUR SOURCING NETWORK</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-bold text-[#1A1208] mb-5 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc1}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc2}
                </p>

                {/* Region Bar */}
                <div className="border-t border-b border-[#EAE6DC] py-4 mb-8">
                  <p
                    className="text-2xl sm:text-3xl font-extrabold text-[#1A1208] tracking-tight"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {step.regionHighlight}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8A7050] mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {step.regionSub}
                  </p>
                </div>

                <button
                  onClick={() => setPage('about')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#D97706] hover:text-[#B45309] transition-colors"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  <span>{step.ctaText}</span>
                </button>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#EAE6DC] h-[400px] sm:h-[460px] bg-warm-900">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>

                {/* Floating Dark Card: HOW WE EVALUATE SUPPLIERS */}
                <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#1C1814] text-white p-5 rounded-2xl shadow-2xl max-w-xs border border-white/10">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D97706] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {step.evalTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.evalChips?.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium border border-white/10"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: QUALITY ASSURANCE */}
          {activeStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1814] text-[#D97706] text-xs font-mono font-bold tracking-wider mb-4">
                  <span>{step.id}</span>
                  <span>QUALITY ASSURANCE</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-bold text-[#1A1208] mb-5 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc1}
                </p>

                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EAE6DC] h-64 bg-warm-900">
                  <img src={step.image} alt="Laboratory testing" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* 4 Quality Cards Grid */}
              <div className="lg:col-span-6 space-y-3.5">
                {step.qualityCards?.map((qc) => (
                  <div
                    key={qc.title}
                    className={`p-5 rounded-xl border transition-all duration-200 ${
                      qc.isDark
                        ? 'bg-[#1C1814] text-white border-white/10 shadow-lg'
                        : 'bg-white text-warm-900 border-[#EAE6DC] shadow-sm hover:border-[#D97706]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-xl shrink-0">{qc.icon}</span>
                      <div>
                        <p
                          className={`text-base font-bold mb-1 ${qc.isDark ? 'text-white' : 'text-[#1A1208]'}`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {qc.title}
                        </p>
                        <p
                          className={`text-xs leading-relaxed ${qc.isDark ? 'text-white/70' : 'text-[#5A4535]'}`}
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {qc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: PACKAGING SOLUTIONS */}
          {activeStep === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#EAE6DC] h-[400px] lg:h-[460px] bg-warm-900">
                  <img src={step.image} alt="Packaging facility" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1814] text-[#D97706] text-xs font-mono font-bold tracking-wider mb-4">
                  <span>{step.id}</span>
                  <span>PACKAGING SOLUTIONS</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-bold text-[#1A1208] mb-4 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc1}
                </p>

                {/* 4 Packaging Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.packagingCards?.map((pk) => (
                    <div
                      key={pk.title}
                      className={`p-6 rounded-2xl border transition-all duration-300 ${
                        pk.highlight
                          ? 'border-2 border-[#D97706] bg-[#FEF3D0]/70 shadow-md'
                          : 'border-[#EAE6DC] bg-[#FEF3D0]/30 hover:bg-[#FEF3D0]/60'
                      }`}
                    >
                      <span className="text-2xl mb-3 block">{pk.icon}</span>
                      <p
                        className="text-xs font-bold uppercase tracking-wider text-[#1A1208] mb-1.5"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {pk.title}
                      </p>
                      <p className="text-xs leading-relaxed text-[#5A4535]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {pk.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: EXPORT SOLUTIONS & LOGISTICS */}
          {activeStep === 3 && (
            <div className="animate-in fade-in duration-300">
              <div className="max-w-3xl mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1814] text-[#D97706] text-xs font-mono font-bold tracking-wider mb-4">
                  <span>{step.id}</span>
                  <span>EXPORT SOLUTIONS</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-bold text-[#1A1208] mb-3 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc1}
                </p>
              </div>

              {/* Panoramic Terminal Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#EAE6DC] h-64 sm:h-80 mb-8 bg-warm-900">
                <img src={step.image} alt="Export seaport logistics" className="w-full h-full object-cover" />
              </div>

              {/* 4 Feature Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {step.exportFeatures?.map((ef) => (
                  <div key={ef.title} className="p-5 rounded-xl border border-[#EAE6DC] bg-white shadow-sm hover:border-[#D97706] transition-all">
                    <span className="text-xl mb-2 block">{ef.icon}</span>
                    <p className="text-sm font-bold text-[#1A1208] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {ef.title}
                    </p>
                    <p className="text-xs text-[#5A4535] leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {ef.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: GLOBAL DESTINATIONS */}
          {activeStep === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1C1814] text-[#D97706] text-xs font-mono font-bold tracking-wider mb-4">
                  <span>{step.id}</span>
                  <span>GLOBAL DESTINATIONS</span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-bold text-[#1A1208] mb-5 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc1}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-[#5A4535] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {step.desc2}
                </p>

                {/* Compliance chips */}
                <div className="p-6 rounded-2xl bg-white border border-[#EAE6DC] mb-8 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {step.evalTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.evalChips?.map((c) => (
                      <span key={c} className="px-3 py-1 rounded-full bg-[#FEF3D0] text-[#7D590E] text-xs font-semibold">
                        ✓ {c}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setPage('contact')}
                  className="px-7 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg shadow-md transition-all flex items-center gap-2"
                  style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#D97706' }}
                >
                  <span>{step.ctaText}</span>
                </button>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#EAE6DC] h-[400px] bg-warm-900">
                  <img src={step.image} alt="Global trade cargo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
