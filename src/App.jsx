import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { MessageSquare, X, Phone, Mail, MessageCircle, ChevronUp, AlertCircle } from 'lucide-react';

/* ──────────────────────────────────────────
   ANNOUNCEMENT BANNER
────────────────────────────────────────── */
function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);
  const STORAGE_KEY = 'indudyes_banner_dismissed_v1';

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) setDismissed(true);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-brand-secondary border-b border-brand-primary/40 text-white text-center relative overflow-hidden z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 relative">
          <AlertCircle className="w-3.5 h-3.5 text-brand-accent shrink-0 hidden sm:block" />
          <p className="text-[11px] font-semibold text-gray-300">
            <span className="text-brand-accent font-bold">NEW:</span>
            {' '}ISO 9001:2015 Certified · Spray Drying Job Works Now Available for Pharmaceutical &amp; Agri-Chemical Sectors —{' '}
            <a href="/contact" className="text-white font-bold underline hover:text-brand-accent transition-colors">
              Inquire Now
            </a>
          </p>
          <button
            onClick={dismiss}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────
   ANIMATED ROUTES
────────────────────────────────────────── */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about"    element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/contact"  element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*"         element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────
   FLOATING B2B WIDGET
────────────────────────────────────────── */
function FloatingB2BWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const channels = [
    {
      href: 'tel:+919326615251',
      icon: <Phone className="w-4 h-4" />,
      iconBg: 'bg-brand-light text-brand-primary border-blue-200/50',
      title: 'Call Sales Desk',
      sub: '+91 93266 15251',
      hover: 'hover:bg-brand-light hover:border-brand-primary/20',
    },
    {
      href: 'https://wa.me/919326615251',
      icon: <MessageCircle className="w-4 h-4" />,
      iconBg: 'bg-emerald-50 text-emerald-500 border-emerald-200/50',
      title: 'Chat on WhatsApp',
      sub: 'Instant response',
      subColor: 'text-emerald-600',
      hover: 'hover:bg-emerald-50 hover:border-emerald-500/20',
      external: true,
    },
    {
      href: 'mailto:indudyes@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      iconBg: 'bg-cyan-50 text-brand-accent border-cyan-200/50',
      title: 'Email Specifications',
      sub: 'indudyes@gmail.com',
      hover: 'hover:bg-blue-50 hover:border-brand-primary/20',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-4 rounded-2xl shadow-2xl overflow-hidden glass-widget"
            style={{ width: '296px' }}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-brand-secondary to-surface-dark px-5 py-4">
              <div className="absolute inset-0 line-grid opacity-20" />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                      Sales Desk Online
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    B2B Sales &amp; Inquiries
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Avg. reply time: &lt; 2 hrs</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Channels */}
            <div className="p-4 space-y-2.5 bg-white">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                Choose a channel
              </p>
              {channels.map(({ href, icon, iconBg, title, sub, subColor, hover, external }) => (
                <a
                  key={href}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`flex items-center p-3 rounded-xl border border-gray-100 ${hover} transition-all duration-200 group`}
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mr-3 shrink-0 ${iconBg} group-hover:scale-105 transition-transform`}>
                    {icon}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-text-primary leading-none">{title}</span>
                    <span className={`text-[10px] mt-1 block font-medium ${subColor || 'text-text-secondary'}`}>{sub}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="px-4 pb-4 bg-white">
              <p className="text-[9px] text-gray-400 text-center">
                Mon–Sat 9am–6pm IST · E-61, MIDC Shiroli, Kolhapur
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.93 }}
        className="flex items-center justify-center w-14 h-14 text-white rounded-full cursor-pointer relative"
        style={{
          background: 'linear-gradient(180deg, #1a63e8, #0C4EC9)',
          boxShadow: '0 4px 20px rgba(12,78,201,0.45)',
        }}
        aria-label="Contact Sales Desk"
      >
        <span className="absolute top-0.5 right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white" />
        </span>
        <motion.div
          key={isOpen ? 'close' : 'open'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.18 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}

/* ──────────────────────────────────────────
   STICKY MOBILE BOTTOM BAR
────────────────────────────────────────── */
function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
        >
          {/* Blur backdrop */}
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl px-4 pt-3 pb-4">
            <div className="flex gap-3">
              <a
                href="https://wa.me/919326615251"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm shadow-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href="tel:+919326615251"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-dark active:bg-brand-dark text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-sm shadow-brand-primary/30"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Call Sales
              </a>
              <a
                href="mailto:indudyes@gmail.com"
                className="w-14 flex items-center justify-center bg-bg-secondary border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-text-secondary rounded-xl transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────
   BACK TO TOP BUTTON
────────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top fixed bottom-24 right-7 z-40 hidden sm:flex"
          aria-label="Back to top"
          title="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────
   APP ROOT
────────────────────────────────────────── */
function AppShell() {
  const location = useLocation();
  // Don't show navbar/footer on 404
  const is404 = location.pathname !== '/'
    && location.pathname !== '/about'
    && location.pathname !== '/products'
    && location.pathname !== '/services'
    && location.pathname !== '/contact';

  return (
    <>
      {!is404 && <AnnouncementBanner />}
      <div className="flex flex-col min-h-screen">
        {!is404 && <Navbar />}
        <main className={`flex-grow ${is404 ? '' : ''}`}>
          <AnimatedRoutes />
        </main>
        {!is404 && <Footer />}
      </div>
      {!is404 && <FloatingB2BWidget />}
      {!is404 && <BackToTop />}
      {!is404 && <MobileBottomBar />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
    </HelmetProvider>
  );
}

export default App;
