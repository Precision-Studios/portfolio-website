import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, GraduationCap, Calendar, ArrowRight, BookMarked } from 'lucide-react';
import { tutors, subjects, tuitionCenterInfo } from '../../../data/educationData';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const sans = { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" };

const subjectColors = {
  mathematics: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  english: 'bg-amber-50 text-amber-800 border-amber-200',
  science: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  languages: 'bg-violet-50 text-violet-800 border-violet-200',
  humanities: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function EducationTutors() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filtered = activeFilter === 'all' ? tutors : tutors.filter(t => t.subject === activeFilter);

  return (
    <div className="demo-page min-h-screen bg-[#FAF8F5] text-[#1E2A4A] overflow-x-hidden" style={sans}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1E2A4A]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/education" className="flex items-center gap-2 text-[#1E2A4A]/50 hover:text-[#1E2A4A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{tuitionCenterInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-semibold tracking-tight min-w-0 truncate" style={serif}>Our Tutors</h1>
          <span className="text-xs text-[#1E2A4A]/40 uppercase tracking-widest shrink-0">{tutors.length} tutors</span>
        </div>
      </nav>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1E2A4A]/10">
        <div className="max-w-6xl mx-auto flex overflow-x-auto px-4 gap-1 py-2">
          {subjects.map(spec => (
            <button
              key={spec.id}
              onClick={() => setActiveFilter(spec.id)}
              className={`px-4 py-2 text-sm whitespace-nowrap transition-all border ${
                activeFilter === spec.id
                  ? 'bg-[#1E2A4A] text-[#FAF8F5] border-[#1E2A4A] font-medium'
                  : 'text-[#1E2A4A]/50 border-transparent hover:text-[#1E2A4A] hover:border-[#1E2A4A]/20'
              }`}
            >
              {spec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tutor grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2A4A]/10 border border-[#1E2A4A]/10">
          {filtered.map((tutor, i) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="bg-[#FAF8F5] hover:bg-white transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 bg-[#1E2A4A] flex items-center justify-center flex-shrink-0 border-2 border-[#C9A227]/30">
                    <span className="text-lg text-[#C9A227]" style={serif}>
                      {tutor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight mb-0.5" style={serif}>{tutor.name}</h3>
                    <p className="text-sm text-[#1E2A4A]/50 mb-2">{tutor.title}</p>
                    <span className={`inline-flex text-[11px] px-2.5 py-1 border font-medium uppercase tracking-wide ${subjectColors[tutor.subject] || 'bg-gray-50 text-gray-500'}`}>
                      {subjects.find(s => s.id === tutor.subject)?.label}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#1E2A4A]/60 leading-relaxed mb-5 line-clamp-2">{tutor.bio}</p>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#1E2A4A]/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tutor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#1E2A4A]/40">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[180px]">{tutor.qualification}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#1E2A4A]/60">
                    <Star className="w-3.5 h-3.5 fill-[#C9A227] text-[#C9A227]" />
                    <span className="font-medium">{tutor.rating}</span>
                    <span className="text-[#1E2A4A]/30">({tutor.reviewCount})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tutor.levels.map(level => (
                    <span key={level} className="text-[10px] px-2 py-0.5 bg-[#1E2A4A]/5 text-[#1E2A4A]/60 uppercase tracking-wide">
                      {level}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Calendar className="w-3.5 h-3.5 text-[#1E2A4A]/30" />
                  <div className="flex gap-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <span
                        key={day}
                        className={`text-[10px] w-8 h-6 flex items-center justify-center font-medium border ${
                          tutor.availableDays.includes(day)
                            ? 'bg-[#1E2A4A] text-[#C9A227] border-[#1E2A4A]'
                            : 'bg-transparent text-[#1E2A4A]/20 border-[#1E2A4A]/10'
                        }`}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-6 py-4 border-t border-[#1E2A4A]/10 bg-[#1E2A4A]/[0.02]">
                <div>
                  <span className="text-xs text-[#1E2A4A]/40 uppercase tracking-wide">Per session</span>
                  <span className="text-base font-semibold text-[#C9A227] ml-2" style={serif}>${tutor.hourlyRate}</span>
                </div>
                <Link
                  to="/demos/education/enroll"
                  state={{ tutor }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E2A4A] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2A3A5C] transition-colors"
                >
                  Enrol
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <BookMarked className="w-10 h-10 text-[#1E2A4A]/20 mx-auto mb-4" />
            <p className="text-[#1E2A4A]/50">No tutors found for this subject.</p>
          </div>
        )}
      </div>
    </div>
  );
}
