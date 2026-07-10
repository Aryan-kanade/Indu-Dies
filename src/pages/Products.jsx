import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, Sparkles, Download, Box, Globe, Archive, Search, FileText, ArrowRight, CheckCircle2, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS_LIST = [
  { id: 1001, name: '[Reactive Red 195]',        shadeName: '[Brilliant Crimson]',   shadeColor: '#dc2626', category: 'Reactive Dye',    tds: 'TDS_ID1001.pdf' },
  { id: 1002, name: '[Optical Brightener OB+]',  shadeName: '[Intense Violet-Blue]', shadeColor: '#2563eb', category: 'Opt. Brightener', tds: 'TDS_ID1002.pdf' },
  { id: 1003, name: '[Reactive Yellow 145]',     shadeName: '[Golden Yellow]',        shadeColor: '#f59e0b', category: 'Reactive Dye',    tds: 'TDS_ID1003.pdf' },
  { id: 1004, name: '[Optical Brightener CBS-X]',shadeName: '[Bright Blue]',          shadeColor: '#06b6d4', category: 'Opt. Brightener', tds: 'TDS_ID1004.pdf' },
  { id: 1005, name: '[Reactive Blue 222]',       shadeName: '[Navy Blue]',            shadeColor: '#1e3a5f', category: 'Reactive Dye',    tds: 'TDS_ID1005.pdf' },
];

const DYE_SHADES = [
  { name: '[Reactive Red 195]',    hex: '#dc2626', label: 'Brilliant Crimson' },
  { name: '[Reactive Yellow 145]', hex: '#f59e0b', label: 'Golden Yellow'      },
  { name: '[Reactive Blue 222]',   hex: '#1e3a5f', label: 'Navy Blue'          },
  { name: '[Reactive Orange]',     hex: '#ea580c', label: 'Deep Orange'        },
  { name: '[Reactive Violet]',     hex: '#7c3aed', label: 'Vivid Violet'       },
  { name: '[Reactive Green]',      hex: '#059669', label: 'Emerald Green'      },
  { name: '[Reactive Black]',      hex: '#1c1917', label: 'Carbon Black'       },
  { name: '[Reactive Brown]',      hex: '#92400e', label: 'Warm Brown'         },
];

const TABS = [
  { id: 'all',        label: 'All Products'     },
  { id: 'reactive',   label: 'Reactive Dyes'    },
  { id: 'brightener', label: 'Opt. Brighteners' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

const Products = () => {
  const [activeTab, setActiveTab]   = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredShade, setHoveredShade] = useState(null);

  const filteredProducts = PRODUCTS_LIST.filter((p) => {
    const matchesCategory =
      activeTab === 'all' ||
      (activeTab === 'reactive'   && p.category === 'Reactive Dye')    ||
      (activeTab === 'brightener' && p.category === 'Opt. Brightener');
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shadeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toString().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
    <Helmet>
      <title>Reactive Dyes &amp; Optical Brighteners Catalog | Indu Dyes</title>
      <meta name="description" content="Explore our extensive catalog of Reactive Dyes (HE, ME, VS, Cold Brand) and Optical Brighteners for textiles, paper, and detergents. Download technical data sheets." />
      <link rel="canonical" href="https://www.indudyes.com/products" />
    </Helmet>

    <div className="bg-bg-secondary min-h-screen pt-[112px] pb-20 sm:pb-0">

      {/* ── Hero ── */}
      <section className="section-hero text-white py-20 border-b-4 border-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-80 pointer-events-none" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-primary/8 to-transparent pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="accent-line" />
            <span className="text-brand-accent font-bold uppercase tracking-wider text-xs">Product Catalog</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Chemicals &amp; Dyes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl leading-relaxed"
          >
            High-quality Reactive Dyes and Optical Brighteners formulated and tested to conform
            to rigorous international specifications.
          </motion.p>
        </div>
      </section>

      {/* ── Shade Showcase Bar ── */}
      <section className="bg-white border-b border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <Palette className="w-4 h-4 text-brand-primary" />
            <span className="section-label">Available Shade Range (Reactive Dyes)</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {DYE_SHADES.map(({ name, hex, label }) => (
              <motion.div
                key={name}
                onHoverStart={() => setHoveredShade(name)}
                onHoverEnd={() => setHoveredShade(null)}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ duration: 0.15 }}
                className="relative cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl shadow-sm border-2 border-white ring-1 ring-gray-200 transition-all duration-200"
                  style={{ backgroundColor: hex }}
                  title={label}
                />
                <AnimatePresence>
                  {hoveredShade === name && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-text-primary text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap z-20 shadow-lg"
                    >
                      {label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="w-12 h-12 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs font-bold cursor-default" title="More available">
              +
            </div>
          </div>
          <p className="text-[10.5px] text-gray-400 font-medium mt-3">
            Hover over a shade to preview. Contact sales for the full shade card catalog.
          </p>
        </div>
      </section>

      {/* ── Category Cards ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Reactive Dyes */}
          <motion.div
            custom={0} variants={cardVariants}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-48 bg-surface-dark flex items-center justify-center relative border-b border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-primary/12 rounded-full blur-2xl" />
              <div className="relative z-10 text-white flex flex-col items-center">
                <Beaker className="w-14 h-14 mb-3 text-brand-accent opacity-80" />
                <span className="text-[10px] font-bold tracking-widest uppercase border border-dashed border-gray-600 px-3 py-1.5 rounded-lg bg-surface-darker/60 backdrop-blur-md text-gray-400 font-mono">
                  [Reactive Dyes Catalog]
                </span>
              </div>
              {/* Color strip */}
              <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                {['#dc2626','#f59e0b','#1e3a5f','#ea580c','#7c3aed','#059669'].map((c) => (
                  <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-text-primary mb-3" style={{ fontFamily: 'var(--font-display)' }}>Reactive Dyes</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                Our extensive range offers excellent color fastness, brilliant shades, and high tinctorial value specifically engineered for demanding textile applications.
              </p>
              <div className="bg-bg-secondary p-4 rounded-xl border border-gray-100 mb-6">
                <h4 className="font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-3">Available Series</h4>
                <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-text-primary">
                  {['HE Series','ME Series','VS Series','Cold Brand'].map((s) => (
                    <li key={s} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-primary mr-2 rounded-full shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#shade-cards" onClick={() => setActiveTab('reactive')} className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors group/link">
                View Dyes Table <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Optical Brighteners */}
          <motion.div
            custom={1} variants={cardVariants}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-48 bg-surface-dark flex items-center justify-center relative border-b border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:16px_16px] opacity-40" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="relative z-10 text-white flex flex-col items-center">
                <Sparkles className="w-14 h-14 mb-3 text-brand-accent opacity-80" />
                <span className="text-[10px] font-bold tracking-widest uppercase border border-dashed border-gray-600 px-3 py-1.5 rounded-lg bg-surface-darker/60 backdrop-blur-md text-gray-400 font-mono">
                  [Optical Brighteners Specs]
                </span>
              </div>
              {/* Glow strip */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-text-primary mb-3" style={{ fontFamily: 'var(--font-display)' }}>Optical Brighteners</h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                High-performance optical brightening agents that enhance whiteness and brightness, effectively counteracting inherent yellowish tints in textiles, paper, and detergents.
              </p>
              <div className="bg-bg-secondary p-4 rounded-xl border border-gray-100 mb-6">
                <h4 className="font-bold text-[10px] text-gray-500 uppercase tracking-widest mb-3">Application Grades</h4>
                <ul className="grid grid-cols-1 gap-2 text-xs font-semibold text-text-primary">
                  {['Textiles Processing','Paper Manufacturing','Detergents Formulation'].map((g) => (
                    <li key={g} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-accent mr-2 rounded-full shrink-0" /> {g}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#shade-cards" onClick={() => setActiveTab('brightener')} className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors group/link">
                View Brighteners Table <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Product Table ── */}
      <section id="shade-cards" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-5 border-b border-gray-200 pb-7">
          <div>
            <span className="section-label mb-2 block">Detailed Specifications</span>
            <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Product Information Table
            </h2>
            <p className="text-sm text-text-secondary mt-1">Technical Data Sheets (TDS) and shade information.</p>
          </div>
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search products, codes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all duration-200 shadow-sm"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-primary text-white border-brand-primary shadow-sm shadow-brand-primary/20'
                  : 'bg-white text-text-secondary border-gray-200 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full data-table">
              <thead>
                <tr>
                  <th>Product Name / Code</th>
                  <th>Shade</th>
                  <th>Category</th>
                  <th className="text-center">TDS</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-50">
                <AnimatePresence>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p, i) => (
                      <motion.tr
                        key={p.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.04 }}
                      >
                        <td>
                          <div className="text-sm font-bold text-text-primary">{p.name}</div>
                          <div className="text-[10px] font-mono text-gray-400 mt-0.5">ID-{p.id}</div>
                        </td>
                        <td>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-7 h-7 rounded-lg border-2 border-white shadow-md shrink-0"
                              style={{ backgroundColor: p.shadeColor }}
                            />
                            <span className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{p.shadeName}</span>
                          </div>
                        </td>
                        <td>
                          <span className={`px-2.5 py-1 inline-flex text-[10px] font-bold uppercase tracking-wider rounded-lg border ${
                            p.category === 'Reactive Dye'
                              ? 'bg-brand-light text-brand-primary border-blue-200/60'
                              : 'bg-cyan-50 text-cyan-700 border-cyan-200/60'
                          }`}>
                            {p.category}
                          </span>
                        </td>
                        <td className="text-center">
                          <a
                            href={`/${p.tds}`}
                            download
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-brand-primary hover:text-white transition-all duration-200 border border-gray-100 hover:border-brand-primary"
                            title="Download Technical Data Sheet"
                          >
                            <FileText className="w-4 h-4" />
                          </a>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-14 text-center text-sm font-medium text-text-secondary">
                        No products match your search or filter criteria.
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          <div className="bg-bg-secondary px-6 py-3.5 border-t border-gray-100 flex items-center justify-between">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
              Partial catalog shown —{' '}
              <Link to="/contact" className="text-brand-primary hover:underline">contact sales</Link>{' '}
              for full listing.
            </p>
            <span className="text-[10px] text-gray-400 font-mono">
              {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      {/* ── Packaging & Logistics ── */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label mb-3 block justify-center">Logistics & Fulfillment</span>
            <h2 className="text-2xl font-bold text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Packaging &amp; Global Logistics
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Archive, title: 'Packaging Standards',
                desc: (<>Standard industrial packaging in <strong>25 kg HDPE Bags</strong>, <strong>Paper Bags</strong>, and <strong>Drums</strong>. All products are spray-dried and dedusted. Custom sizes available.</>),
              },
              {
                icon: Box, title: 'Minimum Order (MOQ)',
                desc: 'Flexible MOQ requirements. We cater to both small-scale R&D requirements and continuous large bulk orders for domestic manufacturing.',
              },
              {
                icon: Globe, title: 'Export Markets',
                desc: 'Active global presence. We export through reputed Export Houses to various international markets. Contact us for export pricing and documentation.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(12,78,201,0.08)' }}
                transition={{ duration: 0.2 }}
                className="bg-bg-secondary p-8 rounded-2xl border border-gray-200/80 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 border border-gray-200 shadow-sm text-brand-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base mb-3 text-text-primary" style={{ fontFamily: 'var(--font-display)' }}>{title}</h4>
                <p className="text-text-secondary text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* QA bar */}
          <div className="mt-12 highlight-box flex flex-col sm:flex-row items-center gap-4 justify-between p-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
              <p className="text-sm font-semibold text-text-primary">
                All products manufactured under standardized quality management processes with full QC documentation available on request.
              </p>
            </div>
            <Link to="/contact" className="premium-button shrink-0 !py-2.5 !px-6 text-sm">
              Request Samples
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Products;
