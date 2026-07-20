import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, TrendingUp, DollarSign, ShoppingBag, ChefHat } from 'lucide-react';
import { mockOrders, dailyStats, cafeInfo } from '../../../data/cafeData';

const statusConfig = {
  pending: { label: 'New', color: 'text-amber-700', bg: 'bg-amber-50', dot: 'bg-amber-500' },
  preparing: { label: 'Preparing', color: 'text-blue-700', bg: 'bg-blue-50', dot: 'bg-blue-500' },
  ready: { label: 'Ready', color: 'text-green-700', bg: 'bg-green-50', dot: 'bg-green-500' },
};

export default function CafeDashboard() {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState('orders');

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };
  const nextStatus = { pending: 'preparing', preparing: 'ready', ready: 'completed' };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#2C1810]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#E0D5C5]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
          <Link to="/demos/cafe" className="flex items-center gap-2 text-[#8B7355] hover:text-[#2C1810] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{cafeInfo.name}</span>
          </Link>
          <h1 className="text-base font-semibold" style={{ fontFamily: "'Georgia', serif" }}>Kitchen Dashboard</h1>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-[#8B7355]">Live</span>
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="border-b border-[#E0D5C5] bg-[#F5F0E8]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex px-6">
          {[
            { id: 'orders', label: '🍳 Order Queue' },
            { id: 'analytics', label: '📊 Analytics' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#C17832] text-[#2C1810] font-medium'
                  : 'border-transparent text-[#8B7355] hover:text-[#2C1810]'
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
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Orders', value: dailyStats.totalOrders, icon: <ShoppingBag className="w-5 h-5" />, color: 'bg-amber-50 text-amber-700' },
                { label: 'Revenue', value: `$${dailyStats.revenue.toFixed(0)}`, icon: <DollarSign className="w-5 h-5" />, color: 'bg-green-50 text-green-700' },
                { label: 'Avg Order', value: `$${dailyStats.avgOrderValue.toFixed(2)}`, icon: <TrendingUp className="w-5 h-5" />, color: 'bg-blue-50 text-blue-700' },
                { label: 'Best Seller', value: dailyStats.topItem, icon: <ChefHat className="w-5 h-5" />, color: 'bg-purple-50 text-purple-700' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-5 border border-[#E8DFD3]"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color} mb-3`}>{stat.icon}</div>
                  <p className="text-xs uppercase tracking-wider text-[#8B7355] mb-1">{stat.label}</p>
                  <p className="text-xl font-semibold" style={{ fontFamily: "'Georgia', serif" }}>{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Orders */}
            <p className="text-xs uppercase tracking-widest text-[#8B7355] mb-4 font-medium">Live Orders</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orders.filter(o => o.status !== 'completed').map((order, i) => {
                const config = statusConfig[order.status];
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="bg-white rounded-xl border border-[#E8DFD3] overflow-hidden hover:shadow-md hover:shadow-[#D7A86E]/10 transition-all"
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8DFD3]">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{order.id}</span>
                        <span className="text-xs text-[#8B7355]">Table {order.table}</span>
                      </div>
                      <span className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${config.bg} ${config.color}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                        {config.label}
                      </span>
                    </div>

                    <div className="px-5 py-3 space-y-2">
                      {order.items.map((item, j) => (
                        <div key={j} className="flex justify-between text-sm">
                          <span className="text-[#5C4A3A]">
                            <span className="text-[#8B7355] mr-1">{item.qty}×</span>{item.name}
                          </span>
                          <span className="text-[#8B7355]">${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between px-5 py-3 border-t border-[#E8DFD3] bg-[#FBF7F0]">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#8B7355]">{order.time}</span>
                        <span className="text-sm font-semibold" style={{ fontFamily: "'Georgia', serif" }}>${order.total.toFixed(2)}</span>
                      </div>
                      {nextStatus[order.status] && (
                        <button
                          onClick={() => updateOrderStatus(order.id, nextStatus[order.status])}
                          className="text-xs font-medium px-4 py-1.5 bg-[#C17832] text-white rounded-full hover:bg-[#A8622A] transition-colors"
                        >
                          {order.status === 'pending' ? 'Start' : 'Ready'}
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
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl border border-[#E8DFD3] p-6 mb-6">
              <h3 className="text-sm font-semibold mb-6">Revenue by Category</h3>
              <div className="space-y-4">
                {dailyStats.categoryBreakdown.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[#5C4A3A]">{cat.category}</span>
                      <span className="text-[#8B7355]">${cat.revenue.toFixed(2)} ({cat.percentage}%)</span>
                    </div>
                    <div className="h-3 bg-[#FBF7F0] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${cat.percentage}%` }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#C17832] to-[#D7A86E] rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hourly */}
            <div className="bg-white rounded-xl border border-[#E8DFD3] p-6 mb-6">
              <h3 className="text-sm font-semibold mb-6">Orders by Hour</h3>
              <div className="flex items-end gap-2 h-36">
                {dailyStats.hourlyOrders.map((count, i) => {
                  const maxCount = Math.max(...dailyStats.hourlyOrders);
                  const height = (count / maxCount) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        className="w-full bg-gradient-to-t from-[#C17832] to-[#D7A86E] rounded-t-md hover:from-[#A8622A] hover:to-[#C17832] transition-colors cursor-pointer relative group"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.04 + 0.3, duration: 0.5 }}
                      >
                        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity">{count}</span>
                      </motion.div>
                      <span className="text-[9px] text-[#8B7355]">{dailyStats.hourLabels[i]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Revenue', value: `$${dailyStats.revenue.toFixed(2)}` },
                { label: 'Total Orders', value: dailyStats.totalOrders },
                { label: 'Best Seller', value: dailyStats.topItem },
                { label: 'Units Sold', value: dailyStats.topItemCount },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8DFD3] p-5">
                  <p className="text-xs uppercase tracking-wider text-[#8B7355] mb-1">{item.label}</p>
                  <p className="text-xl font-semibold" style={{ fontFamily: "'Georgia', serif" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
