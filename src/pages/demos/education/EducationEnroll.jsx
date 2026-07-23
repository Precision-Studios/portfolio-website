import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, Clock, User, FileText, Check } from 'lucide-react';
import { tutors, timetableSlots } from '../../../data/educationData';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const sans = { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" };

const steps = ['Tutor', 'Schedule', 'Student Details', 'Confirm'];

export default function EducationEnroll() {
  const location = useLocation();
  const preselectedTutor = location.state?.tutor || null;

  const [currentStep, setCurrentStep] = useState(preselectedTutor ? 1 : 0);
  const [selectedTutor, setSelectedTutor] = useState(preselectedTutor);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [studentInfo, setStudentInfo] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    yearLevel: '',
    notes: '',
  });
  const [enrollmentConfirmed, setEnrollmentConfirmed] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      value: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-AU', { weekday: 'short' }),
      date: d.getDate(),
      month: d.toLocaleDateString('en-AU', { month: 'short' }),
    };
  });

  const availableTimes = selectedTutor && selectedDate
    ? timetableSlots.filter((_, idx) => (idx + selectedDate.length) % 3 !== 0)
    : timetableSlots;

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!selectedTutor;
      case 1: return !!selectedDate && !!selectedTime;
      case 2: return studentInfo.studentName && studentInfo.parentName && studentInfo.email && studentInfo.phone && studentInfo.yearLevel;
      case 3: return true;
      default: return false;
    }
  };

  const handleConfirm = () => {
    setRefNumber(`ENR-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);
    setEnrollmentConfirmed(true);
  };

  if (enrollmentConfirmed) {
    return (
      <div className="demo-page min-h-screen bg-[#FAF8F5] text-[#1E2A4A] flex items-center justify-center px-4 sm:px-6 overflow-x-hidden" style={sans}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md w-full"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-[#1E2A4A] flex items-center justify-center border-2 border-[#C9A227]/30">
            <CheckCircle className="w-10 h-10 text-[#C9A227]" />
          </div>
          <h1 className="text-2xl font-semibold mb-2" style={serif}>Enrolment Confirmed</h1>
          <p className="text-sm text-[#1E2A4A]/50 mb-8">A confirmation has been sent to your email.</p>

          <div className="bg-white border border-[#1E2A4A]/10 p-6 mb-8 text-left space-y-3">
            {[
              ['Reference', refNumber, 'font-semibold text-[#C9A227]'],
              ['Tutor', selectedTutor?.name, ''],
              ['First Session', selectedDate, 'font-mono text-sm'],
              ['Time', selectedTime, 'font-mono text-sm'],
              ['Student', studentInfo.studentName, ''],
              ['Year Level', studentInfo.yearLevel, ''],
              ['Fee', `$${selectedTutor?.hourlyRate}/session`, 'font-semibold'],
            ].map(([label, value, cls]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-[#1E2A4A]/40">{label}</span>
                <span className={cls}>{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/demos/education/tutors" className="w-full py-3 bg-[#1E2A4A] text-[#FAF8F5] font-semibold text-sm text-center hover:bg-[#2A3A5C] transition-colors">
              Enrol Another Student
            </Link>
            <Link to="/demos/education" className="w-full py-3 text-[#1E2A4A]/40 text-sm text-center hover:text-[#1E2A4A] transition-colors">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="demo-page min-h-screen bg-[#FAF8F5] text-[#1E2A4A] overflow-x-hidden" style={sans}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1E2A4A]/10">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/education/tutors" className="flex items-center gap-2 text-[#1E2A4A]/50 hover:text-[#1E2A4A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span>Tutors</span>
          </Link>
          <h1 className="text-sm sm:text-base font-semibold min-w-0 truncate" style={serif}>Enrol Student</h1>
          <span className="text-xs text-[#1E2A4A]/40 shrink-0">Step {currentStep + 1}/4</span>
        </div>
      </nav>

      {/* Progress */}
      <div className="bg-white border-b border-[#1E2A4A]/10">
        <div className="max-w-3xl mx-auto flex px-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-xs transition-all ${
                i === currentStep ? 'text-[#1E2A4A] font-medium' : i < currentStep ? 'text-[#C9A227]' : 'text-[#1E2A4A]/25'
              }`}
            >
              <span className={`w-6 h-6 flex items-center justify-center text-[11px] font-medium border ${
                i < currentStep ? 'bg-[#C9A227]/10 text-[#C9A227] border-[#C9A227]/30' : i === currentStep ? 'bg-[#1E2A4A] text-[#FAF8F5] border-[#1E2A4A]' : 'bg-transparent text-[#1E2A4A]/25 border-[#1E2A4A]/10'
              }`}>
                {i < currentStep ? <Check className="w-3 h-3" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{step}</span>
            </div>
          ))}
        </div>
        <div className="h-0.5 bg-[#1E2A4A]/10">
          <motion.div
            className="h-full bg-[#C9A227]"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {/* Step 0: Tutor */}
          {currentStep === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#1E2A4A]/50 mb-4">Select a tutor for your student</p>
              <div className="space-y-2">
                {tutors.map(tutor => (
                  <button
                    key={tutor.id}
                    onClick={() => setSelectedTutor(tutor)}
                    className={`w-full text-left p-4 border transition-all flex items-center gap-4 ${
                      selectedTutor?.id === tutor.id
                        ? 'border-[#C9A227] bg-[#C9A227]/5'
                        : 'border-[#1E2A4A]/10 bg-white hover:border-[#1E2A4A]/25'
                    }`}
                  >
                    <div className="w-10 h-10 bg-[#1E2A4A] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-[#C9A227]" style={serif}>{tutor.name.split(' ').slice(-1)[0][0]}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold" style={serif}>{tutor.name}</p>
                      <p className="text-xs text-[#1E2A4A]/40">{tutor.title} · ${tutor.hourlyRate}/session</p>
                    </div>
                    {selectedTutor?.id === tutor.id && <CheckCircle className="w-5 h-5 text-[#C9A227] flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Schedule */}
          {currentStep === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#1E2A4A]/50 mb-4 flex items-center gap-2"><Calendar className="w-4 h-4" /> Pick a date for the first session</p>
              <div className="grid grid-cols-7 gap-2 mb-8">
                {dates.map(d => (
                  <button
                    key={d.value}
                    onClick={() => { setSelectedDate(d.value); setSelectedTime(''); }}
                    className={`flex flex-col items-center py-3 text-center transition-all border ${
                      selectedDate === d.value
                        ? 'bg-[#1E2A4A] text-[#FAF8F5] border-[#1E2A4A]'
                        : 'bg-white border-[#1E2A4A]/10 text-[#1E2A4A]/50 hover:border-[#C9A227]/40'
                    }`}
                  >
                    <span className="text-[10px] uppercase">{d.day}</span>
                    <span className="text-lg font-semibold" style={serif}>{d.date}</span>
                    <span className="text-[10px]">{d.month}</span>
                  </button>
                ))}
              </div>

              {selectedDate && (
                <>
                  <p className="text-sm text-[#1E2A4A]/50 mb-4 flex items-center gap-2"><Clock className="w-4 h-4" /> Select a time slot</p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 text-sm transition-all font-mono border ${
                          selectedTime === time
                            ? 'bg-[#1E2A4A] text-[#FAF8F5] font-medium border-[#1E2A4A]'
                            : 'bg-white border-[#1E2A4A]/10 text-[#1E2A4A]/50 hover:border-[#C9A227]/40'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#1E2A4A]/50 mb-6 flex items-center gap-2"><User className="w-4 h-4" /> Student and parent information</p>
              <div className="space-y-5">
                {[
                  { key: 'studentName', label: 'Student Name', type: 'text', placeholder: 'Emma Wilson' },
                  { key: 'parentName', label: 'Parent/Guardian Name', type: 'text', placeholder: 'Sarah Wilson' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'sarah@example.com.au' },
                  { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+61 4XX XXX XXX' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium text-[#1E2A4A]/50 mb-2 uppercase tracking-wide">{field.label}</label>
                    <input
                      type={field.type}
                      value={studentInfo[field.key]}
                      onChange={e => setStudentInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-[#1E2A4A]/15 px-4 py-3 text-sm placeholder:text-[#1E2A4A]/25 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 focus:border-[#C9A227] transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-[#1E2A4A]/50 mb-2 uppercase tracking-wide">Year Level</label>
                  <select
                    value={studentInfo.yearLevel}
                    onChange={e => setStudentInfo(prev => ({ ...prev, yearLevel: e.target.value }))}
                    className="w-full bg-white border border-[#1E2A4A]/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 focus:border-[#C9A227] transition-all"
                  >
                    <option value="">Select year level</option>
                    {['Primary', 'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'IB', 'Selective Prep'].map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#1E2A4A]/50 mb-2 flex items-center gap-1 uppercase tracking-wide">
                    <FileText className="w-3 h-3" /> Notes (Optional)
                  </label>
                  <textarea
                    value={studentInfo.notes}
                    onChange={e => setStudentInfo(prev => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    placeholder="Learning goals, subject focus, or special requirements..."
                    className="w-full bg-white border border-[#1E2A4A]/15 px-4 py-3 text-sm placeholder:text-[#1E2A4A]/25 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 focus:border-[#C9A227] transition-all resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#1E2A4A]/50 mb-4">Review your enrolment details</p>
              <div className="bg-white border border-[#1E2A4A]/10 p-6 space-y-4">
                {[
                  ['Tutor', selectedTutor?.name],
                  ['Subject', selectedTutor?.title],
                  ['First Session', selectedDate],
                  ['Time', selectedTime],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between text-sm">
                    <span className="text-[#1E2A4A]/40">{l}</span><span className="font-medium">{v}</span>
                  </div>
                ))}
                <div className="border-t border-[#1E2A4A]/10 pt-4 space-y-3">
                  {[
                    ['Student', studentInfo.studentName],
                    ['Parent', studentInfo.parentName],
                    ['Email', studentInfo.email],
                    ['Phone', studentInfo.phone],
                    ['Year Level', studentInfo.yearLevel],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between text-sm">
                      <span className="text-[#1E2A4A]/40">{l}</span><span className="text-[#1E2A4A]/60">{v}</span>
                    </div>
                  ))}
                  {studentInfo.notes && (
                    <div><span className="text-xs text-[#1E2A4A]/40 block mb-1">Notes</span><p className="text-sm text-[#1E2A4A]/60">{studentInfo.notes}</p></div>
                  )}
                </div>
                <div className="border-t border-[#1E2A4A]/10 pt-4 flex justify-between">
                  <span className="font-semibold" style={serif}>Session Fee</span>
                  <span className="text-xl font-semibold text-[#C9A227]" style={serif}>${selectedTutor?.hourlyRate}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#1E2A4A]/10">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 text-sm text-[#1E2A4A]/40 hover:text-[#1E2A4A] transition-colors ${currentStep === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold transition-all ${
                canProceed()
                  ? 'bg-[#1E2A4A] text-[#FAF8F5] hover:bg-[#2A3A5C]'
                  : 'bg-[#1E2A4A]/10 text-[#1E2A4A]/25 cursor-not-allowed'
              }`}
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C9A227] text-[#1E2A4A] text-sm font-semibold hover:bg-[#d4ad2f] transition-colors"
            >
              Confirm Enrolment <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
