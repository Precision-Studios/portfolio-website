import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Database, BarChart3, ShoppingBag, Search, MapPin, Users, CheckCircle, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: <Globe className="w-6 h-6" />,
    label: "Websites & Web Apps",
    title: "Custom websites that convert",
    description: "Purpose-built websites and web applications designed to bring in customers and automate your operations. No templates — engineered from scratch.",
    link: "/demos",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    label: "Mobile Applications",
    title: "Apps your customers will love",
    description: "Native Android and cross-platform mobile apps for booking, ordering, loyalty programmes, and customer engagement.",
    link: "/contact",
  },
  {
    icon: <Database className="w-6 h-6" />,
    label: "Backend & APIs",
    title: "Reliable systems at scale",
    description: "High-performance backend infrastructure, REST and GraphQL APIs, payment integrations, and cloud-native architecture.",
    link: "/contact",
  },
  {
    icon: <Search className="w-6 h-6" />,
    label: "SEO & Local Marketing",
    title: "Get found on Google",
    description: "Local SEO, Google Business Profile optimisation, and content strategy to put your business on page one in your area.",
    link: "/contact",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    label: "E-Commerce & Listings",
    title: "Sell online, effortlessly",
    description: "Product catalogues, online ordering, inventory management, and integrated payment gateways for Australian businesses.",
    link: "/demos",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    label: "Business Digitalisation",
    title: "Digitise your entire operation",
    description: "End-to-end digital transformation — from paper-based processes to automated, data-driven systems.",
    link: "/demos",
  },
];

const industries = [
  { icon: "🏥", name: "Medical & Clinics", desc: "Online booking, patient portals, appointment management", link: "/demos/medical" },
  { icon: "☕", name: "Cafés & Restaurants", desc: "Digital menus, QR ordering, kitchen dashboards", link: "/demos/cafe" },
  { icon: "🎓", name: "Tutors & Educators", desc: "Student CRM, scheduling, fee tracking", link: "/demos" },
  { icon: "🐾", name: "Pet Centres & Vets", desc: "Pet profiles, grooming bookings, health records", link: "/demos" },
  { icon: "💐", name: "Florists & Retail", desc: "Product listings, online orders, delivery", link: "/demos" },
  { icon: "📈", name: "Marketing Agencies", desc: "SEO dashboards, analytics, client reporting", link: "/demos" },
];

const metrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 200ms", label: "Avg API response" },
  { value: "AU", label: "Local presence" },
];

const cities = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Hobart"];

export default function Home() {
  return (
    <div className="min-h-screen bg-carbon-gray-100 text-white font-plex selection:bg-carbon-blue-60/30">

      {/* ─── NAVIGATION ─── */}
      <nav className="sticky top-0 z-50 h-12 bg-carbon-gray-100 border-b border-white/5">
        <div className="max-w-[1584px] mx-auto h-full flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/precision-logo.png"
                alt="Precision Studios"
                className="w-7 h-7 object-contain"
              />
              <span className="text-sm font-semibold tracking-tight">Precision Studios</span>
            </Link>
            <div className="hidden md:flex items-center gap-0">
              {[
                { label: "Solutions", to: "/demos" },
                { label: "Industries", to: "/demos" },
                { label: "Demos", to: "/demos" },
                { label: "Contact", to: "/contact" },
              ].map(item => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="px-4 h-12 flex items-center text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden lg:flex items-center gap-1.5 text-xs text-white/30 mr-4">
              <MapPin className="w-3 h-3" />
              Serving businesses across Australia
            </span>
            <Link
              to="/contact"
              className="carbon-btn carbon-btn-primary text-xs px-4"
              style={{ height: '2rem' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* Subtle ambient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-40%] right-[-20%] w-[70%] h-[70%] bg-carbon-blue-60/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-[1584px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 min-h-[85vh] items-center">
            {/* Left — Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0.14, 0.3, 1] }}
              className="pt-16 lg:pt-0 lg:pr-16"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-carbon-blue-60 mb-6 font-medium flex items-center gap-2">
                <span className="w-8 h-px bg-carbon-blue-60" />
                Digital Solutions for Australian Businesses
              </p>

              <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-light tracking-tight leading-[1.05] mb-8">
                Digitise your business.<br />
                Automate your operations.<br />
                <span className="text-white/30">Scale with confidence.</span>
              </h1>

              <p className="text-base md:text-lg text-white/40 font-light leading-relaxed mb-10 max-w-xl">
                We build enterprise-grade software for local Australian businesses — from medical clinics in Sydney to cafés in Melbourne. Custom-engineered platforms that bring in customers and cut operational costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/demos"
                  className="carbon-btn carbon-btn-primary inline-flex items-center gap-3 px-8"
                >
                  <span>View Live Demos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="carbon-btn carbon-btn-secondary inline-flex items-center gap-3 px-8"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right — Featured Industries preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0.14, 0.3, 1] }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {industries.slice(0, 4).map((ind, i) => (
                  <Link
                    key={i}
                    to={ind.link}
                    className="group p-8 bg-carbon-gray-100 hover:bg-white/[0.03] transition-all border-l-2 border-transparent hover:border-l-carbon-blue-60"
                  >
                    <span className="text-3xl mb-4 block">{ind.icon}</span>
                    <h3 className="text-sm font-semibold mb-1 tracking-tight">{ind.name}</h3>
                    <p className="text-xs text-white/30 leading-relaxed mb-3">{ind.desc}</p>
                    <span className="text-[10px] text-carbon-blue-60 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── METRICS BAR ─── */}
      <section className="relative z-10 border-y border-white/5 bg-carbon-gray-90">
        <div className="max-w-[1584px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {metrics.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="px-8 py-8 text-center border-r border-white/5 last:border-r-0"
            >
              <p className="text-3xl md:text-4xl font-light font-plex-mono text-carbon-blue-50 mb-1">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/30">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SOLUTIONS ─── */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-carbon-blue-60 mb-3 font-medium">What We Build</p>
            <h2 className="text-3xl md:text-[2.625rem] font-light tracking-tight leading-tight mb-4">
              Solutions engineered for<br />
              <span className="text-white/30">Australian business.</span>
            </h2>
            <p className="text-sm text-white/35 max-w-lg">
              From local cafés to medical practices — we deliver bespoke digital platforms that solve real business problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={sol.link}
                  className="group block p-8 bg-carbon-gray-100 hover:bg-white/[0.03] transition-all border-l-2 border-transparent hover:border-l-carbon-blue-60 h-full"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-carbon-blue-60/8 text-carbon-blue-50 mb-5">
                    {sol.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-carbon-blue-60 mb-2 font-medium">{sol.label}</p>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{sol.title}</h3>
                  <p className="text-sm text-white/30 leading-relaxed mb-5">{sol.description}</p>
                  <span className="text-xs text-carbon-blue-60 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="relative z-10 py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-carbon-blue-60 mb-3 font-medium">Industries We Serve</p>
            <h2 className="text-3xl md:text-[2.625rem] font-light tracking-tight leading-tight mb-4">
              Purpose-built for<br />
              <span className="text-white/30">your industry.</span>
            </h2>
            <p className="text-sm text-white/35 max-w-lg">
              We don't build generic websites. Every solution is tailored to the specific workflows, pain points, and customer expectations of your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={ind.link}
                  className="group block bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{ind.icon}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-carbon-blue-60 transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight mb-1">{ind.name}</h3>
                    <p className="text-xs text-white/30 leading-relaxed">{ind.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/demos"
              className="carbon-btn carbon-btn-primary inline-flex items-center gap-2 px-8"
            >
              <span>Explore Live Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY PRECISION ─── */}
      <section className="relative z-10 py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-carbon-blue-60 mb-3 font-medium">Why Precision Studios</p>
              <h2 className="text-3xl md:text-[2.625rem] font-light tracking-tight leading-tight mb-6">
                Not a freelancer.<br />
                <span className="text-white/30">Your engineering partner.</span>
              </h2>
              <p className="text-sm text-white/35 leading-relaxed max-w-lg">
                We combine enterprise-grade engineering with the agility and personal attention of a boutique studio. Every line of code is written with your business goals in mind.
              </p>
            </motion.div>

            <div className="space-y-0">
              {[
                { title: "Enterprise architecture, startup agility", desc: "We use the same technologies as the world's largest companies — Spring Boot, React, cloud-native infrastructure — but move with the speed your business needs." },
                { title: "Australian-first approach", desc: "We understand the Australian market. From local SEO strategy to ACCC compliance, our solutions are built for businesses operating in Australia." },
                { title: "You own everything", desc: "Full source code ownership, no vendor lock-in, no recurring platform fees. Your software, your intellectual property, your data." },
                { title: "Results you can measure", desc: "Every project ships with analytics. Track customer engagement, conversion rates, and ROI from day one." },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex gap-4 p-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-carbon-blue-60 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">{point.title}</h4>
                    <p className="text-xs text-white/30 leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CITIES STRIP ─── */}
      <section className="relative z-10 border-y border-white/5 bg-carbon-gray-90">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-8">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-white/20 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Serving businesses in
            </span>
            {cities.map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-white/40 font-light"
              >
                {city}
              </motion.span>
            ))}
            <span className="text-xs text-white/20">& all of Australia</span>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative z-10 bg-carbon-blue-60">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-2">
                Ready to digitise your business?
              </h2>
              <p className="text-sm text-white/60">
                Book a free 15-minute consultation. We'll show you exactly what we'd build — no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="carbon-btn inline-flex items-center gap-3 px-8 bg-white text-carbon-gray-100 hover:bg-carbon-gray-10 font-semibold"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demos"
                className="carbon-btn inline-flex items-center gap-3 px-8 bg-white/10 text-white hover:bg-white/20 border border-white/20"
              >
                <span>View Demos First</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative z-10 bg-carbon-gray-100 border-t border-white/5">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/precision-logo.png" alt="Precision Studios" className="w-8 h-8 object-contain" />
                <span className="text-base font-semibold tracking-tight">Precision Studios</span>
              </div>
              <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-sm">
                Enterprise-grade digital solutions for Australian businesses. We digitise, automate, and scale your operations.
              </p>
              <div className="flex flex-col gap-2">
                <a href="mailto:mail@precisionstudios.tech" className="text-sm text-white/40 hover:text-carbon-blue-50 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  mail@precisionstudios.tech
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/20 mb-4 font-medium">Solutions</p>
              <div className="space-y-2">
                {["Websites & Web Apps", "Mobile Applications", "Backend & APIs", "SEO & Marketing", "E-Commerce", "Digitalisation"].map(item => (
                  <Link key={item} to="/demos" className="block text-sm text-white/35 hover:text-white transition-colors">{item}</Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/20 mb-4 font-medium">Company</p>
              <div className="space-y-2">
                <Link to="/demos" className="block text-sm text-white/35 hover:text-white transition-colors">Live Demos</Link>
                <Link to="/mvp" className="block text-sm text-white/35 hover:text-white transition-colors">Projects</Link>
                <Link to="/contact" className="block text-sm text-white/35 hover:text-white transition-colors">Contact</Link>
                <a href="https://github.com/Precision-Studios" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/35 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/15 tracking-wider">
              © {new Date().getFullYear()} Precision Studios. All rights reserved. ABN pending.
            </p>
            <p className="text-xs text-white/15 tracking-wider flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Serving businesses across Australia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
