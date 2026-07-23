import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, AlertCircle, Users, Activity, Calendar, TrendingUp } from 'lucide-react';
import { mockAppointments, dashboardStats, clinicInfo } from '../../../data/medicalData';

const statusConfig = {
  confirmed: { label: 'Confirmed', color: 'text-teal-700', bg: 'bg-teal-50', dot: 'bg-teal-500' },
  pending: { label: 'Pending', color: 'text-amber-700', bg: 'bg-amber-50', dot: 'bg-amber-500' },
  'in-progress': { label: 'In Progress', color: 'text-blue-700', bg: 'bg-blue-50', dot: 'bg-blue-500' },
  completed: { label: 'Complete', color: 'text-green-700', bg: 'bg-green-50', dot: 'bg-green-500' },
};

export default function MedicalDashboard() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [activeTab, setActiveTab] = useState('appointments');

  const updateStatus = (id, newStatus) => {
    setAppointments(prev => prev.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt));
  };

  return (
    <div className="demo-page min-h-screen bg-[#F8FAFB] text-[#1A1A2E] overflow-x-hidden" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/medical" className="flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{clinicInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-semibold tracking-tight min-w-0 truncate">Clinic Dashboard</h1>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-400">Live</span>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex px-4 gap-1 py-1">
          {[
            { id: 'appointments', label: "Today's Schedule" },
            { id: 'analytics', label: 'Clinic Analytics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-teal-50 text-teal-700 font-medium'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
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
                { label: 'Total Today', value: dashboardStats.todayAppointments, icon: <Calendar className="w-5 h-5" />, color: 'bg-gray-50 text-gray-500' },
                { label: 'Completed', value: dashboardStats.completedToday, icon: <CheckCircle className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
                { label: 'Pending', value: dashboardStats.pendingToday, icon: <Clock className="w-5 h-5" />, color: 'bg-amber-50 text-amber-600' },
                { label: 'In Progress', value: dashboardStats.inProgressToday, icon: <Activity className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color} mb-3`}>{stat.icon}</div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Schedule */}
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-medium">Today's Appointments</p>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {appointments.map((apt, i) => {
                const config = statusConfig[apt.status];
                return (
                  <motion.div
                    key={apt.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-5 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 md:w-20 flex-shrink-0">
                      <span className="text-lg font-semibold font-mono">{apt.time}</span>
                    </div>

                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-sm font-semibold">{apt.patient}</h3>
                        <span className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${config.bg} ${config.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                          {config.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{apt.doctor} · {apt.service}</p>
                      {apt.notes && (
                        <p className="text-xs text-gray-300 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />{apt.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-[11px] font-mono text-gray-300">{apt.id}</span>
                      {apt.status === 'pending' && (
                        <button onClick={() => updateStatus(apt.id, 'confirmed')} className="text-xs font-medium px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors">
                          Confirm
                        </button>
                      )}
                      {apt.status === 'confirmed' && (
                        <button onClick={() => updateStatus(apt.id, 'in-progress')} className="text-xs font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                          Start
                        </button>
                      )}
                      {apt.status === 'in-progress' && (
                        <button onClick={() => updateStatus(apt.id, 'completed')} className="text-xs font-medium px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors">
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
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Patients', value: dashboardStats.totalPatients.toLocaleString(), icon: <Users className="w-5 h-5" />, color: 'bg-teal-50 text-teal-600' },
                { label: 'New This Week', value: dashboardStats.newPatientsThisWeek, icon: <TrendingUp className="w-5 h-5" />, color: 'bg-blue-50 text-blue-600' },
                { label: 'Avg Wait', value: dashboardStats.avgWaitTime, icon: <Clock className="w-5 h-5" />, color: 'bg-amber-50 text-amber-600' },
                { label: 'Satisfaction', value: dashboardStats.satisfactionRate, icon: <CheckCircle className="w-5 h-5" />, color: 'bg-green-50 text-green-600' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color} mb-3`}>{stat.icon}</div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Weekly Chart */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
              <h3 className="text-sm font-semibold mb-6">Appointments This Week</h3>
              <div className="flex items-end gap-3 h-40">
                {dashboardStats.weeklyAppointments.map((count, i) => {
                  const maxCount = Math.max(...dashboardStats.weeklyAppointments);
                  const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-lg hover:from-teal-500 hover:to-teal-300 transition-colors cursor-pointer relative group"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05 + 0.3, duration: 0.5 }}
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">{count}</span>
                      </motion.div>
                      <span className="text-[10px] text-gray-400 font-mono">{dashboardStats.weekLabels[i]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dept Load */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-sm font-semibold mb-6">Department Capacity</h3>
              <div className="space-y-5">
                {dashboardStats.departmentLoad.map((dept, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{dept.department}</span>
                      <span className={`font-semibold ${dept.load > 75 ? 'text-red-500' : dept.load > 50 ? 'text-amber-500' : 'text-teal-600'}`}>
                        {dept.load}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dept.load}%` }}
                        transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
                        className={`h-full rounded-full ${dept.load > 75 ? 'bg-red-400' : dept.load > 50 ? 'bg-amber-400' : 'bg-teal-500'}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
