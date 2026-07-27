import { useState, useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import { MessageSquare, X, Phone, Mail, MessageCircle, ChevronUp } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const KNOWN_ROUTES = ['/', '/about', '/products', '/services', '/contact'];

function RouteFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center pt-20" role="status" aria-live="polite">
      <span className="text-sm text-muted-foreground font-medium">Loading…</span>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<RouteFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function FloatingB2BWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [menuPath, setMenuPath] = useState(location.pathname);
  if (location.pathname !== menuPath) {
    setMenuPath(location.pathname);
    setIsOpen(false);
  }

  const channels = [
    {
      href: 'tel:+919881235243',
      icon: <Phone className="w-4 h-4" />,
      iconBg: 'bg-primary/10 text-primary',
      title: 'Call Sales Desk',
      sub: '+91 98812 35243',
    },
    {
      href: 'https://wa.me/919881235243',
      icon: <MessageCircle className="w-4 h-4" />,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Chat on WhatsApp',
      sub: 'Instant response',
      subColor: 'text-emerald-600',
      external: true,
    },
    {
      href: 'mailto:indudyes@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      iconBg: 'bg-primary/10 text-primary',
      title: 'Email Specifications',
      sub: 'indudyes@gmail.com',
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
            className="mb-4 rounded-xl shadow-xl overflow-hidden glass-widget"
            style={{ width: '296px' }}
          >
            <div className="relative bg-primary px-5 py-4">
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-[10px] font-bold text-primary-foreground/80 uppercase tracking-widest">
                      Sales Desk
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-primary-foreground">
                    B2B Sales &amp; Inquiries
                  </h4>
                  <p className="text-[10px] text-primary-foreground/70 mt-0.5">Mon–Sat 9am–6pm IST · reply in one business day</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/70 hover:text-primary-foreground p-1.5 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-2.5 bg-card">
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-3">
                Choose a channel
              </p>
              {channels.map(({ href, icon, iconBg, title, sub, subColor, external }) => (
                <a
                  key={href}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center p-3 rounded-md border border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-200 group"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mr-3 shrink-0 ${iconBg} group-hover:scale-105 transition-transform`}>
                    {icon}
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-foreground leading-none">{title}</span>
                    <span className={`text-[10px] mt-1 block font-medium ${subColor || 'text-muted-foreground'}`}>{sub}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="px-4 pb-4 bg-card">
              <p className="text-[9px] text-muted-foreground text-center">
                Mon–Sat 9am–6pm IST · E-61, MIDC Shiroli, Kolhapur
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.93 }}
        className="flex items-center justify-center w-14 h-14 text-primary-foreground rounded-full cursor-pointer relative bg-primary shadow-lg shadow-primary/30"
        aria-label="Contact Sales Desk"
      >
        <span className="absolute top-0.5 right-0.5 flex h-3 w-3">
          {!reduceMotion && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white border border-primary" />
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
          <div className="bg-background/95 backdrop-blur-xl border-t border-border shadow-xl px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="flex gap-3">
              <a
                href="https://wa.me/919881235243"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 min-h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-md transition-all"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href="tel:+919881235243"
                className="flex-1 flex items-center justify-center gap-2 min-h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs uppercase tracking-wider py-3.5 rounded-md transition-all"
              >
                <Phone className="w-4 h-4 shrink-0" />
                Call Sales
              </a>
              <a
                href="mailto:indudyes@gmail.com"
                className="w-14 min-h-11 flex items-center justify-center bg-muted border border-border hover:border-primary hover:text-primary text-muted-foreground rounded-md transition-all"
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

function AppShell() {
  const location = useLocation();
  const is404 = !KNOWN_ROUTES.some((path) => matchPath({ path, end: true }, location.pathname));

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="flex flex-col min-h-screen">
        {!is404 && <Navbar />}
        <main id="main" tabIndex={-1} className="flex-grow outline-none">
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
