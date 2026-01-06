import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // TODO: Replace with your actual EmailJS credentials
        // You can get these from https://dashboard.emailjs.com/admin
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setFormStatus('success');
                setTimeout(() => {
                    setFormStatus('idle');
                    e.target.reset();
                }, 5000);
            }, (error) => {
                console.log(error.text);
                setFormStatus('error');
                setTimeout(() => setFormStatus('idle'), 5000);
            });
    };

    return (
        <div className="min-h-screen bg-[#000] text-white selection:bg-indigo-500/30">
            {/* Smooth background gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 px-6 pt-12 pb-20 max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-16 group"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    <span>Back to Home</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            Let's Build <br /> Something <br /> Extraordinary.
                        </h1>
                        <p className="text-xl text-white/50 max-w-xl font-light leading-relaxed mb-12">
                            Have a project in mind? We'd love to hear from you. Reach out to us and let's discuss how we can bring your vision to life with precision engineering.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/80 group-hover:bg-white/10 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                                    <a href="mailto:mail@precisionstudios.tech" className="text-2xl font-light hover:text-indigo-400 transition-colors">
                                        mail@precisionstudios.tech
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-3xl" />
                        <div className="relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm overflow-hidden">
                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col items-center justify-center h-full py-12 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-white/50">We'll get back to you as soon as possible.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        ref={form}
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        {formStatus === 'error' && (
                                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl flex items-center gap-3 text-sm">
                                                <AlertCircle className="w-5 h-5" />
                                                <span>Something went wrong. Please try again or email us directly.</span>
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="user_name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="user_name"
                                                id="user_name"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                                                placeholder="John Doe"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="user_email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="user_email"
                                                id="user_email"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                                                placeholder="john@example.com"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                                            <textarea
                                                required
                                                name="message"
                                                id="message"
                                                rows={4}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"
                                                placeholder="Tell us about your project..."
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'sending'}
                                            className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {formStatus === 'sending' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <span>Send Message</span>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
