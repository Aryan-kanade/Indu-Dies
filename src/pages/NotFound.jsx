import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Beaker, Settings, Phone, ArrowRight, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen hero-bg flex items-center justify-center px-4 relative overflow-hidden noise">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-primary/10 blur-[80px] pointer-events-none animate-float-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-accent/8 blur-[60px] pointer-events-none animate-float-orb-2" />
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 mb-8 mx-auto">
            <AlertTriangle className="w-9 h-9 text-brand-accent" />
          </div>
          <h1
            className="text-[10rem] font-black leading-none text-shimmer tracking-tighter select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Page Not Found
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Navigate back to explore our products and services.
          </p>

          {/* Quick nav */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-lg mx-auto">
            {[
              { to: '/',         icon: Home,     label: 'Home'       },
              { to: '/products', icon: Beaker,   label: 'Products'   },
              { to: '/services', icon: Settings, label: 'Job Works'  },
              { to: '/contact',  icon: Phone,    label: 'Contact'    },
            ].map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="premium-button mx-auto"
          >
            Return to Homepage <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        {/* Bottom branding */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="w-7 h-7 rounded-lg bg-brand-primary flex items-center justify-center text-white text-xs font-extrabold" style={{ fontFamily: 'var(--font-display)' }}>
            ID
          </div>
          <span className="text-gray-500 text-sm font-semibold">Indu Dyes — Since 1982</span>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
