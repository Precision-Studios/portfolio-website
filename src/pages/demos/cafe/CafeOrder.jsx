import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  const gst = subtotal * 0.10; // 10% GST (Australia)
  const total = subtotal + gst;
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const placeOrder = () => {
    if (!tableNumber || cart.length === 0) return;
    setOrderNumber(`ORD-${String(Math.floor(Math.random() * 900) + 100)}`);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#FBF7F0] text-[#2C1810] flex items-center justify-center px-6" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-sm w-full"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Georgia', serif" }}>Order Placed!</h1>
          <p className="text-sm text-[#8B7355] mb-8">Your order has been sent to the kitchen.</p>

          <div className="bg-white rounded-2xl border border-[#E8DFD3] p-6 mb-8 text-left space-y-3">
            {[
              ['Order', orderNumber, 'font-semibold text-[#C17832]'],
              ['Table', tableNumber, ''],
              ['Items', `${cartCount}`, ''],
              ['Total (incl. GST)', `$${total.toFixed(2)}`, 'font-semibold'],
              ['Est. Wait', '8–12 min', 'text-green-600'],
            ].map(([label, value, cls]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="text-[#8B7355]">{label}</span>
                <span className={cls}>{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/demos/cafe/menu" className="w-full py-3 bg-[#C17832] text-white rounded-full font-semibold text-sm text-center hover:bg-[#A8622A] transition-colors">
              Order More
            </Link>
            <Link to="/demos/cafe" className="w-full py-3 text-[#8B7355] text-sm text-center hover:text-[#2C1810] transition-colors">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#2C1810]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FBF7F0]/90 backdrop-blur-md border-b border-[#E8DFD3]">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-6 h-14">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#8B7355] hover:text-[#2C1810] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Menu</span>
          </button>
          <h1 className="text-base font-semibold" style={{ fontFamily: "'Georgia', serif" }}>Your Order</h1>
          <span className="text-sm text-[#8B7355]">{cartCount} items</span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-6">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-[#8B7355] mb-6">Your order is empty</p>
            <Link to="/demos/cafe/menu" className="inline-flex items-center gap-2 px-8 py-3 bg-[#C17832] text-white rounded-full font-semibold text-sm hover:bg-[#A8622A] transition-colors">
              Browse Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <p className="text-xs uppercase tracking-widest text-[#8B7355] mb-3 font-medium">Order Items</p>
            <div className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden mb-6">
              {cart.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-4 px-5 py-4 border-b border-[#E8DFD3] last:border-b-0"
                >
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-sm text-[#8B7355]">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-0 rounded-full overflow-hidden border border-[#E8DFD3]">
                    <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center bg-[#FBF7F0] hover:bg-[#F0E8D8] text-[#8B7355] transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold bg-white text-[#C17832]">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center bg-[#FBF7F0] hover:bg-[#F0E8D8] text-[#8B7355] transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-sm font-semibold w-16 text-right" style={{ fontFamily: "'Georgia', serif" }}>${(item.price * item.qty).toFixed(2)}</span>
                  <button onClick={() => removeItem(item.id)} className="text-[#8B7355]/30 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Table */}
            <p className="text-xs uppercase tracking-widest text-[#8B7355] mb-3 font-medium">Select Your Table</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
              {Array.from({ length: 16 }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  onClick={() => setTableNumber(String(num))}
                  className={`h-11 rounded-xl text-sm font-medium transition-all ${
                    tableNumber === String(num)
                      ? 'bg-[#C17832] text-white shadow-md shadow-[#C17832]/20'
                      : 'bg-white border border-[#E8DFD3] text-[#8B7355] hover:border-[#D7A86E]'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl border border-[#E8DFD3] p-6 mb-6">
              <p className="text-xs uppercase tracking-widest text-[#8B7355] mb-4 font-medium">Summary</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm"><span className="text-[#8B7355]">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between text-sm"><span className="text-[#8B7355]">GST (10%)</span><span>${gst.toFixed(2)}</span></div>
                <div className="border-t border-[#E8DFD3] pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="text-xl font-semibold text-[#C17832]" style={{ fontFamily: "'Georgia', serif" }}>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Place Order */}
            <button
              onClick={placeOrder}
              disabled={!tableNumber || cart.length === 0}
              className={`w-full py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                tableNumber && cart.length > 0
                  ? 'bg-[#C17832] text-white hover:bg-[#A8622A] shadow-lg shadow-[#C17832]/20'
                  : 'bg-[#E8DFD3] text-[#8B7355] cursor-not-allowed'
              }`}
            >
              {!tableNumber ? 'Select a table' : 'Place Order'}
              {tableNumber && <ArrowRight className="w-4 h-4" />}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
