import { motion } from 'framer-motion';
import { Github, ArrowRight, Database, Globe, Smartphone, Code2, Cpu, BarChart3, Coffee, Zap, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    const services = [
        {
            icon: <Database className="w-8 h-8" />,
            title: "Backend Engineering",
            description: "Scalable architectures, distributed systems, and robust API development with extreme performance focus."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Web Development",
            description: "High-fidelity, performant web applications built with modern frameworks and fluid user experiences."
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Android Development",
            description: "Native and cross-platform mobile solutions designed for reliability and seamless device integration."
        }
    ];

    return (
        <div className="min-h-screen bg-[#000] text-white selection:bg-indigo-500/30">
            {/* Smooth background gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-5xl z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-8 flex justify-center"
                    >
                        <img
                            src="/precision-logo.png"
                            alt="Precision Studios"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform hover:scale-110 duration-500"
                        />
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                        Engineering <br /> Perfection.
                    </h1>

                    <p className="text-xl md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        We build high-performance backend systems, cutting-edge web applications, and flawless mobile experiences. Precision in every line of code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to="/mvp"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:pr-10"
                        >
                            <span>View Projects/Testimonials</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <a
                            href="https://github.com/Precision-Studios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                            <span>Github Architecture</span>
                        </a>
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Explore Specialties</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </section>

            {/* Specialties Section */}
            <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-white/40 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Trust Markers / Tech Stack */}
            <section className="relative z-10 py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-[0.5em] text-white/30 mb-16">The Stack We Master</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-20 grayscale hover:opacity-50 transition-all duration-700">
                        <div className="flex flex-col items-center gap-3">
                            <Coffee className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">JAVA</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Zap className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">KAFKA</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Database className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">REDIS</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Cpu className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">SPRINGBOOT</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Smartphone className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">ANDROID</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <BarChart3 className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">ANALYTICS</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <CreditCard className="w-10 h-10" />
                            <span className="text-[10px] font-medium tracking-widest">PAYMENTS</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer-ish text */}
            <footer className="relative z-10 py-20 px-6 text-center text-white/20 text-sm tracking-widest font-light">
                <div className="mb-8">
                    <Link to="/contact" className="hover:text-white transition-colors">
                        CONTACT US
                    </Link>
                </div>
                © {new Date().getFullYear()} PRECISION STUDIOS. ALL RIGHTS RESERVED.
            </footer>
        </div>
    );
}

