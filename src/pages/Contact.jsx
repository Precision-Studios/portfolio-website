import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, Loader2, AlertCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import TopNav from '../components/marketing/TopNav';
import SiteFooter from '../components/marketing/SiteFooter';
import PortfolioShell from '../components/marketing/PortfolioShell';
import { fadeUp, fadeUpDelayed } from '../lib/motion';

export default function Contact() {
    const form = useRef();
    const [formStatus, setFormStatus] = useState('idle');

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
        <PortfolioShell>

            <TopNav
                showCta={false}
                backLink={{
                    to: '/',
                    label: 'Back to Home',
                    icon: <ArrowLeft className="w-4 h-4" />,
                }}
            />

            <div className="max-w-[1584px] mx-auto px-4 lg:px-8 py-10 sm:py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">

                    <motion.div {...fadeUp}>
                        <p className="text-sm text-primary mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary" />
                            Get in touch
                        </p>

                        <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-light tracking-tight leading-[1.1] mb-6 text-ink">
                            Let's build something<br />
                            <span className="text-ink-muted">extraordinary together.</span>
                        </h1>

                        <p className="text-body text-ink-muted font-light leading-relaxed mb-12 max-w-lg">
                            Whether you're a medical clinic in Sydney, a café in Melbourne, or a pet centre in Brisbane - we'd love to hear about your business and show you what's possible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-ink-muted mb-1">Email</p>
                                    <a href="mailto:mail@precisionstudios.tech" className="text-base font-light hover:text-primary transition-colors text-ink">
                                        mail@precisionstudios.tech
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary flex-shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-ink-muted mb-1">Location</p>
                                    <p className="text-base font-light text-ink">Australia-wide · Remote-first</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary flex-shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-ink-muted mb-1">Response time</p>
                                    <p className="text-base font-light text-ink">Within 24 hours AEST</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-hairline">
                            <p className="text-sm text-ink-muted mb-4">Quick links</p>
                            <div className="flex flex-wrap gap-3">
                                <Link to="/demos" className="text-sm text-primary hover:text-primary-hover transition-colors flex items-center gap-1">
                                    View Live Demos <ArrowRight className="w-3 h-3" />
                                </Link>
                                <Link to="/demos/cafe" className="text-sm text-primary hover:text-primary-hover transition-colors flex items-center gap-1">
                                    Café Demo <ArrowRight className="w-3 h-3" />
                                </Link>
                                <Link to="/demos/medical" className="text-sm text-primary hover:text-primary-hover transition-colors flex items-center gap-1">
                                    Medical Demo <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...fadeUpDelayed(0.08)}>
                        <div className="carbon-card p-6 sm:p-8 md:p-10">
                            <AnimatePresence mode="wait">
                                {formStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.24 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-16 h-16 bg-carbon-green-50/15 text-carbon-green-50 flex items-center justify-center mb-6">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-ink">Message sent</h3>
                                        <p className="text-sm text-ink-muted">We'll get back to you within 24 hours AEST.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        ref={form}
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.24 }}
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="mb-6">
                                            <h2 className="text-lg font-semibold tracking-tight mb-1 text-ink">Send us a message</h2>
                                            <p className="text-xs text-ink-muted">We'll respond within one business day.</p>
                                        </div>

                                        {formStatus === 'error' && (
                                            <div className="bg-carbon-red-60/10 border border-carbon-red-60/20 text-carbon-red-60 px-4 py-3 flex items-center gap-3 text-sm">
                                                <AlertCircle className="w-5 h-5" />
                                                <span>Something went wrong. Please try again or email us directly.</span>
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="user_name" className="block text-sm text-ink-muted mb-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="user_name"
                                                id="user_name"
                                                className="carbon-input"
                                                placeholder="Your full name"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="user_email" className="block text-sm text-ink-muted mb-2">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="user_email"
                                                id="user_email"
                                                className="carbon-input"
                                                placeholder="you@business.com.au"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="user_business" className="block text-sm text-ink-muted mb-2">Business name (optional)</label>
                                            <input
                                                type="text"
                                                name="user_business"
                                                id="user_business"
                                                className="carbon-input"
                                                placeholder="Your business name"
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm text-ink-muted mb-2">Message</label>
                                            <textarea
                                                required
                                                name="message"
                                                id="message"
                                                rows={4}
                                                className="carbon-input resize-none"
                                                placeholder="Tell us about your business and what you're looking for..."
                                                disabled={formStatus === 'sending'}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'sending'}
                                            className="carbon-btn carbon-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
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

            <SiteFooter />
        </PortfolioShell>
    );
}
