import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  Users,
  Calendar,
  TrendingUp,
  GraduationCap,
  DollarSign,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { students, dashboardStats, feeRecords, tuitionCenterInfo } from '../../../data/educationData';

const serif = { fontFamily: 'Georgia, "Times New Roman", serif' };
const sans = { fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif" };

const statusConfig = {
  active: { label: 'Active', color: 'text-emerald-800', bg: 'bg-emerald-50', dot: 'bg-emerald-500' },
  pending: { label: 'Pending', color: 'text-amber-800', bg: 'bg-amber-50', dot: 'bg-amber-500' },
  'on-hold': { label: 'On Hold', color: 'text-slate-600', bg: 'bg-slate-100', dot: 'bg-slate-400' },
};

const feeStatusConfig = {
  paid: { label: 'Paid', color: 'text-emerald-700' },
  pending: { label: 'Pending', color: 'text-amber-600' },
  overdue: { label: 'Overdue', color: 'text-red-600' },
};

export default function EducationDashboard() {
  const [roster, setRoster] = useState(students);
  const [activeTab, setActiveTab] = useState('roster');

  const updateStatus = (id, newStatus) => {
    setRoster(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  return (
    <div className="demo-page min-h-screen bg-[#FAF8F5] text-[#1E2A4A] overflow-x-hidden" style={sans}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1E2A4A]/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 min-w-0 gap-2">
          <Link to="/demos/education" className="flex items-center gap-2 text-[#1E2A4A]/50 hover:text-[#1E2A4A] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{tuitionCenterInfo.name}</span>
          </Link>
          <h1 className="text-sm sm:text-base font-semibold tracking-tight min-w-0 truncate" style={serif}>Centre Dashboard</h1>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-[#C9A227] rounded-full animate-pulse" />
            <span className="text-xs text-[#1E2A4A]/40 uppercase tracking-widest">Live</span>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-white border-b border-[#1E2A4A]/10">
        <div className="max-w-7xl mx-auto flex px-4 gap-1 py-1">
          {[
            { id: 'roster', label: 'Student Roster' },
            { id: 'analytics', label: 'Centre Analytics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#C9A227] text-[#1E2A4A] font-medium'
                  : 'border-transparent text-[#1E2A4A]/40 hover:text-[#1E2A4A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'roster' ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E2A4A]/10 border border-[#1E2A4A]/10 mb-8">
              {[
                { label: 'Total Students', value: dashboardStats.totalStudents, icon: <Users className="w-5 h-5" />, color: 'text-[#1E2A4A]' },
                { label: 'Sessions This Week', value: dashboardStats.sessionsThisWeek, icon: <Calendar className="w-5 h-5" />, color: 'text-indigo-700' },
                { label: 'Avg Attendance', value: `${dashboardStats.avgAttendance}%`, icon: <CheckCircle className="w-5 h-5" />, color: 'text-emerald-700' },
                { label: 'Pending Fees', value: dashboardStats.pendingFees, icon: <DollarSign className="w-5 h-5" />, color: 'text-amber-700' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#FAF8F5] p-5"
                >
                  <div className={`w-8 h-8 flex items-center justify-center mb-3 ${stat.color}`}>{stat.icon}</div>
                  <p className="text-[10px] uppercase tracking-widest text-[#1E2A4A]/40 mb-1">{stat.label}</p>
                  <p className="text-2xl font-semibold" style={serif}>{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Student roster */}
            <p className="text-[10px] uppercase tracking-widest text-[#1E2A4A]/40 mb-4 font-medium">Student Roster</p>
            <div className="bg-white border border-[#1E2A4A]/10 overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 px-5 py-3 bg-[#1E2A4A] text-[#FAF8F5] text-[10px] uppercase tracking-widest">
                <div className="col-span-3">Student</div>
                <div className="col-span-2">Year</div>
                <div className="col-span-2">Tutor</div>
                <div className="col-span-2">Next Session</div>
                <div className="col-span-1">Attendance</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>

              {roster.map((student, i) => {
                const config = statusConfig[student.status];
                return (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 p-5 border-b border-[#1E2A4A]/5 last:border-b-0 hover:bg-[#FAF8F5]/50 transition-colors"
                  >
                    <div className="md:col-span-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#1E2A4A] flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-[#C9A227]" style={serif}>
                            {student.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold" style={serif}>{student.name}</h3>
                          <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 mt-0.5 ${config.bg} ${config.color}`}>
                            <span className={`w-1 h-1 rounded-full ${config.dot}`} />
                            {config.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-center">
                      <span className="text-sm text-[#1E2A4A]/60">{student.year}</span>
                    </div>

                    <div className="md:col-span-2 flex items-center">
                      <span className="text-sm text-[#1E2A4A]/60 truncate">{student.tutor}</span>
                    </div>

                    <div className="md:col-span-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1E2A4A]/30 hidden md:block" />
                      <span className="text-xs text-[#1E2A4A]/50 font-mono">{student.nextSession}</span>
                    </div>

                    <div className="md:col-span-1 flex items-center">
                      <span className={`text-sm font-medium ${student.attendance >= 90 ? 'text-emerald-700' : student.attendance >= 75 ? 'text-amber-600' : 'text-red-600'}`}>
                        {student.attendance > 0 ? `${student.attendance}%` : 'N/A'}
                      </span>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-end gap-2">
                      {student.status === 'pending' && (
                        <button onClick={() => updateStatus(student.id, 'active')} className="text-xs font-medium px-3 py-1.5 bg-[#1E2A4A] text-[#FAF8F5] hover:bg-[#2A3A5C] transition-colors">
                          Activate
                        </button>
                      )}
                      {student.status === 'active' && (
                        <button onClick={() => updateStatus(student.id, 'on-hold')} className="text-xs font-medium px-3 py-1.5 border border-[#1E2A4A]/20 text-[#1E2A4A]/60 hover:border-[#1E2A4A]/40 transition-colors">
                          Pause
                        </button>
                      )}
                      {student.status === 'on-hold' && (
                        <button onClick={() => updateStatus(student.id, 'active')} className="text-xs font-medium px-3 py-1.5 bg-[#C9A227] text-[#1E2A4A] hover:bg-[#d4ad2f] transition-colors">
                          Resume
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Fee records summary */}
            <p className="text-[10px] uppercase tracking-widest text-[#1E2A4A]/40 mb-4 mt-10 font-medium">Recent Fee Records</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2A4A]/10 border border-[#1E2A4A]/10">
              {feeRecords.slice(0, 6).map((fee, i) => (
                <motion.div
                  key={fee.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium" style={serif}>{fee.student}</p>
                    <span className={`text-xs font-medium ${feeStatusConfig[fee.status].color}`}>
                      {feeStatusConfig[fee.status].label}
                    </span>
                  </div>
                  <p className="text-xs text-[#1E2A4A]/40 mb-1">{fee.period}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#C9A227]" style={serif}>${fee.amount}</span>
                    <span className="text-[10px] text-[#1E2A4A]/30 font-mono">{fee.id}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Analytics overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E2A4A]/10 border border-[#1E2A4A]/10 mb-8">
              {[
                { label: 'Active Enrolments', value: dashboardStats.activeEnrollments, icon: <GraduationCap className="w-5 h-5" />, color: 'text-[#1E2A4A]' },
                { label: 'New This Month', value: dashboardStats.newEnrollmentsThisMonth, icon: <TrendingUp className="w-5 h-5" />, color: 'text-indigo-700' },
                { label: 'Tutor Utilisation', value: `${dashboardStats.tutorUtilisation}%`, icon: <BookOpen className="w-5 h-5" />, color: 'text-emerald-700' },
                { label: 'Revenue (Term)', value: `$${(dashboardStats.revenueThisTerm / 1000).toFixed(1)}k`, icon: <DollarSign className="w-5 h-5" />, color: 'text-[#C9A227]' },
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  className="bg-[#FAF8F5] p-5">
                  <div className={`w-8 h-8 flex items-center justify-center mb-3 ${stat.color}`}>{stat.icon}</div>
                  <p className="text-[10px] uppercase tracking-widest text-[#1E2A4A]/40 mb-1">{stat.label}</p>
                  <p className="text-2xl font-semibold" style={serif}>{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Weekly sessions chart */}
            <div className="bg-white border border-[#1E2A4A]/10 p-6 mb-6">
              <h3 className="text-sm font-semibold mb-6" style={serif}>Sessions This Week</h3>
              <div className="flex items-end gap-3 h-40">
                {dashboardStats.weeklySessions.map((count, i) => {
                  const maxCount = Math.max(...dashboardStats.weeklySessions);
                  const height = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        className="w-full bg-[#1E2A4A] hover:bg-[#2A3A5C] transition-colors cursor-pointer relative group border-t-2 border-[#C9A227]"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05 + 0.3, duration: 0.5 }}
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#1E2A4A]/40 opacity-0 group-hover:opacity-100 transition-opacity">{count}</span>
                      </motion.div>
                      <span className="text-[10px] text-[#1E2A4A]/40 font-mono">{dashboardStats.weekLabels[i]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Subject enrolment */}
              <div className="bg-white border border-[#1E2A4A]/10 p-6">
                <h3 className="text-sm font-semibold mb-6" style={serif}>Subject Enrolment</h3>
                <div className="space-y-5">
                  {dashboardStats.subjectEnrolment.map((subj, i) => {
                    const load = Math.round((subj.count / subj.capacity) * 100);
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[#1E2A4A]/70">{subj.subject}</span>
                          <span className={`font-semibold ${load > 85 ? 'text-red-600' : load > 65 ? 'text-amber-600' : 'text-emerald-700'}`}>
                            {subj.count}/{subj.capacity}
                          </span>
                        </div>
                        <div className="h-2 bg-[#1E2A4A]/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${load}%` }}
                            transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
                            className={`h-full ${load > 85 ? 'bg-red-500' : load > 65 ? 'bg-amber-500' : 'bg-[#1E2A4A]'}`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Tutor workload */}
              <div className="bg-white border border-[#1E2A4A]/10 p-6">
                <h3 className="text-sm font-semibold mb-6" style={serif}>Tutor Workload</h3>
                <div className="space-y-4">
                  {dashboardStats.tutorWorkload.map((tw, i) => {
                    const load = Math.round((tw.sessions / tw.capacity) * 100);
                    return (
                      <motion.div key={i} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                        className="flex items-center gap-4 p-3 border border-[#1E2A4A]/5 hover:border-[#1E2A4A]/15 transition-colors">
                        <div className="w-8 h-8 bg-[#1E2A4A] flex items-center justify-center flex-shrink-0">
                          <span className="text-[10px] text-[#C9A227]" style={serif}>
                            {tw.tutor.split(' ').slice(-1)[0][0]}
                          </span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-sm font-medium truncate" style={serif}>{tw.tutor}</p>
                          <p className="text-xs text-[#1E2A4A]/40">{tw.sessions} of {tw.capacity} sessions</p>
                        </div>
                        <span className={`text-sm font-semibold ${load > 85 ? 'text-red-600' : 'text-[#C9A227]'}`}>
                          {load}%
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Alert banner */}
            <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-900">3 overdue fee payments</p>
                <p className="text-xs text-amber-700 mt-0.5">Review fee records in the student roster tab to send reminders.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
