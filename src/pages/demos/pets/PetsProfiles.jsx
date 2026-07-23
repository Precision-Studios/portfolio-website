import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  PawPrint,
  Syringe,
  Calendar,
  Phone,
  Mail,
  User,
  AlertCircle,
  ArrowRight,
  Dog,
  Cat,
  Rabbit,
  Bird,
} from 'lucide-react';
import { pets, speciesFilters, petCenterInfo, vaccinationLabels } from '../../../data/petsData';

const speciesIcons = {
  dog: Dog,
  cat: Cat,
  rabbit: Rabbit,
  bird: Bird,
};

const avatarColors = [
  'bg-[#5B8C6A]',
  'bg-[#E8846B]',
  'bg-[#7BA88A]',
  'bg-[#D4A574]',
  'bg-[#6B9E7A]',
  'bg-[#C97B6A]',
  'bg-[#8FB89A]',
  'bg-[#B88A6B]',
];

const fontStyle = { fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif" };

export default function PetsProfiles() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? pets : pets.filter(p => p.species === activeFilter);

  return (
    <div className="demo-page min-h-screen bg-[#FFF9F2] text-[#3D4A3F] overflow-x-hidden" style={fontStyle}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#5B8C6A]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/pets" className="flex items-center gap-2 text-[#5B8C6A]/60 hover:text-[#5B8C6A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{petCenterInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-bold tracking-tight min-w-0 truncate">Pet Profiles</h1>
          <span className="text-xs text-[#5B8C6A]/50 font-semibold shrink-0">{pets.length} registered</span>
        </div>
      </nav>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#5B8C6A]/10">
        <div className="max-w-6xl mx-auto flex overflow-x-auto px-4 gap-2 py-3">
          {speciesFilters.map(spec => {
            const Icon = spec.id !== 'all' ? speciesIcons[spec.id] : PawPrint;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveFilter(spec.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-2xl whitespace-nowrap transition-all font-semibold ${
                  activeFilter === spec.id
                    ? 'bg-[#5B8C6A] text-white shadow-md shadow-[#5B8C6A]/20'
                    : 'text-[#5B8C6A]/60 hover:text-[#5B8C6A] hover:bg-[#5B8C6A]/10'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {spec.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Pet Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((pet, i) => {
            const SpeciesIcon = speciesIcons[pet.species] || PawPrint;
            const vaxConfig = vaccinationLabels[pet.vaccinationStatus];

            return (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="bg-white rounded-3xl border border-[#5B8C6A]/10 hover:shadow-xl hover:shadow-[#5B8C6A]/5 transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${avatarColors[i % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <SpeciesIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-lg font-extrabold tracking-tight mb-0.5 text-[#3D4A3F]">{pet.name}</h3>
                      <p className="text-sm text-[#5B8C6A]/60 mb-2">{pet.breed}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex text-[11px] px-3 py-1 rounded-full font-bold bg-[#FFF9F2] text-[#5B8C6A]">
                          {pet.age} · {pet.weight}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-[11px] px-3 py-1 rounded-full font-bold ${vaxConfig.bg} ${vaxConfig.color}`}>
                          <Syringe className="w-3 h-3" />
                          {vaxConfig.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {pet.notes && (
                    <p className="text-sm text-[#5B8C6A]/70 leading-relaxed mb-5 line-clamp-2 bg-[#FFF9F2] rounded-2xl p-3">
                      {pet.notes}
                    </p>
                  )}

                  {/* Vaccination info */}
                  {pet.vaccinationStatus !== 'not-required' && (
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-xs text-[#5B8C6A]/60">
                      {pet.lastVaccination && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Last: {pet.lastVaccination}</span>
                        </div>
                      )}
                      {pet.nextVaccination && (
                        <div className="flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Next: {pet.nextVaccination}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Owner */}
                  <div className="bg-[#FFF9F2] rounded-2xl p-4 mb-5">
                    <p className="text-[10px] uppercase tracking-wider text-[#5B8C6A]/50 font-bold mb-2">Owner</p>
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4 text-[#5B8C6A]" />
                      <span className="text-sm font-bold text-[#3D4A3F]">{pet.owner.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#5B8C6A]/60">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {pet.owner.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {pet.owner.email}
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/demos/pets/booking"
                    state={{ pet }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#E8846B] text-white text-sm font-bold rounded-2xl hover:bg-[#d4735c] transition-colors shadow-md shadow-[#E8846B]/20"
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
