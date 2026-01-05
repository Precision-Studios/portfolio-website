import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
    return (
        <Link to={`/mvp/tshirt/product/${product.id}`} className="block group">
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
            >
                {/* Product Image */}
                <div className="relative w-full h-80 bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* Product Info */}
                <div className="p-6">
                    <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                        {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            ₹{product.price.toLocaleString('en-IN')}
                        </p>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <svg className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
                </div>
            </motion.div>
        </Link>
    );
}
