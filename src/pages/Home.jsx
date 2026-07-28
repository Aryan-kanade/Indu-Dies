import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import {
  Beaker, Droplets, ArrowRight, ShieldCheck, Package,
  Factory, Mail, CheckCircle2, Zap, Globe, Award, Clock, Microscope, Truck,
  Shirt, Wheat, FlaskConical, Atom,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import Reveal from '../components/Reveal';
import { cardVariants, VIEWPORT } from '../motion/variants';

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const numeric = parseInt(String(target).replace(/\D/g, ''), 10);
  const isNumeric = !Number.isNaN(numeric);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const start = Date.now();
    let frame;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(numeric);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, isNumeric, duration]);

  return (
    <span ref={ref}>
      {isNumeric ? count : target}{suffix}
    </span>
  );
}

const STATS = [
  { value: '1982', label: 'Year Founded', suffix: '', icon: Clock, animate: false },
  { value: '7', label: 'Advanced Reactors', suffix: '+', icon: Factory, animate: true },
  { value: '350', label: 'kg/hr Spray Drying', suffix: '', icon: Zap, animate: true },
  { value: '44', label: 'Years of Expertise', suffix: '+', icon: Award, animate: true },
];

const SECTORS = [
  { icon: Shirt, title: 'Textile Mills', sub: 'Reactive Dyestuffs' },
  { icon: Wheat, title: 'Agri-Chemicals', sub: 'Custom Spray Drying' },
  { icon: FlaskConical, title: 'Specialty Chem.', sub: 'Toll Processing' },
  { icon: Atom, title: 'Inorganic Chem.', sub: 'Powder Conversion' },
];

const TICKER_ITEMS = [
  'Quality Checked Dyes & Chemicals',
  'HE · ME · VS · Cold Brand Reactive Dyes',
  'Spray Drying: 350 kg/hr Evaporation Capacity',
  'Since 1982 · Kolhapur, Maharashtra',
  'Custom Powder Blending & Formulation',
  'B2B Manufacturer & Exporter',
];

const WHY_US = [
  {
    icon: Microscope,
    title: '44+ Years Expertise',
    desc: 'Deep technical expertise across reactive dyes and spray drying since our founding in 1982.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    desc: 'Every kilogram produced under strict quality control standards with full traceability.',
  },
  {
    icon: Zap,
    title: '24/7 QC Operations',
    desc: 'Round-the-clock quality control lab testing for consistent, spec-compliant output.',
  },
  {
    icon: Truck,
    title: 'Flexible MOQ',
    desc: 'From R&D samples to bulk production runs — we scale to your procurement needs.',
  },
  {
    icon: Globe,
    title: 'Export Ready',
    desc: 'Active export through established export houses to global markets with proper documentation.',
  },
  {
    icon: Package,
    title: 'Custom Packaging',
    desc: '25 kg HDPE bags, paper bags, drums — or custom sizes for your logistics needs.',
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Indu Dyes</title>
        <meta
          name="description"
          content="Indu Dyes is a trusted chemical manufacturing partner delivering high-performance Reactive Dyes and Advanced Spray Drying Job Works for global industries since 1982."
        />
        <link rel="canonical" href="https://www.indudyes.com/" />
        <meta property="og:title" content="Indu Dyes | Reactive Dyes & Spray Drying Manufacturer" />
        <meta
          property="og:description"
          content="Indu Dyes is a trusted chemical manufacturing partner delivering high-performance Reactive Dyes and Advanced Spray Drying Job Works for global industries since 1982."
        />
        <meta property="og:url" content="https://www.indudyes.com/" />
        <meta property="og:image" content="https://www.indudyes.com/logo.png" />
        <meta property="og:site_name" content="Indu Dyes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.indudyes.com/logo.png" />
        <script type="application/ld+json">
          {`{"@context":"https://schema.org","@type":["Organization","ChemicalBusiness"],"name":"Indu Dyes","url":"https://www.indudyes.com","foundingDate":"1982","logo":"https://www.indudyes.com/logo.png","address":{"@type":"PostalAddress","streetAddress":"E-61, M.I.D.C., Shiroli","addressLocality":"Kolhapur","addressRegion":"Maharashtra","postalCode":"416122","addressCountry":"IN"},"contactPoint":{"@type":"ContactPoint","telephone":"+91-9881235243","contactType":"sales","email":"indudyes@gmail.com","areaServed":"Global","availableLanguage":["en","hi"]}}`}
        </script>
      </Helmet>

      <div className="bg-background pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0 overflow-x-hidden">
        {/* Hero — light gradient, 2-col */}
        <section className="relative hero-gradient pt-nav overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
          <div className="absolute top-1/4 left-[8%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[90px] pointer-events-none animate-float-orb-1" />
          <div className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-primary/8 blur-[72px] pointer-events-none animate-float-orb-2" />

          <div className="relative z-10 container-page w-full py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="eyebrow mb-3 sm:mb-5"
                >
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Since 1982 · Kolhapur
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="mb-4 sm:mb-5"
                >
                  <BrandLogo size="xl" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-[1.08] text-foreground"
                >
                  Manufacturers of{' '}
                  <span className="text-gradient">Textile Dyes &amp; Chemicals.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.32, duration: 0.6 }}
                  className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-xl leading-relaxed"
                >
                  An established manufacturing partner delivering Reactive Dyes
                  and precision Spray Drying Job Works for global industries{' '}
                  <span className="text-foreground font-semibold">since 1982.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <Link to="/products" className="premium-button w-full sm:w-auto justify-center min-h-11">
                    Explore Catalog <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link to="/services" className="outline-button w-full sm:w-auto justify-center min-h-11">
                    Job Works &amp; Capabilities
                  </Link>
                </motion.div>

                {/* Compact facility card — mobile / tablet */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="mt-8 lg:hidden rounded-xl border border-border bg-card overflow-hidden shadow-sm"
                >
                  <div className="bg-gradient-to-r from-primary to-mid-orange px-4 py-3 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-primary-foreground/70 text-[10px] font-semibold uppercase tracking-widest">
                        Facility Highlight
                      </span>
                      <h3 className="font-serif text-lg font-bold text-primary-foreground">
                        Spray Drying Facility
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-3xl font-bold text-primary-foreground leading-none">350</span>
                      <span className="block text-[10px] font-semibold text-primary-foreground/80 uppercase tracking-wider mt-0.5">kg/hr</span>
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {['Automatic Temperature Controls', 'SS 316 Ribbon Blenders — 1.5 M³', 'Thermax Boiler 600 kg/hr'].map((feat) => (
                      <div key={feat} className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-2 shrink-0" />
                        <span className="text-xs text-muted-foreground font-medium">{feat}</span>
                      </div>
                    ))}
                    <Link
                      to="/services"
                      className="inline-flex items-center text-xs font-semibold text-primary mt-1 group"
                    >
                      View Full Capabilities
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Visual panel — desktop */}
              <div className="hidden lg:block lg:col-span-5 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl shadow-2xl overflow-hidden border border-border bg-card"
                >
                  <div className="h-48 bg-gradient-to-br from-primary to-[#C23E0C] relative">
                    <div className="absolute inset-0 line-grid opacity-20" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-widest">
                        Facility Highlight
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-primary-foreground mt-1">
                        Spray Drying Facility
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-6 border-b border-border pb-6">
                      <div className="flex items-end gap-2 mb-2">
                        <span className="font-serif text-5xl font-bold leading-none text-primary">350</span>
                        <span className="text-sm font-semibold text-mid-orange mb-1 uppercase tracking-widest">kg/hr</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        Evaporation Duty Capacity
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        'Automatic Temperature Controls',
                        'Uniform free-flowing powders',
                        'SS 316 Ribbon Blenders — 1.5 M³',
                        'Thermax Boiler 600 kg/hr',
                      ].map((feat) => (
                        <div key={feat} className="flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-3 shrink-0" />
                          <span className="text-sm text-muted-foreground font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-border">
                      <Link
                        to="/services"
                        className="flex items-center text-xs font-semibold text-primary hover:text-primary/80 transition-colors group"
                      >
                        View Full Capabilities
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <div className="band-navy border-y border-brand-navy/40 py-3.5 overflow-hidden">
          <div className="marquee-wrap">
            <div className="marquee-inner">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-10 text-[11px] font-semibold text-white/70 uppercase tracking-widest whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-4 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="py-14 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map(({ value, label, suffix, icon: Icon, animate }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="stat-card p-4 sm:p-6 group"
                >
                  <div className="icon-well mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1">
                    {animate ? <Counter target={value} suffix={suffix} /> : <>{value}{suffix}</>}
                  </div>
                  <span className="text-[10.5px] font-semibold text-muted-foreground uppercase tracking-widest block">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-14 bg-muted/50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <p className="flex w-full justify-center section-label mb-8">
              <span className="accent-line" /> Key Industrial Sectors Served <span className="accent-line" />
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {SECTORS.map(({ icon: Icon, title, sub }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl p-5 text-center shadow-sm cursor-default hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="icon-well mx-auto mb-3 !w-10 !h-10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="block font-semibold text-xs text-foreground uppercase tracking-wider leading-tight">
                    {title}
                  </span>
                  <span className="block text-[10px] text-muted-foreground mt-1.5 font-medium">{sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-14 lg:py-16 px-4 lg:px-8 max-w-7xl mx-auto">
          <Reveal className="text-center mb-10 sm:mb-16">
            <span className="eyebrow mb-4">Corporate Capabilities</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Specialized Dyestuff &amp; Processing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              From reactive dyes to precision spray drying — manufacturing solutions engineered for industrial excellence.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Beaker,
                title: 'Reactive Dyes',
                desc: 'Premium HE, ME, VS, and Cold Brand reactive dyes engineered for brilliant shades and exceptional color fastness on cotton and cellulosic fibres.',
                link: '/products',
                cta: 'View Catalog',
              },
              {
                icon: Droplets,
                title: 'Spray Drying',
                desc: 'Advanced job works converting liquid formulations into uniform, pure, and free-flowing industrial powders at 350 kg/hr evaporation capacity.',
                link: '/services',
                cta: 'Process Details',
              },
            ].map(({ icon: Icon, title, desc, link, cta }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="premium-card p-8 flex flex-col h-full group"
              >
                <div className="icon-well mb-6 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">{desc}</p>
                <Link
                  to={link}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto group/link"
                >
                  {cta}{' '}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <section className="py-14 lg:py-16 bg-muted/40 border-y border-border overflow-hidden relative">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Reveal className="text-center mb-10 sm:mb-16">
              <span className="eyebrow mb-4">Competitive Advantages</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Partner with Indu Dyes?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                More than four decades of B2B chemical manufacturing have shaped processes, standards, and
                partnerships that set us apart.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_US.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="feature-card p-6 group"
                >
                  <div className="icon-well mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage */}
        <section className="py-14 lg:py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Reveal variant="fadeLeft">
              <span className="eyebrow mb-4">Manufacturing Heritage</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Partnering with Global Industries for 44+ Years.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Since 1982, Indu Dyes has maintained an unwavering commitment to quality and innovation.
                Our robust infrastructure and rigorous QC protocols ensure we exceed the demands of modern
                B2B manufacturing and export markets.
              </p>
              <ul className="space-y-4 mb-10 border-l-4 border-primary pl-5 bg-primary/5 py-4 rounded-r-xl">
                {[
                  { icon: ShieldCheck, label: 'Stringent Quality Control Laboratory' },
                  { icon: Package, label: 'Scalable Production & Packaging' },
                  { icon: Globe, label: 'Active Global Export Operations' },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center">
                    <Icon className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span className="font-semibold text-foreground text-sm">{label}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 text-sm group"
              >
                Read Our Corporate Story{' '}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>

            <Reveal variant="fadeRight" className="premium-card p-8 lg:p-10">
              <p className="font-serif text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-4">
                Built for industrial buyers who need consistent shade, documented quality, and reliable supply.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                From reactive dye production to spray-drying job works, our Kolhapur plant supports domestic
                and export customers with clear specifications and practical lead times.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider text-brand-navy">
                <span className="px-3 py-1.5 rounded-md bg-muted border border-border">Reactive Dyes</span>
                <span className="px-3 py-1.5 rounded-md bg-muted border border-border">Spray Drying</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-16 band-navy text-center relative overflow-hidden">
          <div className="absolute inset-0 line-grid opacity-25 pointer-events-none" />
          <Reveal variant="scaleIn" className="max-w-3xl mx-auto px-4 relative z-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              Start a Conversation
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to upgrade your supply chain?
            </h2>
            <p className="text-white/75 mb-8 font-medium text-sm md:text-base px-4">
              Contact our technical sales team to discuss custom formulations, bulk orders, or job work
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <Link
                to="/contact"
                className="premium-button min-h-11 w-full sm:w-auto justify-center"
              >
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="mailto:indudyes@gmail.com"
                className="bg-transparent text-white border border-white/35 hover:border-sun hover:bg-white/10 font-semibold py-3 px-8 min-h-11 rounded-lg transition-all flex items-center justify-center w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 mr-2" /> Email Us
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
};

export default Home;
