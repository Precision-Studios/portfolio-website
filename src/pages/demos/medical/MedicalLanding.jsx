import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Clock, Users, Activity, CalendarCheck, Stethoscope, Star, ChevronRight, Microscope, Baby, Heart, ClipboardList } from 'lucide-react';
import { clinicInfo, doctors } from '../../../data/medicalData';

const features = [
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Online Booking",
    description: "Patients book appointments 24/7 from any device. Automated confirmations and reminders.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Doctor Profiles",
    description: "Detailed profiles with qualifications, ratings, and live availability calendars.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Patient Portal",
    description: "Patients view their history, upcoming appointments, and health records online.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Compliant",
    description: "Built with privacy legislation in mind. Data encryption and access controls from day one.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const specializations = [
  { icon: <Stethoscope className="w-6 h-6" />, name: "General Practice", color: "bg-teal-50 text-teal-600" },
  { icon: <Stethoscope className="w-6 h-6" />, name: "Dentistry", color: "bg-blue-50 text-blue-600" },
  { icon: <Microscope className="w-6 h-6" />, name: "Dermatology", color: "bg-purple-50 text-purple-600" },
  { icon: <Baby className="w-6 h-6" />, name: "Paediatrics", color: "bg-pink-50 text-pink-600" },
  { icon: <Heart className="w-6 h-6" />, name: "Cardiology", color: "bg-red-50 text-red-600" },
  { icon: <ClipboardList className="w-6 h-6" />, name: "Health Checks", color: "bg-emerald-50 text-emerald-600" },
];

export default function MedicalLanding() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#1A1A2E]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/demos" className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>All Demos</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight block leading-tight">{clinicInfo.name}</span>
              <span className="text-[10px] text-gray-400">Healthcare Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="hidden sm:inline">Built by</span>
            <Link to="/" className="font-semibold text-teal-600 hover:text-teal-500 transition-colors">Precision Studios</Link>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D3B3F] via-[#0A4A4F] to-[#063B40]" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs text-teal-200 font-medium mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Accepting new patients
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6 tracking-tight">
                Healthcare,<br />
                <span className="text-teal-300">reimagined.</span>
              </h1>

              <p className="text-base lg:text-lg text-white/50 font-light leading-relaxed mb-10 max-w-lg">
                A modern patient booking system with doctor profiles, appointment management, and clinical dashboards - built for Australian healthcare providers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/demos/medical/doctors"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-400 text-[#0A4A4F] font-semibold text-sm rounded-xl hover:bg-teal-300 transition-colors shadow-lg shadow-teal-400/20"
                >
                  Find a Doctor
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demos/medical/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white text-sm rounded-xl border border-white/15 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Admin Dashboard
                </Link>
              </div>
            </motion.div>

            {/* Doctor Preview Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block space-y-3"
            >
              {doctors.slice(0, 3).map((doc, i) => (
                <Link
                  key={doc.id}
                  to="/demos/medical/doctors"
                  className="flex items-center gap-4 p-4 bg-white/[0.07] backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/[0.12] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-semibold text-white">{doc.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-semibold text-white">{doc.name}</p>
                    <p className="text-xs text-white/40">{doc.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    <span>{doc.rating}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                </Link>
              ))}
              <p className="text-xs text-white/30 text-center pt-2">{doctors.length} specialists available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "40%", label: "Fewer no-shows" },
            { value: "24/7", label: "Booking available" },
            { value: "< 2min", label: "To book" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-8 text-center border-r border-gray-100 last:border-r-0"
            >
              <p className="text-3xl font-semibold text-teal-600 mb-1">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-wider text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-teal-600 font-medium tracking-wider uppercase mb-3">Platform Features</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Everything your clinic needs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-teal-600 font-medium tracking-wider uppercase mb-8 text-center">Available Specialisations</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specializations.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="text-center p-5 bg-[#F8FAFB] rounded-xl hover:bg-teal-50 transition-colors cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${svc.color}`}>
                  {svc.icon}
                </div>
                <p className="text-xs font-medium text-gray-600">{svc.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Want this for your clinic?
            </h2>
            <p className="text-sm text-white/60">
              Precision Studios builds custom healthcare platforms for Australian practices.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-teal-700 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 text-center text-xs tracking-wider text-gray-400 bg-white border-t border-gray-100">
        <p>WHITELABEL DEMO · {clinicInfo.name.toUpperCase()} · BUILT BY <Link to="/" className="text-teal-600 hover:underline">PRECISION STUDIOS</Link></p>
      </footer>
    </div>
  );
}
