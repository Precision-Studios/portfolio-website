import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Coffee, Stethoscope, GraduationCap, PawPrint, Flower2, BarChart3 } from 'lucide-react';
import TopNav from '../../components/marketing/TopNav';
import SiteFooter from '../../components/marketing/SiteFooter';
import PortfolioShell from '../../components/marketing/PortfolioShell';
import { fadeUp, viewportOnce, staggerTransition } from '../../lib/motion';

const demos = [
  {
    id: 'cafe',
    title: 'Café & Restaurant',
    tagline: 'From counter to cloud.',
    description: 'Digital menus, QR code ordering, kitchen dashboards, and live sales analytics for modern cafés.',
    path: '/demos/cafe',
    icon: Coffee,
    tags: ['Digital Menu', 'QR Ordering', 'Analytics'],
    status: 'live',
  },
  {
    id: 'medical',
    title: 'Healthcare & Clinics',
    tagline: 'Your clinic, digitised.',
    description: 'Online appointment booking, doctor profiles, patient portals, and clinic management dashboards.',
    path: '/demos/medical',
    icon: Stethoscope,
    tags: ['Booking System', 'Patient Portal', 'Dashboard'],
    status: 'live',
  },
  {
    id: 'education',
    title: 'Private Tuition',
    tagline: 'Smart tools for smarter teaching.',
    description: 'Student enrollment, timetable management, progress tracking, and fee collection for tutors.',
    path: '/demos/education',
    icon: GraduationCap,
    tags: ['Student CRM', 'Scheduling', 'Payments'],
    status: 'live',
  },
  {
    id: 'pets',
    title: 'Pet Centre',
    tagline: 'Every pet deserves digital care.',
    description: 'Pet profiles, grooming/vet bookings, vaccination tracking, and automated reminders.',
    path: '/demos/pets',
    icon: PawPrint,
    tags: ['Pet Profiles', 'Booking', 'Health Records'],
    status: 'live',
  },
  {
    id: 'flowers',
    title: 'Florist & Products',
    tagline: 'Beautifully listed.',
    description: 'Product catalog, online ordering, delivery scheduling, and seasonal collection management.',
    path: '/demos/flowers',
    icon: Flower2,
    tags: ['Product Listing', 'E-commerce', 'Delivery'],
    status: 'live',
  },
  {
    id: 'marketing',
    title: 'SEO & Marketing',
    tagline: 'Rank. Convert. Dominate.',
    description: 'SEO audit dashboards, keyword tracking, local SEO management, and competitor analysis.',
    path: '/demos/marketing',
    icon: BarChart3,
    tags: ['SEO Dashboard', 'Analytics', 'Local SEO'],
    status: 'live',
  },
];

export default function DemoHub() {
  return (
    <PortfolioShell>
      <TopNav
        showCta={false}
        backLink={{
          to: '/',
          label: 'Precision Studios',
          icon: <ArrowLeft className="w-4 h-4" />,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-24">
        <motion.div {...fadeUp} className="mb-16">
          <p className="text-sm text-primary mb-4">Whitelabel demos</p>
          <h1 className="text-display-lg font-light tracking-tight mb-6 leading-[1.1] text-ink">
            See what we build<br />
            <span className="text-ink-muted">for businesses like yours.</span>
          </h1>
          <p className="text-body-lg text-ink-muted max-w-2xl font-light">
            Explore live, fully functional demos of the solutions we deliver. Each one is purpose-built for a specific industry - and each one comes with source code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
          {demos.map((demo, i) => {
            const isLive = demo.status === 'live';
            const Wrapper = isLive ? Link : 'div';
            const wrapperProps = isLive ? { to: demo.path } : {};

            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                {...staggerTransition(i)}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block h-full group ${!isLive ? 'cursor-default' : ''}`}
                >
                  <div className={`h-full bg-canvas p-6 transition-colors ${isLive ? 'hover:bg-surface-1' : 'opacity-50'}`}>
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary">
                        <demo.icon className="w-5 h-5" />
                      </div>
                      {isLive ? (
                        <span className="text-caption font-medium px-2 py-0.5 bg-carbon-green-50/10 text-carbon-green-50">
                          Live demo
                        </span>
                      ) : (
                        <span className="text-caption font-medium px-2 py-0.5 bg-surface-1 text-ink-subtle">
                          Coming soon
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-primary mb-2 font-medium">{demo.tagline}</p>
                    <h2 className="text-card-title font-normal tracking-tight mb-2 text-ink">{demo.title}</h2>
                    <p className="text-body-sm text-ink-muted leading-relaxed mb-5">{demo.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {demo.tags.map(tag => (
                        <span key={tag} className="text-caption px-2 py-0.5 bg-surface-1 text-ink-muted font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isLive && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-ink-muted group-hover:text-primary transition-colors">
                        <span>Explore demo</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.24 }}
          className="mt-20 text-center"
        >
          <p className="text-body-sm text-ink-muted mb-4">Don't see your industry?</p>
          <Link to="/contact" className="carbon-btn carbon-btn-primary inline-flex items-center gap-2 px-8">
            <span>Let's talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <SiteFooter />
    </PortfolioShell>
  );
}
