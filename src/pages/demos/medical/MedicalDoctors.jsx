import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, GraduationCap, CalendarCheck, ArrowRight } from 'lucide-react';
import { doctors, specializations, clinicInfo } from '../../../data/medicalData';

const specColors = {
  general: 'bg-blue-50 text-blue-600',
  dental: 'bg-purple-50 text-purple-600',
  dermatology: 'bg-pink-50 text-pink-600',
  pediatrics: 'bg-amber-50 text-amber-600',
  cardiology: 'bg-red-50 text-red-600',
};

const avatarGradients = [
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-pink-500 to-pink-600',
  'from-amber-500 to-amber-600',
  'from-red-500 to-red-600',
  'from-teal-500 to-teal-600',
  'from-indigo-500 to-indigo-600',
];

export default function MedicalDoctors() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? doctors : doctors.filter(d => d.specialization === activeFilter);

  return (
    <div className="demo-page min-h-screen bg-[#F8FAFB] text-[#1A1A2E] overflow-x-hidden" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/medical" className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{clinicInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-semibold tracking-tight min-w-0 truncate">Our Doctors</h1>
          <span className="text-xs text-gray-400 shrink-0">{doctors.length} specialists</span>
        </div>
      </nav>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex overflow-x-auto px-4 gap-1 py-2">
          {specializations.map(spec => (
            <button
              key={spec.id}
              onClick={() => setActiveFilter(spec.id)}
              className={`px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-all ${
                activeFilter === spec.id
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Doctor Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((doctor, i) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-lg font-semibold text-white">
                      {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight mb-0.5">{doctor.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{doctor.title}</p>
                    <span className={`inline-flex text-[11px] px-2.5 py-1 rounded-lg font-medium ${specColors[doctor.specialization] || 'bg-gray-50 text-gray-500'}`}>
                      {specializations.find(s => s.id === doctor.specialization)?.label}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">{doctor.bio}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[180px]">{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-300">({doctor.reviewCount})</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-5">
                  <CalendarCheck className="w-3.5 h-3.5 text-gray-300" />
                  <div className="flex gap-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <span
                        key={day}
                        className={`text-[10px] w-8 h-6 flex items-center justify-center rounded font-medium ${
                          doctor.availableDays.includes(day)
                            ? 'bg-teal-50 text-teal-600'
                            : 'bg-gray-50 text-gray-300'
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-50 bg-gray-50/50">
                <div>
                  <span className="text-xs text-gray-400">Consultation</span>
                  <span className="text-base font-semibold text-teal-600 ml-2">${doctor.consultationFee}</span>
                </div>
                <Link
                  to="/demos/medical/booking"
                  state={{ doctor }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-xs font-semibold rounded-xl hover:bg-teal-500 transition-colors shadow-sm"
                >
                  Book
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
