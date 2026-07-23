import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  AlertCircle,
  PawPrint,
  Calendar,
  Syringe,
  Activity,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { mockAppointments, dashboardStats, petCenterInfo, healthRecords } from '../../../data/petsData';

const statusConfig = {
  confirmed: { label: 'Confirmed', color: 'text-[#5B8C6A]', bg: 'bg-[#5B8C6A]/10', dot: 'bg-[#5B8C6A]' },
  pending: { label: 'Pending', color: 'text-[#E8846B]', bg: 'bg-[#E8846B]/15', dot: 'bg-[#E8846B]' },
  'in-progress': { label: 'In Progress', color: 'text-blue-700', bg: 'bg-blue-50', dot: 'bg-blue-500' },
  completed: { label: 'Complete', color: 'text-green-700', bg: 'bg-green-50', dot: 'bg-green-500' },
};

const fontStyle = { fontFamily: "'Nunito', 'Segoe UI', system-ui, sans-serif" };

export default function PetsDashboard() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [activeTab, setActiveTab] = useState('appointments');

  const updateStatus = (id, newStatus) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt));
  };

  return (
    <div className="demo-page min-h-screen bg-[#FFF9F2] text-[#3D4A3F] overflow-x-hidden" style={fontStyle}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FFF9F2]/90 backdrop-blur-md border-b border-[#5B8C6A]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/pets" className="flex items-center gap-2 text-[#5B8C6A]/60 hover:text-[#5B8C6A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{petCenterInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-bold tracking-tight min-w-0 truncate">Staff Dashboard</h1>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-[#5B8C6A] rounded-full animate-pulse" />
            <span className="text-xs text-[#5B8C6A]/50 font-semibold">Live</span>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-white border-b border-[#5B8C6A]/10">
        <div className="max-w-7xl mx-auto flex px-4 gap-2 py-2">
          {[
            { id: 'appointments', label: "Today's Appointments", icon: Calendar },
            { id: 'health', label: 'Health Records', icon: Heart },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-2xl transition-all font-semibold ${
                activeTab === tab.id
                  ? 'bg-[#5B8C6A] text-white shadow-md shadow-[#5B8C6A]/20'
                  : 'text-[#5B8C6A]/50 hover:text-[#5B8C6A] hover:bg-[#5B8C6A]/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'appointments' ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Today', value: dashboardStats.todayAppointments, icon: <Calendar className="w-5 h-5" />, color: 'bg-[#FFF9F2] text-[#5B8C6A]' },
                { label: 'Completed', value: dashboardStats.completedToday, icon: <CheckCircle className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
                { label: 'Pending', value: dashboardStats.pendingToday, icon: <Clock className="w-5 h-5" />, color: 'bg-[#E8846B]/15 text-[#E8846B]' },
                { label: 'In Progress', value: dashboardStats.inProgressToday, icon: <Activity className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-5 border border-[#5B8C6A]/10"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.color} mb-3`}>{stat.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider text-[#5B8C6A]/50 mb-1 font-bold">{stat.label}</p>
                  <p className="text-2xl font-extrabold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Schedule */}
            <p className="text-xs uppercase tracking-widest text-[#5B8C6A]/50 mb-4 font-bold">Today's Schedule</p>
            <div className="bg-white rounded-3xl border border-[#5B8C6A]/10 overflow-hidden shadow-sm">
              {appointments.map((apt, i) => {
                const config = statusConfig[apt.status];
                return (
                  <motion.div
                    key={apt.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-5 border-b border-[#5B8C6A]/5 last:border-b-0 hover:bg-[#FFF9F2]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 md:w-24 flex-shrink-0">
                      <div className="w-9 h-9 rounded-xl bg-[#5B8C6A]/10 flex items-center justify-center">
                        <PawPrint className="w-4 h-4 text-[#5B8C6A]" />
                      </div>
                      <span className="text-lg font-extrabold font-mono text-[#3D4A3F]">{apt.time}</span>
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-sm font-bold">{apt.pet}</h3>
                        <span className={`flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full ${config.bg} ${config.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                          {config.label}
                        </span>
                      </div>
                      <p className="text-xs text-[#5B8C6A]/60">{apt.owner} · {apt.service} · {apt.staff}</p>
                      {apt.notes && (
                        <p className="text-xs text-[#5B8C6A]/40 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />{apt.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-[11px] font-mono text-[#5B8C6A]/30">{apt.id}</span>
                      {apt.status === 'pending' && (
                        <button onClick={() => updateStatus(apt.id, 'confirmed')} className="text-xs font-bold px-4 py-2 bg-[#5B8C6A] text-white rounded-xl hover:bg-[#4a7558] transition-colors">
                          Confirm
                        </button>
                      )}
                      {apt.status === 'confirmed' && (
                        <button onClick={() => updateStatus(apt.id, 'in-progress')} className="text-xs font-bold px-4 py-2 bg-[#E8846B] text-white rounded-xl hover:bg-[#d4735c] transition-colors">
                          Start
                        </button>
                      )}
                      {apt.status === 'in-progress' && (
                        <button onClick={() => updateStatus(apt.id, 'completed')} className="text-xs font-bold px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-colors">
                          Complete
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* Health overview stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Pets', value: dashboardStats.totalPets, icon: <PawPrint className="w-5 h-5" />, color: 'bg-[#5B8C6A]/10 text-[#5B8C6A]' },
                { label: 'New This Month', value: dashboardStats.newPetsThisMonth, icon: <TrendingUp className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
                { label: 'Vaccinations Due', value: dashboardStats.vaccinationsDue, icon: <Syringe className="w-5 h-5" />, color: 'bg-[#E8846B]/15 text-[#E8846B]' },
                { label: 'Satisfaction', value: dashboardStats.satisfactionRate, icon: <Heart className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-5 border border-[#5B8C6A]/10"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.color} mb-3`}>{stat.icon}</div>
                  <p className="text-[10px] uppercase tracking-wider text-[#5B8C6A]/50 mb-1 font-bold">{stat.label}</p>
                  <p className="text-2xl font-extrabold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Health records */}
            <p className="text-xs uppercase tracking-widest text-[#5B8C6A]/50 mb-4 font-bold">Pet Health Records</p>
            <div className="space-y-4">
              {healthRecords.map((record, i) => (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white rounded-3xl border border-[#5B8C6A]/10 p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#5B8C6A] flex items-center justify-center">
                        <PawPrint className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold">{record.pet}</h3>
                        <p className="text-xs text-[#5B8C6A]/60 capitalize">{record.species} · {record.weight}</p>
                      </div>
                    </div>
                    <span className={`inline-flex self-start text-xs font-bold px-3 py-1.5 rounded-full ${
                      record.condition === 'Healthy'
                        ? 'bg-[#5B8C6A]/10 text-[#5B8C6A]'
                        : 'bg-[#E8846B]/15 text-[#E8846B]'
                    }`}>
                      {record.condition}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#5B8C6A]/40 font-bold mb-1">Last Visit</p>
                      <p className="text-sm font-semibold">{record.lastVisit}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#5B8C6A]/40 font-bold mb-1">Next Due</p>
                      <p className={`text-sm font-semibold ${record.nextDue === 'Overdue' ? 'text-red-500' : ''}`}>{record.nextDue}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[10px] uppercase tracking-wider text-[#5B8C6A]/40 font-bold mb-1">Vaccinations</p>
                      <div className="flex flex-wrap gap-1.5">
                        {record.vaccinations.map(vax => (
                          <span key={vax} className="text-[11px] font-bold px-2.5 py-1 bg-[#FFF9F2] text-[#5B8C6A] rounded-full">
                            {vax}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {record.alerts.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#5B8C6A]/10">
                      {record.alerts.map(alert => (
                        <span key={alert} className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 bg-[#E8846B]/10 text-[#E8846B] rounded-full">
                          <AlertCircle className="w-3 h-3" />
                          {alert}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Weekly chart */}
            <div className="bg-white rounded-3xl border border-[#5B8C6A]/10 p-6 mt-8 shadow-sm">
              <h3 className="text-sm font-bold mb-6">Appointments This Week</h3>
              <div className="flex items-end gap-3 h-40">
                {dashboardStats.weeklyAppointments.map((count, i) => {
                  const maxCount = Math.max(...dashboardStats.weeklyAppointments);
                  const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        className="w-full bg-gradient-to-t from-[#5B8C6A] to-[#7BA88A] rounded-xl hover:from-[#4a7558] hover:to-[#5B8C6A] transition-colors cursor-pointer relative group"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05 + 0.3, duration: 0.5 }}
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#5B8C6A]/50 opacity-0 group-hover:opacity-100 transition-opacity">{count}</span>
                      </motion.div>
                      <span className="text-[10px] text-[#5B8C6A]/50 font-mono font-semibold">{dashboardStats.weekLabels[i]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
