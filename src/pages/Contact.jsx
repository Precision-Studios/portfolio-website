import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, Loader2, AlertCircle, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

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
        <div className="min-h-screen bg-carbon-gray-100 text-white font-plex selection:bg-carbon-blue-60/30">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 h-12 bg-carbon-gray-100 border-b border-white/5">
                <div className="max-w-[1584px] mx-auto h-full flex items-center justify-between px-4 lg:px-8">
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/precision-logo.png" alt="Precision Studios" className="w-7 h-7 object-contain" />
                            <span className="text-sm font-semibold tracking-tight">Precision Studios</span>
                        </Link>
                    </div>
                    <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </nav>

            <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left — Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.4, 0.14, 0.3, 1] }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-carbon-blue-60 mb-4 font-medium flex items-center gap-2">
                            <span className="w-8 h-px bg-carbon-blue-60" />
                            Get in Touch
                        </p>

                        <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-light tracking-tight leading-[1.1] mb-6">
                            Let's build something<br />
                            <span className="text-white/30">extraordinary together.</span>
                        </h1>

                        <p className="text-base text-white/40 font-light leading-relaxed mb-12 max-w-lg">
                            Whether you're a medical clinic in Sydney, a café in Melbourne, or a pet centre in Brisbane — we'd love to hear about your business and show you what's possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 flex items-center justify-center bg-carbon-blue-60/8 text-carbon-blue-50 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Email</p>
                                    <a href="mailto:mail@precisionstudios.tech" className="text-base font-light hover:text-carbon-blue-50 transition-colors">
                                        mail@precisionstudios.tech
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 flex items-center justify-center bg-carbon-blue-60/8 text-carbon-blue-50 flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Location</p>
                                    <p className="text-base font-light">Australia-wide · Remote-first</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 flex items-center justify-center bg-carbon-blue-60/8 text-carbon-blue-50 flex-shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-white/30 mb-1">Response Time</p>
                                    <p className="text-base font-light">Within 24 hours AEST</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-xs uppercase tracking-wider text-white/20 mb-4">Quick Links</p>
                            <div className="flex flex-wrap gap-3">
                                <Link to="/demos" className="text-sm text-carbon-blue-60 hover:text-carbon-blue-40 transition-colors flex items-center gap-1">
                                    View Live Demos <ArrowRight className="w-3 h-3" />
                                </Link>
                                <Link to="/demos/cafe" className="text-sm text-carbon-blue-60 hover:text-carbon-blue-40 transition-colors flex items-center gap-1">
                                    Café Demo <ArrowRight className="w-3 h-3" />
                                </Link>
                                <Link to="/demos/medical" className="text-sm text-carbon-blue-60 hover:text-carbon-blue-40 transition-colors flex items-center gap-1">
                                    Medical Demo <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0.14, 0.3, 1] }}
                    >
                        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10">
                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-16 h-16 bg-carbon-green-50/15 text-carbon-green-50 flex items-center justify-center mb-6">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">Message Sent</h3>
                                        <p className="text-sm text-white/40">We'll get back to you within 24 hours AEST.</p>
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
                                        <div className="mb-6">
                                            <h2 className="text-lg font-semibold tracking-tight mb-1">Send us a message</h2>
                                            <p className="text-xs text-white/30">We'll respond within one business day.</p>
                                        </div>

                                        {formStatus === 'error' && (
                                            <div className="bg-carbon-red-60/10 border border-carbon-red-60/20 text-carbon-red-50 px-4 py-3 flex items-center gap-3 text-sm">
                                                <AlertCircle className="w-5 h-5" />
                                                <span>Something went wrong. Please try again or email us directly.</span>
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="user_name" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="user_name"
                                                id="user_name"
                                                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-carbon-blue-60/50 transition-colors"
                                                placeholder="Your full name"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="user_email" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="user_email"
                                                id="user_email"
                                                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-carbon-blue-60/50 transition-colors"
                                                placeholder="you@business.com.au"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="user_business" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Business Name (Optional)</label>
                                            <input
                                                type="text"
                                                name="user_business"
                                                id="user_business"
                                                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-carbon-blue-60/50 transition-colors"
                                                placeholder="Your business name"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-2 uppercase tracking-wider">Message</label>
                                            <textarea
                                                required
                                                name="message"
                                                id="message"
                                                rows={4}
                                                className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-carbon-blue-60/50 transition-colors resize-none"
                                                placeholder="Tell us about your business and what you're looking for..."
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'sending'}
                                            className="w-full h-12 bg-carbon-blue-60 text-white text-sm font-medium hover:bg-carbon-blue-70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {formStatus === 'sending' ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/5 py-8 px-4 lg:px-8">
                <div className="max-w-[1584px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/15 tracking-wider">
                        © {new Date().getFullYear()} Precision Studios. All rights reserved. ABN: 89 198 004 110
                    </p>
                    <p className="text-xs text-white/15 tracking-wider flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        Australia-wide
                    </p>
                </div>
            </footer>
        </div>
    );
}
