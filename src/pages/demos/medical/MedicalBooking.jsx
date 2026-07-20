import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Calendar, Clock, User, FileText } from 'lucide-react';
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

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      value: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-GB', { weekday: 'short' }),
      date: d.getDate(),
      month: d.toLocaleDateString('en-GB', { month: 'short' }),
      dayName: d.toLocaleDateString('en-GB', { weekday: 'long' }),
    };
  });

  const availableTimes = selectedDoctor && selectedDate
    ? timeSlots.filter(() => Math.random() > 0.3) // simulate some unavailability
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
    const ref = `APT-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    setRefNumber(ref);
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-carbon-gray-100 text-white font-plex flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0.14, 0.3, 1] }}
          className="text-center max-w-md w-full"
        >
          <div className="w-20 h-20 mx-auto mb-8 bg-carbon-teal-40/15 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-carbon-teal-40" />
          </div>
          <h1 className="text-3xl font-light tracking-tight mb-3">Appointment Booked</h1>
          <p className="text-sm text-white/40 mb-8">A confirmation has been sent to your email.</p>

          <div className="bg-white/[0.03] border border-white/5 p-6 mb-8 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Reference</span>
              <span className="font-plex-mono font-semibold text-carbon-teal-40">{refNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Doctor</span>
              <span>{selectedDoctor?.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Date</span>
              <span className="font-plex-mono">{selectedDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Time</span>
              <span className="font-plex-mono">{selectedTime}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Patient</span>
              <span>{patientInfo.name}</span>
            </div>
            <div className="border-t border-white/5 pt-3 flex justify-between text-sm">
              <span className="text-white/40">Fee</span>
              <span className="font-plex-mono font-semibold">£{selectedDoctor?.consultationFee}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/demos/medical/doctors"
              className="carbon-btn carbon-btn-primary flex items-center justify-center gap-2 w-full"
              style={{ backgroundColor: '#08BDBA', color: '#161616' }}
            >
              Book Another
            </Link>
            <Link
              to="/demos/medical"
              className="carbon-btn carbon-btn-ghost flex items-center justify-center gap-2 w-full text-white/40 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-carbon-gray-100 text-white font-plex">
      {/* Top Bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5 bg-carbon-gray-100/95 backdrop-blur-sm">
        <Link to="/demos/medical/doctors" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Doctors</span>
        </Link>
        <h1 className="text-sm font-semibold tracking-tight">Book Appointment</h1>
        <span className="text-xs text-white/30 font-plex-mono">Step {currentStep + 1}/4</span>
      </nav>

      {/* Progress Bar */}
      <div className="border-b border-white/5">
        <div className="max-w-3xl mx-auto flex">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center gap-2 px-4 py-3 text-xs border-b-2 transition-all ${
                i === currentStep
                  ? 'border-carbon-teal-40 text-white'
                  : i < currentStep
                    ? 'border-carbon-teal-40/30 text-white/60'
                    : 'border-transparent text-white/20'
              }`}
            >
              <span className={`w-5 h-5 flex items-center justify-center text-[10px] font-plex-mono ${
                i < currentStep ? 'bg-carbon-teal-40/20 text-carbon-teal-40' : i === currentStep ? 'bg-carbon-teal-40 text-carbon-gray-100' : 'bg-white/5'
              }`}>
                {i < currentStep ? '✓' : i + 1}
              </span>
              <span className="hidden sm:inline">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {/* Step 0: Select Doctor */}
          {currentStep === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Select a Doctor</p>
              <div className="space-y-2">
                {doctors.map(doc => (
                  <button
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc)}
                    className={`w-full text-left p-4 border transition-all flex items-center gap-4 ${
                      selectedDoctor?.id === doc.id
                        ? 'border-carbon-teal-40 bg-carbon-teal-40/5'
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-light text-white">{doc.name.split(' ').slice(-1)[0][0]}</span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-sm font-semibold">{doc.name}</p>
                      <p className="text-xs text-white/40">{doc.title} · £{doc.consultationFee}</p>
                    </div>
                    {selectedDoctor?.id === doc.id && (
                      <CheckCircle className="w-5 h-5 text-carbon-teal-40 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Date & Time */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                <Calendar className="w-3.5 h-3.5 inline mr-1" /> Select Date
              </p>
              <div className="grid grid-cols-7 gap-2 mb-8">
                {dates.map(d => (
                  <button
                    key={d.value}
                    onClick={() => { setSelectedDate(d.value); setSelectedTime(''); }}
                    className={`flex flex-col items-center py-3 text-center transition-all ${
                      selectedDate === d.value
                        ? 'bg-carbon-teal-40 text-carbon-gray-100'
                        : 'bg-white/[0.03] text-white/50 hover:bg-white/[0.06]'
                    }`}
                  >
                    <span className="text-[10px] uppercase">{d.day}</span>
                    <span className="text-lg font-plex-mono font-medium">{d.date}</span>
                    <span className="text-[10px]">{d.month}</span>
                  </button>
                ))}
              </div>

              {selectedDate && (
                <>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                    <Clock className="w-3.5 h-3.5 inline mr-1" /> Select Time
                  </p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 text-sm font-plex-mono transition-all ${
                          selectedTime === time
                            ? 'bg-carbon-teal-40 text-carbon-gray-100 font-semibold'
                            : 'bg-white/[0.03] text-white/50 hover:bg-white/[0.06]'
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

          {/* Step 2: Patient Details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
                <User className="w-3.5 h-3.5 inline mr-1" /> Patient Information
              </p>
              <div className="space-y-4">
                {[
                  { key: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                  { key: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+44 7911 123456' },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">{field.label}</label>
                    <input
                      type={field.type}
                      value={patientInfo[field.key]}
                      onChange={e => setPatientInfo(prev => ({ ...prev, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-carbon-teal-40/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">
                    <FileText className="w-3 h-3 inline mr-1" /> Notes (Optional)
                  </label>
                  <textarea
                    value={patientInfo.notes}
                    onChange={e => setPatientInfo(prev => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    placeholder="Any symptoms, concerns, or information for the doctor..."
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-carbon-teal-40/50 transition-colors resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Confirm */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Review & Confirm</p>
              <div className="bg-white/[0.03] border border-white/5 p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Doctor</span>
                  <span>{selectedDoctor?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Specialisation</span>
                  <span>{selectedDoctor?.title}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Date</span>
                  <span className="font-plex-mono">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Time</span>
                  <span className="font-plex-mono">{selectedTime}</span>
                </div>
                <div className="border-t border-white/5 pt-4 flex justify-between text-sm">
                  <span className="text-white/40">Patient</span>
                  <span>{patientInfo.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Email</span>
                  <span className="text-white/60">{patientInfo.email}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Phone</span>
                  <span className="font-plex-mono text-white/60">{patientInfo.phone}</span>
                </div>
                {patientInfo.notes && (
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-xs text-white/40 block mb-1">Notes</span>
                    <p className="text-sm text-white/60">{patientInfo.notes}</p>
                  </div>
                )}
                <div className="border-t border-white/5 pt-4 flex justify-between">
                  <span className="font-semibold">Consultation Fee</span>
                  <span className="font-plex-mono font-bold text-lg text-carbon-teal-40">£{selectedDoctor?.consultationFee}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`carbon-btn carbon-btn-ghost flex items-center gap-2 ${currentStep === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceed()}
              className={`carbon-btn inline-flex items-center gap-2 px-6 ${
                canProceed()
                  ? 'bg-carbon-teal-40 text-carbon-gray-100 hover:bg-carbon-teal-50'
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="carbon-btn inline-flex items-center gap-2 px-6 bg-carbon-teal-40 text-carbon-gray-100 hover:bg-carbon-teal-50"
            >
              Confirm Booking
              <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
