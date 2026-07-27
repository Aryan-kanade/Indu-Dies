import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  const [menuPath, setMenuPath] = useState(location.pathname);
  if (location.pathname !== menuPath) {
    setMenuPath(location.pathname);
    setIsMenuOpen(false);
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'Company Profile' },
    { to: '/products', label: 'Products' },
    { to: '/services', label: 'Job Works' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 flex flex-col transition-all duration-300 pt-[env(safe-area-inset-top)] ${
          scrolled
            ? 'bg-glass shadow-[0_8px_30px_-20px_rgba(27,42,107,0.35)]'
            : 'bg-white/70 backdrop-blur-md border-b border-border/50'
        }`}
      >
        <div className="container-page w-full">
          <div className="flex justify-between items-center h-[4.25rem] sm:h-[4.5rem]">
            <Link
              to="/"
              className="flex items-center min-w-0 group"
              aria-label="Indu Dyes – Home"
            >
              <BrandLogo
                size="md"
                className="group-hover:opacity-90 transition-opacity duration-200"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.to)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-transform duration-200 origin-left ${
                      isActive(link.to) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <Link to="/contact" className="premium-button text-sm !py-2 !px-5">
                Contact Sales
              </Link>
            </div>

            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary focus:outline-none min-h-11 min-w-11 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.2 }}
              className="fixed inset-0 z-40 bg-foreground/40 backdrop-blur-[2px] md:hidden"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.22, ease: 'easeInOut' }}
              id="mobile-nav-menu"
              className="fixed top-[calc(5rem+env(safe-area-inset-top))] left-0 right-0 z-50 md:hidden bg-card border-b border-border shadow-xl max-h-[calc(100dvh-5rem-env(safe-area-inset-top))] overflow-y-auto"
            >
              <div className="flex flex-col p-4 space-y-1 pb-[max(1rem,env(safe-area-inset-bottom))]">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex justify-between items-center px-4 py-3.5 min-h-11 rounded-md text-[15px] font-medium transition-colors ${
                      isActive(link.to)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-primary'
                    }`}
                  >
                    {link.label}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive(link.to) ? 'text-primary translate-x-0.5' : 'text-muted-foreground'
                      }`}
                    />
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-border">
                  <a
                    href="tel:+919881235243"
                    className="flex items-center px-4 py-3.5 min-h-11 text-sm text-muted-foreground font-medium hover:bg-muted rounded-md mb-3 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2.5 text-primary shrink-0" />
                    +91 98812 35243
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="premium-button w-full text-center text-sm !py-3 min-h-11"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
