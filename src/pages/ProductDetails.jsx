import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Black');
    const [addedToCart, setAddedToCart] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Product not found</h2>
                    <button
                        onClick={() => navigate('/mvp/tshirt/browse')}
                        className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-all"
                    >
                        Back to Shop
                    </button>
                </div>
            </div>
        );
    }

    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Black', 'White', 'Navy'];

    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-12 transition-colors group"
                aria-label="Go back to previous page"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back</span>
            </motion.button>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 p-12 flex items-center justify-center group"
                >
                    {/* Gradient Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <img
                        src={product.image}
                        alt={product.title}
                        className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>

                {/* Details Side */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Category */}
                        <span className="inline-block text-indigo-400 font-semibold tracking-widest uppercase text-xs">
                            {product.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            {product.title}
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-white/60 leading-relaxed">
                            {product.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                ₹{product.price.toLocaleString('en-IN')}
                            </span>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <label className="block text-white font-semibold mb-4" id="size-label">
                                Select Size
                            </label>
                            <div className="flex gap-3" role="group" aria-labelledby="size-label">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center font-semibold transition-all duration-300 ${selectedSize === size
                                            ? 'border-indigo-500 bg-indigo-500/20 text-white scale-110 shadow-lg shadow-indigo-500/30'
                                            : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white/80 hover:bg-white/5'
                                            }`}
                                        aria-pressed={selectedSize === size}
                                        aria-label={`Size ${size}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selector */}
                        <div>
                            <label className="block text-white font-semibold mb-4" id="color-label">
                                Select Color
                            </label>
                            <div className="flex gap-3" role="group" aria-labelledby="color-label">
                                {colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`px-6 py-3 rounded-xl border-2 flex items-center justify-center font-semibold transition-all duration-300 ${selectedColor === color
                                            ? 'border-indigo-500 bg-indigo-500/20 text-white shadow-lg shadow-indigo-500/30'
                                            : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white/80 hover:bg-white/5'
                                            }`}
                                        aria-pressed={selectedColor === color}
                                        aria-label={`Color ${color}`}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <motion.button
                            onClick={handleAddToCart}
                            whileTap={{ scale: 0.98 }}
                            disabled={addedToCart}
                            className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${addedToCart
                                ? 'bg-green-500 hover:bg-green-600 text-white'
                                : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30'
                                }`}
                            aria-label={addedToCart ? 'Added to cart' : 'Add to cart'}
                        >
                            {addedToCart ? (
                                <>
                                    <Check size={24} strokeWidth={3} />
                                    <span>Added to Cart</span>
                                </>
                            ) : (
                                <>
                                    <ShoppingBag size={24} />
                                    <span>Add to Cart</span>
                                </>
                            )}
                        </motion.button>

                        {/* Additional Info */}
                        <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center">
                            <div>
                                <p className="text-white/50 text-sm mb-1">Free Shipping</p>
                                <p className="text-white font-semibold">Orders over ₹2000</p>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Easy Returns</p>
                                <p className="text-white font-semibold">30-Day Policy</p>
                            </div>
                            <div>
                                <p className="text-white/50 text-sm mb-1">Warranty</p>
                                <p className="text-white font-semibold">1 Year</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
