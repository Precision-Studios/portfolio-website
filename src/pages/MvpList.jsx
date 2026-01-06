import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, Link2, ExternalLink } from 'lucide-react';

const mvps = [
    {
        id: 'tshirt',
        title: 'Premium T-Shirt Seller',
        description: 'A high-end e-commerce experience for custom apparel with 3D-inspired showcases.',
        path: '/mvp/tshirt',
        icon: Shirt,
        color: 'from-indigo-500 to-purple-500',
        tags: ['React', 'Framer Motion', 'Tailwind']
    },
    {
        id: 'lua',
        title: 'Lua.pw',
        description: 'A powerful URL shortening service built with Spring Boot, featuring QR codes and automated expiration.',
        path: 'https://www.lua.pw/',
        icon: Link2,
        color: 'from-cyan-500 to-blue-500',
        tags: ['Spring Boot', 'PostgreSQL', 'Java 17', 'REST API'],
        isExternal: true
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
                        Our <span className="text-white/40 italic">MVPs / Projects</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        A collection of high-performance, precision-engineered craft.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {mvps.map((mvp, index) => {
                        const CardContent = (
                            <div className="relative p-6 rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-neutral-800 h-full flex flex-col">
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${mvp.color} opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />

                                <div className="relative z-10 flex-grow">
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${mvp.color} mb-8 shadow-lg`}>
                                        <mvp.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                                        {mvp.title}
                                        {mvp.isExternal ? (
                                            <ExternalLink className="w-5 h-5 opacity-40" />
                                        ) : (
                                            <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                        )}
                                    </h2>

                                    <p className="text-lg text-white/50 leading-relaxed mb-5 max-w-md">
                                        {mvp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {mvp.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/40">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white/40 group-hover:text-white transition-colors mt-auto">
                                    {mvp.isExternal ? 'Visit Website' : 'View Project'}
                                </div>
                            </div>
                        );

                        return (
                            <motion.div
                                key={mvp.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {mvp.isExternal ? (
                                    <a href={mvp.path} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                        {CardContent}
                                    </a>
                                ) : (
                                    <Link to={mvp.path} className="group block h-full">
                                        {CardContent}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
