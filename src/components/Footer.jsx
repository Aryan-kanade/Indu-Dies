import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, ArrowUpRight, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* ══════════════════════════════════════
          PRE-FOOTER CTA STRIP
      ══════════════════════════════════════ */}
      <div className="relative bg-brand-primary overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 line-grid pointer-events-none" />
        {/* Floating blobs */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 bg-brand-accent/10 rounded-full blur-[50px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left copy */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10.5px] font-bold text-emerald-400 uppercase tracking-widest">Sales Desk Online</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Have a Product Requirement?
              </h2>
              <p className="text-blue-100 text-sm max-w-lg">
                Share your specifications with our B2B sales team and receive a tailored proposal
                within <strong className="text-white">one business day.</strong>
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white text-brand-primary font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
              >
                Submit Inquiry <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919881235243"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200"
              >
                <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Quick stat row */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '42+', lbl: 'Years of Manufacturing' },
              { val: '350', lbl: 'kg/hr Spray Capacity'   },
              { val: '7',   lbl: 'Advanced Reactors'      },
              { val: '100%', lbl: 'QC Lab Tested'          },
            ].map(({ val, lbl }) => (
              <div key={lbl}>
                <span className="block text-2xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{val}</span>
                <span className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mt-1 block">{lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════════ */}
      <div className="bg-surface-darker text-white border-t-4 border-brand-primary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center mr-3 border border-brand-dark/50 shadow-md shadow-brand-primary/30 shrink-0">
                  <span className="font-extrabold text-white text-sm" style={{ fontFamily: 'var(--font-display)' }}>ID</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-[18px] text-white tracking-tight leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    INDU DYES
                  </span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold mt-0.5">
                    Chemicals &amp; Dyes · Est. 1982
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-6 pr-4">
                A trusted B2B manufacturer of Reactive Dyes and Optical Brighteners since 1982.
                Providers of precision spray drying job works and customized blending solutions
                for global industrial applications.
              </p>

              {/* Certification badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  { label: '✓ Quality Assured', color: 'text-emerald-400 border-emerald-900/60 bg-emerald-950/30' },
                  { label: '✓ GST Registered', color: 'text-gray-400 border-gray-800 bg-surface-dark' },
                  { label: '✓ Since 1982', color: 'text-brand-accent border-brand-accent/20 bg-brand-accent/5' },
                ].map(({ label, color }) => (
                  <div key={label} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${color}`}>
                    {label}
                  </div>
                ))}
              </div>

              {/* Map link */}
              <a
                href="https://maps.google.com/?q=E-61+MIDC+Shiroli+Kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-gray-500 hover:text-brand-accent transition-colors"
              >
                <MapPin className="w-3 h-3" /> E-61 MIDC Shiroli, Kolhapur 416122
              </a>
            </div>

            {/* Corporate Links */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-xs mb-5 text-white uppercase tracking-widest">Corporate</h4>
              <ul className="space-y-3">
                {[
                  { to: '/',         label: 'Home'            },
                  { to: '/about',    label: 'Company Profile' },
                  { to: '/products', label: 'Products'        },
                  { to: '/services', label: 'Job Works'       },
                  { to: '/contact',  label: 'Contact Us'      },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-gray-400 hover:text-white transition-colors text-xs font-medium flex items-center group"
                    >
                      <ChevronRight className="w-3 h-3 mr-1.5 text-gray-700 group-hover:text-brand-accent transition-colors shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-xs mb-5 text-white uppercase tracking-widest">Capabilities</h4>
              <ul className="space-y-3">
                {[
                  'Reactive Dyes Manufacturing',
                  'Optical Brighteners Mfg.',
                  'Spray Drying Job Works',
                  'Industrial Powder Blending',
                  'Custom R&D Formulation',
                  'Toll Processing',
                ].map((item) => (
                  <li key={item} className="text-gray-400 text-xs font-medium flex items-start">
                    <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2.5 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-xs mb-5 text-white uppercase tracking-widest">Reach Us</h4>
              <ul className="space-y-4 mb-5">
                <li className="flex items-start">
                  <Mail className="w-3.5 h-3.5 mr-3 text-brand-accent shrink-0 mt-0.5" />
                  <a href="mailto:indudyes@gmail.com" className="text-gray-400 text-xs font-medium hover:text-white transition-colors">
                    indudyes@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-3.5 h-3.5 mr-3 text-brand-accent shrink-0 mt-0.5" />
                  <a href="tel:+919881235243" className="text-gray-400 text-xs font-medium hover:text-white transition-colors">
                    +91 98812 35243 (Factory)
                  </a>
                </li>
              </ul>

              <div className="border-t border-gray-800 pt-5">
                <span className="block text-[9.5px] text-gray-600 uppercase tracking-widest font-bold mb-3">WhatsApp Inquiry</span>
                <a
                  href="https://wa.me/919881235243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-400 hover:text-emerald-300 text-xs font-semibold group transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-2 shrink-0 animate-pulse" />
                  <span>+91 98812 35243</span>
                </a>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="divider-gradient mb-6" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-semibold">
              &copy; {year} Indu Dyes. All rights reserved. · MIDC, Kolhapur.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-600 text-[10px] uppercase tracking-wider font-semibold justify-center">
              <span>Manufacturer &amp; Exporter</span>
              <span className="text-gray-800">·</span>
              <span>B2B Chemicals</span>
              <span className="text-gray-800">·</span>
              <Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Sales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
