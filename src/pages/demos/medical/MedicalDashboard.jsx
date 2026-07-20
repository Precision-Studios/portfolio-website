import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, AlertCircle, Users, Activity, Calendar, TrendingUp } from 'lucide-react';
import { mockAppointments, dashboardStats, clinicInfo } from '../../../data/medicalData';

const statusConfig = {
  confirmed: { label: 'Confirmed', color: 'text-carbon-teal-40', bg: 'bg-carbon-teal-40/10', icon: <CheckCircle className="w-4 h-4" /> },
  pending: { label: 'Pending', color: 'text-yellow-400', bg: 'bg-yellow-400/10', icon: <Clock className="w-4 h-4" /> },
  'in-progress': { label: 'In Progress', color: 'text-blue-400', bg: 'bg-blue-400/10', icon: <Activity className="w-4 h-4" /> },
  completed: { label: 'Completed', color: 'text-green-400', bg: 'bg-green-400/10', icon: <CheckCircle className="w-4 h-4" /> },
};

export default function MedicalDashboard() {
  const [appointments, setAppointments] = useState(mockAppointments);
  const [activeTab, setActiveTab] = useState('appointments');

  const updateStatus = (id, newStatus) => {
    setAppointments(prev =>
      prev.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt)
    );
  };

  return (
    <div className="min-h-screen bg-carbon-gray-100 text-white font-plex">
      {/* Top Bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5 bg-carbon-gray-100/95 backdrop-blur-sm">
        <Link to="/demos/medical" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{clinicInfo.name}</span>
        </Link>
        <h1 className="text-sm font-semibold tracking-tight">Dashboard</h1>
        <span className="text-xs text-white/30 font-plex-mono">Admin View</span>
      </nav>

      {/* Tabs */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: 'appointments', label: "Today's Schedule" },
            { id: 'analytics', label: 'Clinic Analytics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-carbon-teal-40 text-white'
                  : 'border-transparent text-white/40 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'appointments' ? (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-8">
              {[
                { label: 'Total Today', value: dashboardStats.todayAppointments, icon: <Calendar className="w-5 h-5" />, accent: '' },
                { label: 'Completed', value: dashboardStats.completedToday, icon: <CheckCircle className="w-5 h-5" />, accent: 'text-green-400' },
                { label: 'Pending', value: dashboardStats.pendingToday, icon: <Clock className="w-5 h-5" />, accent: 'text-yellow-400' },
                { label: 'In Progress', value: dashboardStats.inProgressToday, icon: <Activity className="w-5 h-5" />, accent: 'text-blue-400' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-carbon-gray-100"
                >
                  <div className="flex items-center gap-2 text-white/30 mb-2">
                    {stat.icon}
                    <span className="text-xs uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <p className={`text-2xl font-light font-plex-mono ${stat.accent}`}>{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Appointments List */}
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Today's Appointments</p>
            <div className="space-y-0">
              {appointments.map((apt, i) => {
                const config = statusConfig[apt.status];
                return (
                  <motion.div
                    key={apt.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all mb-2"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 p-5">
                      {/* Time */}
                      <div className="flex items-center gap-3 md:w-24 flex-shrink-0">
                        <span className="text-lg font-plex-mono font-medium">{apt.time}</span>
                      </div>

                      {/* Patient & Doctor */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-sm font-semibold">{apt.patient}</h3>
                          <span className={`flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 ${config.bg} ${config.color}`}>
                            {config.icon}
                            {config.label}
                          </span>
                        </div>
                        <p className="text-xs text-white/40">
                          {apt.doctor} · {apt.service}
                        </p>
                        {apt.notes && (
                          <p className="text-xs text-white/25 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {apt.notes}
                          </p>
                        )}
                      </div>

                      {/* Ref & Actions */}
                      <div className="flex items-center gap-4 flex-shrink-0">
                        <span className="text-xs font-plex-mono text-white/20">{apt.id}</span>
                        {apt.status === 'pending' && (
                          <button
                            onClick={() => updateStatus(apt.id, 'confirmed')}
                            className="text-xs font-medium px-3 py-1.5 bg-carbon-teal-40 text-carbon-gray-100 hover:bg-carbon-teal-50 transition-colors"
                          >
                            Confirm
                          </button>
                        )}
                        {apt.status === 'confirmed' && (
                          <button
                            onClick={() => updateStatus(apt.id, 'in-progress')}
                            className="text-xs font-medium px-3 py-1.5 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                          >
                            Start
                          </button>
                        )}
                        {apt.status === 'in-progress' && (
                          <button
                            onClick={() => updateStatus(apt.id, 'completed')}
                            className="text-xs font-medium px-3 py-1.5 bg-green-500 text-carbon-gray-100 hover:bg-green-600 transition-colors"
                          >
                            Complete
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : (
          /* Analytics Tab */
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-8">
              {[
                { label: 'Total Patients', value: dashboardStats.totalPatients.toLocaleString(), icon: <Users className="w-5 h-5" /> },
                { label: 'New This Week', value: dashboardStats.newPatientsThisWeek, icon: <TrendingUp className="w-5 h-5" /> },
                { label: 'Avg Wait Time', value: dashboardStats.avgWaitTime, icon: <Clock className="w-5 h-5" /> },
                { label: 'Satisfaction', value: dashboardStats.satisfactionRate, icon: <CheckCircle className="w-5 h-5" /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-carbon-gray-100"
                >
                  <div className="flex items-center gap-2 text-white/30 mb-2">
                    {stat.icon}
                    <span className="text-xs uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-light font-plex-mono">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Weekly Appointments Chart */}
            <div className="bg-white/[0.03] border border-white/5 p-6 mb-6">
              <h3 className="text-sm font-semibold mb-6">Appointments This Week</h3>
              <div className="flex items-end gap-3 h-40">
                {dashboardStats.weeklyAppointments.map((count, i) => {
                  const maxCount = Math.max(...dashboardStats.weeklyAppointments);
                  const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  return (
                    <motion.div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <motion.div
                        className="w-full bg-carbon-teal-40/50 hover:bg-carbon-teal-40 transition-colors cursor-pointer relative group"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05 + 0.3, duration: 0.5, ease: [0.4, 0.14, 0.3, 1] }}
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-plex-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          {count}
                        </span>
                      </motion.div>
                      <span className="text-[10px] text-white/30 font-plex-mono">{dashboardStats.weekLabels[i]}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Department Load */}
            <div className="bg-white/[0.03] border border-white/5 p-6">
              <h3 className="text-sm font-semibold mb-6">Department Capacity</h3>
              <div className="space-y-4">
                {dashboardStats.departmentLoad.map((dept, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/60">{dept.department}</span>
                      <span className={`font-plex-mono ${dept.load > 75 ? 'text-red-400' : dept.load > 50 ? 'text-yellow-400' : 'text-carbon-teal-40'}`}>
                        {dept.load}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${dept.load}%` }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.4, 0.14, 0.3, 1] }}
                        className={`h-full ${dept.load > 75 ? 'bg-red-400' : dept.load > 50 ? 'bg-yellow-400' : 'bg-carbon-teal-40'}`}
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
