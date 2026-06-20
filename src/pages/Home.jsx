import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import {
  Beaker, Droplets, ArrowRight, ShieldCheck, Layers, Package,
  Factory, Mail, CheckCircle2, Zap, Globe, Award, Clock, Microscope, Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── Animated Counter ── */
function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const numeric = parseInt(target.replace(/\D/g, ''), 10);
    if (isNaN(numeric)) { setCount(target); return; }
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(numeric);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {typeof count === 'number' ? count : target}{suffix}
    </span>
  );
}

const STATS = [
  { value: '1982', label: 'Year Founded',       suffix: '',  icon: Clock   },
  { value: '7',    label: 'Advanced Reactors',  suffix: '+', icon: Factory },
  { value: '350',  label: 'kg/hr Spray Drying', suffix: '',  icon: Zap     },
  { value: '42',   label: 'Years of Expertise', suffix: '+', icon: Award   },
];

const SECTORS = [
  { icon: '🧵', title: 'Textile Mills',   sub: 'Reactive Dyestuffs'  },
  { icon: '📄', title: 'Paper Mills',     sub: 'Optical Brightening' },
  { icon: '🧼', title: 'Detergents',      sub: 'Active Brighteners'  },
  { icon: '🌾', title: 'Agri-Chemicals',  sub: 'Custom Spray Drying' },
  { icon: '💊', title: 'Pharma',          sub: 'Toll Processing'     },
  { icon: '🔬', title: 'Inorganic Chem.', sub: 'Powder Conversion'   },
];

const TICKER_ITEMS = [
  'ISO 9001:2015 Certified',
  'HE · ME · VS · Cold Brand Reactive Dyes',
  'Spray Drying: 350 kg/hr Evaporation Capacity',
  'Optical Brighteners for Textiles · Paper · Detergents',
  'Since 1982 · Kolhapur, Maharashtra',
  'Custom Powder Blending & Formulation',
  'B2B Manufacturer & Exporter',
];

const WHY_US = [
  {
    icon: Microscope,
    title: '42+ Years R&D',
    desc: 'Deep technical expertise across reactive dyes, brighteners, and spray drying since 1971.',
    bg: 'from-blue-50 to-blue-100/60',
    iconColor: 'text-brand-primary',
    iconBg: 'bg-brand-light border-blue-200/60',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 9001:2015',
    desc: 'Every kilogram produced under certified quality management with full traceability.',
    bg: 'from-emerald-50 to-emerald-100/60',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-200/60',
  },
  {
    icon: Zap,
    title: '24/7 QC Operations',
    desc: 'Round-the-clock quality control lab testing for consistent, spec-compliant output.',
    bg: 'from-amber-50 to-amber-100/60',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50 border-amber-200/60',
  },
  {
    icon: Truck,
    title: 'Flexible MOQ',
    desc: 'From R&D samples to bulk production runs — we scale to your procurement needs.',
    bg: 'from-violet-50 to-violet-100/60',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50 border-violet-200/60',
  },
  {
    icon: Globe,
    title: 'Export Ready',
    desc: 'Active export through reputed Houses to global markets with proper documentation.',
    bg: 'from-cyan-50 to-cyan-100/60',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50 border-cyan-200/60',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    desc: '25 kg HDPE bags, paper bags, drums — or custom sizes for your logistics needs.',
    bg: 'from-slate-50 to-slate-100/60',
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-50 border-slate-200/60',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Indu Dyes | Reactive Dyes &amp; Spray Drying Manufacturer</title>
      <meta name="description" content="Indu Dyes is a trusted chemical manufacturing partner delivering high-performance Reactive Dyes, Optical Brighteners, and Advanced Spray Drying Job Works for global industries since 1982." />
      <link rel="canonical" href="https://www.indudyes.com/" />
      <script type="application/ld+json">
        {`{"@context":"https://schema.org","@type":"ChemicalBusiness","name":"Indu Dyes","url":"https://www.indudyes.com","foundingDate":"1982","address":{"@type":"PostalAddress","streetAddress":"E-61, M.I.D.C., Shiroli","addressLocality":"Kolhapur","addressRegion":"Maharashtra","postalCode":"416122","addressCountry":"IN"},"contactPoint":{"@type":"ContactPoint","telephone":"+91-9326615251","contactType":"sales","areaServed":"Global"}}`}
      </script>
    </Helmet>

    <div className="bg-bg-primary pt-[112px] pb-20 sm:pb-0 overflow-hidden">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative hero-bg py-24 lg:py-36 overflow-hidden noise">
        {/* Dot-grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[8%]  w-[480px] h-[480px] rounded-full bg-brand-primary/12 blur-[90px] pointer-events-none animate-float-orb-1" />
        <div className="absolute bottom-1/4 right-[10%] w-96  h-96  rounded-full bg-brand-accent/10  blur-[72px] pointer-events-none animate-float-orb-2" />
        <div className="absolute top-[12%] right-[28%] w-48  h-48  rounded-full bg-brand-primary/6  blur-[60px] pointer-events-none" />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── Left: Copy ── */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-white/6 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8"
              >
                <ShieldCheck className="w-4 h-4 text-brand-accent shrink-0" />
                <span className="text-gray-300 text-[10.5px] font-bold uppercase tracking-widest font-mono">
                  ISO 9001:2015 Certified Manufacturer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-[3.6rem] font-black mb-6 leading-[1.08] text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Technical Chemicals{' '}
                <span className="block text-gradient-animated mt-1">&amp; Industrial Dyes.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.6 }}
                className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed"
              >
                An established manufacturing partner delivering Reactive Dyes, Optical Brighteners,
                and precision Spray Drying Job Works for global industries{' '}
                <span className="text-white font-semibold">since 1982.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/products" className="premium-button">
                  Explore Catalog <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/services" className="outline-button">
                  Job Works &amp; Capabilities
                </Link>
              </motion.div>

              {/* Trust pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.62, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { icon: Factory, label: '7 Reactors' },
                  { icon: Globe,   label: 'Global Exports' },
                  { icon: Zap,     label: '24/7 QC Ops' },
                  { icon: Award,   label: 'ISO Certified' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="trust-pill">
                    <Icon className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                    <span className="text-[10.5px] font-bold uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: Spray Drying Data Card ── */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="dark-card p-8 relative max-w-md ml-auto"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-t-2xl" />

                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mr-3">
                      <Factory className="w-5 h-5 text-brand-accent" />
                    </div>
                    <h3 className="text-base font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      Spray Drying Facility
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-surface-darker px-2.5 py-1 rounded-lg border border-gray-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9.5px] font-bold text-gray-300 uppercase tracking-wider font-mono">Live</span>
                  </div>
                </div>

                {/* Big metric */}
                <div className="mb-7 border-b border-gray-800 pb-7">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-black leading-none text-shimmer" style={{ fontFamily: 'var(--font-display)' }}>350</span>
                    <span className="text-sm font-bold text-brand-accent mb-1 uppercase tracking-widest">kg/hr</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Evaporation Duty Capacity</p>
                </div>

                {/* Features */}
                <div className="space-y-3.5">
                  {[
                    'Automatic Temperature Controls',
                    'Free-Flowing Granulation Powders',
                    'SS 316 Ribbon Blenders — 1.5 M³',
                    'Thermax Boiler 600 kg/hr',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent mr-3 shrink-0" />
                      <span className="text-sm text-gray-300 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <Link to="/services" className="flex items-center text-xs font-bold text-brand-accent hover:text-white transition-colors group">
                    View Full Capabilities
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SCROLLING TICKER
      ══════════════════════════════════════ */}
      <div className="bg-brand-secondary border-y border-gray-900 py-3 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="inline-flex items-center mx-10 text-[11px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-4 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ANIMATED STATS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, suffix, icon: Icon }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="stat-card p-7 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-light border border-blue-200/50 flex items-center justify-center text-brand-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-brand-primary mb-1 text-shimmer" style={{ fontFamily: 'var(--font-display)' }}>
                  <Counter target={value} suffix={suffix} />
                </div>
                <span className="text-[10.5px] font-bold text-text-secondary uppercase tracking-widest block">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTORS
      ══════════════════════════════════════ */}
      <section className="py-14 bg-bg-secondary border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center section-label mb-10 justify-center">
            <span className="accent-line" /> Key Industrial Sectors Served <span className="accent-line" />
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SECTORS.map(({ icon, title, sub }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-200/70 rounded-2xl p-5 text-center shadow-sm cursor-default hover:shadow-md hover:border-brand-primary/20 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{icon}</span>
                <span className="block font-bold text-xs text-text-primary uppercase tracking-wider leading-tight">{title}</span>
                <span className="block text-[10px] text-text-secondary mt-1.5 font-semibold">{sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CORE CAPABILITIES
      ══════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-3 block justify-center">Corporate Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Specialized Dyestuff &amp; Processing
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Beaker, color: 'text-brand-primary', bg: 'bg-brand-light border-blue-200/50',
              topBorder: 'border-t-brand-primary', title: 'Reactive Dyes',
              desc: 'Premium HE, ME, VS, and Cold Brand reactive dyes engineered for brilliant shades and exceptional color fastness on cotton and cellulosic fibres.',
              link: '/products', cta: 'View Catalog', ctaColor: 'text-brand-primary hover:text-brand-dark',
            },
            {
              icon: Droplets, color: 'text-brand-accent', bg: 'bg-cyan-50 border-cyan-200/50',
              topBorder: 'border-t-brand-accent', title: 'Spray Drying',
              desc: 'Advanced job works converting liquid formulations into uniform, pure, and free-flowing industrial powders at 350 kg/hr evaporation capacity.',
              link: '/services', cta: 'Process Details', ctaColor: 'text-brand-accent hover:text-brand-primary',
            },
            {
              icon: Layers, color: 'text-slate-600', bg: 'bg-slate-50 border-slate-200/50',
              topBorder: 'border-t-slate-500', title: 'Optical Brighteners',
              desc: 'High-performance fluorescent agents for textiles, paper, and detergent sectors that counteract yellowing and enhance material brilliance.',
              link: '/products', cta: 'Technical Specs', ctaColor: 'text-slate-600 hover:text-brand-primary',
            },
          ].map(({ icon: Icon, color, bg, topBorder, title, desc, link, cta, ctaColor }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`premium-card p-8 flex flex-col h-full border-t-4 ${topBorder} group`}
            >
              <div className={`w-12 h-12 ${bg} border rounded-xl flex items-center justify-center mb-6 ${color} shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                {title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm flex-grow">{desc}</p>
              <Link to={link} className={`inline-flex items-center text-sm font-bold ${ctaColor} transition-colors mt-auto group/link`}>
                {cta} <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US — Feature Grid
      ══════════════════════════════════════ */}
      <section className="py-24 bg-bg-secondary border-y border-gray-200 overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-primary/3 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label mb-3 block justify-center">Competitive Advantages</span>
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Why Partner with Indu Dyes?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
              Four decades of B2B chemical manufacturing have shaped processes, standards, and partnerships that set us apart.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map(({ icon: Icon, title, desc, bg, iconColor, iconBg }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="feature-card p-7 group"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl border ${iconBg} flex items-center justify-center mb-5 ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                {/* Gradient bg blob on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                <h3 className="relative text-base font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {title}
                </h3>
                <p className="relative text-sm text-text-secondary leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUST & STATS (text + numbers)
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label mb-4 block">Manufacturing Heritage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Partnering with Global Industries for 40+ Years.
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Since 1982, Indu Dyes has maintained an unwavering commitment to quality and innovation.
              Our robust infrastructure and rigorous QC protocols ensure we exceed the demands of modern
              B2B manufacturing and export markets.
            </p>
            <ul className="space-y-4 mb-8 border-l-2 border-brand-primary pl-5">
              {[
                { icon: ShieldCheck, label: 'Stringent Quality Control Laboratory' },
                { icon: Package,     label: 'Scalable Production & Packaging'      },
                { icon: Globe,       label: 'Active Global Export Operations'       },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center">
                  <Icon className="w-5 h-5 text-brand-primary mr-3 shrink-0" />
                  <span className="font-semibold text-text-primary text-sm">{label}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-dark text-sm group">
              Read Our Corporate Story <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-5"
          >
            {STATS.map(({ value, label, suffix, icon: Icon }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="stat-card p-7"
              >
                <Icon className="w-5 h-5 text-brand-primary mx-auto mb-3 opacity-60" />
                <span className="block text-3xl md:text-4xl font-black text-brand-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  <Counter target={value} suffix={suffix} />
                </span>
                <span className="text-[10.5px] font-bold text-text-secondary uppercase tracking-widest block">{label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="py-24 bg-brand-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 line-grid opacity-100 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand-accent/10 blur-[70px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse" />
            Start a Conversation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to upgrade your supply chain?
          </h2>
          <p className="text-blue-100 mb-10 font-medium text-sm md:text-base px-4">
            Contact our technical sales team to discuss custom formulations, bulk orders, or job work requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-sm mx-auto">
            <Link to="/contact" className="bg-white text-brand-primary font-bold py-3.5 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-200 w-full sm:w-auto inline-flex items-center justify-center">
              Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="mailto:indudyes@gmail.com" className="bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-bold py-3 px-8 rounded-xl transition-all flex items-center justify-center w-full sm:w-auto hover:-translate-y-0.5 duration-200">
              <Mail className="w-4 h-4 mr-2" /> Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Home;
