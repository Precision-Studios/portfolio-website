import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { menuItems, menuCategories, cafeInfo } from '../../../data/cafeData';

export default function CafeMenu() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [cart, setCart] = useState([]);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (menuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === menuItem.id);
      if (existing) {
        return prev.map(i => i.id === menuItem.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: menuItem.id, name: menuItem.name, price: menuItem.price, qty: 1 }];
    });
  };

  const removeFromCart = (menuItemId) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === menuItemId);
      if (existing && existing.qty > 1) {
        return prev.map(i => i.id === menuItemId ? { ...i, qty: i.qty - 1 } : i);
      }
      return prev.filter(i => i.id !== menuItemId);
    });
  };

  const getItemQty = (id) => {
    const item = cart.find(i => i.id === id);
    return item ? item.qty : 0;
  };

  const tagColors = {
    'Popular': 'bg-[#FF832B]/15 text-[#FF832B]',
    'Vegan': 'bg-green-500/15 text-green-400',
    'Cold': 'bg-blue-500/15 text-blue-400',
    'Gluten-Free': 'bg-purple-500/15 text-purple-400',
    'New': 'bg-yellow-500/15 text-yellow-400',
    'Limited': 'bg-red-500/15 text-red-400',
  };

  return (
    <div className="min-h-screen bg-[#1a0e05] text-white font-plex">
      {/* Top Bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5 bg-[#1a0e05]/95 backdrop-blur-sm">
        <Link to="/demos/cafe" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{cafeInfo.name}</span>
        </Link>

        <h1 className="text-sm font-semibold tracking-tight">Menu</h1>

        <Link
          to="/demos/cafe/order"
          state={{ cart }}
          className="relative flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-2 w-5 h-5 bg-[#FF832B] text-white text-[10px] font-bold flex items-center justify-center"
            >
              {cartCount}
            </motion.span>
          )}
        </Link>
      </nav>

      {/* Category Tabs */}
      <div className="sticky top-12 z-20 border-b border-white/5 bg-[#1a0e05]/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex overflow-x-auto scrollbar-hide">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 text-sm whitespace-nowrap transition-all border-b-2 ${
                activeCategory === cat.id
                  ? 'border-[#FF832B] text-white'
                  : 'border-transparent text-white/40 hover:text-white/60 hover:bg-white/[0.02]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-0"
          >
            {filteredItems.map((item, i) => {
              const qty = getItemQty(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="group flex items-start gap-4 p-5 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold tracking-tight">{item.name}</h3>
                      {item.tags.map(tag => (
                        <span key={tag} className={`text-[10px] px-2 py-0.5 font-medium uppercase tracking-wider ${tagColors[tag] || 'bg-white/10 text-white/50'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-white/35 leading-relaxed mb-2">{item.description}</p>
                    <p className="text-lg font-plex-mono font-medium text-[#FF832B]">£{item.price.toFixed(2)}</p>
                  </div>

                  {/* Add/Remove Controls */}
                  <div className="flex-shrink-0 flex items-center gap-2 pt-1">
                    {qty > 0 ? (
                      <div className="flex items-center gap-0">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/60 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold font-plex-mono bg-[#FF832B]/10 text-[#FF832B]">
                          {qty}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/60 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 flex items-center justify-center bg-[#FF832B] text-white hover:bg-[#e0721f] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Cart Bar */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-30 bg-[#FF832B] border-t border-[#e0721f]"
          >
            <Link
              to="/demos/cafe/order"
              state={{ cart }}
              className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-black/20 text-white text-sm font-bold font-plex-mono">
                  {cartCount}
                </span>
                <span className="text-sm font-semibold text-black">View Order</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold font-plex-mono text-black">£{cartTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
