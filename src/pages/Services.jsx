import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Settings, CheckCircle2, ChevronRight, FlaskConical, TestTube,
  ArrowRight, Thermometer, Wind, Shield, FileCheck, Beaker, Microscope,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { cardVariants, VIEWPORT } from '../motion/variants';

const PROCESS_STEPS = [
  {
    n: '01', icon: FileCheck,
    title: 'Inquiry & Specifications',
    desc: 'Share your requirements: target particle size, moisture content, throughput, and chemical composition.',
  },
  {
    n: '02', icon: Microscope,
    title: 'R&D Consultation',
    desc: 'Our lab reviews formulation parameters and recommends optimal inlet/outlet temperatures and atomizer type.',
  },
  {
    n: '03', icon: Beaker,
    title: 'Trial Batch Production',
    desc: 'A sample batch is produced, QC-tested for particle size, moisture, and flowability, then dispatched for your approval.',
  },
  {
    n: '04', icon: CheckCircle2,
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
    desc: 'Leveraging over 44 years of technical experience to develop, synthesize, and manufacture custom chemical solutions backed by our R&D lab.',
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

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Indu Dyes</title>
        <meta name="description" content="Indu Dyes offers advanced Spray Drying Job Works (350 kg/hr capacity) and custom industrial powder blending. We convert liquid formulations into pure, free-flowing powders." />
        <link rel="canonical" href="https://www.indudyes.com/services" />
        <meta property="og:title" content="Precision Spray Drying Job Works | Powder Blending | Indu Dyes" />
        <meta property="og:description" content="Indu Dyes offers advanced Spray Drying Job Works (350 kg/hr capacity) and custom industrial powder blending. We convert liquid formulations into pure, free-flowing powders." />
        <meta property="og:url" content="https://www.indudyes.com/services" />
        <meta property="og:image" content="https://www.indudyes.com/logo.png" />
        <meta property="og:site_name" content="Indu Dyes" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-background min-h-screen pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:pb-0">
        {/* Hero */}
        <section className="relative hero-gradient pt-nav border-b border-border overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-5">
              Industrial Capabilities
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-5 text-foreground"
            >
              Technical Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Precision Spray Drying Job Works and custom blending solutions tailored for your
              specific industrial requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {[
                { label: '350 kg/hr', sub: 'Evaporation Capacity' },
                { label: '24/7', sub: 'Process Control' },
                { label: '4-Step', sub: 'Streamlined Process' },
              ].map(({ label, sub }) => (
                <div key={label} className="bg-card border border-border rounded-xl px-5 py-3 shadow-sm">
                  <span className="block font-serif text-lg font-bold text-primary">{label}</span>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main service */}
        <section className="py-10 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
              <Reveal variant="fadeLeft" className="p-5 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-border">
                <span className="eyebrow mb-3">Primary Capability</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 flex items-start sm:items-center">
                  <Settings className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-primary shrink-0 mt-1 sm:mt-0" />
                  Spray Drying Job Works
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm mb-5">
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
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-primary/5 border border-primary/15 p-3.5 rounded-xl text-center">
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1">Evaporation Capacity</p>
                    <p className="font-serif text-2xl font-bold text-primary">
                      350 <span className="text-xs font-semibold text-muted-foreground">kg/hr</span>
                    </p>
                  </div>
                  <div className="bg-muted/50 border border-border p-3.5 rounded-xl text-center">
                    <Thermometer className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">Process Control</p>
                    <p className="text-xs font-semibold text-foreground">Temp. &amp; Moisture Regulated</p>
                  </div>
                </div>
                <div className="bg-muted/40 border border-border p-4 rounded-xl">
                  <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-widest mb-3">Industries Served</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {INDUSTRIES.map((ind) => (
                      <div key={ind} className="flex items-center text-xs font-semibold text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-2 shrink-0" /> {ind}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal
                variant="fadeRight"
                className="band-navy p-5 sm:p-6 lg:p-7 text-white relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
                <h3 className="relative font-serif text-lg font-bold mb-3 border-b border-white/15 pb-2.5">Process Technology</h3>
                <ul className="relative space-y-2.5 mb-5 text-xs">
                  {[
                    'Hot air spray drying via rotary atomizer and pressure nozzle systems.',
                    'Produces spherical or amorphous, tasteless, odorless, and free-flowing powders.',
                    'Controlled inlet/outlet temperature ensures batch-to-batch consistency.',
                  ].map((item) => (
                    <li key={item} className="flex items-start text-white/70">
                      <ChevronRight className="w-4 h-4 text-primary mr-2 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-auto">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-3">Sample Request Process</h4>
                  <div className="space-y-2.5 mb-5">
                    {PROCESS_STEPS.map(({ n, title }) => (
                      <div key={n} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center font-bold text-[11px] shrink-0">
                          {n}
                        </div>
                        <span className="text-xs font-semibold text-white/80">{title}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="relative inline-flex items-center justify-center w-full min-h-11 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Request Sample / Quote
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4-step process */}
        <section className="py-14 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Reveal className="text-center mb-10">
              <span className="eyebrow mb-4">How It Works</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">4-Step Job Work Process</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 relative">
              {/* Aligns with vertical center of the 64px icon boxes (py-8 + half icon) */}
              <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 -translate-y-1/2 bg-gradient-to-r from-primary/20 via-mid-orange/40 to-primary/20 z-0" />
              {PROCESS_STEPS.map(({ n, icon: Icon, title, desc }, i) => (
                <motion.div
                  key={n}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="relative flex flex-col items-center text-center px-4 sm:px-6 py-5 sm:py-8 group border border-border rounded-xl md:border-0 md:rounded-none bg-muted/20 md:bg-transparent"
                >
                  <div className="relative w-16 h-16 rounded-xl border-2 border-primary bg-card flex flex-col items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-4 ring-card">
                    <div className="absolute inset-0 rounded-[10px] bg-primary/10 pointer-events-none" />
                    <Icon className="relative w-7 h-7 text-primary" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-card border-2 border-border text-[9px] font-bold text-muted-foreground flex items-center justify-center z-10">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:flex absolute top-16 -right-3 z-20 w-7 h-7 -translate-y-1/2 bg-card border border-border rounded-full items-center justify-center shadow-sm ring-4 ring-card">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/contact" className="premium-button w-full sm:w-auto justify-center inline-flex !py-3 !px-8">
                Start Your Inquiry <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Additional capabilities — EMS feature cards */}
        <section className="py-14 px-4 lg:px-8 max-w-7xl mx-auto border-t border-border">
          <Reveal className="mb-12 text-center">
            <span className="eyebrow mb-4">Extended Services</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Additional Technical Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="ems-feature-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-4 group"
              >
                <div className="icon-well shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg sm:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-xs leading-relaxed text-left">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Turnaround + CTA */}
        <section className="pb-8 sm:pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
          <Reveal variant="scaleIn" className="relative bg-primary rounded-xl p-6 sm:p-10 text-center text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Ready to Start a Job Work?</h3>
              <p className="text-primary-foreground/80 text-sm mb-2 max-w-lg mx-auto">
                Share your specifications and our technical team will respond within one business day with a proposal.
              </p>
              <p className="text-primary-foreground/70 text-xs mb-7 max-w-lg mx-auto">
                Trial batch samples typically dispatch within <strong className="text-primary-foreground">7–10 business days</strong> of specification approval.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto w-full">
                <Link to="/contact" className="inline-flex items-center justify-center bg-card text-primary font-semibold px-7 py-3 rounded-md hover:bg-muted transition-all min-h-11 w-full sm:w-auto">
                  Submit Inquiry <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="https://wa.me/919881235243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/40 text-primary-foreground font-semibold px-7 py-3 rounded-md hover:bg-white/10 transition-all min-h-11 w-full sm:w-auto"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
};

export default Services;
