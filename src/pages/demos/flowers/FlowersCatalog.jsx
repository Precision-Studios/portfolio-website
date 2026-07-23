import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  ArrowRight,
  Flower2,
  Leaf,
  Sparkles,
} from 'lucide-react';
import { products, productCategories, floristInfo } from '../../../data/flowersData';

const CREAM = '#FDFBF7';
const BLUSH = '#F2D4D0';
const FOREST = '#2D4A3E';
const SAGE = '#7A9E7E';

const categoryIcons = {
  Flower2,
  Leaf,
  Sparkles,
};

const tagStyles = {
  Bestseller: { bg: `${FOREST}15`, text: FOREST },
  'Same-day': { bg: `${BLUSH}`, text: FOREST },
  New: { bg: '#E8F0E8', text: '#4A6B52' },
  Seasonal: { bg: '#F5EDE0', text: '#8B6914' },
  Premium: { bg: '#F0E6E4', text: '#6B4A4A' },
  Fragrant: { bg: '#EDE8F0', text: '#5A4A6B' },
  Indoor: { bg: '#E8F0E8', text: '#4A6B52' },
  'Easy care': { bg: '#E8F0E8', text: '#4A6B52' },
  Popular: { bg: `${FOREST}15`, text: FOREST },
  Gift: { bg: `${BLUSH}`, text: FOREST },
  Desk: { bg: '#F5EDE0', text: '#8B6914' },
  Hanging: { bg: '#E8F0E8', text: '#4A6B52' },
  Limited: { bg: '#F0E6E4', text: '#6B4A4A' },
  Holiday: { bg: '#EDE8F0', text: '#5A4A6B' },
  Rare: { bg: '#F0E6E4', text: '#6B4A4A' },
  Everlasting: { bg: '#F5EDE0', text: '#8B6914' },
  Entertaining: { bg: `${BLUSH}`, text: FOREST },
};

export default function FlowersCatalog() {
  const location = useLocation();
  const initialCategory = location.state?.category || 'bouquets';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [cart, setCart] = useState([]);

  const filteredItems = products.filter(item => item.category === activeCategory);
  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === productId);
      if (existing && existing.qty > 1) {
        return prev.map(i => (i.id === productId ? { ...i, qty: i.qty - 1 } : i));
      }
      return prev.filter(i => i.id !== productId);
    });
  };

  const getItemQty = (id) => cart.find(i => i.id === id)?.qty || 0;

  const ProductCard = ({ item, large = false }) => {
    const qty = getItemQty(item.id);
    return (
      <motion.article
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`group relative border transition-all hover:shadow-lg ${large ? 'md:col-span-2' : ''}`}
        style={{ borderColor: BLUSH, backgroundColor: 'white' }}
      >
        <div className={`flex ${large ? 'flex-col md:flex-row' : 'flex-col'} h-full`}>
          {/* Visual placeholder */}
          <div
            className={`relative overflow-hidden ${large ? 'md:w-1/2 min-h-[200px]' : 'h-40'}`}
            style={{ backgroundColor: `${BLUSH}66` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Flower2
                className={`${large ? 'w-16 h-16' : 'w-10 h-10'} opacity-20`}
                style={{ color: FOREST }}
              />
            </div>
            {item.featured && (
              <span
                className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1"
                style={{ backgroundColor: FOREST, color: CREAM, fontFamily: "'Jost', sans-serif" }}
              >
                Featured
              </span>
            )}
          </div>

          <div className={`flex flex-col flex-grow p-6 ${large ? 'md:w-1/2 md:justify-center' : ''}`}>
            <div className="flex-grow">
              <p
                className="text-[10px] uppercase tracking-[0.2em] mb-2"
                style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
              >
                {item.stems ? `${item.stems} stems` : 'Living plant'}
              </p>
              <h3
                className={`font-light mb-2 ${large ? 'text-2xl' : 'text-xl'}`}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: FOREST }}
              >
                {item.name}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: SAGE, fontFamily: "'Jost', sans-serif" }}
              >
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tags.map(tag => {
                  const style = tagStyles[tag] || { bg: '#f3f3f3', text: '#666' };
                  return (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 tracking-wide"
                      style={{ backgroundColor: style.bg, color: style.text, fontFamily: "'Jost', sans-serif" }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: BLUSH }}>
              <p
                className={`font-light ${large ? 'text-2xl' : 'text-xl'}`}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: FOREST }}
              >
                ${item.price.toFixed(2)}
              </p>
              {qty > 0 ? (
                <div className="flex items-center border" style={{ borderColor: BLUSH }}>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-9 h-9 flex items-center justify-center transition-colors hover:opacity-70"
                    style={{ color: FOREST }}
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span
                    className="w-9 h-9 flex items-center justify-center text-sm font-medium"
                    style={{ fontFamily: "'Jost', sans-serif", color: FOREST }}
                  >
                    {qty}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-9 h-9 flex items-center justify-center transition-colors hover:opacity-70"
                    style={{ color: FOREST }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="flex items-center gap-2 px-4 py-2 text-xs tracking-wide uppercase transition-opacity hover:opacity-80"
                  style={{ backgroundColor: FOREST, color: CREAM, fontFamily: "'Jost', sans-serif" }}
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <div
      className="demo-page min-h-screen overflow-x-hidden"
      style={{ backgroundColor: CREAM, color: FOREST, fontFamily: "'Jost', sans-serif" }}
    >
      {/* Nav */}
      <nav
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{ backgroundColor: `${CREAM}e6`, borderColor: BLUSH }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 min-w-0 gap-2">
          <Link to="/demos/flowers" className="flex items-center gap-2 text-sm transition-colors shrink-0" style={{ color: SAGE }}>
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline truncate max-w-[42vw] sm:max-w-none">{floristInfo.name}</span>
          </Link>
          <h1
            className="text-sm sm:text-base tracking-wide min-w-0 truncate"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Catalog
          </h1>
          <Link
            to="/demos/flowers/order"
            state={{ cart }}
            className="relative flex items-center gap-2 transition-colors shrink-0"
            style={{ color: SAGE }}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-2 w-5 h-5 text-[10px] font-bold flex items-center justify-center"
                style={{ backgroundColor: FOREST, color: CREAM }}
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
        </div>
      </nav>

      {/* Categories */}
      <div
        className="sticky top-14 z-30 backdrop-blur-md border-b"
        style={{ backgroundColor: `${CREAM}e6`, borderColor: BLUSH }}
      >
        <div className="max-w-5xl mx-auto flex overflow-x-auto px-4">
          {productCategories.map(cat => {
            const Icon = categoryIcons[cat.icon] || Flower2;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 px-6 py-3.5 text-sm whitespace-nowrap transition-all border-b-2"
                style={{
                  borderColor: activeCategory === cat.id ? FOREST : 'transparent',
                  color: activeCategory === cat.id ? FOREST : SAGE,
                  fontWeight: activeCategory === cat.id ? 500 : 400,
                }}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: SAGE }}>
                {productCategories.find(c => c.id === activeCategory)?.label}
              </p>
              <h2
                className="text-3xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {activeCategory === 'bouquets' && 'Hand-tied arrangements'}
                {activeCategory === 'plants' && 'Living botanicals'}
                {activeCategory === 'seasonal' && 'Limited seasonal edits'}
              </h2>
            </div>

            {featuredItems.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {featuredItems.map(item => (
                  <ProductCard key={item.id} item={item} large />
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regularItems.map(item => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating cart */}
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
              to="/demos/flowers/order"
              state={{ cart }}
              className="flex items-center justify-between px-6 py-4 shadow-xl"
              style={{ backgroundColor: FOREST, color: CREAM }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-7 h-7 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: BLUSH, color: FOREST }}
                >
                  {cartCount}
                </span>
                <span className="text-sm font-medium">Review Order</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-base font-light"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  ${cartTotal.toFixed(2)}
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
