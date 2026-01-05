import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Landing() {
    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

    return (
        <div className="relative">
            {/* Hero Section */}
            <motion.section
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-dark.png"
                        alt="Premium T-Shirt"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black"></div>
                </div>

                {/* Animated Grid Overlay */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="h-full w-full" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                        backgroundSize: '100px 100px'
                    }}></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                            <Sparkles className="w-4 h-4 text-indigo-400" />
                            <span className="text-sm font-medium text-white/90">New Collection Available</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 tracking-tight"
                    >
                        <span className="block text-white">Redefine</span>
                        <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Your Style
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Premium craftsmanship meets contemporary design.
                        Experience the perfect blend of comfort and sophistication.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/mvp/tshirt/browse"
                            className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Collection
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all">
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-2 bg-white/70 rounded-full mx-auto"
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Engineered for{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Excellence
                            </span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            Every detail meticulously crafted to deliver unparalleled quality
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Premium Quality',
                                description: 'Crafted from the finest materials for lasting comfort and durability'
                            },
                            {
                                icon: Sparkles,
                                title: 'Unique Designs',
                                description: 'Exclusive patterns that set you apart from the crowd'
                            },
                            {
                                icon: Zap,
                                title: 'Fast Delivery',
                                description: 'Get your order delivered swiftly, right to your doorstep'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                            >
                                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <feature.icon className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-white/60 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Featured{' '}
                            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Collection
                            </span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl">
                            Handpicked pieces that define modern elegance
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.slice(0, 4).map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <Link
                            to="/mvp/tshirt/browse"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transition-all"
                        >
                            View All Products
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
                <div className="absolute inset-0 backdrop-blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Ready to elevate your wardrobe?
                    </h2>
                    <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who've already transformed their style
                    </p>
                    <Link
                        to="/mvp/tshirt/signup"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-white/30 transition-all"
                    >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
