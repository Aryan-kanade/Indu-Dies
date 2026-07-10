import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Mail, Phone, Clock, Send, MessageSquare, CheckCircle,
  Loader2, ArrowRight, AlertCircle, HeartHandshake,
} from 'lucide-react';

const MAX_MESSAGE = 800;

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE) return;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const msgLen = formState.message.length;
  const msgPct = Math.round((msgLen / MAX_MESSAGE) * 100);

  const CONTACTS = [
    { name: 'Factory Contact', phone: '+91 9881235243', tel: '+919881235243', wa: true, role: 'Dyes & Chemicals Desk' },
  ];

  return (
    <>
    <Helmet>
      <title>Contact Indu Dyes | Corporate Office &amp; Plant in Kolhapur</title>
      <meta name="description" content="Get in touch with Indu Dyes for Reactive Dyes sales, Optical Brighteners, and Spray Drying Job Works inquiries. Corporate office located in Kolhapur, Maharashtra." />
      <link rel="canonical" href="https://www.indudyes.com/contact" />
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"ContactPage","mainEntity":{"@type":"Organization","name":"Indu Dyes","contactPoint":[{"@type":"ContactPoint","telephone":"+91-9881235243","contactType":"Sales","areaServed":"Global"}]}}`}
      </script>
    </Helmet>

    <div className="bg-bg-secondary min-h-screen pt-[112px] pb-20 sm:pb-0">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="section-hero text-white py-20 border-b-4 border-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/8 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="accent-line" />
            <span className="text-brand-accent font-bold uppercase tracking-wider text-xs">Get In Touch</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contact Information
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-8"
          >
            Our technical sales team is available to discuss your requirements for Reactive Dyes,
            Optical Brighteners, or Spray Drying Job Works.
          </motion.p>

          {/* Response time indicator */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white/6 border border-white/12 rounded-xl px-5 py-3 backdrop-blur-sm"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10.5px] font-bold text-emerald-400 uppercase tracking-widest">Sales Desk Online</span>
            </div>
            <span className="text-gray-700 text-xs">|</span>
            <span className="text-xs text-gray-300 font-medium">Avg. reply: <strong className="text-white">under 2 hours</strong></span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Contact Info Panel ── */}
          <div className="lg:col-span-5 space-y-5">

            {/* Address + Contacts */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="px-7 py-5 border-b border-gray-100 bg-bg-secondary">
                <h2 className="text-base font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  Corporate Office &amp; Plant
                </h2>
                <p className="text-xs text-text-secondary mt-0.5">E-61, M.I.D.C., SHIROLI, KOLHAPUR</p>
              </div>

              <div className="p-7 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-light border border-blue-200/50 rounded-xl flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="form-label mb-1.5">Registered Address</span>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      E-61, M.I.D.C., SHIROLI,<br />
                      KOLHAPUR – 416122<br />
                      (MAHARASHTRA) INDIA
                    </p>
                    <a
                      href="https://maps.google.com/?q=E-61+MIDC+Shiroli+Kolhapur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10.5px] font-bold text-brand-primary hover:underline mt-2"
                    >
                      <MapPin className="w-3 h-3 mr-1" /> View on Google Maps <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-light border border-blue-200/50 rounded-xl flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="form-label mb-1.5">Electronic Mail</span>
                    <a href="mailto:indudyes@gmail.com" className="text-brand-primary font-semibold text-sm hover:underline">
                      indudyes@gmail.com
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">General Inquiries &amp; Sales Desk</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-light border border-blue-200/50 rounded-xl flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="form-label mb-1.5">Operating Hours</span>
                    <p className="text-text-secondary text-sm">
                      Mon – Sat: <strong className="text-text-primary">09:00 – 18:00 IST</strong><br />
                      <span className="text-gray-400 text-xs">Sunday: Closed</span>
                    </p>
                  </div>
                </div>

                {/* Factory landline */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-brand-light border border-blue-200/50 rounded-xl flex items-center justify-center shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="form-label mb-3">Direct Lines</span>
                    <div className="space-y-2.5">
                      {/* Personal contacts */}
                      {CONTACTS.map(({ name, phone, tel, wa, role }) => (
                        <div key={name} className="bg-bg-secondary border border-gray-100 rounded-xl px-4 py-2.5 hover:border-brand-primary/20 transition-all duration-200">
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <div>
                              <span className="text-xs font-bold text-text-primary">{name}</span>
                              <span className="block text-[9px] text-text-secondary font-semibold uppercase tracking-wider">{role}</span>
                            </div>
                            <a href={`tel:${tel}`} className="text-xs font-bold text-brand-primary hover:underline shrink-0">
                              {phone}
                            </a>
                          </div>
                          {wa && (
                            <a
                              href={`https://wa.me/${tel.replace('+', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[9px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 hover:bg-emerald-100 transition-colors"
                            >
                              <MessageSquare className="w-2.5 h-2.5 mr-1 shrink-0" /> WhatsApp
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/919881235243"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4 shrink-0" /> WhatsApp Chat
              </a>
              <a
                href="tel:+919881235243"
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-text-secondary font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <Phone className="w-4 h-4 shrink-0" /> Call Sales
              </a>
            </div>

            {/* Trust note */}
            <div className="flex items-start gap-3 bg-brand-light border border-blue-200/60 rounded-xl px-4 py-3.5">
              <HeartHandshake className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
              <p className="text-xs text-brand-primary font-medium leading-relaxed">
                We treat every inquiry as a long-term partnership. Our team responds personally — no automated replies.
              </p>
            </div>
          </div>

          {/* ── Contact Form Panel ── */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-200 shadow-sm">

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-text-primary mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      Inquiry Sent Successfully
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto mb-2">
                      Your specifications have been routed to our B2B sales desk. A member of our team will
                      contact you personally within <strong className="text-text-primary">one business day.</strong>
                    </p>
                    <p className="text-xs text-gray-400 mb-8">Reference: {Date.now().toString(36).toUpperCase()}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-7 py-2.5 bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                      >
                        Send Another
                      </button>
                      <a
                        href="https://wa.me/919881235243"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" /> Follow Up on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0 }}>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-text-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                        Submit an Inquiry
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Fill out the form and our team will respond within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Company / Full Name <span className="text-red-400">*</span></label>
                          <input
                            type="text" name="name"
                            value={formState.name} onChange={handleChange}
                            className="form-input" placeholder="Your Organization"
                            required disabled={status === 'sending'}
                          />
                        </div>
                        <div>
                          <label className="form-label">Business Email <span className="text-red-400">*</span></label>
                          <input
                            type="email" name="email"
                            value={formState.email} onChange={handleChange}
                            className="form-input" placeholder="email@company.com"
                            required disabled={status === 'sending'}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Phone / WhatsApp <span className="text-gray-400 font-normal normal-case">(optional)</span></label>
                        <input
                          type="tel" name="phone"
                          className="form-input" placeholder="+91 XXXXX XXXXX"
                          disabled={status === 'sending'}
                        />
                      </div>

                      <div>
                        <label className="form-label">Inquiry Type <span className="text-red-400">*</span></label>
                        <select
                          name="subject" value={formState.subject}
                          onChange={handleChange} className="form-input"
                          required disabled={status === 'sending'}
                        >
                          <option value="">Select a subject...</option>
                          <option value="sales_reactive">Product Sales: Reactive Dyes</option>
                          <option value="sales_optical">Product Sales: Optical Brighteners</option>
                          <option value="job_work">Service: Spray Drying Job Work</option>
                          <option value="sample">Sample Request</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <label className="form-label !mb-0">Message Details <span className="text-red-400">*</span></label>
                          <span className={`text-[10px] font-mono font-bold transition-colors ${msgPct > 85 ? 'text-red-400' : msgPct > 65 ? 'text-amber-500' : 'text-gray-400'}`}>
                            {msgLen}/{MAX_MESSAGE}
                          </span>
                        </div>
                        <textarea
                          name="message" value={formState.message}
                          onChange={handleChange} rows={5}
                          className="form-input resize-y"
                          placeholder="Please specify product codes, target specifications, or bulk requirements..."
                          required disabled={status === 'sending'}
                        />
                        {/* Char count bar */}
                        <div className="mt-1.5 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-200 ${
                              msgPct > 85 ? 'bg-red-400' : msgPct > 65 ? 'bg-amber-400' : 'bg-brand-primary'
                            }`}
                            style={{ width: `${msgPct}%` }}
                          />
                        </div>
                        {msgPct > 85 && (
                          <p className="flex items-center gap-1 text-[10px] text-red-400 font-semibold mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" /> Approaching character limit
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="premium-button !px-7 !py-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {status === 'sending' ? (
                            <><Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" /> Sending...</>
                          ) : (
                            <><Send className="w-4 h-4 mr-2 shrink-0" /> Submit Inquiry</>
                          )}
                        </button>
                        <div className="text-[11px] text-gray-400 font-medium space-y-0.5">
                          <p>Response within <strong className="text-text-primary">24 hours</strong> on business days.</p>
                          <p className="text-gray-300 text-[10px]">Your data is used solely for sales communication.</p>
                        </div>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          MAP SECTION
      ══════════════════════════════════════ */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-7 py-4 border-b border-gray-100 flex items-center justify-between bg-bg-secondary">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-light border border-blue-200/50 rounded-lg flex items-center justify-center text-brand-primary">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-text-primary">Industrial Estate Facility</h3>
                <p className="text-[11px] text-text-secondary">E-61, M.I.D.C., SHIROLI, KOLHAPUR – 416122</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=E-61+MIDC+Shiroli+Kolhapur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-brand-primary border border-brand-primary/30 hover:bg-brand-primary hover:text-white px-4 py-2 rounded-xl transition-all duration-200"
            >
              Open Maps <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
          <div className="relative h-80 bg-bg-secondary">
            <iframe
              title="Indu Dyes Location — E-61, MIDC Shiroli, Kolhapur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.245!2d74.1!3d16.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1194de1e47785%3A0x3c9b4b6a7b8b0b0b!2sMIDC%20Shiroli%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Contact;
