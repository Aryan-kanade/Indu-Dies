import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Beaker, Settings, Phone, ArrowRight, AlertTriangle } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

const NotFound = () => {
  return (
    <>
    <Helmet>
      <title>Page Not Found | Indu Dyes</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-[80px] pointer-events-none animate-float-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[60px] pointer-events-none animate-float-orb-2" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 mb-10 mx-auto">
            <AlertTriangle className="w-9 h-9 text-primary" />
          </div>
          <h1 className="font-serif text-6xl sm:text-[8rem] md:text-[10rem] font-bold leading-none text-primary tracking-tighter select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Navigate back to explore our products and services.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-lg mx-auto">
            {[
              { to: '/', icon: Home, label: 'Home' },
              { to: '/products', icon: Beaker, label: 'Products' },
              { to: '/services', icon: Settings, label: 'Job Works' },
              { to: '/contact', icon: Phone, label: 'Contact' },
            ].map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md text-foreground transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
              </Link>
            ))}
          </div>

          <Link to="/" className="premium-button mx-auto">
            Return to Homepage <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-3"
        >
          <BrandLogo size="sm" />
          <span className="text-muted-foreground text-sm font-semibold">Since 1982</span>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
