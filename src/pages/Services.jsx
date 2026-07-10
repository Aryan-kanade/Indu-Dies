import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Settings, CheckCircle2, ChevronRight, Droplets, FlaskConical, TestTube,
  ArrowRight, Thermometer, Wind, Shield, FileCheck, Beaker, Microscope, Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PROCESS_STEPS = [
  {
    n: '01', icon: FileCheck, color: 'text-brand-primary', bg: 'bg-brand-light border-blue-200/50',
    title: 'Inquiry & Specifications',
    desc: 'Share your requirements: target particle size, moisture content, throughput, and chemical composition.',
  },
  {
    n: '02', icon: Microscope, color: 'text-violet-600', bg: 'bg-violet-50 border-violet-200/50',
    title: 'R&D Consultation',
    desc: 'Our lab reviews formulation parameters and recommends optimal inlet/outlet temperatures and atomizer type.',
  },
  {
    n: '03', icon: Beaker, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200/50',
    title: 'Trial Batch Production',
    desc: 'A sample batch is produced, QC-tested for particle size, moisture, and flowability, then dispatched for your approval.',
  },
  {
    n: '04', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200/50',
    title: 'Full Production & Delivery',
    desc: 'Bulk production is scheduled with complete QC documentation, packed to spec, and dispatched on time.',
  },
];

const INDUSTRIES = [
  'Specialty Chemicals', 'Agriculture', 'Materials Science',
  'Inorganic Chemicals', 'Polymers', 'Dyes & Pigments',
];

const CAPABILITIES = [
  {
    icon: TestTube, title: 'Powder Blending',
    desc: 'Precision blending utilizing SS 316 Ribbon Blenders (1.5 M³) to ensure homogeneous mixtures for standard and custom chemical formulations.',
  },
  {
    icon: FlaskConical, title: 'Custom Formulation',
    desc: 'Leveraging over 42 years of technical experience to develop, synthesize, and manufacture custom chemical solutions backed by our R&D lab.',
  },
  {
    icon: Shield, title: 'Quality Assurance',
    desc: 'Every batch undergoes rigorous QC testing including particle size analysis, moisture balance, and spectrophotometric evaluation.',
  },
  {
    icon: Wind, title: 'Dedusting',
    desc: 'Advanced dedusting operations ensure free-flowing, dust-free powders that meet strict handling and transportation safety standards.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] } }),
};

const Services = () => {
  return (
    <>
    <Helmet>
      <title>Precision Spray Drying Job Works | Powder Blending | Indu Dyes</title>
      <meta name="description" content="Indu Dyes offers advanced Spray Drying Job Works (350 kg/hr capacity) and custom industrial powder blending. We convert liquid formulations into pure, free-flowing powders." />
      <link rel="canonical" href="https://www.indudyes.com/services" />
    </Helmet>

    <div className="bg-bg-secondary min-h-screen pt-[112px] pb-20 sm:pb-0">

      {/* ── Hero ── */}
      <section className="section-hero text-white py-20 border-b-4 border-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/8 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="accent-line" />
            <span className="text-brand-accent font-bold uppercase tracking-wider text-xs">Industrial Capabilities</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Technical Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            Precision Spray Drying Job Works and custom blending solutions tailored for your
            specific industrial requirements.
          </motion.p>

          {/* Hero quick metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {[
              { label: '350 kg/hr', sub: 'Evaporation Capacity' },
              { label: '24/7', sub: 'Process Control' },
              { label: '4-Step', sub: 'Streamlined Process' },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-white/6 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
                <span className="block text-lg font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{label}</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main Service: Spray Drying ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100"
            >
              <span className="section-label mb-4 block">Primary Capability</span>
              <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center" style={{ fontFamily: 'var(--font-display)' }}>
                <Settings className="w-7 h-7 mr-3 text-brand-primary shrink-0" />
                Spray Drying Job Works
              </h2>

              <div className="space-y-4 text-text-secondary leading-relaxed text-sm mb-8">
                <p>
                  Our advanced spray drying solution guarantees exceptional particle size control,
                  uniformity, and purity. We cater to a diverse range of B2B industries, providing
                  reliable toll manufacturing and contract processing solutions.
                </p>
                <p>
                  With state-of-the-art equipment and precise thermal management, every batch meets
                  stringent quality standards — reduced moisture content, extended shelf life, and
                  enhanced product stability.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-brand-light to-blue-50 border border-blue-200/60 p-5 rounded-xl text-center hover:shadow-sm transition-shadow duration-200">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Evaporation Capacity</p>
                  <p className="text-2xl font-bold text-brand-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    350 <span className="text-xs font-semibold text-gray-400">kg/hr</span>
                  </p>
                </div>
                <div className="bg-gradient-to-br from-bg-secondary to-slate-50 border border-gray-200 p-5 rounded-xl text-center hover:shadow-sm transition-shadow duration-200">
                  <Thermometer className="w-5 h-5 text-brand-accent mx-auto mb-2" />
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Process Control</p>
                  <p className="text-xs font-bold text-text-primary">Temp. &amp; Moisture Regulated</p>
                </div>
              </div>

              {/* Industries */}
              <div className="bg-bg-secondary border border-gray-200 p-6 rounded-xl">
                <h4 className="font-bold text-xs text-gray-500 uppercase tracking-widest mb-4">Industries Served</h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {INDUSTRIES.map((ind) => (
                    <div key={ind} className="flex items-center text-xs font-semibold text-text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary mr-2 shrink-0" /> {ind}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Dark Process Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface-darker p-10 lg:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
              {/* Schematic placeholder */}
              <div className="relative h-44 mb-8 bg-surface-dark rounded-xl flex flex-col items-center justify-center border border-gray-800 overflow-hidden">
                <div className="absolute top-4 left-4 flex space-x-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">Dryer_System_V1</span>
                </div>
                <Droplets className="w-10 h-10 text-brand-accent mb-2.5 opacity-60" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-dashed border-gray-700 px-3 py-1.5 rounded font-mono">
                  [Spray Dryer Blueprint]
                </span>
              </div>

              <h3 className="relative text-lg font-bold text-white mb-4 border-b border-gray-800 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Process Technology
              </h3>
              <ul className="relative space-y-3 mb-8 text-xs">
                {[
                  'Hot air spray drying via rotary atomizer and pressure nozzle systems.',
                  'Produces spherical or amorphous, tasteless, odorless, and free-flowing powders.',
                  'Controlled inlet/outlet temperature ensures batch-to-batch consistency.',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <ChevronRight className="w-4 h-4 text-brand-accent mr-2 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="relative">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Sample Request Process</h4>
                <div className="space-y-4">
                  {PROCESS_STEPS.map(({ n, title }) => (
                    <div key={n} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-surface-dark border border-brand-accent/30 text-brand-accent flex items-center justify-center font-bold text-[11px] shrink-0 font-mono">
                        {n}
                      </div>
                      <span className="text-xs font-semibold text-gray-300">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 4-Step Visual Process Flow ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block justify-center">How It Works</span>
            <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              4-Step Job Work Process
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-accent/30 to-emerald-400/20 z-0" />

            {PROCESS_STEPS.map(({ n, icon: Icon, color, bg, title, desc }, i) => (
              <motion.div
                key={n}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center px-6 py-8 group"
              >
                {/* Step number bubble */}
                <div className={`relative w-16 h-16 rounded-2xl border-2 ${bg} flex flex-col items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                  <span className={`absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-gray-200 text-[9px] font-black text-gray-500 flex items-center justify-center`}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-text-primary text-sm mb-2 group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>

                {/* Arrow for non-last items on desktop */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 -right-3 z-20 w-7 h-7 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm">
                    <ChevronRight className="w-4 h-4 text-brand-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/contact" className="premium-button inline-flex !py-3 !px-8">
              Start Your Inquiry <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Additional Capabilities ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="mb-12 text-center">
          <span className="section-label mb-3 block justify-center">Extended Services</span>
          <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
            Additional Technical Capabilities
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="feature-card p-7 flex items-start group"
            >
              <div className="w-12 h-12 bg-brand-light border border-blue-200/50 rounded-xl flex items-center justify-center mr-5 shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Turnaround Time Highlight ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="highlight-box flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-light border border-blue-200/60 flex items-center justify-center text-brand-primary shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                Fast Turnaround Guarantee
              </h3>
              <p className="text-text-secondary text-sm mt-0.5">
                Trial batch samples dispatched within <strong className="text-text-primary">7–10 business days</strong> of specification approval. Production schedules confirmed upfront.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/contact" className="premium-button !py-3 !px-6 text-sm shrink-0">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl p-10 text-center text-white overflow-hidden">
          <div className="absolute inset-0 line-grid pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Start a Job Work?
            </h3>
            <p className="text-blue-100 text-sm mb-7 max-w-md mx-auto">
              Provide your specifications and our technical team will respond within one business day with a proposal.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-brand-primary font-bold px-7 py-3 rounded-xl hover:bg-gray-50 transition-all shadow-sm hover:-translate-y-0.5 duration-200">
              Submit Inquiry <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Services;
