import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Flower2,
  Truck,
  Gift,
  Leaf,
  Clock,
  Star,
  Sparkles,
} from 'lucide-react';
import { floristInfo, seasonalCollections } from '../../../data/flowersData';

const CREAM = '#FDFBF7';
const BLUSH = '#F2D4D0';
const FOREST = '#2D4A3E';
const SAGE = '#7A9E7E';

const features = [
  {
    icon: <Flower2 className="w-5 h-5" />,
    title: 'Curated Collections',
    description: 'Seasonal edits hand-selected by our head florist, refreshed every fortnight.',
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: 'Scheduled Delivery',
    description: 'Choose your date and time slot. Same-day delivery available before 2pm.',
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: 'Gift-Ready Packaging',
    description: 'Every arrangement arrives in signature kraft wrap with a handwritten note.',
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: 'Sustainably Sourced',
    description: 'Local growers first. Plastic-free packaging and compostable water tubes.',
  },
];

export default function FlowersLanding() {
  return (
    <div
      className="demo-page min-h-screen overflow-x-hidden"
      style={{ backgroundColor: CREAM, color: FOREST, fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: `${CREAM}e6`, borderColor: BLUSH }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link
            to="/demos"
            className="flex items-center gap-2 text-sm transition-colors shrink-0"
            style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Demos</span>
          </Link>
          <div className="flex items-center gap-2 min-w-0">
            <Flower2 className="w-5 h-5 shrink-0" style={{ color: FOREST }} />
            <span className="text-sm sm:text-base font-medium tracking-wide truncate max-w-[42vw] sm:max-w-none">{floristInfo.name}</span>
          </div>
          <div
            className="flex items-center gap-2 text-xs shrink-0"
            style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
          >
            <span className="hidden sm:inline">Built by</span>
            <Link to="/" className="font-medium hover:opacity-70 transition-opacity" style={{ color: FOREST }}>
              Precision Studios
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0" style={{ backgroundColor: FOREST }} />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20c-2 8-8 14-16 16 8 2 14 8 16 16 2-8 8-14 16-16-8-2-14-8-16-16z' fill='%23F2D4D0'/%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full hidden lg:block"
          style={{ background: `linear-gradient(135deg, transparent 40%, ${BLUSH}22 100%)` }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-8"
                style={{ color: BLUSH, fontFamily: "'Jost', sans-serif" }}
              >
                Botanical Atelier · Melbourne
              </p>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-8 text-white">
                Flowers that tell
                <br />
                <em style={{ color: BLUSH }}>your story.</em>
              </h1>
              <p
                className="text-lg font-light leading-relaxed mb-10 max-w-md"
                style={{ color: `${BLUSH}cc`, fontFamily: "'Jost', sans-serif" }}
              >
                From hand-tied bouquets to living plants, every piece is composed with editorial precision and delivered on your schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" style={{ fontFamily: "'Jost', sans-serif" }}>
                <Link
                  to="/demos/flowers/catalog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide transition-colors"
                  style={{ backgroundColor: BLUSH, color: FOREST }}
                >
                  Shop the Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demos/flowers/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide border transition-colors text-white"
                  style={{ borderColor: `${BLUSH}66` }}
                >
                  Florist Dashboard
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="border p-8" style={{ borderColor: `${BLUSH}44`, backgroundColor: `${FOREST}88` }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: BLUSH }}>
                  This Season
                </p>
                <p className="text-2xl font-light text-white mb-2">{seasonalCollections[0].name}</p>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: `${BLUSH}aa`, fontFamily: "'Jost', sans-serif" }}>
                  {seasonalCollections[0].description}
                </p>
                <Link
                  to="/demos/flowers/catalog"
                  state={{ category: 'seasonal' }}
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: BLUSH, fontFamily: "'Jost', sans-serif" }}
                >
                  View seasonal edit
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: '500+', label: 'Arrangements monthly', icon: <Flower2 className="w-4 h-4" /> },
            { value: '98%', label: 'On-time delivery', icon: <Truck className="w-4 h-4" /> },
            { value: '4.9', label: 'Average rating', icon: <Star className="w-4 h-4" /> },
            { value: '2hr', label: 'Same-day cutoff', icon: <Clock className="w-4 h-4" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-10 text-center border-r last:border-r-0"
              style={{ borderColor: BLUSH }}
            >
              <div className="flex items-center justify-center mb-3" style={{ color: SAGE }}>
                {stat.icon}
              </div>
              <p className="text-3xl font-light mb-1">{stat.value}</p>
              <p
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonal collections */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
              >
                Seasonal Edits
              </p>
              <h2 className="text-3xl md:text-5xl font-light">
                Curated for the <em style={{ color: SAGE }}>moment.</em>
              </h2>
            </div>
            <Link
              to="/demos/flowers/catalog"
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: FOREST, fontFamily: "'Jost', sans-serif" }}
            >
              Browse full catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: BLUSH }}>
            {seasonalCollections.map((collection, i) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 transition-colors"
                style={{ backgroundColor: CREAM }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4" style={{ color: collection.accent }} />
                  <span
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
                  >
                    {collection.season}
                  </span>
                </div>
                <h3 className="text-2xl font-light mb-3 group-hover:opacity-70 transition-opacity">
                  {collection.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
                >
                  {collection.description}
                </p>
                <div className="mt-6 h-px w-12 transition-all group-hover:w-full" style={{ backgroundColor: collection.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6" style={{ backgroundColor: BLUSH }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: FOREST, fontFamily: "'Jost', sans-serif", opacity: 0.7 }}
            >
              The Petal & Stem Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ color: FOREST }}>
              Thoughtful from stem to doorstep.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-8"
                style={{ backgroundColor: CREAM }}
              >
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: `${FOREST}12`, color: FOREST }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 border-y" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: FOREST }} />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6">
            "The Winter Garden bouquet was breathtaking. Scheduling delivery for my mother's birthday took thirty seconds."
          </blockquote>
          <p className="text-sm" style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}>
            Demo testimonial for illustration
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: FOREST }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">
              Want this for <em style={{ color: BLUSH }}>your</em> florist?
            </h2>
            <p className="text-sm" style={{ color: `${BLUSH}88`, fontFamily: "'Jost', sans-serif" }}>
              Precision Studios builds custom e-commerce solutions for Australian florists.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ backgroundColor: BLUSH, color: FOREST, fontFamily: "'Jost', sans-serif" }}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center text-[10px] tracking-[0.25em] uppercase border-t"
        style={{ borderColor: BLUSH, color: SAGE, fontFamily: "'Jost', sans-serif" }}
      >
        <p>
          Whitelabel Demo · {floristInfo.name} · Built by{' '}
          <Link to="/" className="hover:opacity-70 transition-opacity" style={{ color: FOREST }}>
            Precision Studios
          </Link>
        </p>
      </footer>
    </div>
  );
}
