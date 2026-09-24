import { useState } from 'react';

const HERO = 'https://images.unsplash.com/photo-1622183526757-7aac23115ffb?w=1920&h=700&fit=crop&auto=format';

const contactInfo = [
  {
    label: 'Email',
    value: 'info@expoliteexim.com',
    sub: 'We reply within 24 hours',
    icon: '✉',
  },
  {
    label: 'Phone / WhatsApp',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 9 AM – 7 PM IST',
    icon: '☎',
  },
  {
    label: 'Office Address',
    value: 'Pune, Maharashtra — 411001',
    sub: 'India',
    icon: '⊙',
  },
  {
    label: 'Export Inquiries',
    value: 'exports@expoliteexim.com',
    sub: 'Samples, COA, pricing',
    icon: '✦',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-80 lg:h-[400px] flex items-end overflow-hidden bg-warm-900">
        <img src={HERO} alt="Turmeric fields" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,18,8,0.9) 0%, rgba(26,18,8,0.3) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <p className="section-label mb-3" style={{ color: '#FAC830' }}>Let's Connect</p>
          <h1
            className="text-4xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24 bg-warm-50" style={{ backgroundColor: '#FAFAF8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Info */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Get In Touch</p>
              <div className="gold-divider mb-6" />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
              >
                Start Your
                <br />
                <em style={{ color: '#C8941A' }}>Export Partnership</em>
              </h2>
              <p
                className="text-sm leading-relaxed mb-10"
                style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}
              >
                Whether you need a sample, a price list, or just want to explore what's possible — we're here. Prathamesh and the team respond personally to every inquiry.
              </p>

              <div className="space-y-6">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-sm"
                      style={{ backgroundColor: '#C8941A' }}
                    >
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        {c.label}
                      </p>
                      <p className="text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}>{c.value}</p>
                      <p className="text-xs mt-0.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 p-5 rounded-xl border"
                style={{ borderColor: '#EAE6DC', backgroundColor: '#FEF3D0' }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#7D590E' }}
                >
                  Quick Response Guarantee
                </p>
                <p className="text-xs leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>
                  All export inquiries receive a personalised response within 24 business hours, including sample availability and preliminary pricing.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center py-20 px-8 rounded-2xl border"
                  style={{ borderColor: '#EAE6DC', backgroundColor: 'white' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-6"
                    style={{ backgroundColor: '#C8941A' }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                  >
                    Inquiry Received
                  </h3>
                  <p className="text-sm leading-relaxed max-w-sm" style={{ fontFamily: 'Outfit, sans-serif', color: '#5a4030' }}>
                    Thank you for reaching out to Expolite Exim. Prathamesh or a member of our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}
                  >
                    Send another inquiry →
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 lg:p-10 rounded-2xl border bg-white"
                  style={{ borderColor: '#EAE6DC' }}
                >
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                  >
                    Send Us an Inquiry
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        Full Name *
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500"
                        style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        Company Name
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500"
                        style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500"
                        style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        Country *
                      </label>
                      <input
                        required
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500"
                        style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
                      />
                    </div>

                    {/* Product */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        Product Interest
                      </label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500 bg-white"
                        style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: form.product ? '#1A1208' : '#8a6040' }}
                      >
                        <option value="">Select a product</option>
                        <option>Turmeric Finger (Whole)</option>
                        <option>Turmeric Powder</option>
                        <option>Organic Turmeric Finger</option>
                        <option>Organic Turmeric Powder</option>
                        <option>High-Curcumin Powder</option>
                        <option>Curcumin 95% Extract</option>
                        <option>Multiple / Not Sure</option>
                      </select>
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                        Estimated Quantity
                      </label>
                      <input
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 5 MT per month"
                        className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500"
                        style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', color: '#A67714' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements, certifications needed, or any questions..."
                      className="w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors focus:border-gold-500 resize-none"
                      style={{ borderColor: '#EAE6DC', fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full py-3.5 text-white font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#C8941A', fontFamily: 'Outfit, sans-serif' }}
                  >
                    Send Inquiry →
                  </button>

                  <p className="mt-4 text-center text-xs" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>
                    By submitting, you agree to be contacted by Expolite Exim regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION BAR */}
      <section className="py-12 bg-white border-t" style={{ borderColor: '#EAE6DC' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="section-label mb-2">Headquarters</p>
              <p className="text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}>Pune, Maharashtra, India</p>
              <p className="text-xs mt-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>PIN 411001</p>
            </div>
            <div>
              <p className="section-label mb-2">Processing Unit</p>
              <p className="text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}>Sangli, Maharashtra, India</p>
              <p className="text-xs mt-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>Heart of India's turmeric belt</p>
            </div>
            <div>
              <p className="section-label mb-2">Export Through</p>
              <p className="text-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif', color: '#1A1208' }}>JNPT Mumbai · Nhava Sheva</p>
              <p className="text-xs mt-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#8a6040' }}>Sea freight & air cargo available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
