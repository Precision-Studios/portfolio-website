import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Calendar,
  Users,
  BookOpen,
  BarChart3,
  Clock,
  Star,
  ChevronRight,
  ClipboardList,
  Award,
} from 'lucide-react';
import { tuitionCenterInfo, tutors, dashboardStats } from '../../../data/educationData';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const sans = { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" };

const features = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Smart Scheduling',
    description: 'Parents book sessions online with real-time tutor availability. Automated reminders reduce no-shows.',
    accent: 'border-l-[#C9A227]',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Student CRM',
    description: 'Track enrolments, attendance, progress notes, and parent communications in one organised system.',
    accent: 'border-l-indigo-500',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Course Management',
    description: 'Create term programs, assign tutors, and manage class capacity with structured academic calendars.',
    accent: 'border-l-[#1E2A4A]',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Progress Analytics',
    description: 'Monitor attendance trends, subject performance, and tutor workload with clear dashboard insights.',
    accent: 'border-l-emerald-600',
  },
];

export default function EducationLanding() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E2A4A]" style={sans}>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1E2A4A]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/demos" className="flex items-center gap-2 text-[#1E2A4A]/50 hover:text-[#1E2A4A] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>All Demos</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#1E2A4A] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#C9A227]" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight block leading-tight" style={serif}>{tuitionCenterInfo.name}</span>
              <span className="text-[10px] text-[#1E2A4A]/40 uppercase tracking-widest">Tuition Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#1E2A4A]/40">
            <span className="hidden sm:inline">Built by</span>
            <Link to="/" className="font-semibold text-[#C9A227] hover:text-[#b8921f] transition-colors">Precision Studios</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1E2A4A]/10">
        <div className="absolute inset-0 bg-[#1E2A4A]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#FAF8F5 1px, transparent 1px), linear-gradient(90deg, #FAF8F5 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#C9A227]/30 text-xs text-[#C9A227] font-medium mb-6 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                Term 3 enrolments open
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] text-[#FAF8F5] leading-[1.15] mb-6" style={serif}>
                Private tuition,<br />
                <span className="text-[#C9A227]">beautifully organised.</span>
              </h1>

              <p className="text-base lg:text-lg text-[#FAF8F5]/55 leading-relaxed mb-10 max-w-lg">
                A complete platform for tuition centres: tutor profiles, online enrolment, timetables, fee tracking, and admin dashboards built for educators.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/demos/education/tutors"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A227] text-[#1E2A4A] font-semibold text-sm hover:bg-[#d4ad2f] transition-colors"
                >
                  Browse Tutors
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demos/education/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#FAF8F5]/20 text-[#FAF8F5] text-sm hover:bg-[#FAF8F5]/10 transition-colors"
                >
                  Admin Dashboard
                </Link>
              </div>
            </motion.div>

            {/* Tutor preview grid */}
            <motion.div
              className="lg:col-span-5 hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="border border-[#FAF8F5]/10 bg-[#FAF8F5]/5 p-1">
                <div className="bg-[#1E2A4A] border border-[#FAF8F5]/10 p-4 mb-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#FAF8F5]/40 mb-3">Featured Tutors</p>
                  <div className="space-y-2">
                    {tutors.slice(0, 3).map((tutor, i) => (
                      <Link
                        key={tutor.id}
                        to="/demos/education/tutors"
                        className="flex items-center gap-3 p-3 border border-[#FAF8F5]/10 hover:border-[#C9A227]/40 hover:bg-[#FAF8F5]/5 transition-all group"
                      >
                        <div className="w-10 h-10 bg-[#2A3A5C] flex items-center justify-center flex-shrink-0 border border-[#C9A227]/20">
                          <span className="text-xs font-semibold text-[#C9A227]" style={serif}>
                            {tutor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-sm text-[#FAF8F5] font-medium truncate" style={serif}>{tutor.name}</p>
                          <p className="text-[11px] text-[#FAF8F5]/40 truncate">{tutor.title}</p>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[#C9A227]">
                          <Star className="w-3 h-3 fill-[#C9A227]" />
                          <span>{tutor.rating}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#FAF8F5]/20 group-hover:text-[#C9A227] transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-[#FAF8F5]/30 text-center py-2 uppercase tracking-widest">
                  {tutors.length} qualified tutors available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#FAF8F5] border-b border-[#1E2A4A]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: `${dashboardStats.avgAttendance}%`, label: 'Avg attendance' },
            { value: String(dashboardStats.totalStudents), label: 'Active students' },
            { value: '< 3min', label: 'To enrol online' },
            { value: '24/7', label: 'Parent portal' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-8 text-center border-r border-[#1E2A4A]/10 last:border-r-0"
            >
              <p className="text-3xl text-[#1E2A4A] mb-1" style={serif}>{stat.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-[#1E2A4A]/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm text-[#C9A227] font-medium tracking-widest uppercase mb-3">Platform Features</p>
            <h2 className="text-3xl md:text-4xl text-[#1E2A4A]" style={serif}>
              Built for tuition centres
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2A4A]/10 border border-[#1E2A4A]/10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-[#FAF8F5] p-8 border-l-4 ${feature.accent}`}
              >
                <div className="w-12 h-12 bg-[#1E2A4A] flex items-center justify-center text-[#C9A227] mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#1E2A4A]" style={serif}>{feature.title}</h3>
                <p className="text-sm text-[#1E2A4A]/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects grid */}
      <section className="py-16 px-6 bg-white border-y border-[#1E2A4A]/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-[#C9A227] font-medium tracking-widest uppercase mb-8 text-center">Subjects Offered</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#1E2A4A]/10 border border-[#1E2A4A]/10">
            {[
              { icon: <BarChart3 className="w-6 h-6" />, name: 'Mathematics' },
              { icon: <BookOpen className="w-6 h-6" />, name: 'English' },
              { icon: <ClipboardList className="w-6 h-6" />, name: 'Science' },
              { icon: <Users className="w-6 h-6" />, name: 'Languages' },
              { icon: <Clock className="w-6 h-6" />, name: 'Humanities' },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="text-center p-6 bg-[#FAF8F5] hover:bg-[#1E2A4A]/5 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-[#1E2A4A]/5 flex items-center justify-center text-[#1E2A4A]">
                  {svc.icon}
                </div>
                <p className="text-xs font-medium text-[#1E2A4A]/70 uppercase tracking-wide">{svc.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1E2A4A]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#FAF8F5] mb-2" style={serif}>
              Want this for your centre?
            </h2>
            <p className="text-sm text-[#FAF8F5]/50">
              Precision Studios builds custom education platforms for tutors and tuition centres across Australia.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A227] text-[#1E2A4A] font-semibold text-sm hover:bg-[#d4ad2f] transition-colors whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-xs tracking-widest text-[#1E2A4A]/40 bg-[#FAF8F5] border-t border-[#1E2A4A]/10">
        <p>WHITELABEL DEMO · {tuitionCenterInfo.name.toUpperCase()} · BUILT BY <Link to="/" className="text-[#C9A227] hover:underline">PRECISION STUDIOS</Link></p>
      </footer>
    </div>
  );
}
