import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Wifi, Clock, ChefHat, TrendingUp, Star } from 'lucide-react';
import { cafeInfo } from '../../../data/cafeData';

const features = [
  {
    icon: "📱",
    title: "Scan & Order",
    description: "Customers scan a QR code at their table and order instantly from their phone.",
  },
  {
    icon: "🍽️",
    title: "Live Menu Updates",
    description: "Change prices, add specials, or mark items sold out — all in real time.",
  },
  {
    icon: "📊",
    title: "Sales Insights",
    description: "See your best sellers, peak hours, and daily revenue at a glance.",
  },
  {
    icon: "🔔",
    title: "Kitchen Alerts",
    description: "Orders appear on your kitchen screen the moment they're placed. No lost tickets.",
  },
];

export default function CafeLanding() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#2C1810] overflow-hidden" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-[#FBF7F0]/90 backdrop-blur-md border-b border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
          <Link to="/demos" className="flex items-center gap-2 text-[#8B7355] hover:text-[#2C1810] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>All Demos</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-2xl">☕</span>
            <span className="text-base font-semibold tracking-tight">{cafeInfo.name}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#8B7355]">
            <span className="hidden sm:inline">Built by</span>
            <Link to="/" className="font-semibold text-[#C17832] hover:text-[#A05A20] transition-colors">Precision Studios</Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative">
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E2723] via-[#4E342E] to-[#2C1810]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[#D7A86E] text-sm font-medium tracking-widest uppercase mb-6">Welcome to {cafeInfo.name}</p>

            <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.05] mb-8" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              Crafted with care,<br />
              served with <em className="text-[#D7A86E]">love.</em>
            </h1>

            <p className="text-lg text-white/50 font-light leading-relaxed mb-10 max-w-lg">
              A complete digital experience for your café — from a beautiful menu your customers browse on their phone, to a kitchen dashboard that keeps everything running smoothly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/demos/cafe/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D7A86E] text-[#2C1810] font-semibold text-sm rounded-full hover:bg-[#E4BB83] transition-colors"
              >
                Browse the Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demos/cafe/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Kitchen Dashboard
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white border-y border-[#E8DFD3]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "3×", label: "More orders processed", icon: <TrendingUp className="w-4 h-4" /> },
            { value: "40%", label: "Less wait time", icon: <Clock className="w-4 h-4" /> },
            { value: "$0", label: "Menu printing costs", icon: <ChefHat className="w-4 h-4" /> },
            { value: "24/7", label: "Menu available", icon: <Wifi className="w-4 h-4" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-8 text-center border-r border-[#E8DFD3] last:border-r-0"
            >
              <div className="flex items-center justify-center gap-2 text-[#8B7355] mb-2">
                {stat.icon}
              </div>
              <p className="text-3xl font-light text-[#2C1810] mb-1" style={{ fontFamily: "'Georgia', serif" }}>{stat.value}</p>
              <p className="text-[11px] uppercase tracking-wider text-[#8B7355]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[#C17832] font-medium tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Georgia', serif" }}>
              Simple for you. <em className="text-[#8B7355]">Delightful for customers.</em>
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
                className="group bg-white rounded-2xl p-8 border border-[#E8DFD3] hover:border-[#D7A86E] hover:shadow-lg hover:shadow-[#D7A86E]/5 transition-all"
              >
                <span className="text-4xl mb-5 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-[#8B7355] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-20 px-6 bg-white border-y border-[#E8DFD3]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D7A86E] text-[#D7A86E]" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#2C1810] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            "Since switching to the digital menu, our printing costs dropped to zero and average order size went up by 28%. The kitchen dashboard alone was worth it."
          </blockquote>
          <p className="text-sm text-[#8B7355]">— Demo testimonial for illustration</p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 bg-[#3E2723]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
              Want this for <em>your</em> café?
            </h2>
            <p className="text-sm text-white/50">
              Precision Studios builds custom solutions like this for Australian businesses.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D7A86E] text-[#2C1810] font-semibold text-sm rounded-full hover:bg-[#E4BB83] transition-colors whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 text-center text-xs tracking-widest text-[#8B7355] border-t border-[#E8DFD3]">
        <p>WHITELABEL DEMO · {cafeInfo.name.toUpperCase()} · BUILT BY <Link to="/" className="text-[#C17832] hover:underline">PRECISION STUDIOS</Link></p>
      </footer>
    </div>
  );
}
