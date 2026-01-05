import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = () => {
        if (!user) {
            navigate('/mvp/tshirt/login');
            return;
        }
        setIsCheckingOut(true);
        setTimeout(() => {
            clearCart();
            setIsCheckingOut(false);
            navigate('/mvp/tshirt');
        }, 1500);
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-md"
                >
                    <div className="inline-flex p-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                        <ShoppingBag size={64} className="text-white/40" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h2>
                    <p className="text-white/60 text-lg mb-8">
                        Discover our exclusive collection and find your perfect style.
                    </p>
                    <Link to="/mvp/tshirt/browse">
                        <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all inline-flex items-center gap-2">
                            Start Shopping
                            <ArrowRight size={20} />
                        </button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-white mb-12"
                >
                    Shopping Cart
                </motion.h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <AnimatePresence mode="popLayout">
                            {cart.map((item, index) => (
                                <motion.div
                                    key={`${item.id}-${item.size}-${item.color}`}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, height: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    {/* Product Image */}
                                    <div className="w-28 h-28 bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain p-2"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="font-bold text-xl text-white mb-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-white/50">
                                                        Size: <span className="text-white/70 font-medium">{item.size}</span> • Color: <span className="text-white/70 font-medium">{item.color}</span>
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                                                    className="p-2 text-white/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                                                    disabled={item.quantity <= 1}
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus size={16} className="text-white" />
                                                </button>
                                                <span className="font-semibold text-white w-8 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus size={16} className="text-white" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <span className="font-bold text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                                ₹{(item.price * item.quantity).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="sticky top-24 p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Package className="text-indigo-400" size={24} />
                                <h3 className="text-2xl font-bold text-white">Order Summary</h3>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-white/70">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-400">Free</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>Tax</span>
                                    <span className="font-semibold">Included</span>
                                </div>
                                <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
                                    <span className="text-white font-semibold text-lg">Total</span>
                                    <span className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                        ₹{cartTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>
                            </div>

                            <motion.button
                                onClick={handleCheckout}
                                disabled={isCheckingOut}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${isCheckingOut
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30'
                                    }`}
                            >
                                {isCheckingOut ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Checkout
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </motion.button>

                            <p className="text-xs text-center text-white/40 mt-6 flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                Secure Checkout • 30-Day Returns
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
