import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trash2, Plus, Minus, CheckCircle, ArrowRight } from 'lucide-react';
import { cafeInfo } from '../../../data/cafeData';

export default function CafeOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCart = location.state?.cart || [];
  const [cart, setCart] = useState(initialCart);
  const [tableNumber, setTableNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.20; // 20% VAT
  const total = subtotal + tax;
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const updateQty = (id, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const placeOrder = () => {
    if (!tableNumber || cart.length === 0) return;
    const ordNum = `ORD-${String(Math.floor(Math.random() * 900) + 100)}`;
    setOrderNumber(ordNum);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#1a0e05] text-white font-plex flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0.14, 0.3, 1] }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-8 bg-green-500/15 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-light tracking-tight mb-3">Order Placed</h1>
          <p className="text-sm text-white/40 mb-8">Your order has been sent to the kitchen.</p>

          <div className="bg-white/[0.03] border border-white/5 p-6 mb-8 text-left space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Order Number</span>
              <span className="font-plex-mono font-semibold text-[#FF832B]">{orderNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Table</span>
              <span className="font-plex-mono">{tableNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Items</span>
              <span className="font-plex-mono">{cartCount}</span>
            </div>
            <div className="border-t border-white/5 pt-3 flex justify-between text-sm">
              <span className="text-white/40">Total (incl. VAT)</span>
              <span className="font-plex-mono font-semibold">£{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/40">Est. Wait Time</span>
              <span className="font-plex-mono text-green-400">8–12 min</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/demos/cafe/menu"
              className="carbon-btn carbon-btn-primary flex items-center justify-center gap-2 w-full"
              style={{ backgroundColor: '#FF832B' }}
            >
              Order More
            </Link>
            <Link
              to="/demos/cafe"
              className="carbon-btn carbon-btn-ghost flex items-center justify-center gap-2 w-full text-white/40 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a0e05] text-white font-plex">
      {/* Top Bar */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-6 lg:px-12 h-12 border-b border-white/5 bg-[#1a0e05]/95 backdrop-blur-sm">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </button>
        <h1 className="text-sm font-semibold tracking-tight">Your Order</h1>
        <span className="text-sm text-white/30 font-plex-mono">{cartCount} items</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-8">
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-white/30 mb-6">Your order is empty</p>
            <Link
              to="/demos/cafe/menu"
              className="carbon-btn carbon-btn-primary inline-flex items-center gap-2 px-8"
              style={{ backgroundColor: '#FF832B' }}
            >
              Browse Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Order Items */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Order Items</p>
              <div className="space-y-0">
                {cart.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-sm text-white/40 font-plex-mono">£{item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-0">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/60 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold font-plex-mono bg-[#FF832B]/10 text-[#FF832B]">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/60 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-plex-mono font-medium w-16 text-right">
                      £{(item.price * item.qty).toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center text-white/20 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Table Number */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Table Number</p>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                {Array.from({ length: 16 }, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => setTableNumber(String(num))}
                    className={`h-10 text-sm font-plex-mono transition-colors ${
                      tableNumber === String(num)
                        ? 'bg-[#FF832B] text-white font-semibold'
                        : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white/[0.03] border border-white/5 p-6 mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Summary</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Subtotal</span>
                  <span className="font-plex-mono">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">VAT (20%)</span>
                  <span className="font-plex-mono">£{tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/5 pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-plex-mono font-bold text-lg text-[#FF832B]">£{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={placeOrder}
              disabled={!tableNumber || cart.length === 0}
              className={`w-full h-12 text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                tableNumber && cart.length > 0
                  ? 'bg-[#FF832B] text-white hover:bg-[#e0721f] cursor-pointer'
                  : 'bg-white/5 text-white/20 cursor-not-allowed'
              }`}
            >
              {!tableNumber ? 'Select a table number' : 'Place Order'}
              {tableNumber && <ArrowRight className="w-4 h-4" />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
