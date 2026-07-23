import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Plus, Minus, ArrowRight, Coffee, Croissant, EggFried, Star } from 'lucide-react';
import { menuItems, menuCategories, cafeInfo } from '../../../data/cafeData';

const categoryIcons = {
  Coffee,
  Croissant,
  EggFried,
  Star,
};

export default function CafeMenu() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [cart, setCart] = useState([]);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (menuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === menuItem.id);
      if (existing) return prev.map(i => i.id === menuItem.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { id: menuItem.id, name: menuItem.name, price: menuItem.price, qty: 1 }];
    });
  };

  const removeFromCart = (menuItemId) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === menuItemId);
      if (existing && existing.qty > 1) return prev.map(i => i.id === menuItemId ? { ...i, qty: i.qty - 1 } : i);
      return prev.filter(i => i.id !== menuItemId);
    });
  };

  const getItemQty = (id) => cart.find(i => i.id === id)?.qty || 0;

  const tagStyles = {
    'Popular': 'bg-[#D7A86E]/15 text-[#A07040]',
    'Vegan': 'bg-green-100 text-green-700',
    'Cold': 'bg-blue-50 text-blue-600',
    'Gluten-Free': 'bg-purple-50 text-purple-600',
    'New': 'bg-amber-50 text-amber-700',
    'Limited': 'bg-rose-50 text-rose-600',
  };

  return (
    <div className="demo-page min-h-screen bg-[#FBF7F0] text-[#2C1810] overflow-x-hidden" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-40 bg-[#FBF7F0]/90 backdrop-blur-md border-b border-[#E8DFD3]">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 min-w-0 gap-2">
          <Link to="/demos/cafe" className="flex items-center gap-2 text-[#8B7355] hover:text-[#2C1810] text-sm transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{cafeInfo.name}</span>
          </Link>

          <h1 className="text-sm sm:text-base font-semibold tracking-tight min-w-0 truncate" style={{ fontFamily: "'Georgia', serif" }}>Menu</h1>

          <Link
            to="/demos/cafe/order"
            state={{ cart }}
            className="relative flex items-center gap-2 text-[#8B7355] hover:text-[#2C1810] transition-colors shrink-0"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-2 w-5 h-5 bg-[#C17832] text-white text-[10px] font-bold rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
        </div>
      </nav>

      {/* ─── CATEGORIES ─── */}
      <div className="sticky top-14 z-30 bg-[#FBF7F0]/90 backdrop-blur-md border-b border-[#E8DFD3]">
        <div className="max-w-3xl mx-auto flex overflow-x-auto px-4">
          {menuCategories.map(cat => {
            const Icon = categoryIcons[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeCategory === cat.id
                    ? 'border-[#C17832] text-[#2C1810] font-medium'
                    : 'border-transparent text-[#8B7355] hover:text-[#2C1810]'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── ITEMS ─── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {filteredItems.map((item, i) => {
              const qty = getItemQty(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="group bg-white rounded-xl p-5 mb-3 border border-[#E8DFD3] hover:border-[#D7A86E]/50 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="text-base font-semibold tracking-tight">{item.name}</h3>
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagStyles[tag] || 'bg-gray-100 text-gray-500'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-[#8B7355] leading-relaxed mb-3">{item.description}</p>
                      <p className="text-lg font-semibold text-[#C17832]" style={{ fontFamily: "'Georgia', serif" }}>
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex-shrink-0 pt-1">
                      {qty > 0 ? (
                        <div className="flex items-center gap-0 rounded-full overflow-hidden border border-[#E8DFD3]">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-9 h-9 flex items-center justify-center bg-[#FBF7F0] hover:bg-[#F0E8D8] text-[#8B7355] transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-9 h-9 flex items-center justify-center text-sm font-semibold text-[#C17832] bg-white">
                            {qty}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-9 h-9 flex items-center justify-center bg-[#FBF7F0] hover:bg-[#F0E8D8] text-[#8B7355] transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="w-9 h-9 flex items-center justify-center bg-[#C17832] text-white rounded-full hover:bg-[#A8622A] transition-colors shadow-sm"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── FLOATING CART ─── */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-lg"
          >
            <Link
              to="/demos/cafe/order"
              state={{ cart }}
              className="flex items-center justify-between px-6 py-4 bg-[#3E2723] text-white rounded-2xl shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 flex items-center justify-center bg-[#D7A86E] text-[#2C1810] text-xs font-bold rounded-full">
                  {cartCount}
                </span>
                <span className="text-sm font-medium">View Order</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold" style={{ fontFamily: "'Georgia', serif" }}>${cartTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
