import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Coffee, Stethoscope, GraduationCap, PawPrint, Flower2, BarChart3 } from 'lucide-react';

const demos = [
  {
    id: 'cafe',
    title: 'Café & Restaurant',
    tagline: 'From counter to cloud.',
    description: 'Digital menus, QR code ordering, kitchen dashboards, and live sales analytics for modern cafés.',
    path: '/demos/cafe',
    icon: Coffee,
    color: '#FF832B',
    gradient: 'from-[#FF832B] to-[#8A3800]',
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
    color: '#08BDBA',
    gradient: 'from-[#08BDBA] to-[#007D79]',
    tags: ['Booking System', 'Patient Portal', 'Dashboard'],
    status: 'live',
  },
  {
    id: 'education',
    title: 'Private Tuition',
    tagline: 'Smart tools for smarter teaching.',
    description: 'Student enrollment, timetable management, progress tracking, and fee collection for tutors.',
    path: '#',
    icon: GraduationCap,
    color: '#A56EFF',
    gradient: 'from-[#A56EFF] to-[#6929C4]',
    tags: ['Student CRM', 'Scheduling', 'Payments'],
    status: 'coming-soon',
  },
  {
    id: 'pets',
    title: 'Pet Centre',
    tagline: 'Every pet deserves digital care.',
    description: 'Pet profiles, grooming/vet bookings, vaccination tracking, and automated reminders.',
    path: '#',
    icon: PawPrint,
    color: '#24A148',
    gradient: 'from-[#24A148] to-[#0E6027]',
    tags: ['Pet Profiles', 'Booking', 'Health Records'],
    status: 'coming-soon',
  },
  {
    id: 'flowers',
    title: 'Florist & Products',
    tagline: 'Beautifully listed.',
    description: 'Product catalog, online ordering, delivery scheduling, and seasonal collection management.',
    path: '#',
    icon: Flower2,
    color: '#FF7EB6',
    gradient: 'from-[#FF7EB6] to-[#D02670]',
    tags: ['Product Listing', 'E-commerce', 'Delivery'],
    status: 'coming-soon',
  },
  {
    id: 'marketing',
    title: 'SEO & Marketing',
    tagline: 'Rank. Convert. Dominate.',
    description: 'SEO audit dashboards, keyword tracking, local SEO management, and competitor analysis.',
    path: '#',
    icon: BarChart3,
    color: '#4589FF',
    gradient: 'from-[#4589FF] to-[#0043CE]',
    tags: ['SEO Dashboard', 'Analytics', 'Local SEO'],
    status: 'coming-soon',
  },
];

export default function DemoHub() {
  return (
    <div className="min-h-screen bg-carbon-gray-100 text-white font-plex">
      {/* Ambient bg */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-15%] w-[60%] h-[60%] bg-carbon-blue-60/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[60%] h-[60%] bg-carbon-teal-40/5 rounded-full blur-[200px]" />
      </div>

      {/* Top Bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Precision Studios</span>
        </Link>
        <Link to="/contact" className="text-xs font-semibold text-carbon-blue-60 hover:text-carbon-blue-40 transition-colors">
          Contact Us
        </Link>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.14, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-carbon-blue-60 mb-4 font-medium">Whitelabel Demos</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-[0.95]">
            See what we build<br />
            <span className="text-white/30">for businesses like yours.</span>
          </h1>
          <p className="text-lg text-white/40 max-w-2xl font-light">
            Explore live, fully functional demos of the solutions we deliver. Each one is purpose-built for a specific industry — and each one comes with source code.
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map((demo, i) => {
            const isLive = demo.status === 'live';
            const Wrapper = isLive ? Link : 'div';
            const wrapperProps = isLive ? { to: demo.path } : {};

            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block h-full group ${!isLive ? 'cursor-default' : ''}`}
                >
                  <div className={`h-full bg-white/[0.02] border border-white/5 transition-all ${
                    isLive ? 'hover:border-white/15 hover:bg-white/[0.04]' : 'opacity-50'
                  }`}>
                    {/* Top accent bar */}
                    <div className="h-1" style={{ backgroundColor: demo.color }} />

                    <div className="p-6">
                      {/* Icon & Status */}
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="w-12 h-12 flex items-center justify-center"
                          style={{ backgroundColor: `${demo.color}15` }}
                        >
                          <demo.icon className="w-6 h-6" style={{ color: demo.color }} />
                        </div>
                        {isLive ? (
                          <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 bg-green-500/10 text-green-400">
                            Live Demo
                          </span>
                        ) : (
                          <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 bg-white/5 text-white/30">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <p className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: demo.color }}>
                        {demo.tagline}
                      </p>
                      <h2 className="text-xl font-semibold tracking-tight mb-2">{demo.title}</h2>
                      <p className="text-sm text-white/35 leading-relaxed mb-5">{demo.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {demo.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 text-white/30 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      {isLive && (
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/30 group-hover:text-white transition-colors">
                          <span>Explore Demo</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-white/30 mb-4">Don't see your industry?</p>
          <Link
            to="/contact"
            className="carbon-btn carbon-btn-primary inline-flex items-center gap-2 px-8"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center text-white/15 text-xs tracking-widest border-t border-white/5">
        © {new Date().getFullYear()} PRECISION STUDIOS · ALL DEMOS INCLUDE SOURCE CODE
      </footer>
    </div>
  );
}
