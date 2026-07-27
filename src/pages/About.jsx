import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Users, FileText, CheckCircle, Activity, Target,
  FlaskConical, Beaker, Zap, TrendingUp, Shield, Globe,
  Microscope, HeartHandshake, Leaf,
} from 'lucide-react';

const MILESTONES = [
  {
    year: '1982', title: 'Foundation',
    desc: 'Founded by Mr. M B Patil (M. Sc.) with a focused vision on Reactive Dyes and consistent quality.',
    icon: Target,
  },
  {
    year: '1998', title: 'Capacity Expansion',
    desc: 'Installed advanced reactors scaling Reactive Dyes manufacturing capacity to address rising B2B demand.',
    icon: TrendingUp,
  },
  {
    year: '2008', title: 'Spray Drying Unit',
    desc: 'Commissioned an advanced 350 kg/hr evaporation capacity Spray Drying Plant for precision job works.',
    icon: Activity,
  },
  {
    year: '2015', title: 'Global Reach Expansion',
    desc: 'Expanded export networks to international B2B clients, implementing comprehensive QA workflows.',
    icon: Globe,
  },
];

const INFRA = [
  {
    icon: FlaskConical, title: 'Dyes Plant',
    desc: 'Synthesis of Reactive Dyes & Optical Brighteners via universal flow design.',
    specs: ['Capacity: 1000 lt. to 15000 lt.', 'MOC: MSRL (2 nos.)', 'HDPE: 4 nos.', 'S.S.: 1 no.'],
  },
  {
    icon: Beaker, title: 'Finishing Plant',
    desc: 'Spray Drying, Standardization and Packing. In-house spray drying and dedusting.',
    specs: ['Spray Dryer: 350 kgs/hr evap.', 'SS 316 Ribbon Blenders: 1.5 M³', 'Finished Warehouse: 100 m²'],
  },
  {
    icon: Zap, title: 'Utilities',
    desc: 'Full utility infrastructure for continuous and reliable manufacturing operations.',
    specs: ['Thermax Boiler 600 kg/hr', 'Air Compressors (7 kg/cm²)', 'Ultra Filtration System', 'Continuous Power & Genset'],
    extra: 'Fully functional Waste Water Treatment Plant & Wet Scrubber.',
  },
];

const QC_EQUIPMENT = [
  'ROTA DYEING MACHINE (2)', 'PADDING MANGLE (1)', 'STEAMER (1)',
  'INDUSTRIAL OVENS (2)', 'WEIGHING BALANCE (4)', 'MOISTURE BALANCE (1)',
  'PRECISION pH METERS (2)', 'SPECTROPHOTOMETER (2)', 'VIEWING CHAMBER',
];

const VALUES = [
  { icon: Shield, title: 'Quality First', desc: 'Every batch rigorously tested to international standards before dispatch.' },
  { icon: HeartHandshake, title: 'Client Partnership', desc: 'We act as an extension of your procurement team, not just a vendor.' },
  { icon: Microscope, title: 'Technical Depth', desc: '44+ years of manufacturing expertise grounded in process chemistry and quality control.' },
  { icon: Leaf, title: 'Eco Responsibility', desc: 'Fully operational ETP and Wet Scrubber for sustainable manufacturing.' },
  { icon: Globe, title: 'Global Reach', desc: 'Export-ready with established international logistics partnerships.' },
  { icon: TrendingUp, title: 'Consistent Growth', desc: 'Steady capacity additions since 1982 reflecting sustained B2B trust.' },
];

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
        <meta name="description" content="Learn about Indu Dyes, a chemical manufacturing legacy established in 1982. Explore our state-of-the-art Dyes Preparation Plant, standardized quality management, and 24/7 Quality Control." />
        <link rel="canonical" href="https://www.indudyes.com/about" />
        <meta property="og:title" content="About Indu Dyes | Corporate Profile & Infrastructure" />
        <meta property="og:description" content="Learn about Indu Dyes, a chemical manufacturing legacy established in 1982. Explore our state-of-the-art Dyes Preparation Plant, standardized quality management, and 24/7 Quality Control." />
        <meta property="og:url" content="https://www.indudyes.com/about" />
        <meta property="og:image" content="https://www.indudyes.com/logo.png" />
      </Helmet>

      <div className="bg-background min-h-screen pt-20 pb-12 sm:pb-0">
        {/* Hero */}
        <section className="relative hero-gradient py-14 lg:py-16 border-b border-border overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-6">
              Corporate Profile
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-foreground"
            >
              About Indu Dyes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8"
            >
              A legacy of excellence in reactive dyes, optical brighteners, and precision spray drying
              since 1982, built on a foundation of technical depth and rigorous quality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { val: '1982', lbl: 'Est.' },
                { val: '44+', lbl: 'Years' },
                { val: '7', lbl: 'Reactors' },
                { val: '100%', lbl: 'QC Tested' },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="bg-card border border-border rounded-xl px-5 py-3 text-center min-w-[80px] shadow-sm">
                  <span className="block font-serif text-xl font-bold text-primary">{val}</span>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{lbl}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="eyebrow mb-4">Our Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Over Four Decades of Growth</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {MILESTONES.map(({ year, title, desc, icon: Icon }, i) => (
                <motion.div key={year} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="group">
                  <div className="flex flex-col items-center mb-5">
                    <div className="w-20 h-20 rounded-xl bg-primary/10 border-2 border-primary text-primary flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm relative mb-2">
                      <Icon className="w-8 h-8" />
                      <span className="absolute -bottom-3 text-xs font-bold bg-card border-2 border-primary text-primary px-2.5 py-0.5 rounded-full shadow-sm">
                        {year}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 text-center p-5 rounded-xl bg-card border border-border shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <h3 className="font-serif font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview + Personnel */}
        <section className="py-14 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow mb-4">Our Story</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-primary" />
                Company Overview
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-7">
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
              <div className="relative bg-primary/5 border border-primary/15 p-6 rounded-xl overflow-hidden mb-7">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
                <p className="text-foreground text-sm font-medium relative z-10 pl-4">
                  The unit was founded by{' '}
                  <strong className="text-primary">Mr. M B Patil (M. Sc.)</strong>{' '}
                  in 1982. He had been working in the field of Reactive Dyes since 1971, bringing
                  over a decade of deep technical expertise to the company&apos;s foundation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-muted/50 p-8 rounded-xl border border-border"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center">
                <Users className="w-5 h-5 mr-3 text-primary" /> Key Technical Personnel
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Our leadership team combines deep process chemistry expertise with hands-on manufacturing experience.
              </p>
              <ul className="space-y-4 mb-7">
                {[
                  { init: 'SNP', name: 'Mr. Shivanand Patil', qual: 'B. Sc. Tech | M. Tech.', role: 'Director – Technical', note: 'Postgraduate from UICT (formerly UDCT), specialization in Dyes & Dyes Intermediates.' },
                  { init: 'VP', name: 'Mr. Vivekanand Patil', qual: 'B. Tech. Textile Chemistry', role: 'Director – Sales', note: '' },
                  { init: 'SSP', name: 'Mr. Somshekhar Patil', qual: 'B. Sc. | M.B.A.', role: 'Director – Operations', note: '' },
                ].map(({ init, name, qual, role, note }) => (
                  <li key={name} className="flex items-start bg-card p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-200 group">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mr-4 shrink-0 font-serif font-bold text-[10px] tracking-tight group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {init}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                        <h4 className="font-serif font-bold text-foreground text-sm group-hover:text-primary transition-colors">{name}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide whitespace-normal">{role}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{qual}</span>
                      {note && <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">{note}</p>}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-card rounded-xl border border-border p-4">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Direct Factory Desk</p>
                <a href="tel:+919881235243" className="flex items-center justify-between group">
                  <span className="text-xs text-muted-foreground font-medium">Factory Contact</span>
                  <span className="text-xs font-bold text-primary group-hover:underline">+91 98812 35243</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <span className="eyebrow mb-4">What We Stand For</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="feature-card p-6 group">
                  <div className="icon-well mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="py-14 band-navy text-white relative overflow-hidden scroll-mt-24">
          <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">Operational Assets</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">Technical Infrastructure</h2>
                <p className="text-white/60 text-sm mt-2">State-of-the-art manufacturing and processing capabilities.</p>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-5 py-3 shrink-0">
                <Shield className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-xs font-bold">Quality Assured</span>
                  <span className="text-[10px] text-white/60 font-semibold">Standard Operating Procedures</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-4 md:-mt-8">
              {INFRA.map(({ icon: Icon, title, desc, specs, extra }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="bg-card text-foreground rounded-xl border-2 border-primary p-5 flex flex-col group shadow-lg"
                >
                  <div className="flex items-center mb-3">
                    <div className="icon-well !w-9 !h-9 mr-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold">{title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs mb-5 leading-relaxed flex-grow">{desc}</p>
                  <ul className="space-y-2.5">
                    {specs.map((s) => (
                      <li key={s} className="flex items-start text-xs text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2.5 mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  {extra && (
                    <div className="mt-5 pt-4 border-t border-border">
                      <div className="flex items-start gap-2">
                        <Leaf className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <p className="text-[10.5px] text-muted-foreground leading-relaxed">
                          <strong className="text-primary">Eco: </strong>{extra}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* QC Lab */}
        <section className="py-14 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow mb-4">Quality Assurance</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Quality Control Laboratory</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                Our unit features a fully equipped analytical and research laboratory, where all essential
                testing and application of Dyestuffs is meticulously carried out. This rigorous QC enables
                us to cater to domestic and foreign markets with complete customer satisfaction for over 44 years.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm mb-10">
                Our dedicated team of chemists and technical staff work continuously to formulate, test,
                and deliver products that strictly adhere to customized B2B client specifications.
              </p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { val: '44+', lbl: 'Years Testing Exp.' },
                  { val: '24/7', lbl: 'QC Operations' },
                  { val: '9', lbl: 'Analytical Instruments' },
                ].map(({ val, lbl }) => (
                  <div key={lbl} className="stat-card px-6 py-4 min-w-[110px]">
                    <span className="block font-serif text-2xl font-bold text-primary mb-1">{val}</span>
                    <span className="text-[9.5px] font-semibold text-muted-foreground uppercase tracking-wider">{lbl}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card p-8 rounded-xl border border-border shadow-sm"
            >
              <h3 className="font-serif text-base font-bold mb-5 text-foreground border-b border-border pb-3 flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2 shrink-0" />
                Equipped Analytical Infrastructure
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {QC_EQUIPMENT.map((item) => (
                  <li key={item} className="flex items-start text-xs font-medium text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2.5 mt-1.5 shrink-0" />
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
