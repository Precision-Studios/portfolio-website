import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Calendar,
  Clock,
  PawPrint,
  FileText,
  Scissors,
  Syringe,
  Stethoscope,
  Heart,
  Sparkles,
} from 'lucide-react';
import { pets, services, timeSlots, petCenterInfo } from '../../../data/petsData';

const steps = ['Pet', 'Service', 'Date & Time', 'Confirm'];

const serviceIconMap = {
  grooming: Scissors,
  'bath-brush': Sparkles,
  'vet-check': Stethoscope,
  vaccination: Syringe,
  dental: Heart,
  'nail-trim': PawPrint,
};

const fontStyle = { fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif" };

export default function PetsBooking() {
  const location = useLocation();
  const preselectedPet = location.state?.pet || null;

  const [currentStep, setCurrentStep] = useState(preselectedPet ? 1 : 0);
  const [selectedPet, setSelectedPet] = useState(preselectedPet);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [ownerNotes, setOwnerNotes] = useState('');
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

  const availableTimes = selectedPet && selectedDate
    ? timeSlots.filter((_, idx) => (selectedPet.id + selectedDate.charCodeAt(0) + idx) % 3 !== 0)
    : timeSlots;

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!selectedPet;
      case 1: return !!selectedService;
      case 2: return !!selectedDate && !!selectedTime;
      case 3: return true;
      default: return false;
    }
  };

  const handleConfirm = () => {
    setRefNumber(`PET-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`);
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="demo-page min-h-screen bg-[#FFF9F2] text-[#3D4A3F] flex items-center justify-center px-4 sm:px-6 overflow-x-hidden" style={fontStyle}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md w-full"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-[#5B8C6A]/10 rounded-3xl flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#5B8C6A]" />
          </div>
          <h1 className="text-2xl font-extrabold mb-2">Booking Confirmed!</h1>
          <p className="text-sm text-[#5B8C6A]/60 mb-8">We will send a reminder to the pet owner before the visit.</p>

          <div className="bg-white rounded-3xl border border-[#5B8C6A]/10 p-6 mb-8 text-left space-y-3 shadow-sm">
            {[
              ['Reference', refNumber, 'font-bold text-[#E8846B]'],
              ['Pet', selectedPet?.name, 'font-bold'],
              ['Service', selectedService?.name, ''],
              ['Date', selectedDate, 'font-mono text-sm'],
              ['Time', selectedTime, 'font-mono text-sm'],
              ['Owner', selectedPet?.owner.name, ''],
              ['Fee', `$${selectedService?.price}`, 'font-bold text-[#5B8C6A]'],
            ].map(([label, value, cls]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-[#5B8C6A]/50">{label}</span>
                <span className={cls}>{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/demos/pets/booking" className="w-full py-3.5 bg-[#5B8C6A] text-white rounded-2xl font-bold text-sm text-center hover:bg-[#4a7558] transition-colors shadow-md">
              Book Another
            </Link>
            <Link to="/demos/pets" className="w-full py-3.5 text-[#5B8C6A]/50 text-sm text-center hover:text-[#5B8C6A] transition-colors">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="demo-page min-h-screen bg-[#FFF9F2] text-[#3D4A3F] overflow-x-hidden" style={fontStyle}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#5B8C6A]/10">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/pets" className="flex items-center gap-2 text-[#5B8C6A]/60 hover:text-[#5B8C6A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{petCenterInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-bold min-w-0 truncate">Book Appointment</h1>
          <span className="text-xs text-[#5B8C6A]/50 font-semibold shrink-0">Step {currentStep + 1}/4</span>
        </div>
      </nav>

      {/* Progress */}
      <div className="bg-white border-b border-[#5B8C6A]/10">
        <div className="max-w-3xl mx-auto flex px-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 text-xs transition-all ${
                i === currentStep ? 'text-[#5B8C6A] font-bold' : i < currentStep ? 'text-[#E8846B]' : 'text-[#5B8C6A]/30'
              }`}
            >
              <span className={`w-7 h-7 flex items-center justify-center text-[11px] rounded-xl font-bold ${
                i < currentStep ? 'bg-[#5B8C6A]/15 text-[#5B8C6A]' : i === currentStep ? 'bg-[#5B8C6A] text-white' : 'bg-[#FFF9F2] text-[#5B8C6A]/30'
              }`}>
                {i < currentStep ? <CheckCircle className="w-3.5 h-3.5" /> : i + 1}
              </span>
              <span className="hidden sm:inline">{step}</span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-[#FFF9F2]">
          <motion.div
            className="h-full bg-[#E8846B] rounded-r-full"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          {/* Step 0: Pet */}
          {currentStep === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#5B8C6A]/60 mb-4 font-semibold">Which pet is this appointment for?</p>
              <div className="space-y-3">
                {pets.map(pet => (
                  <button
                    key={pet.id}
                    onClick={() => setSelectedPet(pet)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                      selectedPet?.id === pet.id
                        ? 'border-[#5B8C6A] bg-[#5B8C6A]/5 shadow-md'
                        : 'border-[#5B8C6A]/10 bg-white hover:border-[#5B8C6A]/30'
                    }`}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#5B8C6A] flex items-center justify-center flex-shrink-0">
                      <PawPrint className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-bold">{pet.name}</p>
                      <p className="text-xs text-[#5B8C6A]/50">{pet.breed} · Owner: {pet.owner.name}</p>
                    </div>
                    {selectedPet?.id === pet.id && <CheckCircle className="w-5 h-5 text-[#5B8C6A] flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Service */}
          {currentStep === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#5B8C6A]/60 mb-4 font-semibold">Choose a service for {selectedPet?.name}</p>
              <div className="space-y-3">
                {services.map(svc => {
                  const Icon = serviceIconMap[svc.id] || PawPrint;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedService(svc)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                        selectedService?.id === svc.id
                          ? 'border-[#E8846B] bg-[#E8846B]/5 shadow-md'
                          : 'border-[#5B8C6A]/10 bg-white hover:border-[#5B8C6A]/30'
                      }`}
                    >
                      <div className="w-11 h-11 rounded-2xl bg-[#E8846B]/15 text-[#E8846B] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm font-bold">{svc.name}</p>
                        <p className="text-xs text-[#5B8C6A]/50">{svc.duration} · ${svc.price}</p>
                      </div>
                      {selectedService?.id === svc.id && <CheckCircle className="w-5 h-5 text-[#E8846B] flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date/Time */}
          {currentStep === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#5B8C6A]/60 mb-4 flex items-center gap-2 font-semibold"><Calendar className="w-4 h-4" /> Pick a date</p>
              <div className="grid grid-cols-7 gap-2 mb-8">
                {dates.map(d => (
                  <button
                    key={d.value}
                    onClick={() => { setSelectedDate(d.value); setSelectedTime(''); }}
                    className={`flex flex-col items-center py-3 rounded-2xl text-center transition-all ${
                      selectedDate === d.value
                        ? 'bg-[#5B8C6A] text-white shadow-md shadow-[#5B8C6A]/20'
                        : 'bg-white border border-[#5B8C6A]/10 text-[#5B8C6A]/60 hover:border-[#5B8C6A]/30'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-semibold">{d.day}</span>
                    <span className="text-lg font-extrabold">{d.date}</span>
                    <span className="text-[10px]">{d.month}</span>
                  </button>
                ))}
              </div>

              {selectedDate && (
                <>
                  <p className="text-sm text-[#5B8C6A]/60 mb-4 flex items-center gap-2 font-semibold"><Clock className="w-4 h-4" /> Select a time</p>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2.5 text-sm rounded-xl transition-all font-mono font-semibold ${
                          selectedTime === time
                            ? 'bg-[#E8846B] text-white shadow-md shadow-[#E8846B]/20'
                            : 'bg-white border border-[#5B8C6A]/10 text-[#5B8C6A]/60 hover:border-[#E8846B]/30'
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

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-[#5B8C6A]/60 mb-4 font-semibold">Review your booking</p>
              <div className="bg-white rounded-3xl border border-[#5B8C6A]/10 p-6 space-y-4 shadow-sm">
                {[
                  ['Pet', selectedPet?.name],
                  ['Breed', selectedPet?.breed],
                  ['Service', selectedService?.name],
                  ['Duration', selectedService?.duration],
                  ['Date', selectedDate],
                  ['Time', selectedTime],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between text-sm">
                    <span className="text-[#5B8C6A]/50">{l}</span><span className="font-semibold">{v}</span>
                  </div>
                ))}
                <div className="border-t border-[#5B8C6A]/10 pt-4">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-[#5B8C6A]/50">Owner</span>
                    <span className="font-semibold">{selectedPet?.owner.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5B8C6A]/50">Contact</span>
                    <span className="text-[#5B8C6A]/70 text-xs">{selectedPet?.owner.phone}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5B8C6A]/50 mb-2 flex items-center gap-1">
                    <FileText className="w-3 h-3" /> Notes (Optional)
                  </label>
                  <textarea
                    value={ownerNotes}
                    onChange={e => setOwnerNotes(e.target.value)}
                    rows={2}
                    placeholder="Any special requests or concerns..."
                    className="w-full bg-[#FFF9F2] border border-[#5B8C6A]/10 rounded-2xl px-4 py-3 text-sm placeholder:text-[#5B8C6A]/30 focus:outline-none focus:ring-2 focus:ring-[#5B8C6A]/20 focus:border-[#5B8C6A] transition-all resize-none"
                  />
                </div>
                <div className="border-t border-[#5B8C6A]/10 pt-4 flex justify-between items-center">
                  <span className="font-bold">Service Fee</span>
                  <span className="text-2xl font-extrabold text-[#E8846B]">${selectedService?.price}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#5B8C6A]/10">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 text-sm text-[#5B8C6A]/50 hover:text-[#5B8C6A] transition-colors font-semibold ${currentStep === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              disabled={!canProceed()}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-2xl transition-all ${
                canProceed()
                  ? 'bg-[#5B8C6A] text-white hover:bg-[#4a7558] shadow-md'
                  : 'bg-[#5B8C6A]/10 text-[#5B8C6A]/30 cursor-not-allowed'
              }`}
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8846B] text-white text-sm font-bold rounded-2xl hover:bg-[#d4735c] transition-colors shadow-md"
            >
              Confirm Booking <CheckCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
