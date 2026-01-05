import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shirt } from 'lucide-react';

const mvps = [
    {
        id: 'tshirt',
        title: 'Premium T-Shirt Seller',
        description: 'A high-end e-commerce experience for custom apparel with 3D-inspired showcases.',
        path: '/mvp/tshirt',
        icon: Shirt,
        color: 'from-indigo-500 to-purple-500'
    }
];

export default function MvpList() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Our <span className="text-white/40 italic">MVPs</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        A collection of high-performance, precision-engineered minimum viable products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mvps.map((mvp, index) => (
                        <motion.div
                            key={mvp.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link to={mvp.path} className="group block">
                                <div className="relative p-10 rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-neutral-800">
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${mvp.color} opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />

                                    <div className="relative z-10">
                                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${mvp.color} mb-8 shadow-lg`}>
                                            <mvp.icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                            {mvp.title}
                                            <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        </h2>

                                        <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-md">
                                            {mvp.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white/40 group-hover:text-white transition-colors">
                                            View Project
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
