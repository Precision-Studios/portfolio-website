import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  PawPrint,
  Heart,
  Scissors,
  Syringe,
  Stethoscope,
  Calendar,
  Shield,
  Bell,
  Sparkles,
  ChevronRight,
  Users,
} from 'lucide-react';
import { petCenterInfo, services, pets, dashboardStats } from '../../../data/petsData';

const serviceIcons = {
  scissors: Scissors,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  syringe: Syringe,
  heart: Heart,
  paw: PawPrint,
};

const features = [
  {
    icon: <PawPrint className="w-6 h-6" />,
    title: "Pet Profiles",
    description: "Complete records for every pet including breed, age, vaccination history, and owner details.",
    color: "bg-[#5B8C6A]/10 text-[#5B8C6A]",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Easy Booking",
    description: "Owners book grooming and vet appointments online in under two minutes.",
    color: "bg-[#E8846B]/15 text-[#E8846B]",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Reminders",
    description: "Automated vaccination and appointment reminders keep pets healthy and owners informed.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Health Records",
    description: "Secure digital health records accessible to staff and pet owners at any time.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const fontStyle = { fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif" };

export default function PetsLanding() {
  return (
    <div className="demo-page min-h-screen bg-[#FFF9F2] text-[#3D4A3F] overflow-x-hidden" style={fontStyle}>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#5B8C6A]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos" className="flex items-center gap-2 text-[#5B8C6A]/60 hover:text-[#5B8C6A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span>All Demos</span>
          </Link>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-[#5B8C6A] flex items-center justify-center shadow-md shadow-[#5B8C6A]/20 shrink-0">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-base font-bold tracking-tight block leading-tight text-[#3D4A3F] truncate max-w-[42vw] sm:max-w-none">{petCenterInfo.name}</span>
              <span className="text-[10px] text-[#5B8C6A]/70 hidden sm:block">Pet Care Platform</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#5B8C6A]/50 shrink-0">
            <span className="hidden sm:inline">Built by</span>
            <Link to="/" className="font-bold text-[#E8846B] hover:text-[#d4735c] transition-colors">Precision Studios</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C6A] via-[#4a7558] to-[#3d6249]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#E8846B]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full text-xs text-white/90 font-semibold mb-6 backdrop-blur-sm">
                <Heart className="w-3.5 h-3.5 text-[#E8846B]" />
                Trusted by {dashboardStats.totalPets}+ happy pets
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Where pets feel<br />
                <span className="text-[#fcd5c8]">right at home.</span>
              </h1>

              <p className="text-base lg:text-lg text-white/70 font-medium leading-relaxed mb-10 max-w-lg">
                A warm, caring platform for pet centres. Manage profiles, book grooming and vet visits, and track vaccinations all in one friendly place.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/demos/pets/booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8846B] text-white font-bold text-sm rounded-2xl hover:bg-[#d4735c] transition-colors shadow-lg shadow-[#E8846B]/30"
                >
                  Book a Visit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demos/pets/profiles"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white text-sm font-semibold rounded-2xl border border-white/20 hover:bg-white/25 transition-colors backdrop-blur-sm"
                >
                  View Pet Profiles
                </Link>
              </div>
            </motion.div>

            {/* Pet preview cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block space-y-3"
            >
              {pets.slice(0, 3).map((pet, i) => (
                <Link
                  key={pet.id}
                  to="/demos/pets/profiles"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 hover:bg-white/20 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    i === 0 ? 'bg-[#E8846B]' : i === 1 ? 'bg-white/25' : 'bg-[#5B8C6A]'
                  }`}>
                    <PawPrint className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-bold text-white">{pet.name}</p>
                    <p className="text-xs text-white/50">{pet.breed} · {pet.age}</p>
                  </div>
                  <div className="text-xs text-white/60 font-medium">
                    {pet.owner.name.split(' ')[0]}
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                </Link>
              ))}
              <p className="text-xs text-white/40 text-center pt-2">{pets.length} pets on file</p>
            </motion.div>
          </div>

          {/* Mobile pet preview scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block lg:hidden mt-10"
          >
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin-x -mx-4 px-4 sm:-mx-6 sm:px-6">
              {pets.slice(0, 3).map((pet, i) => (
                <Link
                  key={pet.id}
                  to="/demos/pets/profiles"
                  className="flex-shrink-0 w-[72vw] max-w-[260px] flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15"
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    i === 0 ? 'bg-[#E8846B]' : i === 1 ? 'bg-white/25' : 'bg-[#5B8C6A]'
                  }`}>
                    <PawPrint className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white truncate">{pet.name}</p>
                    <p className="text-xs text-white/50 truncate">{pet.breed} · {pet.age}</p>
                  </div>
                  <span className="text-xs text-white/60 font-medium shrink-0">
                    {pet.owner.name.split(' ')[0]}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#5B8C6A]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: `${dashboardStats.totalPets}+`, label: "Pets cared for" },
            { value: "98%", label: "Owner satisfaction" },
            { value: "< 2min", label: "To book online" },
            { value: "24/7", label: "Profile access" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-8 text-center border-r border-[#5B8C6A]/10 last:border-r-0"
            >
              <p className="text-3xl font-extrabold text-[#5B8C6A] mb-1">{stat.value}</p>
              <p className="text-[11px] uppercase tracking-wider text-[#5B8C6A]/50 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[#E8846B] font-bold tracking-wider uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#3D4A3F]">
              Everything your pet needs
            </h2>
            <p className="text-sm text-[#5B8C6A]/70 mt-4 max-w-lg mx-auto">
              From a quick nail trim to a full wellness check, we keep tails wagging and whiskers twitching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon] || PawPrint;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-3xl p-7 border border-[#5B8C6A]/10 hover:shadow-xl hover:shadow-[#5B8C6A]/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#5B8C6A]/10 text-[#5B8C6A] flex items-center justify-center mb-5 group-hover:bg-[#E8846B]/15 group-hover:text-[#E8846B] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-[#3D4A3F]">{service.name}</h3>
                  <p className="text-sm text-[#5B8C6A]/70 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#5B8C6A]/50">{service.duration}</span>
                    <span className="text-[#E8846B]">${service.price}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 bg-white border-y border-[#5B8C6A]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-sm text-[#5B8C6A] font-bold tracking-wider uppercase mb-3">Platform Features</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#3D4A3F]">
              Built for pet care teams
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
                className="bg-[#FFF9F2] rounded-3xl p-7 border border-[#5B8C6A]/10"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.color} mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight text-[#3D4A3F]">{feature.title}</h3>
                <p className="text-sm text-[#5B8C6A]/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff teaser */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-[#5B8C6A] mb-3">
              <Users className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3D4A3F] mb-2">
              Caring hands, expert skills
            </h2>
            <p className="text-sm text-[#5B8C6A]/70 max-w-md">
              Veterinarians, groomers, and nurses who treat every pet like family.
            </p>
          </div>
          <Link
            to="/demos/pets/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B8C6A] text-white font-bold text-sm rounded-2xl hover:bg-[#4a7558] transition-colors shadow-lg shadow-[#5B8C6A]/20 whitespace-nowrap"
          >
            Staff Dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#5B8C6A] to-[#4a7558]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              Want this for your pet centre?
            </h2>
            <p className="text-sm text-white/60">
              Precision Studios builds custom pet care platforms for Australian businesses.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8846B] text-white font-bold text-sm rounded-2xl hover:bg-[#d4735c] transition-colors shadow-lg whitespace-nowrap"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 text-center text-xs tracking-wider text-[#5B8C6A]/50 bg-white border-t border-[#5B8C6A]/10">
        <p>WHITELABEL DEMO · {petCenterInfo.name.toUpperCase()} · BUILT BY <Link to="/" className="text-[#E8846B] hover:underline font-bold">PRECISION STUDIOS</Link></p>
      </footer>
    </div>
  );
}
