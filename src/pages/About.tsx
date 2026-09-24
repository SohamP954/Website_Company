type Page = 'home' | 'about' | 'products' | 'contact';

const HERO = 'https://images.unsplash.com/photo-1643474004250-05d73e1473e0?w=1920&h=700&fit=crop&auto=format';
const OWNER = 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=600&h=700&fit=crop&auto=format';
const FARM1 = 'https://images.unsplash.com/photo-1707811179851-c1f93698ad46?w=800&h=600&fit=crop&auto=format';
const FARM2 = 'https://images.unsplash.com/photo-1622183526757-7aac23115ffb?w=800&h=500&fit=crop&auto=format';
const SPICE = 'https://images.unsplash.com/photo-1606914469030-681790351049?w=800&h=600&fit=crop&auto=format';

const values = [
  { title: 'Integrity', desc: 'Honest relationships with farmers, buyers, and every partner in our supply chain.' },
  { title: 'Quality First', desc: 'We never compromise on purity. Every batch is lab-tested before it leaves our facility.' },
  { title: 'Sustainability', desc: 'Supporting eco-friendly farming practices that preserve the land for future generations.' },
  { title: 'Partnership', desc: 'We build long-term partnerships, not transactions. Your success is our success.' },
];

const milestones = [
  { year: '2009', event: 'Expolite Exim founded by Prathamesh Chavan in Maharashtra.' },
  { year: '2012', event: 'First international export to the Middle East and Southeast Asia.' },
  { year: '2016', event: 'Achieved ISO 22000 Food Safety Certification.' },
  { year: '2019', event: 'Expanded to organic line with USDA & EU Organic Certification.' },
  { year: '2022', event: 'Crossed 500MT annual export volume; serving 40+ countries.' },
  { year: '2024', event: 'Launched direct-farm traceability program across 200+ partner farms.' },
];

interface AboutProps {
  setPage: (page: Page) => void;
}

export default function About({ setPage }: AboutProps) {
  const nav = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-80 lg:h-[420px] flex items-end overflow-hidden bg-warm-900">
        <img src={HERO} alt="Spice farm harvest" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.88) 0%, rgba(26,18,8,0.3) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <p className="section-label mb-3" style={{ color: '#FAC830' }}>Who We Are</p>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Expolite Exim
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <div className="gold-divider mb-6" />
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6 leading-snug"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Rooted in the
                <br />
                <em style={{ color: '#C8941A' }}>Golden Soil of Maharashtra</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                Expolite Exim was born from a profound respect for one of India's most ancient treasures — turmeric. Founded in 2009, we set out to bridge the gap between Maharashtra's exceptional farmers and the world's demand for pure, potent curcumin.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                Over fifteen years, we have built a network of over 200 trusted farming families, implemented rigorous quality control, and established a reputation for reliability that spans five continents.
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                We believe that ethical sourcing, transparent practices, and personal relationships are the foundation of great trade.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden bg-gold-100 h-56">
                <img src={FARM1} alt="Farm harvest" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gold-100 h-56">
                <img src={SPICE} alt="Spice quality" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden bg-gold-100 col-span-2 h-44">
                <img src={FARM2} alt="Turmeric fields" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="absolute -top-4 -left-4 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: '#C8941A' }}
              />
              <div className="relative rounded-2xl overflow-hidden h-[460px] bg-gold-100 shadow-lg">
                <img src={OWNER} alt="Prathamesh Chavan" className="w-full h-full object-cover" />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.85), transparent)' }}
                >
                  <p className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>Prathamesh Chavan</p>
                  <p className="text-gold-300 text-sm" style={{ fontFamily: 'Outfit, sans-serif', color: '#FAC830' }}>Founder & Managing Director</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-label mb-4">Meet the Founder</p>
              <div className="gold-divider mb-6" />
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Prathamesh Chavan
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                With a background in agricultural sciences and international trade, Prathamesh founded Expolite Exim with a vision to elevate India's turmeric industry to global standards.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                His deep-rooted connection to Maharashtra's farming communities and his commitment to fair, transparent trade have made Expolite Exim a name synonymous with quality and trust.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                "We don't just export turmeric. We export a story — of soil, of families, of centuries of knowledge."
              </p>
              <div
                className="inline-block px-5 py-3 border-l-2"
                style={{ borderColor: '#C8941A', backgroundColor: '#FEF3D0' }}
              >
                <p className="text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif', color: '#7D590E' }}>
                  15+ years in spice export · Agricultural Science background
                  <br />Maharashtra Native · Global Trade Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What Drives Us</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-hover p-7 rounded-xl border text-center"
                style={{ borderColor: '#EAE6DC' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold text-white"
                  style={{ backgroundColor: '#C8941A', fontFamily: 'Outfit, sans-serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
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

      {/* TIMELINE */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Journey</p>
            <div className="gold-divider mx-auto mb-6" />
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
            >
              Milestones
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
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div
                      className="inline-block px-4 py-2 rounded border"
                      style={{ borderColor: '#EAE6DC', backgroundColor: 'white' }}
                    >
                      <p className="text-xs font-bold text-gold-600 mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        {m.year}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#3a2806' }}>
                        {m.event}
                      </p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 top-3 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-white"
                    style={{ backgroundColor: '#C8941A' }}
                  />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-500 text-white" style={{ backgroundColor: '#C8941A' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to source premium turmeric?
            </h3>
            <p className="mt-1 text-white/80 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Let's build a partnership rooted in quality.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => nav('products')}
              className="px-6 py-3 border border-white/40 text-white text-sm font-semibold rounded hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Our Products
            </button>
            <button
              onClick={() => nav('contact')}
              className="px-6 py-3 bg-white text-warm-900 text-sm font-semibold rounded hover:bg-warm-100 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
