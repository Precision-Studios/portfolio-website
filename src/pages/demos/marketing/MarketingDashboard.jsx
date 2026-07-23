import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Globe,
  MapPin,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  agencyInfo,
  clients,
  trafficMetrics,
  localSeoLocations,
  competitors,
} from '../../../data/marketingData';

function RankPin({ rank }) {
  const color =
    rank <= 3 ? 'bg-[#00D4AA] text-[#0F1419]' :
    rank <= 7 ? 'bg-[#00D4AA]/40 text-[#E8EDF2]' :
    rank <= 10 ? 'bg-amber-400/30 text-amber-300' :
    'bg-[#2A3441] text-[#6B7A8D]';

  return (
    <div className={`w-8 h-8 flex items-center justify-center text-xs font-mono font-bold ${color}`}>
      {rank}
    </div>
  );
}

function LocalSeoGrid({ location }) {
  return (
    <div className="bg-[#1A2128] border border-[#2A3441] p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-sm font-semibold mb-0.5">{location.name}</h4>
          <p className="text-[10px] font-mono text-[#6B7A8D]">{location.client}</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-mono font-bold text-[#00D4AA]">#{location.rank}</p>
          <p className="text-[10px] font-mono text-[#6B7A8D]">
            was #{location.previousRank}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mb-4">
        {location.pins.map(pin => (
          <RankPin key={pin.grid} rank={pin.rank} />
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[#2A3441]">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[#00D4AA]" />
          <span className="text-[10px] font-mono text-[#6B7A8D] uppercase">Grid visibility</span>
        </div>
        <span className="text-sm font-mono text-[#00D4AA]">{location.visibility}%</span>
      </div>
    </div>
  );
}

export default function MarketingDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { overview, monthlyTraffic, channelBreakdown, topLandingPages } = trafficMetrics;
  const maxSessions = Math.max(...monthlyTraffic.map(m => m.sessions));

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
            <BarChart3 className="w-4 h-4 text-[#00D4AA] shrink-0" />
            <h1 className="text-sm font-semibold tracking-tight font-mono uppercase min-w-0 truncate">Client Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-[#00D4AA] rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-[#6B7A8D]">LIVE</span>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-[#161B22] border-b border-[#2A3441]">
        <div className="max-w-7xl mx-auto flex px-4 gap-1 py-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'clients', label: 'Clients' },
            { id: 'local', label: 'Local SEO' },
            { id: 'competitors', label: 'Competitors' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-[#00D4AA]/10 text-[#00D4AA] border-b-2 border-[#00D4AA]'
                  : 'text-[#6B7A8D] hover:text-[#E8EDF2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'overview' && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#2A3441] border border-[#2A3441] mb-8">
              {[
                { label: 'Sessions', value: (overview.totalSessions / 1000).toFixed(1) + 'K', change: overview.sessionsChange, icon: Activity },
                { label: 'Organic %', value: overview.organicShare + '%', change: 4.2, icon: Globe },
                { label: 'Avg Duration', value: overview.avgSessionDuration, change: null, icon: TrendingUp },
                { label: 'Bounce Rate', value: overview.bounceRate + '%', change: -2.1, icon: ArrowDownRight, invert: true },
                { label: 'Conversions', value: overview.conversions.toLocaleString(), change: 18.4, icon: ArrowUpRight },
                { label: 'Conv Rate', value: overview.conversionRate + '%', change: 0.4, icon: BarChart3 },
              ].map((kpi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-[#1A2128] p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <kpi.icon className="w-3.5 h-3.5 text-[#6B7A8D]" />
                    <span className="text-[10px] font-mono text-[#6B7A8D] uppercase">{kpi.label}</span>
                  </div>
                  <p className="text-xl font-mono font-bold mb-1">{kpi.value}</p>
                  {kpi.change !== null && (
                    <span className={`text-[10px] font-mono ${
                      (kpi.invert ? kpi.change < 0 : kpi.change > 0) ? 'text-[#00D4AA]' : 'text-red-400'
                    }`}>
                      {kpi.change > 0 ? '+' : ''}{kpi.change}%
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Traffic Chart */}
              <div className="lg:col-span-2 bg-[#1A2128] border border-[#2A3441] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold font-mono uppercase tracking-wider">Monthly Traffic</h3>
                  <div className="flex items-center gap-4 text-[10px] font-mono">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#00D4AA]" /> Organic</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-blue-400" /> Paid</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#6B7A8D]" /> Direct</span>
                  </div>
                </div>
                <div className="flex items-end gap-3 h-48">
                  {monthlyTraffic.map((month, i) => {
                    const totalHeight = (month.sessions / maxSessions) * 100;
                    const organicH = (month.organic / month.sessions) * totalHeight;
                    const paidH = (month.paid / month.sessions) * totalHeight;
                    const directH = (month.direct / month.sessions) * totalHeight;

                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex flex-col justify-end h-40 relative group">
                          <motion.div
                            className="w-full flex flex-col"
                            initial={{ height: 0 }}
                            animate={{ height: `${totalHeight}%` }}
                            transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                          >
                            <div className="w-full bg-[#6B7A8D]/60" style={{ height: `${(directH / totalHeight) * 100}%` }} />
                            <div className="w-full bg-blue-400/60" style={{ height: `${(paidH / totalHeight) * 100}%` }} />
                            <div className="w-full bg-[#00D4AA]" style={{ height: `${(organicH / totalHeight) * 100}%` }} />
                          </motion.div>
                          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#6B7A8D] opacity-0 group-hover:opacity-100 transition-opacity">
                            {(month.sessions / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#6B7A8D]">{month.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Channel Breakdown */}
              <div className="bg-[#1A2128] border border-[#2A3441] p-6">
                <h3 className="text-sm font-semibold font-mono uppercase tracking-wider mb-6">Channel Mix</h3>
                <div className="space-y-4">
                  {channelBreakdown.map((ch, i) => (
                    <motion.div
                      key={ch.channel}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-[#6B7A8D] text-xs">{ch.channel}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-semibold">{ch.share}%</span>
                          <span className={`text-[10px] font-mono ${ch.change >= 0 ? 'text-[#00D4AA]' : 'text-red-400'}`}>
                            {ch.change > 0 ? '+' : ''}{ch.change}
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-[#2A3441] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${ch.share}%` }}
                          transition={{ delay: i * 0.06 + 0.3, duration: 0.5 }}
                          className="h-full bg-[#00D4AA]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Landing Pages */}
            <div className="bg-[#1A2128] border border-[#2A3441]">
              <div className="px-6 py-4 border-b border-[#2A3441]">
                <h3 className="text-sm font-semibold font-mono uppercase tracking-wider">Top Landing Pages</h3>
              </div>
              <div className="responsive-table-wrap">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A3441]">
                      <th className="text-left px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase">Page</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase">Sessions</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase">Bounce</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase">Conv</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2A3441]">
                    {topLandingPages.map((page, i) => (
                      <tr key={i} className="hover:bg-[#161B22] transition-colors">
                        <td className="px-6 py-3">
                          <span className="text-sm font-mono text-[#00D4AA]">{page.page}</span>
                        </td>
                        <td className="px-6 py-3 text-right font-mono text-sm">{page.sessions.toLocaleString()}</td>
                        <td className="px-6 py-3 text-right font-mono text-sm text-[#6B7A8D]">{page.bounce}%</td>
                        <td className="px-6 py-3 text-right font-mono text-sm text-[#00D4AA]">{page.conversions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'clients' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A3441] border border-[#2A3441]">
            {clients.map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#1A2128] p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold">{client.name}</h3>
                      <span className={`text-[10px] font-mono px-2 py-0.5 uppercase ${
                        client.status === 'active'
                          ? 'bg-[#00D4AA]/10 text-[#00D4AA]'
                          : 'bg-amber-400/10 text-amber-400'
                      }`}>
                        {client.status}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#6B7A8D]">{client.domain}</p>
                    <p className="text-[10px] text-[#6B7A8D] mt-1">{client.industry}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-mono font-bold ${
                      client.healthScore >= 85 ? 'text-[#00D4AA]' : client.healthScore >= 70 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {client.healthScore}
                    </p>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase">Health</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-[#2A3441]">
                  <div>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase mb-1">Traffic</p>
                    <p className="text-sm font-mono">{(client.monthlyTraffic / 1000).toFixed(1)}K</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase mb-1">Growth</p>
                    <p className="text-sm font-mono text-[#00D4AA]">+{client.trafficChange}%</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase mb-1">Keywords</p>
                    <p className="text-sm font-mono">{client.keywordsRanking}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#6B7A8D] uppercase mb-1">Avg Pos</p>
                    <p className="text-sm font-mono">{client.avgPosition}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'local' && (
          <>
            <div className="mb-6">
              <p className="text-xs font-mono text-[#6B7A8D] uppercase tracking-wider mb-1">Local SEO Grid Tracking</p>
              <h2 className="text-xl font-semibold">Geo-grid rank positions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {localSeoLocations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <LocalSeoGrid location={loc} />
                </motion.div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'competitors' && (
          <>
            <div className="mb-6">
              <p className="text-xs font-mono text-[#6B7A8D] uppercase tracking-wider mb-1">Competitive Intelligence</p>
              <h2 className="text-xl font-semibold">Competitor benchmarking</h2>
            </div>
            <div className="bg-[#1A2128] border border-[#2A3441] overflow-hidden">
              <div className="responsive-table-wrap">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#2A3441]">
                      <th className="text-left px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase">Competitor</th>
                      <th className="text-left px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase hidden md:table-cell">Client</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase">DA</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase hidden sm:table-cell">Traffic</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase hidden lg:table-cell">Keywords</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase hidden lg:table-cell">Backlinks</th>
                      <th className="text-right px-6 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase hidden xl:table-cell">Pages</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2A3441]">
                    {competitors.map((comp, i) => (
                      <motion.tr
                        key={comp.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.04 }}
                        className="hover:bg-[#161B22] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium">{comp.name}</p>
                          <p className="text-[10px] font-mono text-[#6B7A8D]">{comp.domain}</p>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="text-xs text-[#6B7A8D]">{comp.client}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`text-sm font-mono font-bold ${
                            comp.domainAuthority >= 55 ? 'text-red-400' : 'text-[#6B7A8D]'
                          }`}>
                            {comp.domainAuthority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-sm hidden sm:table-cell">
                          {(comp.organicTraffic / 1000).toFixed(1)}K
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-sm hidden lg:table-cell">
                          {comp.keywords.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-sm hidden lg:table-cell">
                          {(comp.backlinks / 1000).toFixed(1)}K
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-sm hidden xl:table-cell">
                          {comp.contentPages}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
