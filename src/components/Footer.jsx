import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0">
      <div className="relative band-navy overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10.5px] font-semibold text-white/75 uppercase tracking-widest">
                  Sales Desk · Mon–Sat 9am–6pm IST
                </span>
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Have a Product Requirement?
              </h2>
              <p className="text-white/75 text-sm max-w-lg">
                Share your specifications with our B2B sales team and receive a tailored proposal
                within <strong className="text-white">one business day.</strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="premium-button text-sm !px-7 !py-3"
              >
                Submit Inquiry <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <a
                href="https://wa.me/919881235243"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center gap-2 bg-transparent border border-white/35 hover:border-white/60 hover:bg-white/10 text-white/90 font-medium text-sm px-7 py-3 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-10 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            <div className="lg:col-span-1 sm:col-span-2">
              <div className="flex items-center mb-5">
                <Link to="/" className="inline-flex items-center group" aria-label="Indu Dyes – Home">
                  <BrandLogo size="md" className="group-hover:opacity-95 transition-opacity" />
                </Link>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                A trusted B2B manufacturer of Reactive Dyes and Optical Brighteners since 1982.
                Precision spray drying and custom blending for industrial applications.
              </p>
              <a
                href="https://maps.google.com/?q=E-61+MIDC+Shiroli+Kolhapur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" /> E-61 MIDC Shiroli, Kolhapur 416122
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-xs mb-5 text-foreground uppercase tracking-widest">Products</h4>
              <ul className="space-y-3">
                {[
                  { to: '/products', label: 'Reactive Dyes' },
                  { to: '/products', label: 'Optical Brighteners' },
                  { to: '/products', label: 'Full Catalog' },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs mb-5 text-foreground uppercase tracking-widest">Job Works</h4>
              <ul className="space-y-3">
                {[
                  'Spray Drying',
                  'Powder Blending',
                  'Custom Formulation',
                  'Toll Processing',
                ].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs mb-5 text-foreground uppercase tracking-widest">Company</h4>
              <ul className="space-y-3">
                {[
                  { to: '/about', label: 'Company Profile' },
                  { to: '/about#infrastructure', label: 'Infrastructure' },
                  { to: '/contact', label: 'Contact Us' },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs mb-5 text-foreground uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-3.5 h-3.5 mr-3 text-primary shrink-0 mt-0.5" />
                  <a href="mailto:indudyes@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    indudyes@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-3.5 h-3.5 mr-3 text-primary shrink-0 mt-0.5" />
                  <a href="tel:+919881235243" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 98812 35243
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919881235243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-2 shrink-0" />
                    WhatsApp Inquiry
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider-gradient mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium">
              &copy; {year} Indu Dyes. All rights reserved. · MIDC, Kolhapur.
            </p>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-xs uppercase tracking-wider font-medium justify-center">
              <span>Manufacturer &amp; Exporter</span>
              <span>·</span>
              <span>B2B Chemicals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
