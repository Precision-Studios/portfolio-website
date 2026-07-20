import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Clock, Users, Activity, CalendarCheck, Stethoscope } from 'lucide-react';
import { clinicInfo } from '../../../data/medicalData';

const features = [
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Online Booking",
    description: "Patients book appointments 24/7. No phone calls, no missed slots, no double bookings.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Doctor Profiles",
    description: "Detailed profiles with specialisation, ratings, and real-time availability.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Patient Dashboard",
    description: "Manage appointments, view medical history, and receive automated reminders.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Compliant",
    description: "Built with data protection in mind. GDPR-ready architecture from day one.",
  },
];

const stats = [
  { value: "40%", label: "Fewer no-shows" },
  { value: "24/7", label: "Booking available" },
  { value: "< 2min", label: "To book" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function MedicalLanding() {
  return (
    <div className="min-h-screen bg-carbon-gray-100 text-white font-plex">
      {/* Teal ambient background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-15%] w-[70%] h-[70%] bg-[#007D79]/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[70%] h-[70%] bg-[#08BDBA]/8 rounded-full blur-[200px]" />
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

      {/* Hero */}
      <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.14, 0.3, 1] }}
          className="text-center max-w-4xl"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-carbon-teal-40/10 flex items-center justify-center">
              <Stethoscope className="w-8 h-8 text-carbon-teal-40" />
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-carbon-teal-40 mb-6 font-medium">{clinicInfo.name}</p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[0.95]">
            Your clinic,<br />
            <span className="text-carbon-teal-40">digitised.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            A complete digital clinic management system. Online booking, doctor profiles, patient portals, and administrative dashboards — purpose-built for healthcare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/demos/medical/doctors"
              className="carbon-btn carbon-btn-primary inline-flex items-center gap-3 px-8 hover:gap-4 transition-all"
              style={{ backgroundColor: '#08BDBA', color: '#161616' }}
            >
              <span>Browse Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/demos/medical/dashboard"
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
              <p className="text-3xl md:text-4xl font-light text-carbon-teal-40 mb-2 font-plex-mono">{stat.value}</p>
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
            Platform Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light tracking-tight mb-16"
          >
            Built for healthcare.<br />
            <span className="text-white/30">Trusted by clinics.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 bg-carbon-gray-100 hover:bg-white/[0.03] transition-colors border-l-2 border-transparent hover:border-l-carbon-teal-40"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-carbon-teal-40/10 text-carbon-teal-40 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative z-10 py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-8">Available Services</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
            {[
              { icon: "🩺", name: "General Practice", desc: "Primary care & wellness" },
              { icon: "🦷", name: "Dentistry", desc: "Cosmetic & general dental" },
              { icon: "🔬", name: "Dermatology", desc: "Skin health & treatments" },
              { icon: "👶", name: "Paediatrics", desc: "Child health & development" },
              { icon: "❤️", name: "Cardiology", desc: "Heart health & screening" },
              { icon: "📋", name: "Health Check-ups", desc: "Comprehensive assessments" },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-carbon-gray-100 hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-2xl mb-3 block">{svc.icon}</span>
                <h4 className="text-sm font-semibold mb-1">{svc.name}</h4>
                <p className="text-xs text-white/30">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-carbon-teal-40">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-carbon-gray-100 tracking-tight mb-2">
              Want this for your clinic?
            </h2>
            <p className="text-carbon-gray-100/60 text-sm">
              Precision Studios builds custom healthcare platforms.
            </p>
          </div>
          <Link
            to="/contact"
            className="carbon-btn inline-flex items-center gap-3 px-8 bg-carbon-gray-100 text-white hover:bg-carbon-gray-90 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center text-white/20 text-xs tracking-widest border-t border-white/5">
        <p>WHITELABEL DEMO · {clinicInfo.name.toUpperCase()} · BUILT BY PRECISION STUDIOS</p>
      </footer>
    </div>
  );
}
