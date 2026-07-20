import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, QrCode, BarChart3, Clock, Star, Smartphone, ArrowLeft } from 'lucide-react';
import { cafeInfo } from '../../../data/cafeData';

const features = [
  {
    icon: <QrCode className="w-6 h-6" />,
    title: "QR Code Ordering",
    description: "Customers scan, browse, and order from their table. No queues, no waiting staff needed.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Digital Menu",
    description: "Update your menu in real-time. Change prices, add specials, mark sold-out — instantly.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Analytics",
    description: "Know your best sellers, peak hours, and revenue in real-time. Data-driven decisions.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Order Queue",
    description: "Kitchen dashboard shows incoming orders live. No more lost tickets or miscommunication.",
  },
];

const stats = [
  { value: "3x", label: "More orders processed" },
  { value: "40%", label: "Less wait time" },
  { value: "£0", label: "Printing costs" },
  { value: "24/7", label: "Menu always available" },
];

export default function CafeLanding() {
  return (
    <div className="min-h-screen bg-[#1a0e05] text-white font-plex">
      {/* Warm ambient background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-15%] w-[70%] h-[70%] bg-[#8A3800]/15 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[70%] h-[70%] bg-[#FF832B]/10 rounded-full blur-[200px]" />
      </div>

      {/* Top Bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5">
        <Link to="/demos" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>All Demos</span>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Built by</span>
          <Link to="/" className="text-xs font-semibold text-carbon-blue-60 hover:text-carbon-blue-40 transition-colors">Precision Studios</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.14, 0.3, 1] }}
          className="text-center max-w-4xl"
        >
          {/* Café branding */}
          <div className="mb-6 flex justify-center">
            <span className="text-5xl">☕</span>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#FF832B] mb-6 font-medium">{cafeInfo.name}</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[0.95]">
            From counter<br />
            <span className="text-[#FF832B]">to cloud.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            A complete digital ordering system for your café. Digital menus, QR ordering, kitchen dashboards, and real-time analytics — all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/demos/cafe/menu"
              className="carbon-btn carbon-btn-primary inline-flex items-center gap-3 px-8 hover:gap-4 transition-all"
              style={{ backgroundColor: '#FF832B', height: '3rem' }}
            >
              <span>View Digital Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/demos/cafe/dashboard"
              className="carbon-btn carbon-btn-secondary inline-flex items-center gap-3 px-8"
            >
              <span>Admin Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-6 py-10 text-center border-r border-white/5 last:border-r-0"
            >
              <p className="text-3xl md:text-4xl font-light text-[#FF832B] mb-2 font-plex-mono">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light tracking-tight mb-16"
          >
            Everything your café needs.<br />
            <span className="text-white/30">Nothing it doesn't.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 bg-[#1a0e05] hover:bg-white/[0.03] transition-colors border-l-2 border-transparent hover:border-l-[#FF832B]"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#FF832B]/10 text-[#FF832B] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="relative z-10 py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF832B] text-[#FF832B]" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-white/70 mb-8">
            "Since switching to the digital menu, we've cut printing costs entirely and our average order size went up 28%. The kitchen dashboard alone was worth it."
          </blockquote>
          <p className="text-sm text-white/30">— Demo testimonial for illustration purposes</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-[#FF832B]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-black tracking-tight mb-2">
              Want this for your café?
            </h2>
            <p className="text-black/60 text-sm">
              Precision Studios builds custom solutions like this for businesses.
            </p>
          </div>
          <Link
            to="/contact"
            className="carbon-btn inline-flex items-center gap-3 px-8 bg-black text-white hover:bg-gray-900 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center text-white/20 text-xs tracking-widest border-t border-white/5">
        <p>WHITELABEL DEMO · {cafeInfo.name.toUpperCase()} · BUILT BY PRECISION STUDIOS</p>
      </footer>
    </div>
  );
}
