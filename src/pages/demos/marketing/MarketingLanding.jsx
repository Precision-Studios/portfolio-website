import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  BarChart3,
  Search,
  Target,
  MapPin,
  Zap,
  LineChart,
  ChevronRight,
} from 'lucide-react';
import {
  agencyInfo,
  agencyMetrics,
  capabilities,
  heroMetricsPreview,
  clients,
} from '../../../data/marketingData';

const iconMap = {
  Search,
  Target,
  MapPin,
  BarChart3,
};

const navLinks = [
  { to: '/demos/marketing/audits', label: 'Audits' },
  { to: '/demos/marketing/keywords', label: 'Keywords' },
  { to: '/demos/marketing/dashboard', label: 'Dashboard' },
];

function ScoreRing({ score, size = 48 }) {
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#2A3441" strokeWidth="3" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#00D4AA"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold text-[#00D4AA]"
        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
      >
        {score}
      </span>
    </div>
  );
}

export default function MarketingLanding() {
  return (
    <div
      className="min-h-screen bg-[#0F1419] text-[#E8EDF2] overflow-hidden"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0F1419]/95 backdrop-blur-md border-b border-[#2A3441]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
          <Link
            to="/demos"
            className="flex items-center gap-2 text-[#6B7A8D] hover:text-[#E8EDF2] text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Demos</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center bg-[#00D4AA]/10 border border-[#00D4AA]/30">
              <BarChart3 className="w-4 h-4 text-[#00D4AA]" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight block leading-tight">{agencyInfo.name}</span>
              <span className="text-[10px] text-[#6B7A8D] font-mono uppercase tracking-wider">SEO Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6B7A8D]">
            <span className="hidden sm:inline">Built by</span>
            <Link to="/" className="font-semibold text-[#00D4AA] hover:text-[#00D4AA]/80 transition-colors">
              Precision Studios
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1419] via-[#121820] to-[#0A0E12]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#00D4AA]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00D4AA]/10 border border-[#00D4AA]/20 text-xs text-[#00D4AA] font-mono mb-6">
                <Zap className="w-3 h-3" />
                <span>DATA-DRIVEN SEO</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6 tracking-tight">
                Search performance,<br />
                <span className="text-[#00D4AA]">engineered.</span>
              </h1>

              <p className="text-base lg:text-lg text-[#6B7A8D] font-light leading-relaxed mb-10 max-w-lg">
                A complete SEO command centre with audit dashboards, keyword tracking, local rank monitoring, and competitor intelligence for growth-focused agencies.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <Link
                  to="/demos/marketing/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00D4AA] text-[#0F1419] font-semibold text-sm hover:bg-[#00D4AA]/90 transition-colors"
                >
                  Open Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demos/marketing/audits"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1A2128] text-[#E8EDF2] text-sm border border-[#2A3441] hover:border-[#00D4AA]/40 transition-colors"
                >
                  View Audits
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-xs font-mono text-[#6B7A8D] hover:text-[#00D4AA] transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Metrics Preview Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-[#1A2128] border border-[#2A3441] p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-[#00D4AA]" />
                    <span className="text-xs font-mono text-[#6B7A8D] uppercase tracking-wider">Live Metrics</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#00D4AA]">
                    <span className="w-1.5 h-1.5 bg-[#00D4AA] rounded-full animate-pulse" />
                    SYNCED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-px bg-[#2A3441] mb-6">
                  {heroMetricsPreview.map((metric, i) => (
                    <div key={i} className="bg-[#161B22] p-4">
                      <p className="text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider mb-2">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-semibold font-mono text-[#E8EDF2] mb-1">{metric.value}</p>
                      <span className={`text-xs font-mono ${metric.positive ? 'text-[#00D4AA]' : 'text-red-400'}`}>
                        {metric.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="mb-4">
                  <p className="text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider mb-3">
                    Organic Traffic (6mo)
                  </p>
                  <div className="flex items-end gap-1.5 h-20">
                    {[62, 68, 74, 80, 86, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#00D4AA]/60 to-[#00D4AA]"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#2A3441]">
                  <span className="text-[10px] font-mono text-[#6B7A8D]">{agencyMetrics.clientsManaged} ACTIVE CLIENTS</span>
                  <Link
                    to="/demos/marketing/dashboard"
                    className="text-xs text-[#00D4AA] flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Full report <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agency Stats */}
      <section className="border-y border-[#2A3441] bg-[#161B22]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: agencyMetrics.clientsManaged, label: 'Clients managed', suffix: '' },
            { value: (agencyMetrics.keywordsTracked / 1000).toFixed(1) + 'K', label: 'Keywords tracked', suffix: '' },
            { value: agencyMetrics.avgTrafficLift, label: 'Avg traffic lift', suffix: '' },
            { value: agencyMetrics.avgPositionGain, label: 'Avg position gain', suffix: 'pts' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-8 text-center border-r border-[#2A3441] last:border-r-0"
            >
              <p className="text-3xl font-semibold font-mono text-[#00D4AA] mb-1">
                {stat.value}
                {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[#6B7A8D] font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-mono text-[#00D4AA] uppercase tracking-wider mb-3">Platform Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Everything your agency needs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A3441] border border-[#2A3441]">
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon];
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#1A2128] p-8 hover:bg-[#1E2630] transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#00D4AA]/10 border border-[#00D4AA]/20 mb-5">
                    <Icon className="w-5 h-5 text-[#00D4AA]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 tracking-tight">{cap.title}</h3>
                  <p className="text-sm text-[#6B7A8D] leading-relaxed">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-16 px-6 bg-[#161B22] border-y border-[#2A3441]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-mono text-[#00D4AA] uppercase tracking-wider mb-2">Client Portfolio</p>
              <h2 className="text-2xl font-semibold tracking-tight">Active accounts</h2>
            </div>
            <Link
              to="/demos/marketing/dashboard"
              className="text-sm text-[#00D4AA] flex items-center gap-1 hover:gap-2 transition-all"
            >
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A3441] border border-[#2A3441]">
            {clients.slice(0, 3).map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-[#1A2128] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-0.5">{client.name}</h3>
                    <p className="text-xs font-mono text-[#6B7A8D]">{client.domain}</p>
                  </div>
                  <ScoreRing score={client.healthScore} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase mb-1">Traffic</p>
                    <p className="text-sm font-mono">{(client.monthlyTraffic / 1000).toFixed(1)}K</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase mb-1">Growth</p>
                    <p className="text-sm font-mono text-[#00D4AA]">+{client.trafficChange}%</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#2A3441]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Want this for your agency?
            </h2>
            <p className="text-sm text-[#6B7A8D]">
              Precision Studios builds custom SEO platforms and client reporting dashboards.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00D4AA] text-[#0F1419] font-semibold text-sm hover:bg-[#00D4AA]/90 transition-colors whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-[10px] font-mono tracking-wider text-[#6B7A8D] border-t border-[#2A3441]">
        <p>
          WHITELABEL DEMO / {agencyInfo.name.toUpperCase()} / BUILT BY{' '}
          <Link to="/" className="text-[#00D4AA] hover:underline">
            PRECISION STUDIOS
          </Link>
        </p>
      </footer>
    </div>
  );
}
