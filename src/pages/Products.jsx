import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, ArrowRight, CheckCircle2, Palette, Archive, Box, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { cardVariants, VIEWPORT } from '../motion/variants';

const PRODUCTS_LIST = [
  { id: 1001, name: 'Reactive Red 195', shadeName: 'Brilliant Crimson', shadeColor: '#dc2626', category: 'Reactive Dye', series: 'HE', application: 'Cotton / Cellulosics' },
  { id: 1002, name: 'Reactive Yellow 145', shadeName: 'Golden Yellow', shadeColor: '#f59e0b', category: 'Reactive Dye', series: 'HE', application: 'Cotton / Cellulosics' },
  { id: 1003, name: 'Reactive Blue 222', shadeName: 'Navy Blue', shadeColor: '#1e3a5f', category: 'Reactive Dye', series: 'HE', application: 'Cotton / Cellulosics' },
  { id: 1004, name: 'Reactive Orange 122', shadeName: 'Deep Orange', shadeColor: '#ea580c', category: 'Reactive Dye', series: 'ME', application: 'Cotton / Blends' },
  { id: 1005, name: 'Reactive Violet 5', shadeName: 'Vivid Violet', shadeColor: '#7c3aed', category: 'Reactive Dye', series: 'ME', application: 'Cotton / Blends' },
  { id: 1006, name: 'Reactive Black 5', shadeName: 'Carbon Black', shadeColor: '#1c1917', category: 'Reactive Dye', series: 'VS', application: 'Cotton Exhaust' },
  { id: 1007, name: 'Reactive Blue 19', shadeName: 'Royal Blue', shadeColor: '#1d4ed8', category: 'Reactive Dye', series: 'VS', application: 'Cotton Exhaust' },
  { id: 1008, name: 'Reactive Red 2', shadeName: 'Scarlet Red', shadeColor: '#b91c1c', category: 'Reactive Dye', series: 'Cold Brand', application: 'Cold Pad Batch' },
  { id: 1009, name: 'Reactive Yellow 84', shadeName: 'Lemon Yellow', shadeColor: '#ca8a04', category: 'Reactive Dye', series: 'Cold Brand', application: 'Cold Pad Batch' },
  { id: 1010, name: 'Optical Brightener OB+', shadeName: 'Intense Violet-Blue', shadeColor: '#2563eb', category: 'Opt. Brightener', series: 'OB', application: 'Textiles / Paper' },
  { id: 1011, name: 'Optical Brightener CBS-X', shadeName: 'Bright Blue', shadeColor: '#06b6d4', category: 'Opt. Brightener', series: 'CBS', application: 'Detergents' },
  { id: 1012, name: 'Optical Brightener BA', shadeName: 'Cool White', shadeColor: '#38bdf8', category: 'Opt. Brightener', series: 'BA', application: 'Paper / Pulp' },
];

const DYE_SHADES = [
  { name: 'Reactive Red 195', hex: '#dc2626', label: 'Brilliant Crimson' },
  { name: 'Reactive Yellow 145', hex: '#f59e0b', label: 'Golden Yellow' },
  { name: 'Reactive Blue 222', hex: '#1e3a5f', label: 'Navy Blue' },
  { name: 'Reactive Orange', hex: '#ea580c', label: 'Deep Orange' },
  { name: 'Reactive Violet', hex: '#7c3aed', label: 'Vivid Violet' },
  { name: 'Reactive Green', hex: '#059669', label: 'Emerald Green' },
  { name: 'Reactive Black', hex: '#1c1917', label: 'Carbon Black' },
  { name: 'Reactive Brown', hex: '#92400e', label: 'Warm Brown' },
];

const TABS = [
  { id: 'all', label: 'All Products' },
  { id: 'reactive', label: 'Reactive Dyes' },
  { id: 'brightener', label: 'Opt. Brighteners' },
];

const tdsMailto = (product) =>
  `mailto:indudyes@gmail.com?subject=${encodeURIComponent(`TDS Request: ${product.name} (ID-${product.id})`)}&body=${encodeURIComponent(`Hello Indu Dyes,\n\nPlease send the Technical Data Sheet for ${product.name} (ID-${product.id}).\n\nThank you.`)}`;

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredShade, setHoveredShade] = useState(null);

  const filteredProducts = PRODUCTS_LIST.filter((p) => {
    const matchesCategory =
      activeTab === 'all' ||
      (activeTab === 'reactive' && p.category === 'Reactive Dye') ||
      (activeTab === 'brightener' && p.category === 'Opt. Brightener');
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shadeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.series.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.application.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toString().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Indu Dyes</title>
        <meta name="description" content="Explore our extensive catalog of Reactive Dyes (HE, ME, VS, Cold Brand) and Optical Brighteners for textiles, paper, and detergents. Request technical data sheets." />
        <link rel="canonical" href="https://www.indudyes.com/products" />
        <meta property="og:title" content="Reactive Dyes & Optical Brighteners Catalog | Indu Dyes" />
        <meta property="og:description" content="Explore our extensive catalog of Reactive Dyes (HE, ME, VS, Cold Brand) and Optical Brighteners for textiles, paper, and detergents. Request technical data sheets." />
        <meta property="og:url" content="https://www.indudyes.com/products" />
        <meta property="og:image" content="https://www.indudyes.com/logo.png" />
        <meta property="og:site_name" content="Indu Dyes" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-background min-h-screen pb-12 sm:pb-0">
        <section className="relative hero-gradient pt-nav border-b border-border overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-14">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-5">
              Product Catalog
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl font-bold mb-5 text-foreground"
            >
              Chemicals &amp; Dyes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              High-quality Reactive Dyes and Optical Brighteners formulated and tested to conform
              to rigorous international specifications.
            </motion.p>
          </div>
        </section>

        {/* Shade showcase */}
        <section className="bg-card border-b border-border py-8 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Palette className="w-4 h-4 text-primary" />
              <span className="section-label">Available Shade Range (Reactive Dyes)</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {DYE_SHADES.map(({ name, hex, label }) => (
                <motion.div
                  key={name}
                  onHoverStart={() => setHoveredShade(name)}
                  onHoverEnd={() => setHoveredShade(null)}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="relative cursor-default flex flex-col items-center w-[4.5rem] sm:w-auto"
                >
                  <div
                    role="img"
                    aria-label={`${name}: ${label}`}
                    className="w-12 h-12 rounded-xl shadow-sm border-2 border-card ring-1 ring-border transition-all duration-200"
                    style={{ backgroundColor: hex }}
                    title={`${name} — ${label}`}
                  />
                  <span className="md:hidden mt-1.5 text-[10px] text-muted-foreground font-medium text-center leading-tight">
                    {label}
                  </span>
                  <AnimatePresence>
                    {hoveredShade === name && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.9 }}
                        className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-foreground text-background text-[10px] font-bold px-2.5 py-1.5 rounded-md whitespace-nowrap z-20 shadow-lg"
                      >
                        {label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-medium mt-3">
              Shade labels shown below each swatch on mobile. Contact sales for the full shade card catalog.
            </p>
          </div>
        </section>

        {/* Category cards */}
        <section className="py-14 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Reactive Dyes',
                desc: 'Our extensive range offers excellent color fastness, brilliant shades, and high tinctorial value specifically engineered for demanding textile applications.',
                items: ['HE Series', 'ME Series', 'VS Series', 'Cold Brand'],
                tab: 'reactive',
                cta: 'View Dyes Table',
              },
              {
                title: 'Optical Brighteners',
                desc: 'High-performance optical brightening agents that enhance whiteness and brightness, effectively counteracting inherent yellowish tints in textiles, paper, and detergents.',
                items: ['Textiles Processing', 'Paper Manufacturing', 'Detergents Formulation'],
                tab: 'brightener',
                cta: 'View Brighteners Table',
              },
            ].map(({ title, desc, items, tab, cta }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
              >
                <div className="p-5 sm:p-7 flex-grow flex flex-col">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">{title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">{desc}</p>
                  <div className="bg-muted/50 p-4 rounded-xl border border-border mb-6">
                    <h4 className="font-semibold text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                      {tab === 'reactive' ? 'Available Series' : 'Application Grades'}
                    </h4>
                    <ul className={`grid ${tab === 'reactive' ? 'grid-cols-2' : 'grid-cols-1'} gap-2 text-xs font-semibold text-foreground`}>
                      {items.map((s) => (
                        <li key={s} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary mr-2 rounded-full shrink-0" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      document.getElementById('shade-cards')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    {cta} <ArrowRight className="w-4 h-4 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Product table */}
        <section id="shade-cards" className="py-14 px-4 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
          <div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-5 border-b border-border pb-5">
            <div>
              <span className="eyebrow mb-2">Detailed Specifications</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Product Information Table</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Technical Data Sheets are available on request — use Request TDS to email our sales desk.
              </p>
            </div>
            <div className="relative max-w-xs w-full">
              <label htmlFor="product-search" className="sr-only">Search products</label>
              <input
                id="product-search"
                type="search"
                placeholder="Search products, codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-9"
                aria-label="Search products by name or code"
              />
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 min-h-10 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-border -mx-4 sm:mx-0">
            <div className="overflow-x-auto px-4 sm:px-0">
              <table className="min-w-[820px] w-full">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-xs font-semibold uppercase tracking-wider px-4 sm:px-6 py-4 text-left text-muted-foreground">Product Name / Code</th>
                    <th className="text-xs font-semibold uppercase tracking-wider px-4 sm:px-6 py-4 text-left text-muted-foreground">Shade</th>
                    <th className="text-xs font-semibold uppercase tracking-wider px-4 sm:px-6 py-4 text-left text-muted-foreground">Series</th>
                    <th className="text-xs font-semibold uppercase tracking-wider px-4 sm:px-6 py-4 text-left text-muted-foreground">Application</th>
                    <th className="text-xs font-semibold uppercase tracking-wider px-4 sm:px-6 py-4 text-left text-muted-foreground">Category</th>
                    <th className="text-xs font-semibold uppercase tracking-wider px-4 sm:px-6 py-4 text-center text-muted-foreground">TDS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <AnimatePresence>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((p, i) => (
                        <motion.tr
                          key={p.id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.04 }}
                          className="hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="text-sm font-semibold text-foreground">{p.name}</div>
                            <div className="text-[10px] font-mono text-muted-foreground mt-0.5">ID-{p.id}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-7 h-7 rounded-lg border-2 border-card shadow-md shrink-0"
                                style={{ backgroundColor: p.shadeColor }}
                                role="img"
                                aria-label={`${p.shadeName} shade swatch`}
                              />
                              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{p.shadeName}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs font-semibold text-foreground">{p.series}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs text-muted-foreground">{p.application}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 inline-flex text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                              p.category === 'Reactive Dye'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {p.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <a
                              href={tdsMailto(p)}
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 min-h-10 rounded-md text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 border border-primary/20"
                              title="Request Technical Data Sheet"
                            >
                              <FileText className="w-3.5 h-3.5" /> Request
                            </a>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-14 text-center text-sm font-medium text-muted-foreground">
                          No products match your search or filter criteria.
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
            <div className="bg-muted/40 px-6 py-3.5 border-t border-border flex items-center justify-between">
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                Representative catalog —{' '}
                <Link to="/contact" className="text-primary hover:underline">contact sales</Link>{' '}
                for shade cards and full listing.
              </p>
              <span className="text-[10px] text-muted-foreground font-mono">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </section>

        {/* Packaging */}
        <section className="py-14 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Reveal className="mb-12 text-center">
              <span className="eyebrow mb-4">Logistics &amp; Fulfillment</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Packaging &amp; Global Logistics</h2>
            </Reveal>
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
                  desc: 'Active global presence through established export houses. Contact us for export pricing and documentation.',
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  whileHover={{ y: -4 }}
                  className="bg-muted/40 p-8 rounded-xl border border-border flex flex-col items-center text-center"
                >
                  <div className="icon-well mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-base mb-3 text-foreground">{title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
            <Reveal variant="scaleIn" className="mt-12 rounded-xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center gap-4 justify-between p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <p className="text-sm font-semibold text-foreground">
                  All products manufactured under standardized quality management processes with full QC documentation available on request.
                </p>
              </div>
              <Link to="/contact" className="premium-button shrink-0 !py-2.5 !px-6 text-sm">
                Request Samples
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
