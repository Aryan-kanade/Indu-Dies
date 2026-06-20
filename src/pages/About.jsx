import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Building2, Users, FileText, CheckCircle, Activity, Target,
  FlaskConical, Beaker, Zap, Award, TrendingUp, Shield, Globe,
  Microscope, HeartHandshake, Leaf,
} from 'lucide-react';

/* ─────────────────────────────────────────── */
const MILESTONES = [
  {
    year: '1982', title: 'Foundation',
    desc: 'Founded by Mr. M B Patil (M. Sc.) with a focused vision on Reactive Dyes and consistent quality.',
    icon: Target, color: 'text-brand-primary', border: 'border-brand-primary', bg: 'bg-brand-light',
    accent: 'from-brand-primary',
  },
  {
    year: '1998', title: 'Capacity Expansion',
    desc: 'Installed advanced reactors scaling Reactive Dyes manufacturing capacity to address rising B2B demand.',
    icon: TrendingUp, color: 'text-brand-accent', border: 'border-brand-accent', bg: 'bg-cyan-50',
    accent: 'from-brand-accent',
  },
  {
    year: '2008', title: 'Spray Drying Unit',
    desc: 'Commissioned an advanced 350 kg/hr evaporation capacity Spray Drying Plant for precision job works.',
    icon: Activity, color: 'text-violet-600', border: 'border-violet-400', bg: 'bg-violet-50',
    accent: 'from-violet-500',
  },
  {
    year: '2015', title: 'ISO 9001:2015',
    desc: 'Achieved formal ISO Quality Management certification, streamlining exports and verifying QC procedures.',
    icon: Award, color: 'text-emerald-600', border: 'border-emerald-400', bg: 'bg-emerald-50',
    accent: 'from-emerald-500',
  },
];

const INFRA = [
  {
    icon: FlaskConical, title: 'Dyes Plant',
    desc: 'Synthesis of Reactive Dyes & Optical Brighteners via universal flow design.',
    specs: ['Capacity: 1000 lt. to 15000 lt.', 'MOC: MSRL (2 nos.)', 'HDPE: 4 nos.', 'S.S.: 1 no.'],
    placeholder: '[Reactors Photo]',
  },
  {
    icon: Beaker, title: 'Finishing Plant',
    desc: 'Spray Drying, Standardization and Packing. In-house spray drying and dedusting.',
    specs: ['Spray Dryer: 350 kgs/hr evap.', 'SS 316 Ribbon Blenders: 1.5 M³', 'Finished Warehouse: 100 m²'],
    placeholder: '[Finishing Plant Photo]',
  },
  {
    icon: Zap, title: 'Utilities',
    desc: 'Full utility infrastructure for continuous and reliable manufacturing operations.',
    specs: ['Thermax Boiler 600 kg/hr', 'Air Compressors (7 kg/cm²)', 'Ultra Filtration System', 'Continuous Power & Genset'],
    placeholder: '[Utilities / ETP Photo]',
    extra: 'Fully functional Waste Water Treatment Plant & Wet Scrubber.',
  },
];

const QC_EQUIPMENT = [
  'ROTA DYEING MACHINE (2)', 'PADDING MANGLE (1)', 'STEAMER (1)',
  'INDUSTRIAL OVENS (2)', 'WEIGHING BALANCE (4)', 'MOISTURE BALANCE (1)',
  'PRECISION pH METERS (2)', 'SPECTROPHOTOMETER (2)', 'VIEWING CHAMBER',
];

const VALUES = [
  { icon: Shield,        title: 'Quality First',       desc: 'Every batch rigorously tested to international standards before dispatch.' },
  { icon: HeartHandshake, title: 'Client Partnership', desc: 'We act as an extension of your procurement team, not just a vendor.'      },
  { icon: Microscope,    title: 'Technical Depth',     desc: 'Over 50 years of collective R&D and process chemistry expertise.'         },
  { icon: Leaf,          title: 'Eco Responsibility',  desc: 'Fully operational ETP and Wet Scrubber for sustainable manufacturing.'    },
  { icon: Globe,         title: 'Global Reach',        desc: 'Export-ready with established international logistics partnerships.'       },
  { icon: TrendingUp,    title: 'Consistent Growth',   desc: 'Steady capacity additions since 1982 reflecting sustained B2B trust.'    },
];

/* ─────────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <>
    <Helmet>
      <title>About Indu Dyes | Corporate Profile &amp; Infrastructure</title>
      <meta name="description" content="Learn about Indu Dyes, a chemical manufacturing legacy established in 1982. Explore our state-of-the-art Dyes Preparation Plant, ISO 9001:2015 certification, and 24/7 Quality Control." />
      <link rel="canonical" href="https://www.indudyes.com/about" />
    </Helmet>

    <div className="bg-bg-secondary min-h-screen pt-[112px] pb-20 sm:pb-0">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="section-hero text-white py-24 border-b-4 border-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/8 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-accent/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="accent-line" />
            <span className="text-brand-accent font-bold uppercase tracking-wider text-xs">Corporate Profile</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About Indu Dyes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            A legacy of excellence in reactive dyes, optical brighteners, and precision spray drying
            since 1982, built on a foundation of technical depth and rigorous quality.
          </motion.p>

          {/* Quick-stat pills in hero */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { val: '1982', lbl: 'Est.' },
              { val: '42+',  lbl: 'Years' },
              { val: '7',    lbl: 'Reactors' },
              { val: 'ISO',  lbl: '9001:2015' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="bg-white/6 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm text-center min-w-[80px]">
                <span className="block text-xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{val}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MILESTONE TIMELINE (horizontal on desktop)
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label mb-3 block justify-center">Our Journey</span>
          <h2 className="text-3xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
            Four Decades of Growth
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-3 rounded-full" />
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-accent/30 to-emerald-400/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES.map(({ year, title, desc, icon: Icon, color, border, bg, accent }, i) => (
              <motion.div
                key={year}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                {/* Node */}
                <div className="flex flex-col items-center mb-5">
                  <div className={`w-20 h-20 rounded-2xl ${bg} border-2 ${border} ${color} flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm relative`}>
                    <Icon className="w-8 h-8" />
                    {/* Year badge */}
                    <span className={`absolute -bottom-3 text-[10px] font-black bg-white border-2 ${border} ${color} px-2 py-0.5 rounded-full font-mono shadow-sm`}>
                      {year}
                    </span>
                  </div>
                </div>

                <div className={`mt-6 text-center p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-brand-primary/20 hover:shadow-md transition-all duration-300 relative overflow-hidden`}>
                  {/* Accent stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <h3 className="font-bold text-text-primary text-sm mb-2 group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                    {title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPANY OVERVIEW + PERSONNEL
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-4 block">Our Story</span>
            <h2 className="text-2xl font-bold text-text-primary mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <FileText className="w-6 h-6 mr-3 text-brand-primary inline-block" />
              Company Overview
            </h2>

            <div className="space-y-4 text-text-secondary text-sm leading-relaxed mb-7">
              <p>
                We take this opportunity to introduce ourselves as a Manufacturer of Reactive Dyes
                and Optical Brighteners conforming to rigorous international specifications. A dedicated
                group of highly qualified technologists and chemists in the plant and laboratory
                oversees every kilogram of our products.
              </p>
              <p>
                Intensive process control at various stages of manufacturing and use-oriented final
                product testing ensures a uniform and consistent quality as demanded by the modern
                B2B customer.
              </p>
            </div>

            {/* Founder callout */}
            <div className="relative bg-gradient-to-br from-brand-light to-blue-50 border border-blue-200/60 p-6 rounded-2xl overflow-hidden mb-7">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-xl" />
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary rounded-l-2xl" />
              <p className="text-text-primary text-sm font-medium relative z-10 pl-4">
                The unit was founded by{' '}
                <strong className="text-brand-primary">Mr. M B Patil (M. Sc.)</strong>{' '}
                in 1982. He had been working in the field of Reactive Dyes since 1971, bringing
                over a decade of deep technical expertise to the company's foundation.
              </p>
            </div>

            {/* Photo placeholders */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: '[Factory Exterior]',  hint: 'Plant'    },
                { icon: Users,     label: '[Team Photograph]',   hint: 'Leadership' },
              ].map(({ icon: Icon, label, hint }) => (
                <div
                  key={label}
                  className="h-40 bg-bg-secondary rounded-2xl border border-gray-200 flex items-center justify-center relative overflow-hidden group hover:border-brand-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.006)_1px,_transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.006)_1px,_transparent_1px)] bg-[size:18px_18px]" />
                  <Icon className="absolute text-gray-100 w-28 h-28 right-2 bottom-1 group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative z-10 text-center px-3">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest border border-dashed border-gray-300 px-3 py-2 rounded-lg bg-white/90 font-mono block mb-1">{label}</span>
                    <span className="text-[8px] text-gray-400 font-semibold uppercase tracking-wider">{hint}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Key Personnel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-bg-secondary p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center" style={{ fontFamily: 'var(--font-display)' }}>
              <Users className="w-5 h-5 mr-3 text-brand-primary" /> Key Technical Personnel
            </h3>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Our leadership team combines deep process chemistry expertise with hands-on manufacturing experience.
            </p>

            <ul className="space-y-4 mb-7">
              {[
                { init: 'SP', name: 'Mr. Shivanand Patil',  qual: 'B. Sc. Tech | M. Tech.', role: 'Director – Technical',   note: 'Postgraduate from UICT (formerly UDCT), specialization in Dyes & Dyes Intermediates.' },
                { init: 'VP', name: 'Mr. Vivekanand Patil', qual: 'B. Tech. Textile Chemistry', role: 'Director – Sales',    note: '' },
                { init: 'SP', name: 'Mr. Somshekhar Patil', qual: 'B. Sc. | M.B.A.',            role: 'Director – Operations', note: '' },
              ].map(({ init, name, qual, role, note }) => (
                <li key={name} className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-brand-primary/20 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-12 h-12 bg-brand-light text-brand-primary border border-blue-200/60 rounded-xl flex items-center justify-center mr-4 shrink-0 font-bold text-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                    {init}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-text-primary text-sm group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>{name}</h4>
                      <span className="text-[9px] bg-brand-light text-brand-primary border border-blue-200/60 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide shrink-0 whitespace-nowrap">{role}</span>
                    </div>
                    <span className="text-[9.5px] text-text-secondary font-bold uppercase tracking-wider">{qual}</span>
                    {note && <p className="text-gray-500 text-xs leading-relaxed mt-1.5">{note}</p>}
                  </div>
                </li>
              ))}
            </ul>

            {/* Contact direct */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Reach the Sales Team</p>
              <div className="space-y-2">
                <a href="tel:+919326615251" className="flex items-center justify-between group">
                  <span className="text-xs text-text-secondary font-medium">Mr. Shivanand Patil</span>
                  <span className="text-xs font-bold text-brand-primary group-hover:underline">+91 9326615251</span>
                </a>
                <a href="tel:+919325692630" className="flex items-center justify-between group">
                  <span className="text-xs text-text-secondary font-medium">Mr. Vivekanand Patil</span>
                  <span className="text-xs font-bold text-brand-primary group-hover:underline">+91 9325692630</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CORE VALUES GRID
      ══════════════════════════════════════ */}
      <section className="py-20 bg-bg-secondary border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block justify-center">What We Stand For</span>
            <h2 className="text-3xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Our Core Values
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="feature-card p-7 group"
              >
                <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-5 text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-primary text-base mb-2 group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TECHNICAL INFRASTRUCTURE
      ══════════════════════════════════════ */}
      <section className="py-20 bg-surface-darker text-white border-t-4 border-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="section-label text-brand-accent mb-3 block">Operational Assets</span>
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Technical Infrastructure</h2>
              <p className="text-gray-400 text-sm mt-2">State-of-the-art manufacturing and processing capabilities.</p>
            </div>
            {/* ISO badge */}
            <div className="flex items-center gap-3 bg-surface-dark border border-gray-800 rounded-xl px-5 py-3 shrink-0">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="block text-xs font-bold text-white">ISO 9001:2015</span>
                <span className="text-[10px] text-gray-400 font-semibold">Certified Facility</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INFRA.map(({ icon: Icon, title, desc, specs, placeholder, extra }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="dark-card p-7 flex flex-col group"
              >
                {/* Photo placeholder */}
                <div className="h-40 bg-surface-darker rounded-xl mb-7 flex items-center justify-center border border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,_transparent_1px)] bg-[size:10px_10px] opacity-20" />
                  <div className="absolute top-3 left-3 flex space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                  </div>
                  <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest border border-dashed border-gray-700 px-3 py-2 font-mono bg-surface-darker/60 rounded">
                    {placeholder}
                  </span>
                </div>

                {/* Icon + title */}
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mr-3 text-brand-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>{title}</h3>
                </div>
                <p className="text-gray-400 text-xs mb-5 leading-relaxed flex-grow">{desc}</p>

                {/* Specs */}
                <ul className="space-y-2.5">
                  {specs.map((s) => (
                    <li key={s} className="flex items-start text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2.5 mt-1.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                {extra && (
                  <div className="mt-5 pt-4 border-t border-gray-800">
                    <div className="flex items-start gap-2">
                      <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-[10.5px] text-gray-400 leading-relaxed">
                        <strong className="text-emerald-400">Eco: </strong>{extra}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QC LABORATORY
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-3 block">Quality Assurance</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Quality Control Laboratory
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mb-6 rounded-full" />

            <p className="text-text-secondary leading-relaxed text-sm mb-5">
              Our unit features a fully equipped analytical and research laboratory, where all essential
              testing and application of Dyestuffs is meticulously carried out. This rigorous QC enables
              us to cater to domestic and foreign markets with complete customer satisfaction for over 42 years.
            </p>
            <p className="text-text-secondary leading-relaxed text-sm mb-8">
              Our dedicated team of chemists and technical staff work continuously to formulate, test,
              and deliver products that strictly adhere to customized B2B client specifications.
            </p>

            {/* QC stat mini-cards */}
            <div className="flex gap-4 flex-wrap">
              {[
                { val: '42+',  lbl: 'Years Testing Exp.' },
                { val: '24/7', lbl: 'QC Operations'      },
                { val: '9',    lbl: 'Analytical Instruments' },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="stat-card px-6 py-4 min-w-[110px]">
                  <span className="block text-2xl font-bold text-brand-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>{val}</span>
                  <span className="text-[9.5px] font-bold text-gray-500 uppercase tracking-wider">{lbl}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            {/* Lab placeholder */}
            <div className="h-44 bg-bg-secondary rounded-xl mb-6 flex items-center justify-center border border-gray-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.006)_1px,_transparent_1px)] bg-[size:10px_10px]" />
              <Microscope className="absolute w-32 h-32 text-gray-100 group-hover:scale-105 transition-transform duration-300" />
              <span className="relative text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-dashed border-gray-300 px-3 py-2 font-mono bg-white/90 rounded">
                [Laboratory Equipment Photo]
              </span>
            </div>

            <h3 className="text-base font-bold mb-5 text-text-primary border-b border-gray-100 pb-3 flex items-center" style={{ fontFamily: 'var(--font-display)' }}>
              <CheckCircle className="w-4 h-4 text-brand-primary mr-2 shrink-0" />
              Equipped Analytical Infrastructure
            </h3>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {QC_EQUIPMENT.map((item) => (
                <li key={item} className="flex items-start text-xs font-medium text-text-secondary group cursor-default">
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2.5 mt-1.5 shrink-0 group-hover:bg-brand-accent transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
    </>
  );
};

export default About;
