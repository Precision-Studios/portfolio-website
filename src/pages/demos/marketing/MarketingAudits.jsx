import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Shield,
} from 'lucide-react';
import { agencyInfo, seoAudits } from '../../../data/marketingData';

const severityConfig = {
  critical: { icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-400/10', border: 'border-red-400/30' },
  warning: { icon: AlertCircle, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/30' },
  notice: { icon: Info, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30' },
};

const statusColors = {
  good: 'text-[#00D4AA]',
  warning: 'text-amber-400',
  poor: 'text-red-400',
};

function ScoreGauge({ score, size = 120 }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 85 ? '#00D4AA' : score >= 70 ? '#FBBF24' : '#F87171';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#2A3441" strokeWidth="6" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold font-mono" style={{ color }}>{score}</span>
        <span className="text-[10px] font-mono text-[#6B7A8D] uppercase">Score</span>
      </div>
    </div>
  );
}

export default function MarketingAudits() {
  const [selectedAudit, setSelectedAudit] = useState(seoAudits[0]);
  const [expandedIssue, setExpandedIssue] = useState(null);

  return (
    <div
      className="demo-page min-h-screen bg-[#0F1419] text-[#E8EDF2] overflow-x-hidden"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#0F1419]/95 backdrop-blur-md border-b border-[#2A3441]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 min-w-0 gap-2">
          <Link
            to="/demos/marketing"
            className="flex items-center gap-2 text-[#6B7A8D] hover:text-[#E8EDF2] text-sm transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{agencyInfo.name}</span>
          </Link>
          <div className="flex items-center gap-2 min-w-0">
            <Shield className="w-4 h-4 text-[#00D4AA] shrink-0" />
            <h1 className="text-sm font-semibold tracking-tight font-mono uppercase min-w-0 truncate">SEO Audits</h1>
          </div>
          <Link to="/demos/marketing/dashboard" className="text-xs font-mono text-[#00D4AA] hover:underline shrink-0">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Audit Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A3441] border border-[#2A3441] mb-8">
          {seoAudits.map(audit => (
            <button
              key={audit.id}
              onClick={() => setSelectedAudit(audit)}
              className={`text-left p-4 transition-colors ${
                selectedAudit.id === audit.id
                  ? 'bg-[#1A2128] border-l-2 border-l-[#00D4AA]'
                  : 'bg-[#161B22] hover:bg-[#1A2128]'
              }`}
            >
              <p className="text-sm font-semibold mb-0.5 truncate">{audit.clientName}</p>
              <p className="text-[10px] font-mono text-[#6B7A8D] mb-2">{audit.domain}</p>
              <div className="flex items-center gap-2">
                <span className={`text-lg font-mono font-bold ${
                  audit.overallScore >= 85 ? 'text-[#00D4AA]' : audit.overallScore >= 70 ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {audit.overallScore}
                </span>
                <span className="text-[10px] font-mono text-[#6B7A8D]">
                  {audit.overallScore > audit.previousScore ? '+' : ''}{audit.overallScore - audit.previousScore} vs prev
                </span>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedAudit.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-[#1A2128] border border-[#2A3441] p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{selectedAudit.clientName}</h2>
                    <a
                      href={`https://${selectedAudit.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-mono text-[#00D4AA] flex items-center gap-1 hover:underline"
                    >
                      {selectedAudit.domain}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="text-[10px] font-mono text-[#6B7A8D] uppercase">
                    Audited {selectedAudit.date}
                  </span>
                </div>

                {/* Category Scores */}
                <div className="space-y-4">
                  {selectedAudit.categories.map((cat, i) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-[#6B7A8D]">{cat.name}</span>
                        <span className={`font-mono font-semibold ${statusColors[cat.status]}`}>{cat.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#2A3441] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${cat.score}%` }}
                          transition={{ delay: i * 0.05 + 0.2, duration: 0.6 }}
                          className={`h-full ${
                            cat.score >= 85 ? 'bg-[#00D4AA]' : cat.score >= 70 ? 'bg-amber-400' : 'bg-red-400'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A2128] border border-[#2A3441] p-6 flex flex-col items-center justify-center">
                <ScoreGauge score={selectedAudit.overallScore} />
                <p className="text-xs font-mono text-[#6B7A8D] mt-4 uppercase">Overall Health</p>
                <div className="flex gap-4 mt-6">
                  {selectedAudit.issues.map(issue => {
                    const config = severityConfig[issue.severity];
                    return (
                      <div key={issue.severity} className="text-center">
                        <p className={`text-xl font-mono font-bold ${config.color}`}>{issue.count}</p>
                        <p className="text-[10px] font-mono text-[#6B7A8D] uppercase">{issue.severity}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Issues Table */}
            <div className="bg-[#1A2128] border border-[#2A3441] mb-8">
              <div className="px-6 py-4 border-b border-[#2A3441]">
                <h3 className="text-sm font-semibold font-mono uppercase tracking-wider">Issues Found</h3>
              </div>
              <div className="divide-y divide-[#2A3441]">
                {selectedAudit.topIssues.map((issue, i) => {
                  const config = severityConfig[issue.severity];
                  const Icon = config.icon;
                  const isExpanded = expandedIssue === issue.id;

                  return (
                    <motion.div
                      key={issue.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        onClick={() => setExpandedIssue(isExpanded ? null : issue.id)}
                        className="w-full flex items-center gap-4 p-5 hover:bg-[#161B22] transition-colors text-left"
                      >
                        <div className={`w-8 h-8 flex items-center justify-center ${config.bg} border ${config.border} flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${config.color}`} />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-sm font-medium mb-0.5">{issue.title}</p>
                          <div className="flex items-center gap-3 text-[10px] font-mono text-[#6B7A8D] uppercase">
                            <span>{issue.category}</span>
                            <span>Impact: {issue.impact}</span>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-[#6B7A8D] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-[#1A2128] border border-[#2A3441]">
              <div className="px-6 py-4 border-b border-[#2A3441] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4AA]" />
                <h3 className="text-sm font-semibold font-mono uppercase tracking-wider">Recommendations</h3>
              </div>
              <div className="p-6 space-y-4">
                {selectedAudit.recommendations.map((rec, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="text-xs font-mono text-[#00D4AA] flex-shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm text-[#6B7A8D] leading-relaxed">{rec}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
