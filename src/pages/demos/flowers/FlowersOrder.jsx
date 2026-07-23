import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Trash2,
  Plus,
  Minus,
  CheckCircle,
  ArrowRight,
  Truck,
  MapPin,
  Calendar,
  Clock,
  Gift,
  ShoppingBag,
} from 'lucide-react';
import { floristInfo, deliverySlots, floristStats } from '../../../data/flowersData';

const CREAM = '#FDFBF7';
const BLUSH = '#F2D4D0';
const FOREST = '#2D4A3E';
const SAGE = '#7A9E7E';

export default function FlowersOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCart = location.state?.cart || [];
  const [cart, setCart] = useState(initialCart);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = subtotal >= floristStats.freeDeliveryThreshold ? 0 : floristStats.deliveryFee;
  const total = subtotal + deliveryFee;
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const selectedDateObj = deliverySlots.find(d => d.date === selectedDate);
  const availableSlots = selectedDateObj?.slots.filter(s => s.available) || [];

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedSlot('');
  };

  const canPlaceOrder =
    cart.length > 0 && selectedDate && selectedSlot && recipientName.trim() && deliveryAddress.trim();

  const placeOrder = () => {
    if (!canPlaceOrder) return;
    setOrderNumber(`FLR-${String(Math.floor(Math.random() * 9000) + 1000)}`);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    const slotLabel = selectedDateObj?.slots.find(s => s.id === selectedSlot)?.time;
    return (
      <div
        className="demo-page min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-x-hidden"
        style={{ backgroundColor: CREAM, color: FOREST, fontFamily: "'Jost', sans-serif" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-sm w-full"
        >
          <div
            className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: `${BLUSH}` }}
          >
            <CheckCircle className="w-10 h-10" style={{ color: FOREST }} />
          </div>
          <h1
            className="text-2xl font-light mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Order Confirmed
          </h1>
          <p className="text-sm mb-8" style={{ color: SAGE }}>
            Your arrangement is being prepared with care.
          </p>

          <div className="border p-6 mb-8 text-left space-y-3" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
            {[
              ['Order', orderNumber, 'font-medium'],
              ['Recipient', recipientName, ''],
              ['Delivery', `${selectedDateObj?.label}, ${slotLabel}`, ''],
              ['Address', deliveryAddress, 'text-sm'],
              ['Items', `${cartCount}`, ''],
              ['Total', `$${total.toFixed(2)}`, 'font-medium'],
            ].map(([label, value, cls]) => (
              <div key={label} className="flex justify-between text-sm gap-4">
                <span style={{ color: SAGE }}>{label}</span>
                <span className={`text-right ${cls}`}>{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/demos/flowers/catalog"
              className="w-full py-3 text-sm font-medium text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: FOREST, color: CREAM }}
            >
              Continue Shopping
            </Link>
            <Link
              to="/demos/flowers"
              className="w-full py-3 text-sm text-center transition-colors hover:opacity-70"
              style={{ color: SAGE }}
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="demo-page min-h-screen overflow-x-hidden"
      style={{ backgroundColor: CREAM, color: FOREST, fontFamily: "'Jost', sans-serif" }}
    >
      <nav
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{ backgroundColor: `${CREAM}e6`, borderColor: BLUSH }}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 min-w-0 gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm transition-colors shrink-0"
            style={{ color: SAGE }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalog</span>
          </button>
          <h1
            className="text-sm sm:text-base tracking-wide min-w-0 truncate"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Checkout
          </h1>
          <span className="text-sm shrink-0" style={{ color: SAGE }}>
            {cartCount} items
          </span>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <Truck className="w-12 h-12 mx-auto mb-6 opacity-30" />
            <p className="text-lg mb-6" style={{ color: SAGE }}>
              Your cart is empty
            </p>
            <Link
              to="/demos/flowers/catalog"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: FOREST, color: CREAM }}
            >
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-4 h-4" style={{ color: SAGE }} />
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: SAGE }}>
                Your Selection
              </p>
            </div>
            <div className="border mb-8 overflow-hidden" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
              {cart.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-4 px-5 py-4 border-b last:border-b-0"
                  style={{ borderColor: BLUSH }}
                >
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-sm" style={{ color: SAGE }}>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center border" style={{ borderColor: BLUSH }}>
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center transition-colors hover:opacity-70"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center transition-colors hover:opacity-70"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span
                    className="text-sm font-light w-16 text-right"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="opacity-30 hover:opacity-100 hover:text-red-500 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Delivery date */}
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4" style={{ color: SAGE }} />
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: SAGE }}>
                Delivery Date
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {deliverySlots.map(day => (
                <button
                  key={day.date}
                  onClick={() => handleDateSelect(day.date)}
                  className="py-3 px-2 text-center border transition-all"
                  style={{
                    borderColor: selectedDate === day.date ? FOREST : BLUSH,
                    backgroundColor: selectedDate === day.date ? FOREST : 'white',
                    color: selectedDate === day.date ? CREAM : FOREST,
                  }}
                >
                  <p className="text-[10px] uppercase tracking-wider opacity-70">{day.day}</p>
                  <p className="text-sm font-medium">{day.label}</p>
                </button>
              ))}
            </div>

            {/* Time slot */}
            {selectedDate && (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4" style={{ color: SAGE }} />
                  <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: SAGE }}>
                    Time Slot
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {availableSlots.map(slot => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot.id)}
                      className="py-3 text-sm border transition-all"
                      style={{
                        borderColor: selectedSlot === slot.id ? FOREST : BLUSH,
                        backgroundColor: selectedSlot === slot.id ? FOREST : 'white',
                        color: selectedSlot === slot.id ? CREAM : FOREST,
                      }}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Recipient details */}
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4" style={{ color: SAGE }} />
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: SAGE }}>
                Delivery Details
              </p>
            </div>
            <div className="space-y-3 mb-8">
              <input
                type="text"
                placeholder="Recipient name"
                value={recipientName}
                onChange={e => setRecipientName(e.target.value)}
                className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-opacity-100"
                style={{ borderColor: BLUSH, backgroundColor: 'white' }}
              />
              <input
                type="text"
                placeholder="Delivery address"
                value={deliveryAddress}
                onChange={e => setDeliveryAddress(e.target.value)}
                className="w-full px-4 py-3 text-sm border outline-none transition-colors"
                style={{ borderColor: BLUSH, backgroundColor: 'white' }}
              />
            </div>

            {/* Gift message */}
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-4 h-4" style={{ color: SAGE }} />
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: SAGE }}>
                Gift Message (optional)
              </p>
            </div>
            <textarea
              placeholder="Add a handwritten note..."
              value={giftMessage}
              onChange={e => setGiftMessage(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 text-sm border outline-none resize-none mb-8"
              style={{ borderColor: BLUSH, backgroundColor: 'white' }}
            />

            {/* Summary */}
            <div className="border p-6 mb-6" style={{ borderColor: BLUSH, backgroundColor: 'white' }}>
              <p className="text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: SAGE }}>
                Order Summary
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span style={{ color: SAGE }}>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: SAGE }}>
                    Delivery
                    {deliveryFee === 0 && (
                      <span className="ml-1 text-xs" style={{ color: FOREST }}>
                        (Free over ${floristStats.freeDeliveryThreshold})
                      </span>
                    )}
                  </span>
                  <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="border-t pt-3 flex justify-between" style={{ borderColor: BLUSH }}>
                  <span className="font-medium">Total</span>
                  <span
                    className="text-xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={placeOrder}
              disabled={!canPlaceOrder}
              className="w-full py-4 text-sm font-medium flex items-center justify-center gap-2 transition-all"
              style={{
                backgroundColor: canPlaceOrder ? FOREST : BLUSH,
                color: canPlaceOrder ? CREAM : SAGE,
                cursor: canPlaceOrder ? 'pointer' : 'not-allowed',
              }}
            >
              {!selectedDate
                ? 'Select a delivery date'
                : !selectedSlot
                  ? 'Select a time slot'
                  : !recipientName.trim()
                    ? 'Enter recipient name'
                    : !deliveryAddress.trim()
                      ? 'Enter delivery address'
                      : 'Place Order'}
              {canPlaceOrder && <ArrowRight className="w-4 h-4" />}
            </button>

            <p className="text-center text-xs mt-4" style={{ color: SAGE }}>
              {floristInfo.deliveryRadius} delivery radius · {floristInfo.hours}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
