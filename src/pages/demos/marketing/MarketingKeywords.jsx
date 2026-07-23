import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowUpDown,
  Filter,
  Target,
} from 'lucide-react';
import { agencyInfo, keywordRankings, clients } from '../../../data/marketingData';

function PositionChange({ change }) {
  if (change > 0) {
    return (
      <span className="inline-flex items-center gap-1 text-[#00D4AA] font-mono text-sm">
        <TrendingUp className="w-3.5 h-3.5" />
        +{change}
      </span>
    );
  }
  if (change < 0) {
    return (
      <span className="inline-flex items-center gap-1 text-red-400 font-mono text-sm">
        <TrendingDown className="w-3.5 h-3.5" />
        {change}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[#6B7A8D] font-mono text-sm">
      <Minus className="w-3.5 h-3.5" />
      0
    </span>
  );
}

function PositionBadge({ position }) {
  const color =
    position <= 3 ? 'bg-[#00D4AA]/20 text-[#00D4AA] border-[#00D4AA]/40' :
    position <= 10 ? 'bg-blue-400/10 text-blue-400 border-blue-400/30' :
    position <= 20 ? 'bg-amber-400/10 text-amber-400 border-amber-400/30' :
    'bg-[#2A3441] text-[#6B7A8D] border-[#2A3441]';

  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 text-sm font-mono font-bold border ${color}`}>
      {position}
    </span>
  );
}

function DifficultyBar({ value }) {
  const color = value >= 70 ? 'bg-red-400' : value >= 50 ? 'bg-amber-400' : 'bg-[#00D4AA]';
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-[#2A3441] overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-mono text-[#6B7A8D]">{value}</span>
    </div>
  );
}

export default function MarketingKeywords() {
  const [searchQuery, setSearchQuery] = useState('');
  const [clientFilter, setClientFilter] = useState('all');
  const [sortField, setSortField] = useState('change');
  const [sortDir, setSortDir] = useState('desc');

  const filtered = useMemo(() => {
    let results = [...keywordRankings];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(k => k.keyword.toLowerCase().includes(q) || k.client.toLowerCase().includes(q));
    }

    if (clientFilter !== 'all') {
      results = results.filter(k => k.client === clientFilter);
    }

    results.sort((a, b) => {
      const mul = sortDir === 'desc' ? -1 : 1;
      if (sortField === 'change') return (a.change - b.change) * mul * -1;
      if (sortField === 'position') return (a.position - b.position) * mul;
      if (sortField === 'volume') return (a.volume - b.volume) * mul;
      return 0;
    });

    return results;
  }, [searchQuery, clientFilter, sortField, sortDir]);

  const stats = useMemo(() => {
    const improved = keywordRankings.filter(k => k.change > 0).length;
    const top3 = keywordRankings.filter(k => k.position <= 3).length;
    const top10 = keywordRankings.filter(k => k.position <= 10).length;
    return { improved, top3, top10, total: keywordRankings.length };
  }, []);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortDir(d => d === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortDir('desc');
    }
  };

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
            <Target className="w-4 h-4 text-[#00D4AA] shrink-0" />
            <h1 className="text-sm font-semibold tracking-tight font-mono uppercase min-w-0 truncate">Keyword Tracking</h1>
          </div>
          <Link to="/demos/marketing/dashboard" className="text-xs font-mono text-[#00D4AA] hover:underline shrink-0">
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A3441] border border-[#2A3441] mb-8">
          {[
            { label: 'Keywords tracked', value: stats.total },
            { label: 'Improved', value: stats.improved, accent: true },
            { label: 'Top 3 positions', value: stats.top3, accent: true },
            { label: 'Top 10 positions', value: stats.top10 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#1A2128] p-5"
            >
              <p className="text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider mb-1">{stat.label}</p>
              <p className={`text-2xl font-mono font-bold ${stat.accent ? 'text-[#00D4AA]' : ''}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7A8D]" />
            <input
              type="text"
              placeholder="Search keywords or clients..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#1A2128] border border-[#2A3441] text-sm text-[#E8EDF2] placeholder:text-[#6B7A8D] focus:outline-none focus:border-[#00D4AA]/50 font-mono"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7A8D]" />
            <select
              value={clientFilter}
              onChange={e => setClientFilter(e.target.value)}
              className="pl-10 pr-8 py-2.5 bg-[#1A2128] border border-[#2A3441] text-sm text-[#E8EDF2] focus:outline-none focus:border-[#00D4AA]/50 appearance-none cursor-pointer w-full sm:min-w-[200px] sm:w-auto"
            >
              <option value="all">All clients</option>
              {clients.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1A2128] border border-[#2A3441] overflow-hidden">
          <div className="responsive-table-wrap">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2A3441]">
                  <th className="text-left px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider">Keyword</th>
                  <th className="text-left px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider hidden md:table-cell">Client</th>
                  <th className="text-center px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider">
                    <button onClick={() => toggleSort('position')} className="inline-flex items-center gap-1 hover:text-[#E8EDF2]">
                      Pos <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="text-center px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider hidden sm:table-cell">Prev</th>
                  <th className="text-center px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider">
                    <button onClick={() => toggleSort('change')} className="inline-flex items-center gap-1 hover:text-[#E8EDF2]">
                      Change <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="text-right px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider hidden lg:table-cell">
                    <button onClick={() => toggleSort('volume')} className="inline-flex items-center gap-1 hover:text-[#E8EDF2]">
                      Volume <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="text-right px-5 py-3 text-[10px] font-mono text-[#6B7A8D] uppercase tracking-wider hidden xl:table-cell">KD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A3441]">
                {filtered.map((kw, i) => (
                  <motion.tr
                    key={kw.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="hover:bg-[#161B22] transition-colors"
                  >
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium mb-0.5">{kw.keyword}</p>
                      <p className="text-[10px] font-mono text-[#6B7A8D] truncate max-w-[200px]">{kw.url}</p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <span className="text-xs text-[#6B7A8D]">{kw.client}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <PositionBadge position={kw.position} />
                    </td>
                    <td className="px-5 py-4 text-center hidden sm:table-cell">
                      <span className="text-sm font-mono text-[#6B7A8D]">{kw.previousPosition}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <PositionChange change={kw.change} />
                    </td>
                    <td className="px-5 py-4 text-right hidden lg:table-cell">
                      <span className="text-sm font-mono">{kw.volume.toLocaleString()}</span>
                    </td>
                    <td className="px-5 py-4 hidden xl:table-cell">
                      <DifficultyBar value={kw.difficulty} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <Search className="w-8 h-8 text-[#6B7A8D] mx-auto mb-3" />
              <p className="text-sm text-[#6B7A8D]">No keywords match your filters</p>
            </div>
          )}
        </div>

        <p className="text-[10px] font-mono text-[#6B7A8D] mt-4 uppercase">
          Showing {filtered.length} of {keywordRankings.length} keywords
        </p>
      </div>
    </div>
  );
}
