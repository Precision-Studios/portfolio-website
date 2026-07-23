import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  ShoppingBag,
  Search,
  MapPin,
  CheckCircle,
  ArrowUpRight,
  Stethoscope,
  Coffee,
  GraduationCap,
  PawPrint,
  Flower2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNav from '../components/marketing/TopNav';
import SiteFooter from '../components/marketing/SiteFooter';
import PortfolioShell from '../components/marketing/PortfolioShell';
import { fadeUp, fadeUpDelayed, viewportOnce, staggerTransition, heroTransition } from '../lib/motion';

const solutions = [
  {
    icon: <Globe className="w-5 h-5" />,
    label: 'Websites & Web Apps',
    title: 'Custom websites that convert',
    description: 'Purpose-built websites and web applications designed to bring in customers and automate your operations. No templates - engineered from scratch.',
    link: '/demos',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    label: 'Mobile Applications',
    title: 'Apps your customers will love',
    description: 'Native Android and cross-platform mobile apps for booking, ordering, loyalty programmes, and customer engagement.',
    link: '/contact',
  },
  {
    icon: <Database className="w-5 h-5" />,
    label: 'Backend & APIs',
    title: 'Reliable systems at scale',
    description: 'High-performance backend infrastructure, REST and GraphQL APIs, payment integrations, and cloud-native architecture.',
    link: '/contact',
  },
  {
    icon: <Search className="w-5 h-5" />,
    label: 'SEO & Local Marketing',
    title: 'Get found on Google',
    description: 'Local SEO, Google Business Profile optimisation, and content strategy to put your business on page one in your area.',
    link: '/contact',
  },
  {
    icon: <ShoppingBag className="w-5 h-5" />,
    label: 'E-Commerce & Listings',
    title: 'Sell online, effortlessly',
    description: 'Product catalogues, online ordering, inventory management, and integrated payment gateways for Australian businesses.',
    link: '/demos',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    label: 'Business Digitalisation',
    title: 'Digitise your entire operation',
    description: 'End-to-end digital transformation - from paper-based processes to automated, data-driven systems.',
    link: '/demos',
  },
];

const industries = [
  { icon: Stethoscope, name: 'Medical & Clinics', desc: 'Online booking, patient portals, appointment management', link: '/demos/medical' },
  { icon: Coffee, name: 'Cafés & Restaurants', desc: 'Digital menus, QR ordering, kitchen dashboards', link: '/demos/cafe' },
  { icon: GraduationCap, name: 'Tutors & Educators', desc: 'Student CRM, scheduling, fee tracking', link: '/demos/education' },
  { icon: PawPrint, name: 'Pet Centres & Vets', desc: 'Pet profiles, grooming bookings, health records', link: '/demos/pets' },
  { icon: Flower2, name: 'Florists & Retail', desc: 'Product listings, online orders, delivery', link: '/demos/flowers' },
  { icon: BarChart3, name: 'Marketing Agencies', desc: 'SEO dashboards, analytics, client reporting', link: '/demos/marketing' },
];

const metrics = [
  { value: '50+', label: 'Projects delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'Modern', label: 'Design you expect' },
  { value: 'AU', label: 'Local presence' },
];

const cities = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Hobart'];

function IconBox({ icon: Icon }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary">
      <Icon className="w-5 h-5" />
    </div>
  );
}

function SloganHighlight({ children }) {
  return <span className="hero-slogan-mark">{children}</span>;
}

export default function Home() {
  return (
    <PortfolioShell>

      <TopNav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="absolute inset-0 z-0 pointer-events-none portfolio-hero-mesh" />
        <div className="absolute inset-0 z-0 pointer-events-none portfolio-hero-grid" />

        <div className="relative z-10 max-w-[1584px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-0 lg:min-h-[68vh] items-center py-8 sm:py-12 lg:py-16">
            <motion.div
              {...fadeUp}
              {...heroTransition}
              className="lg:pr-8"
            >
              <p className="text-sm text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Digital solutions for Australian businesses
              </p>

              <h1 className="hero-slogan text-[clamp(2rem,4.2vw,3rem)] font-light tracking-tight mb-6 text-ink">
                <span className="hero-slogan-line">Digitise your <SloganHighlight>business</SloganHighlight>.</span>
                <span className="hero-slogan-line">More <SloganHighlight>customers</SloganHighlight> & visibility.</span>
                <span className="hero-slogan-line">More <SloganHighlight>time</SloganHighlight> for you.</span>
              </h1>

              <p className="text-body-lg text-ink-muted font-light leading-relaxed mb-8 max-w-xl">
                We build enterprise-grade software for local Australian businesses - from medical clinics in Sydney to cafés in Melbourne. Custom-engineered platforms that bring in customers and cut operational costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link to="/demos" className="carbon-btn carbon-btn-primary inline-flex items-center justify-center gap-3 px-8 w-full sm:w-auto">
                  <span>View Live Demos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="carbon-btn carbon-btn-secondary inline-flex items-center justify-center gap-3 px-8 w-full sm:w-auto">
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              {...fadeUpDelayed(0.08)}
              {...heroTransition}
              className="lg:col-start-2 lg:row-start-1"
            >
              <div className="hero-industry-grid grid grid-cols-2 gap-px bg-hairline border border-hairline">
                {industries.slice(0, 4).map((ind, i) => (
                  <Link
                    key={i}
                    to={ind.link}
                    className="group p-4 sm:p-6 lg:p-8 bg-canvas hover:bg-surface-1 transition-colors"
                  >
                    <IconBox icon={ind.icon} />
                    <h3 className="text-sm font-semibold mb-1 tracking-tight mt-4 text-ink">{ind.name}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed mb-3">{ind.desc}</p>
                    <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Explore <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 border-b border-hairline bg-surface-1">
        <div className="max-w-[1584px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {metrics.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              {...staggerTransition(i)}
              className="px-4 py-6 sm:px-8 sm:py-8 text-center border-r border-b sm:border-b-0 border-hairline even:border-r-0 sm:even:border-r md:last:border-r-0"
            >
              <p className="text-3xl md:text-4xl font-light font-plex-mono text-primary mb-1">{stat.value}</p>
              <p className="text-caption text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.24 }}
            className="mb-16"
          >
            <p className="text-sm text-primary mb-3">What we build</p>
            <h2 className="text-[clamp(1.75rem,5vw,2.625rem)] font-light tracking-tight leading-tight mb-4 text-ink">
              Solutions engineered for<br />
              <span className="text-ink-muted">Australian business.</span>
            </h2>
            <p className="text-body-sm text-ink-muted max-w-lg">
              From local cafés to medical practices - we deliver bespoke digital platforms that solve real business problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                {...staggerTransition(i)}
              >
                <Link
                  to={sol.link}
                  className="group block p-8 bg-canvas hover:bg-surface-1 transition-colors h-full"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary mb-5">
                    {sol.icon}
                  </div>
                  <p className="text-sm text-primary mb-2 font-medium">{sol.label}</p>
                  <h3 className="text-card-title font-normal tracking-tight mb-2 text-ink">{sol.title}</h3>
                  <p className="text-body-sm text-ink-muted leading-relaxed mb-5">{sol.description}</p>
                  <span className="text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 border-t border-hairline bg-surface-1">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.24 }}
            className="mb-16"
          >
            <p className="text-sm text-primary mb-3">Industries we serve</p>
            <h2 className="text-[clamp(1.75rem,5vw,2.625rem)] font-light tracking-tight leading-tight mb-4 text-ink">
              Purpose-built for<br />
              <span className="text-ink-muted">your industry.</span>
            </h2>
            <p className="text-body-sm text-ink-muted max-w-lg">
              We don't build generic websites. Every solution is tailored to the specific workflows, pain points, and customer expectations of your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                {...staggerTransition(i)}
              >
                <Link
                  to={ind.link}
                  className="group block bg-canvas hover:bg-surface-1 transition-colors h-full"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <IconBox icon={ind.icon} />
                      <ArrowUpRight className="w-4 h-4 text-ink-subtle group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight mb-1 text-ink">{ind.name}</h3>
                    <p className="text-xs text-ink-muted leading-relaxed">{ind.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/demos" className="carbon-btn carbon-btn-primary inline-flex items-center gap-2 px-8">
              <span>Explore Live Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Precision */}
      <section className="relative z-10 py-24 lg:py-32 border-t border-hairline">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.24 }}
            >
              <p className="text-sm text-primary mb-3">Why Precision Studios</p>
              <h2 className="text-display-md font-light tracking-tight leading-tight mb-6 text-ink">
                Not a freelancer.<br />
                <span className="text-ink-muted">Your engineering partner.</span>
              </h2>
              <p className="text-body-sm text-ink-muted leading-relaxed max-w-lg">
                We combine enterprise-grade engineering with the agility and personal attention of a boutique studio. Every line of code is written with your business goals in mind.
              </p>
            </motion.div>

            <div className="space-y-0 border border-hairline">
              {[
                { title: 'Enterprise architecture, startup agility', desc: 'We use the same technologies as the world\'s largest companies - Spring Boot, React, cloud-native infrastructure - but move with the speed your business needs.' },
                { title: 'Australian-first approach', desc: 'We understand the Australian market. From local SEO strategy to ACCC compliance, our solutions are built for businesses operating in Australia.' },
                { title: 'You own everything', desc: 'Full source code ownership, no vendor lock-in, no recurring platform fees. Your software, your intellectual property, your data.' },
                { title: 'Results you can measure', desc: 'Every project ships with analytics. Track customer engagement, conversion rates, and ROI from day one.' },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  {...staggerTransition(i)}
                  className="flex gap-4 p-5 border-b border-hairline last:border-b-0 hover:bg-surface-1 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-ink">{point.title}</h4>
                    <p className="text-xs text-ink-muted leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="relative z-10 border-y border-hairline bg-surface-1">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-8">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span className="text-sm text-ink-subtle flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Serving businesses in
            </span>
            {cities.map((city, i) => (
              <motion.span
                key={city}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                {...staggerTransition(i, 0.04)}
                className="text-sm text-ink-muted font-light"
              >
                {city}
              </motion.span>
            ))}
            <span className="text-xs text-ink-subtle">& all of Australia</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 bg-primary">
        <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-headline font-light tracking-tight text-white mb-2">
                Ready to digitise your business?
              </h2>
              <p className="text-body-sm text-white/80">
                Book a free 15-minute consultation. We'll show you exactly what we'd build - no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="carbon-btn inline-flex items-center justify-center gap-3 px-8 bg-canvas text-ink hover:bg-surface-1 font-medium w-full sm:w-auto"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demos"
                className="carbon-btn inline-flex items-center justify-center gap-3 px-8 bg-transparent text-white hover:bg-white/10 border border-white/40 w-full sm:w-auto"
              >
                <span>View Demos First</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </PortfolioShell>
  );
}
