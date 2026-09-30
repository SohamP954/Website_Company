import { useState } from 'react';

const OWNER_EMAIL = 'prathameshc753@gmail.com';
const OWNER_PHONE = '+91 8010036756';
const WHATSAPP_NUM = '918010036756';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const constructInquiryMessage = () => {
    return (
      `*New Turmeric Export Inquiry - Expogold Exim*\n` +
      `────────────────────────\n` +
      `• *Name:* ${form.name}\n` +
      `• *Phone:* ${form.phone}\n` +
      `• *Email:* ${form.email || 'N/A'}\n` +
      `• *Company:* ${form.company || 'N/A'}\n` +
      `• *Country:* ${form.country}\n` +
      `• *Product Interested:* ${form.product || 'General Turmeric Export'}\n` +
      `• *Expected Quantity:* ${form.quantity || 'N/A'}\n` +
      `• *Message:* ${form.message || 'Standard export quotation requested'}\n` +
      `────────────────────────`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const messageText = constructInquiryMessage();

    // 1. Prepare WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(messageText)}`;

    // 2. Prepare Mailto URL
    const mailSubject = encodeURIComponent(`Export Inquiry from ${form.name} (${form.country}) - Expogold Exim`);
    const mailBody = encodeURIComponent(
      `Hello Prathamesh / Expogold Exim,\n\n` +
      `I am submitting an export inquiry with the following details:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company}\n` +
      `Country: ${form.country}\n` +
      `Product Interested: ${form.product}\n` +
      `Expected Quantity: ${form.quantity}\n\n` +
      `Requirements / Message:\n${form.message}\n\n` +
      `Looking forward to your response.\n`
    );
    const mailtoUrl = `mailto:${OWNER_EMAIL}?subject=${mailSubject}&body=${mailBody}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Also trigger email client via hidden iframe/link
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden bg-warm-900">
        <img
          src="/images/turmeric_hero_slide2_1790762978799.jpg"
          alt="Turmeric fields Maharashtra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(20,14,6,0.92) 0%, rgba(20,14,6,0.4) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <p className="section-label mb-2 text-gold-300" style={{ color: '#FAC830' }}>
            Direct Exporter Communication
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact & Inquiry
          </h1>
        </div>
      </section>

      {/* CONTACT & FORM SECTION */}
      <section className="py-16 lg:py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* LEFT COLUMN: Contact Person, Details & Location */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-0.5 bg-gold-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Get In Touch
                  </span>
                </div>
                <h2
                  className="text-3xl lg:text-4xl font-bold text-warm-900 tracking-tight"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                >
                  Expogold Exim
                </h2>
              </div>

              {/* Contact Person Card */}
              <div className="bg-[#1C1814] text-white p-5 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-500/90 text-white flex items-center justify-center shrink-0 text-xl font-bold">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Contact Person
                  </p>
                  <p className="text-base font-bold text-white mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Mr. Prathamesh Chavan
                  </p>
                  <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mt-0.5">
                    Owner
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-5 rounded-xl border border-[#EAE6DC] shadow-sm flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3D0] text-gold-600 flex items-center justify-center shrink-0 text-lg">
                  ✉
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a6040]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${OWNER_EMAIL}`}
                    className="text-sm font-semibold text-warm-900 hover:text-gold-600 transition-colors underline decoration-gold-400 underline-offset-2"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {OWNER_EMAIL}
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="bg-white p-5 rounded-xl border border-[#EAE6DC] shadow-sm flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3D0] text-gold-600 flex items-center justify-center shrink-0 text-lg">
                  📞
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a6040]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Phone & WhatsApp
                  </p>
                  <p className="text-sm font-bold text-warm-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {OWNER_PHONE}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUM}?text=Hello%20Expogold%20Exim,%20I%20am%20interested%20in%20an%20export%20inquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-semibold text-gold-600 hover:text-gold-700 underline decoration-gold-400 underline-offset-2 mt-0.5"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-5 rounded-xl border border-[#EAE6DC] shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FEF3D0] text-gold-600 flex items-center justify-center shrink-0 text-lg mt-0.5">
                  📍
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a6040]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Address
                  </p>
                  <p className="text-sm font-medium text-warm-900 leading-snug mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    Sambhaji Nagar, Vita,
                    <br />
                    District Sangli, Maharashtra – 415311, India
                  </p>
                </div>
              </div>

              {/* Stylized Dark Location Badge */}
              <div
                className="p-6 rounded-xl text-center text-white relative overflow-hidden shadow-md"
                style={{
                  backgroundColor: '#1C1814',
                  backgroundImage: 'radial-gradient(circle at center, #2d2319 0%, #17120c 100%)',
                }}
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/30 border border-gold-500/50 flex items-center justify-center mx-auto mb-3 text-gold-400 text-lg">
                  📍
                </div>
                <p className="text-base font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Vita, District Sangli, Maharashtra
                </p>
                <p className="text-xs text-white/60 tracking-widest mt-1 font-mono">
                  17.27° N · 74.53° E · India
                </p>
                <p className="text-[11px] text-gold-300/80 mt-2 font-medium">
                  ★ Heart of India's Premium Turmeric Agro-Belt
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Inquiry Form matching user's design */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border-2 border-gold-500/60 p-7 sm:p-10 shadow-lg relative">
                
                {submitted ? (
                  <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold-500 text-white flex items-center justify-center mx-auto mb-5 text-3xl shadow-lg">
                      ✓
                    </div>
                    <h3
                      className="text-2xl lg:text-3xl font-bold text-warm-900 mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-sm text-[#5a4030] leading-relaxed max-w-md mx-auto mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      Thank you, <strong>{form.name}</strong>. Your inquiry has been routed directly to <strong>Mr. Prathamesh Chavan</strong> via <strong>WhatsApp (+91 8010036756)</strong> and <strong>Email (prathameshc753@gmail.com)</strong>.
                    </p>

                    <div className="p-4 rounded-xl bg-warm-50 border border-[#EAE6DC] max-w-md mx-auto text-left mb-6 text-xs text-[#5a4030] space-y-1">
                      <p><strong>Product:</strong> {form.product || 'Standard Turmeric Inquiry'}</p>
                      <p><strong>Country:</strong> {form.country}</p>
                      <p><strong>Quantity:</strong> {form.quantity || 'Not specified'}</p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(constructInquiryMessage())}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs shadow flex items-center gap-2"
                      >
                        <span>💬</span> Open WhatsApp Chat
                      </a>
                      <a
                        href={`mailto:${OWNER_EMAIL}?subject=Turmeric%20Inquiry%20from%20${form.name}&body=${encodeURIComponent(constructInquiryMessage())}`}
                        className="px-6 py-2.5 rounded-lg bg-warm-900 hover:bg-black text-white font-semibold text-xs shadow flex items-center gap-2"
                      >
                        <span>✉</span> Open in Email Client
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            phone: '',
                            email: '',
                            company: '',
                            country: '',
                            product: '',
                            quantity: '',
                            message: '',
                          });
                        }}
                        className="px-6 py-2.5 rounded-lg border border-[#EAE6DC] text-gold-600 hover:bg-warm-50 font-semibold text-xs"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-warm-900 uppercase tracking-tight"
                        style={{ fontFamily: 'Playfair Display, serif', color: '#1A1208' }}
                      >
                        SEND AN INQUIRY
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7a6552] mt-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        Fields marked <span className="text-red-500 font-bold">*</span> are required. We'll review your requirement and get back to you immediately.
                      </p>
                    </div>

                    <div className="space-y-5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 555 123 4567"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          />
                          <p className="text-[11px] text-[#917d6b] mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Include your country code.
                          </p>
                        </div>
                      </div>

                      {/* Email & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Email <span className="text-[11px] font-normal text-[#917d6b]">(optional)</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="name@company.com"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Company <span className="text-[11px] font-normal text-[#917d6b]">(optional)</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          />
                        </div>
                      </div>

                      {/* Country & Product */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Country <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="text"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            placeholder="Destination country"
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                            Product Interested <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            name="product"
                            value={form.product}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900 cursor-pointer"
                            style={{ fontFamily: 'Outfit, sans-serif' }}
                          >
                            <option value="">Select a product</option>
                            <option value="Salem Turmeric Finger (Whole)">Salem Turmeric Finger (Whole)</option>
                            <option value="Nizamabad Turmeric Finger">Nizamabad Turmeric Finger</option>
                            <option value="Rajapore Turmeric Finger">Rajapore Turmeric Finger</option>
                            <option value="Turmeric Powder (High Curcumin 4-6%)">Turmeric Powder (High Curcumin 4-6%)</option>
                            <option value="USDA Organic Turmeric Finger">USDA Organic Turmeric Finger</option>
                            <option value="USDA Organic Turmeric Powder">USDA Organic Turmeric Powder</option>
                            <option value="Curcumin 95% Standardized Extract">Curcumin 95% Standardized Extract</option>
                            <option value="Custom Export Specification / Bulk FCL">Custom Export Specification / Bulk FCL</option>
                          </select>
                        </div>
                      </div>

                      {/* Expected Quantity */}
                      <div>
                        <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          Expected Required Quantity <span className="text-[11px] font-normal text-[#917d6b]">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 1 × 20 ft container / 25 MT"
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-warm-900 mb-1.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          Message <span className="text-[11px] font-normal text-[#917d6b]">(optional)</span>
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Specification, packaging, destination port or timeline — anything that helps us quote accurately."
                          className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D1CBC0] rounded-lg focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all text-warm-900 resize-none"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        />
                      </div>

                      {/* Submit Button & Disclaimer */}
                      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="px-8 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm tracking-wider uppercase rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 shrink-0 transform active:scale-95 disabled:opacity-50"
                          style={{ backgroundColor: '#D97706', fontFamily: 'Outfit, sans-serif' }}
                        >
                          <span>{submitting ? 'SENDING...' : 'SEND INQUIRY'}</span>
                          <svg className="w-4 h-4 fill-current transform rotate-45 -translate-y-0.5" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                          </svg>
                        </button>

                        <p className="text-[11px] leading-relaxed text-[#7a6552]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          Your details are used only to respond to this inquiry and are sent directly to{' '}
                          <span className="font-semibold text-warm-900">{OWNER_EMAIL}</span> and WhatsApp (+91 8010036756).
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORT & AGRO LOGISTICS BAR */}
      <section className="py-12 bg-white border-t border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="section-label mb-1.5 text-gold-600">Headquarters & Processing Hub</p>
              <p className="text-sm font-bold text-warm-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Vita, Sangli, Maharashtra, India
              </p>
              <p className="text-xs text-[#8a6040] mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                PIN 415311 · Direct Farm Sourcing Belt
              </p>
            </div>
            <div>
              <p className="section-label mb-1.5 text-gold-600">Export Port Departure</p>
              <p className="text-sm font-bold text-warm-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                JNPT Mumbai · Nhava Sheva Sea Port
              </p>
              <p className="text-xs text-[#8a6040] mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Full Container Load (FCL) & Air Freight Available
              </p>
            </div>
            <div>
              <p className="section-label mb-1.5 text-gold-600">Direct Communication</p>
              <p className="text-sm font-bold text-warm-900" style={{ fontFamily: 'Outfit, sans-serif' }}>
                WhatsApp: +91 8010036756
              </p>
              <p className="text-xs text-[#8a6040] mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Instant Quotation & Sample Specification Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
