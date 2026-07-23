import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, CheckCircle, Calendar, Clock, User, FileText } from 'lucide-react';
import { doctors, timeSlots, clinicInfo } from '../../../data/medicalData';

const steps = ['Doctor', 'Date & Time', 'Your Details', 'Confirm'];

export default function MedicalBooking() {
  const location = useLocation();
  const preselectedDoctor = location.state?.doctor || null;

  const [currentStep, setCurrentStep] = useState(preselectedDoctor ? 1 : 0);
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({ name: '', email: '', phone: '', notes: '' });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
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

  const availableTimes = selectedDoctor && selectedDate
    ? timeSlots.filter(() => Math.random() > 0.3)
    : timeSlots;

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!selectedDoctor;
      case 1: return !!selectedDate && !!selectedTime;
      case 2: return patientInfo.name && patientInfo.email && patientInfo.phone;
      case 3: return true;
      default: return false;
    }
  };

  const handleConfirm = () => {
    setRefNumber(`APT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-[#F8FAFB] text-[#1A1A2E] flex items-center justify-center px-6" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md w-full"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-teal-50 rounded-2xl flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-teal-600" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Appointment Booked</h1>
          <p className="text-sm text-gray-400 mb-8">A confirmation has been sent to your email.</p>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8 text-left space-y-3 shadow-sm">
            {[
              ['Reference', refNumber, 'font-semibold text-teal-600'],
              ['Doctor', selectedDoctor?.name, ''],
              ['Date', selectedDate, 'font-mono text-sm'],
              ['Time', selectedTime, 'font-mono text-sm'],
              ['Patient', patientInfo.name, ''],
              ['Fee', `$${selectedDoctor?.consultationFee}`, 'font-semibold'],
            ].map(([label, value, cls]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-gray-400">{label}</span>
                <span className={cls}>{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/demos/medical/doctors" className="w-full py-3 bg-teal-600 text-white rounded-xl font-semibold text-sm text-center hover:bg-teal-500 transition-colors shadow-sm">
              Book Another
            </Link>
            <Link to="/demos/medical" className="w-full py-3 text-gray-400 text-sm text-center hover:text-gray-600 transition-colors">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#1A1A2E]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/demos/medical/doctors" className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Doctors</span>
          </Link>
          <h1 className="text-base font-semibold">Book Appointment</h1>
          <span className="text-xs text-gray-400">Step {currentStep + 1}/4</span>
        </div>
      </nav>

      {/* Progress */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto flex px-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-xs transition-all ${
                i === currentStep ? 'text-teal-600 font-medium' : i < currentStep ? 'text-teal-400' : 'text-gray-300'
              }`}
            >
              <span className={`w-6 h-6 flex items-center justify-center text-[11px] rounded-lg font-medium ${
                i < currentStep ? 'bg-teal-100 text-teal-600' : i === currentStep ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-400'
              }`}>
                {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{step}</span>
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-gray-100">
          <motion.div
            className="h-full bg-teal-500"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep) / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {/* Step 0: Doctor */}
          {currentStep === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-400 mb-4">Select a doctor for your appointment</p>
              <div className="space-y-2">
                {doctors.map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${
                      selectedDoctor?.id === doc.id
                        ? 'border-teal-500 bg-teal-50 shadow-sm'
                        : 'border-gray-100 bg-white hover:border-gray-200'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-white">{doc.name.split(' ').slice(-1)[0][0]}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold">{doc.name}</p>
                      <p className="text-xs text-gray-400">{doc.title} · ${doc.consultationFee}</p>
                    </div>
                    {selectedDoctor?.id === doc.id && <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Date/Time */}
          {currentStep === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-400 mb-4 flex items-center gap-2"><Calendar className="w-4 h-4" /> Pick a date</p>
              <div className="grid grid-cols-7 gap-2 mb-8">
                {dates.map(d => (
                  <button
                    key={d.value}
                    onClick={() => { setSelectedDate(d.value); setSelectedTime(''); }}
                    className={`flex flex-col items-center py-3 rounded-xl text-center transition-all ${
                      selectedDate === d.value
                        ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                        : 'bg-white border border-gray-100 text-gray-500 hover:border-teal-200'
                    }`}
                  >
                    <span className="text-[10px] uppercase">{d.day}</span>
                    <span className="text-lg font-semibold">{d.date}</span>
                    <span className="text-[10px]">{d.month}</span>
                  </button>
                ))}
              </div>

              {selectedDate && (
                <>
                  <p className="text-sm text-gray-400 mb-4 flex items-center gap-2"><Clock className="w-4 h-4" /> Select a time</p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 text-sm rounded-xl transition-all font-mono ${
                          selectedTime === time
                            ? 'bg-teal-600 text-white font-medium shadow-md shadow-teal-600/20'
                            : 'bg-white border border-gray-100 text-gray-500 hover:border-teal-200'
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
              <p className="text-sm text-gray-400 mb-6 flex items-center gap-2"><User className="w-4 h-4" /> Your information</p>
              <div className="space-y-5">
                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com.au' },
                  { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+61 4XX XXX XXX' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium text-gray-500 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={patientInfo[field.key]}
                      onChange={e => setPatientInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 flex items-center gap-1"><FileText className="w-3 h-3" /> Notes (Optional)</label>
                  <textarea
                    value={patientInfo.notes}
                    onChange={e => setPatientInfo(prev => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    placeholder="Any symptoms or concerns..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-400 mb-4">Review your appointment details</p>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4 shadow-sm">
                {[
                  ['Doctor', selectedDoctor?.name],
                  ['Specialisation', selectedDoctor?.title],
                  ['Date', selectedDate],
                  ['Time', selectedTime],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between text-sm">
                    <span className="text-gray-400">{l}</span><span className="font-medium">{v}</span>
                  </div>
                ))}
                <div className="border-t border-gray-100 pt-4 space-y-3">
                  {[
                    ['Patient', patientInfo.name],
                    ['Email', patientInfo.email],
                    ['Phone', patientInfo.phone],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between text-sm">
                      <span className="text-gray-400">{l}</span><span className="text-gray-500">{v}</span>
                    </div>
                  ))}
                  {patientInfo.notes && (
                    <div><span className="text-xs text-gray-400 block mb-1">Notes</span><p className="text-sm text-gray-500">{patientInfo.notes}</p></div>
                  )}
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between">
                  <span className="font-semibold">Consultation Fee</span>
                  <span className="text-xl font-semibold text-teal-600">${selectedDoctor?.consultationFee}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors ${currentStep === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                canProceed()
                  ? 'bg-teal-600 text-white hover:bg-teal-500 shadow-sm'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white text-sm font-semibold rounded-xl hover:bg-teal-500 transition-colors shadow-sm"
            >
              Confirm Booking <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
