import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Mail, Phone, Clock, Send, MessageSquare, CheckCircle,
  Loader2, ArrowRight, AlertCircle, HeartHandshake, MailOpen,
} from 'lucide-react';
import Reveal from '../components/Reveal';

const MAX_MESSAGE = 800;
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
const SITE_URL = 'https://www.indudyes.com';

const SUBJECT_LABELS = {
  sales_reactive: 'Product Sales: Reactive Dyes',
  sales_optical: 'Product Sales: Optical Brighteners',
  job_work: 'Service: Spray Drying Job Work',
  sample: 'Sample Request',
  general: 'General Inquiry',
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | mailto_opened | error
  const [errorMsg, setErrorMsg] = useState('');

  const subjectLabel = SUBJECT_LABELS[formState.subject] || formState.subject || 'General Inquiry';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            phone: formState.phone,
            subject: subjectLabel,
            message: formState.message,
            _replyto: formState.email,
          }),
        });
        if (!res.ok) throw new Error('Failed to send');
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
      } catch {
        setStatus('error');
        setErrorMsg('Unable to send right now. Please email us directly or try WhatsApp.');
      }
      return;
    }

    const subject = encodeURIComponent(`[Indu Dyes Inquiry] ${subjectLabel}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone || '—'}\nSubject: ${subjectLabel}\n\n${formState.message}`
    );
    window.location.href = `mailto:indudyes@gmail.com?subject=${subject}&body=${body}`;
    setStatus('mailto_opened');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE) return;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const msgLen = formState.message.length;
  const msgPct = Math.round((msgLen / MAX_MESSAGE) * 100);

  const CONTACTS = [
    { name: 'Factory Contact', phone: '+91 98812 35243', tel: '+919881235243', wa: true, role: 'Dyes & Chemicals Desk' },
  ];

  const showConfirm = status === 'success' || status === 'mailto_opened';

  return (
    <>
      <Helmet>
        <title>Indu Dyes</title>
        <meta name="description" content="Get in touch with Indu Dyes for Reactive Dyes sales, Optical Brighteners, and Spray Drying Job Works inquiries. Corporate office located in Kolhapur, Maharashtra." />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact Indu Dyes | Corporate Office & Plant in Kolhapur" />
        <meta property="og:description" content="Get in touch with Indu Dyes for Reactive Dyes sales, Optical Brighteners, and Spray Drying Job Works inquiries. Corporate office located in Kolhapur, Maharashtra." />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta property="og:site_name" content="Indu Dyes" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":"ContactPage","name":"Contact Indu Dyes","url":"${SITE_URL}/contact","mainEntity":{"@type":"Organization","name":"Indu Dyes","url":"${SITE_URL}","email":"indudyes@gmail.com","telephone":"+91-9881235243","address":{"@type":"PostalAddress","streetAddress":"E-61, M.I.D.C., Shiroli","addressLocality":"Kolhapur","addressRegion":"Maharashtra","postalCode":"416122","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-9881235243","contactType":"sales","email":"indudyes@gmail.com","areaServed":"Global"}]}}`}
        </script>
      </Helmet>

      <div className="bg-background min-h-screen pb-12 sm:pb-0">
        <section className="relative hero-gradient pt-nav border-b border-border overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-5">
              Get In Touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-5 text-foreground"
            >
              Contact Information
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              Our technical sales team is available to discuss your requirements for Reactive Dyes,
              Optical Brighteners, or Spray Drying Job Works.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 shadow-sm"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10.5px] font-bold text-primary uppercase tracking-widest">Sales Desk</span>
              </div>
              <span className="text-border text-xs">|</span>
              <span className="text-xs text-muted-foreground font-medium px-2">
                Mon–Sat 9am–6pm IST
              </span>
              <span className="text-muted-foreground/50 text-xs" aria-hidden="true">·</span>
              <span className="text-xs text-muted-foreground font-medium">
                reply within <strong className="text-foreground">one business day</strong>
              </span>
            </motion.div>
          </div>
        </section>

        <section className="py-14 px-4 lg:px-8 max-w-7xl mx-auto relative">
          <div className="absolute inset-0 hero-gradient opacity-50 pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <Reveal variant="fadeLeft" className="lg:col-span-5 space-y-5">
              <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="px-5 sm:px-7 py-5 border-b border-border bg-muted/40">
                  <h2 className="font-serif text-base font-bold text-foreground">Corporate Office &amp; Plant</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">E-61, M.I.D.C., SHIROLI, KOLHAPUR</p>
                </div>
                <div className="p-5 sm:p-6 space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="icon-well !w-10 !h-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="form-label mb-1.5" id="label-address">Registered Address</span>
                      <p className="text-muted-foreground text-sm leading-relaxed" aria-labelledby="label-address">
                        E-61, M.I.D.C., SHIROLI,<br />
                        KOLHAPUR – 416122<br />
                        (MAHARASHTRA) INDIA
                      </p>
                      <a
                        href="https://maps.google.com/?q=E-61+MIDC+Shiroli+Kolhapur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[10.5px] font-bold text-primary hover:underline mt-2"
                      >
                        View on Google Maps <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="icon-well !w-10 !h-10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="form-label mb-1.5">Electronic Mail</span>
                      <a href="mailto:indudyes@gmail.com" className="text-primary font-semibold text-sm hover:underline">
                        indudyes@gmail.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-0.5">General Inquiries &amp; Sales Desk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="icon-well !w-10 !h-10">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="form-label mb-1.5">Operating Hours</span>
                      <p className="text-muted-foreground text-sm">
                        Mon – Sat: <strong className="text-foreground">09:00 – 18:00 IST</strong><br />
                        <span className="text-muted-foreground text-xs">Sunday: Closed</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="icon-well !w-10 !h-10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="w-full">
                      <span className="form-label mb-3">Direct Lines</span>
                      <div className="space-y-2.5">
                        {CONTACTS.map(({ name, phone, tel, wa, role }) => (
                          <div key={name} className="bg-muted/40 border border-border rounded-xl px-4 py-2.5 hover:border-primary/30 transition-all">
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <div>
                                <span className="text-xs font-bold text-foreground">{name}</span>
                                <span className="block text-[9px] text-muted-foreground font-semibold uppercase tracking-wider">{role}</span>
                              </div>
                              <a href={`tel:${tel}`} className="text-xs font-bold text-primary hover:underline shrink-0">{phone}</a>
                            </div>
                            {wa && (
                              <a
                                href={`https://wa.me/${tel.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs uppercase font-bold text-emerald-600 bg-emerald-50 px-3 py-2 min-h-9 rounded-md border border-emerald-200 hover:bg-emerald-100 transition-colors"
                              >
                                <MessageSquare className="w-3 h-3 mr-1.5 shrink-0" /> WhatsApp
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919881235243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-md transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" /> WhatsApp
                </a>
                <a
                  href="tel:+919881235243"
                  className="flex items-center justify-center gap-2 bg-card border border-border hover:border-primary hover:text-primary text-muted-foreground font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-md transition-all hover:scale-[1.02]"
                >
                  <Phone className="w-4 h-4 shrink-0" /> Call Sales
                </a>
              </div>

              <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl px-4 py-3.5">
                <HeartHandshake className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-medium leading-relaxed">
                  We treat every inquiry as a long-term partnership. Our team responds personally — no automated replies.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fadeRight" delay={0.06} className="lg:col-span-7">
              <div className="bg-card p-5 sm:p-7 lg:p-10 rounded-xl border border-border shadow-sm">
                <AnimatePresence mode="wait">
                  {showConfirm ? (
                    <motion.div
                      key={status}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8"
                    >
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                        status === 'success' ? 'bg-emerald-100' : 'bg-primary/10'
                      }`}>
                        {status === 'success'
                          ? <CheckCircle className="w-10 h-10 text-emerald-500" />
                          : <MailOpen className="w-10 h-10 text-primary" />}
                      </div>
                      <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                        {status === 'success' ? 'Inquiry Sent Successfully' : 'Email Draft Opened'}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-10">
                        {status === 'success'
                          ? 'Your specifications have been routed to our B2B sales desk. A member of our team will contact you within one business day.'
                          : 'Your email client should open with a pre-filled message to indudyes@gmail.com. Send that message to complete your inquiry. If nothing opened, email us directly or use WhatsApp.'}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            setStatus('idle');
                            if (status === 'success') {
                              setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
                            }
                          }}
                          className="premium-button !px-7 !py-2.5 text-sm"
                        >
                          {status === 'success' ? 'Send Another' : 'Back to Form'}
                        </button>
                        <a
                          href="https://wa.me/919881235243"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-7 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-md transition-colors inline-flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="w-4 h-4" /> Follow Up on WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      <div className="mb-10">
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Submit an Inquiry</h3>
                        <p className="text-sm text-muted-foreground">
                          Fill out the form and our team will respond within one business day.
                          {!FORMSPREE_ENDPOINT && (
                            <span className="block text-xs mt-2 text-muted-foreground/90 leading-relaxed">
                              Online form submission is not configured yet — clicking submit opens your email
                              draft to <strong className="text-foreground">indudyes@gmail.com</strong>.
                              Prefer chat?{' '}
                              <a
                                href="https://wa.me/919881235243"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold hover:underline"
                              >
                                Message us on WhatsApp
                              </a>
                              .
                            </span>
                          )}
                        </p>
                      </div>

                      {status === 'error' && (
                        <div className="mb-5 flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          {errorMsg}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="contact-name" className="form-label">
                              Company / Full Name <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              className="form-input"
                              placeholder="Your Organization"
                              required
                              autoComplete="organization"
                              disabled={status === 'sending'}
                            />
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="form-label">
                              Business Email <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              className="form-input"
                              placeholder="email@company.com"
                              required
                              autoComplete="email"
                              disabled={status === 'sending'}
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="contact-phone" className="form-label">
                            Phone / WhatsApp <span className="text-muted-foreground font-normal normal-case">(optional)</span>
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="+91 XXXXX XXXXX"
                            autoComplete="tel"
                            disabled={status === 'sending'}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-subject" className="form-label">
                            Inquiry Type <span className="text-destructive">*</span>
                          </label>
                          <select
                            id="contact-subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            className="form-input"
                            required
                            disabled={status === 'sending'}
                          >
                            <option value="">Select a subject...</option>
                            {Object.entries(SUBJECT_LABELS).map(([value, label]) => (
                              <option key={value} value={value}>{label}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <label htmlFor="contact-message" className="form-label !mb-0">
                              Message Details <span className="text-destructive">*</span>
                            </label>
                            <span className={`text-[10px] font-mono font-bold ${msgPct > 85 ? 'text-destructive' : 'text-muted-foreground'}`}>
                              {msgLen}/{MAX_MESSAGE}
                            </span>
                          </div>
                          <textarea
                            id="contact-message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={5}
                            className="form-input resize-y"
                            placeholder="Please specify product codes, target specifications, or bulk requirements..."
                            required
                            disabled={status === 'sending'}
                          />
                          <div className="mt-1.5 h-0.5 bg-muted rounded-full overflow-hidden">
                            <div className={`h-full rounded-full transition-all ${msgPct > 85 ? 'bg-destructive' : 'bg-primary'}`} style={{ width: `${msgPct}%` }} />
                          </div>
                        </div>
                        <div className="pt-3 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <button type="submit" disabled={status === 'sending'} className="premium-button !px-7 !py-3 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                            {status === 'sending' ? (
                              <><Loader2 className="w-4 h-4 mr-2 animate-spin shrink-0" /> Sending...</>
                            ) : (
                              <><Send className="w-4 h-4 mr-2 shrink-0" /> {FORMSPREE_ENDPOINT ? 'Submit Inquiry' : 'Open Email Draft'}</>
                            )}
                          </button>
                          <div className="text-[11px] text-muted-foreground font-medium space-y-0.5">
                            <p>Response within <strong className="text-foreground">one business day</strong>.</p>
                          </div>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-8 sm:pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
          <Reveal variant="scaleIn" className="bg-card w-full rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="px-5 sm:px-7 py-4 border-b border-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-muted/40">
              <div className="flex items-center gap-3">
                <div className="icon-well !w-8 !h-8">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Industrial Estate Facility</h3>
                  <p className="text-[11px] text-muted-foreground">E-61, M.I.D.C., SHIROLI, KOLHAPUR – 416122</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=E-61+MIDC+Shiroli+Kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-10 text-xs font-semibold text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground px-4 py-2.5 rounded-md transition-all"
              >
                Open Maps <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
            <div className="relative h-80 bg-muted">
              <iframe
                title="Indu Dyes Location — E-61, MIDC Shiroli, Kolhapur"
                src="https://www.google.com/maps?q=E-61+MIDC+Shiroli+Kolhapur+Maharashtra+416122&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
};

export default Contact;
