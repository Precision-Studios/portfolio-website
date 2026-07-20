import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, GraduationCap, CalendarCheck, ArrowRight } from 'lucide-react';
import { doctors, specializations, clinicInfo } from '../../../data/medicalData';

export default function MedicalDoctors() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? doctors
    : doctors.filter(d => d.specialization === activeFilter);

  const specColors = {
    general: 'bg-blue-500/10 text-blue-400',
    dental: 'bg-purple-500/10 text-purple-400',
    dermatology: 'bg-pink-500/10 text-pink-400',
    pediatrics: 'bg-yellow-500/10 text-yellow-400',
    cardiology: 'bg-red-500/10 text-red-400',
  };

  const avatarColors = [
    'from-blue-600 to-blue-400',
    'from-purple-600 to-purple-400',
    'from-pink-600 to-pink-400',
    'from-yellow-600 to-yellow-400',
    'from-red-600 to-red-400',
    'from-teal-600 to-teal-400',
    'from-indigo-600 to-indigo-400',
  ];

  return (
    <div className="min-h-screen bg-carbon-gray-100 text-white font-plex">
      {/* Top Bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5 bg-carbon-gray-100/95 backdrop-blur-sm">
        <Link to="/demos/medical" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{clinicInfo.name}</span>
        </Link>
        <h1 className="text-sm font-semibold tracking-tight">Our Doctors</h1>
        <span className="text-xs text-white/30 font-plex-mono">{doctors.length} specialists</span>
      </nav>

      {/* Filter Tabs */}
      <div className="sticky top-12 z-20 border-b border-white/5 bg-carbon-gray-100/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex overflow-x-auto">
          {specializations.map(spec => (
            <button
              key={spec.id}
              onClick={() => setActiveFilter(spec.id)}
              className={`px-6 py-3 text-sm whitespace-nowrap transition-all border-b-2 ${
                activeFilter === spec.id
                  ? 'border-carbon-teal-40 text-white'
                  : 'border-transparent text-white/40 hover:text-white/60 hover:bg-white/[0.02]'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className={`w-14 h-14 flex-shrink-0 bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center`}>
                    <span className="text-xl font-light text-white">
                      {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>

                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight mb-0.5">{doctor.name}</h3>
                    <p className="text-sm text-white/40">{doctor.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-[10px] px-2 py-0.5 font-medium uppercase tracking-wider ${specColors[doctor.specialization] || 'bg-white/10 text-white/50'}`}>
                        {specializations.find(s => s.id === doctor.specialization)?.label}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/35 leading-relaxed mb-4 line-clamp-2">{doctor.bio}</p>

                {/* Info Row */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span>{doctor.rating} ({doctor.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Available Days */}
                <div className="flex items-center gap-2 mb-5">
                  <CalendarCheck className="w-3.5 h-3.5 text-white/30" />
                  <div className="flex gap-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <span
                        key={day}
                        className={`text-[10px] w-8 h-6 flex items-center justify-center font-plex-mono ${
                          doctor.availableDays.includes(day)
                            ? 'bg-carbon-teal-40/15 text-carbon-teal-40'
                            : 'bg-white/[0.02] text-white/15'
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-white/30">Consultation</span>
                    <span className="text-base font-plex-mono font-semibold text-carbon-teal-40 ml-2">£{doctor.consultationFee}</span>
                  </div>
                  <Link
                    to={`/demos/medical/booking`}
                    state={{ doctor }}
                    className="carbon-btn carbon-btn-primary inline-flex items-center gap-2 px-4 text-xs"
                    style={{ backgroundColor: '#08BDBA', color: '#161616', height: '2.25rem' }}
                  >
                    Book Appointment
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
