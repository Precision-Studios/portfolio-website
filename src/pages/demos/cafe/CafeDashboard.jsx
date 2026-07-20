import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, AlertCircle, TrendingUp, DollarSign, ShoppingBag, ChefHat } from 'lucide-react';
import { mockOrders, dailyStats, cafeInfo } from '../../../data/cafeData';

const statusConfig = {
  pending: { label: 'Pending', color: 'text-yellow-400', bg: 'bg-yellow-400/10', icon: <Clock className="w-4 h-4" /> },
  preparing: { label: 'Preparing', color: 'text-blue-400', bg: 'bg-blue-400/10', icon: <ChefHat className="w-4 h-4" /> },
  ready: { label: 'Ready', color: 'text-green-400', bg: 'bg-green-400/10', icon: <CheckCircle className="w-4 h-4" /> },
};

export default function CafeDashboard() {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState('orders');

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const nextStatus = { pending: 'preparing', preparing: 'ready', ready: 'completed' };

  return (
    <div className="min-h-screen bg-[#1a0e05] text-white font-plex">
      {/* Top Bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5 bg-[#1a0e05]/95 backdrop-blur-sm">
        <Link to="/demos/cafe" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{cafeInfo.name}</span>
        </Link>
        <h1 className="text-sm font-semibold tracking-tight">Dashboard</h1>
        <span className="text-xs text-white/30 font-plex-mono">Admin View</span>
      </nav>

      {/* Tab Navigation */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: 'orders', label: 'Order Queue' },
            { id: 'analytics', label: 'Analytics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#FF832B] text-white'
                  : 'border-transparent text-white/40 hover:text-white/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'orders' ? (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-8">
              {[
                { label: 'Total Orders', value: dailyStats.totalOrders, icon: <ShoppingBag className="w-5 h-5" /> },
                { label: 'Revenue', value: `£${dailyStats.revenue.toFixed(0)}`, icon: <DollarSign className="w-5 h-5" /> },
                { label: 'Avg Order', value: `£${dailyStats.avgOrderValue.toFixed(2)}`, icon: <TrendingUp className="w-5 h-5" /> },
                { label: 'Top Item', value: dailyStats.topItem, icon: <AlertCircle className="w-5 h-5" /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 bg-[#1a0e05]"
                >
                  <div className="flex items-center gap-2 text-white/30 mb-2">
                    {stat.icon}
                    <span className="text-xs uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-light font-plex-mono">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Live Orders */}
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Live Orders</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orders.filter(o => o.status !== 'completed').map((order, i) => {
                const config = statusConfig[order.status];
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-plex-mono font-semibold">{order.id}</span>
                        <span className="text-xs text-white/30">Table {order.table}</span>
                      </div>
                      <div className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 ${config.bg} ${config.color}`}>
                        {config.icon}
                        {config.label}
                      </div>
                    </div>

                    {/* Items */}
                    <div className="p-4 space-y-2">
                      {order.items.map((item, j) => (
                        <div key={j} className="flex justify-between text-sm">
                          <span className="text-white/60">
                            <span className="text-white/30 font-plex-mono mr-2">{item.qty}×</span>
                            {item.name}
                          </span>
                          <span className="font-plex-mono text-white/40">£{(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between p-4 border-t border-white/5">
                      <div>
                        <span className="text-xs text-white/30">{order.time}</span>
                        <span className="text-sm font-plex-mono font-semibold ml-4">£{order.total.toFixed(2)}</span>
                      </div>
                      {nextStatus[order.status] && (
                        <button
                          onClick={() => updateOrderStatus(order.id, nextStatus[order.status])}
                          className="text-xs font-medium px-3 py-1.5 bg-[#FF832B] text-white hover:bg-[#e0721f] transition-colors"
                        >
                          {order.status === 'pending' ? 'Start Preparing' : 'Mark Ready'}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : (
          /* Analytics Tab */
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Today's Performance</p>

            {/* Revenue Breakdown */}
            <div className="bg-white/[0.03] border border-white/5 p-6 mb-6">
              <h3 className="text-sm font-semibold mb-6">Revenue by Category</h3>
              <div className="space-y-4">
                {dailyStats.categoryBreakdown.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white/60">{cat.category}</span>
                      <span className="font-plex-mono text-white/40">£{cat.revenue.toFixed(2)} ({cat.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${cat.percentage}%` }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.4, 0.14, 0.3, 1] }}
                        className="h-full bg-[#FF832B]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hourly Orders Chart */}
            <div className="bg-white/[0.03] border border-white/5 p-6 mb-6">
              <h3 className="text-sm font-semibold mb-6">Orders by Hour</h3>
              <div className="flex items-end gap-2 h-40">
                {dailyStats.hourlyOrders.map((count, i) => {
                  const maxCount = Math.max(...dailyStats.hourlyOrders);
                  const height = (count / maxCount) * 100;
                  return (
                    <motion.div
                      key={i}
                      className="flex-1 flex flex-col items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <motion.div
                        className="w-full bg-[#FF832B]/60 hover:bg-[#FF832B] transition-colors cursor-pointer relative group"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.05 + 0.3, duration: 0.5, ease: [0.4, 0.14, 0.3, 1] }}
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-plex-mono text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          {count}
                        </span>
                      </motion.div>
                      <span className="text-[10px] text-white/30 font-plex-mono">{dailyStats.hourLabels[i]}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Daily Summary */}
            <div className="grid grid-cols-2 gap-px bg-white/5">
              {[
                { label: 'Total Revenue', value: `£${dailyStats.revenue.toFixed(2)}` },
                { label: 'Total Orders', value: dailyStats.totalOrders },
                { label: 'Best Seller', value: dailyStats.topItem },
                { label: 'Units Sold', value: dailyStats.topItemCount },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#1a0e05]">
                  <span className="text-xs uppercase tracking-wider text-white/30 block mb-1">{item.label}</span>
                  <span className="text-xl font-light font-plex-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
