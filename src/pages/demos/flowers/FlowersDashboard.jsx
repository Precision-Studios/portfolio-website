import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Flower2,
  Truck,
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Package,
  Sparkles,
  BarChart3,
} from 'lucide-react';
import { mockOrders, floristStats, floristInfo } from '../../../data/flowersData';

const CREAM = '#FDFBF7';
const BLUSH = '#F2D4D0';
const FOREST = '#2D4A3E';
const SAGE = '#7A9E7E';

const statusConfig = {
  pending: { label: 'New Order', color: FOREST, bg: BLUSH, dot: '#C47B5A' },
  arranging: { label: 'Arranging', color: '#4A6B52', bg: '#E8F0E8', dot: '#7A9E7E' },
  'out-for-delivery': { label: 'Out for Delivery', color: '#5A4A6B', bg: '#EDE8F0', dot: '#8B7A9E' },
};

export default function FlowersDashboard() {
  const [orders, setOrders] = useState(mockOrders);
  const [activeTab, setActiveTab] = useState('orders');

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(o => (o.id === orderId ? { ...o, status: newStatus } : o)));
  };

  const nextStatus = {
    pending: 'arranging',
    arranging: 'out-for-delivery',
    'out-for-delivery': 'completed',
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: CREAM, color: FOREST, fontFamily: "'Jost', sans-serif" }}
    >
      <nav
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{ backgroundColor: `${CREAM}e6`, borderColor: BLUSH }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
          <Link to="/demos/flowers" className="flex items-center gap-2 text-sm transition-colors" style={{ color: SAGE }}>
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{floristInfo.name}</span>
          </Link>
          <h1
            className="text-base tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Florist Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#7A9E7E' }} />
            <span className="text-xs" style={{ color: SAGE }}>
              Live
            </span>
          </div>
        </div>
      </nav>

      <div className="border-b" style={{ borderColor: BLUSH, backgroundColor: `${CREAM}e6` }}>
        <div className="max-w-7xl mx-auto flex px-6">
          {[
            { id: 'orders', label: 'Order Queue', icon: Package },
            { id: 'analytics', label: 'Seasonal Analytics', icon: BarChart3 },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-5 py-3 text-sm transition-all border-b-2"
              style={{
                borderColor: activeTab === tab.id ? FOREST : 'transparent',
                color: activeTab === tab.id ? FOREST : SAGE,
                fontWeight: activeTab === tab.id ? 500 : 400,
              }}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'orders' ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: 'Orders Today',
                  value: floristStats.totalOrders,
                  icon: <ShoppingBag className="w-5 h-5" />,
                  bg: BLUSH,
                },
                {
                  label: 'Revenue',
                  value: `$${floristStats.revenue.toFixed(0)}`,
                  icon: <DollarSign className="w-5 h-5" />,
                  bg: '#E8F0E8',
                },
                {
                  label: 'Avg Order',
                  value: `$${floristStats.avgOrderValue.toFixed(2)}`,
                  icon: <TrendingUp className="w-5 h-5" />,
                  bg: '#F5EDE0',
                },
                {
                  label: 'Top Seller',
                  value: floristStats.topProduct,
                  icon: <Flower2 className="w-5 h-5" />,
                  bg: '#EDE8F0',
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border p-5"
                  style={{ borderColor: BLUSH, backgroundColor: 'white' }}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center mb-3"
                    style={{ backgroundColor: stat.bg, color: FOREST }}
                  >
                    {stat.icon}
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: SAGE }}>
                    {stat.label}
                  </p>
                  <p
                    className="text-lg font-light truncate"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: SAGE }}>
              Active Deliveries
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {orders
                .filter(o => o.status !== 'completed')
                .map((order, i) => {
                  const config = statusConfig[order.status];
                  return (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="border overflow-hidden transition-shadow hover:shadow-md"
                      style={{ borderColor: BLUSH, backgroundColor: 'white' }}
                    >
                      <div
                        className="flex items-center justify-between px-5 py-3 border-b"
                        style={{ borderColor: BLUSH }}
                      >
                        <div>
                          <span className="text-sm font-medium">{order.id}</span>
                          <p className="text-xs" style={{ color: SAGE }}>
                            {order.customer}
                          </p>
                        </div>
                        <span
                          className="flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 tracking-wide uppercase"
                          style={{ backgroundColor: config.bg, color: config.color }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.dot }} />
                          {config.label}
                        </span>
                      </div>

                      <div className="px-5 py-3 space-y-2">
                        {order.items.map((item, j) => (
                          <div key={j} className="flex justify-between text-sm">
                            <span>
                              <span style={{ color: SAGE }} className="mr-1">
                                {item.qty}x
                              </span>
                              {item.name}
                            </span>
                            <span style={{ color: SAGE }}>${(item.price * item.qty).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        className="px-5 py-3 border-t flex items-center gap-2 text-xs"
                        style={{ borderColor: BLUSH, backgroundColor: `${CREAM}88`, color: SAGE }}
                      >
                        <Truck className="w-3.5 h-3.5" />
                        <span>
                          {order.deliveryDate} · {order.deliverySlot}
                        </span>
                      </div>

                      <div
                        className="flex items-center justify-between px-5 py-3 border-t"
                        style={{ borderColor: BLUSH, backgroundColor: CREAM }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs" style={{ color: SAGE }}>
                            {order.time}
                          </span>
                          <span
                            className="text-sm font-light"
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                          >
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                        {nextStatus[order.status] && (
                          <button
                            onClick={() => updateOrderStatus(order.id, nextStatus[order.status])}
                            className="text-xs font-medium px-4 py-1.5 transition-opacity hover:opacity-80"
                            style={{ backgroundColor: FOREST, color: CREAM }}
                          >
                            {order.status === 'pending'
                              ? 'Start'
                              : order.status === 'arranging'
                                ? 'Dispatch'
                                : 'Complete'}
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
            {/* Category breakdown */}
            <div className="border p-6 mb-6" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
              <h3
                className="text-sm font-medium mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Revenue by Category
              </h3>
              <div className="space-y-4">
                {floristStats.categoryBreakdown.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span>{cat.category}</span>
                      <span style={{ color: SAGE }}>
                        ${cat.revenue.toFixed(2)} ({cat.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden" style={{ backgroundColor: BLUSH }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${cat.percentage}%` }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                        className="h-full"
                        style={{ backgroundColor: FOREST }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Seasonal trends */}
            <div className="border p-6 mb-6" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4" style={{ color: SAGE }} />
                <h3
                  className="text-sm font-medium"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Seasonal Collection Performance
                </h3>
              </div>
              <div className="space-y-4">
                {floristStats.seasonalTrends.map((trend, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between py-3 border-b last:border-b-0"
                    style={{ borderColor: BLUSH }}
                  >
                    <div>
                      <p className="text-sm font-medium">{trend.collection}</p>
                      <p className="text-xs" style={{ color: SAGE }}>
                        {trend.orders} orders this week
                      </p>
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: trend.growth >= 0 ? '#4A6B52' : '#C47B5A' }}
                    >
                      {trend.growth >= 0 ? '+' : ''}
                      {trend.growth}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Weekly chart */}
            <div className="border p-6 mb-6" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
              <h3
                className="text-sm font-medium mb-6"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Orders This Week
              </h3>
              <div className="flex items-end gap-2 h-36">
                {floristStats.weeklyOrders.map((count, i) => {
                  const maxCount = Math.max(...floristStats.weeklyOrders);
                  const height = (count / maxCount) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        className="w-full relative group cursor-pointer"
                        style={{ backgroundColor: i === new Date().getDay() - 1 ? FOREST : BLUSH }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.04 + 0.3, duration: 0.5 }}
                      >
                        <span
                          className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: SAGE }}
                        >
                          {count}
                        </span>
                      </motion.div>
                      <span className="text-[9px]" style={{ color: SAGE }}>
                        {floristStats.dayLabels[i]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Revenue', value: `$${floristStats.revenue.toFixed(2)}` },
                { label: 'Total Orders', value: floristStats.totalOrders },
                { label: 'Best Seller', value: floristStats.topProduct },
                { label: 'Units Sold', value: floristStats.topProductCount },
              ].map((item, i) => (
                <div key={i} className="border p-5" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
                  <p className="text-[10px] uppercase tracking-[0.15em] mb-1" style={{ color: SAGE }}>
                    {item.label}
                  </p>
                  <p
                    className="text-xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
