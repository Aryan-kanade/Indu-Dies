import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const el  = document.documentElement;
      const pct = (el.scrollTop / Math.max(el.scrollHeight - el.clientHeight, 1)) * 100;
      setScrollPct(Math.min(pct, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const navLinks = [
    { to: '/',         label: 'Home'            },
    { to: '/about',    label: 'Company Profile' },
    { to: '/products', label: 'Products'        },
    { to: '/services', label: 'Job Works'       },
  ];

  return (
    <nav
      className={`fixed w-full z-50 flex flex-col transition-all duration-300 ${
        scrolled
          ? 'bg-glass'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      {/* Scroll Progress Bar */}
      {scrolled && (
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollPct}%` }}
          aria-hidden="true"
        />
      )}

      {/* Top Utility Bar — slides away on scroll */}
      <div
        className={`bg-brand-secondary text-gray-300 text-xs overflow-hidden transition-all duration-300 hidden md:block ${
          scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-10 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+919326615251" className="flex items-center hover:text-white transition-colors duration-150">
              <Phone className="w-3.5 h-3.5 mr-2 text-brand-accent shrink-0" />
              +91 9326615251
            </a>
            <a href="mailto:indudyes@gmail.com" className="flex items-center hover:text-white transition-colors duration-150">
              <Mail className="w-3.5 h-3.5 mr-2 text-brand-accent shrink-0" />
              indudyes@gmail.com
            </a>
          </div>
          <div className="flex space-x-4 font-semibold text-[10px] uppercase tracking-wider text-gray-400 items-center">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              ISO 9001:2015 Certified
            </span>
            <span className="text-gray-700">|</span>
            <span>Est. 1982</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>

          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Indu Dyes – Home">
            <div className="w-10 h-10 flex items-center justify-center mr-3 rounded-lg bg-brand-primary text-white shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-lg tracking-tighter">ID</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-[17px] tracking-tight leading-none text-text-primary">INDU DYES</span>
              <span className="text-[9px] text-text-secondary uppercase tracking-widest font-bold mt-0.5">
                Chemicals &amp; Dyes
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-2 text-[14.5px] font-semibold transition-colors duration-200 ${
                  isActive(link.to)
                    ? 'text-brand-primary'
                    : 'text-text-secondary hover:text-brand-primary'
                } group`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary rounded-full transition-transform duration-200 origin-left ${
                    isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="premium-button text-xs font-bold uppercase tracking-wider !py-2.5 !px-5 rounded-lg">
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-brand-primary focus:outline-none p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex justify-between items-center px-4 py-3 rounded-xl text-[15px] font-semibold transition-colors ${
                    isActive(link.to)
                      ? 'bg-brand-light text-brand-primary'
                      : 'text-text-secondary hover:bg-gray-50 hover:text-brand-primary'
                  }`}
                >
                  {link.label}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive(link.to) ? 'text-brand-primary translate-x-0.5' : 'text-gray-400'
                    }`}
                  />
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <a
                  href="tel:+919326615251"
                  className="flex items-center px-4 py-3 text-sm text-text-secondary font-medium hover:bg-gray-50 rounded-xl mb-3 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2.5 text-brand-primary shrink-0" />
                  +91 9326615251
                </a>
                <Link
                  to="/contact"
                  className="premium-button w-full text-center text-sm font-semibold rounded-xl shadow-sm !py-3"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
