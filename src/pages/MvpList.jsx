import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, Link2, ExternalLink } from 'lucide-react';
import TopNav from '../components/marketing/TopNav';
import SiteFooter from '../components/marketing/SiteFooter';
import PortfolioShell from '../components/marketing/PortfolioShell';
import { fadeUp, staggerTransition, viewportOnce } from '../lib/motion';

const mvps = [
    {
        id: 'tshirt',
        title: 'Premium T-Shirt Seller',
        description: 'A high-end e-commerce experience for custom apparel with 3D-inspired showcases.',
        path: '/mvp/tshirt',
        icon: Shirt,
        tags: ['React', 'Framer Motion', 'Tailwind']
    },
    {
        id: 'lua',
        title: 'Lua.pw',
        description: 'A powerful URL shortening service built with Spring Boot, featuring QR codes and automated expiration.',
        path: 'https://www.lua.pw/',
        icon: Link2,
        tags: ['Spring Boot', 'PostgreSQL', 'Java 17', 'REST API'],
        isExternal: true
    }
];

export default function MvpList() {
    return (
        <PortfolioShell>
            <TopNav />

            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-24">
                <motion.div {...fadeUp} className="mb-16">
                    <p className="text-sm text-primary mb-4">Projects</p>
                    <h1 className="text-display-lg font-light tracking-tight mb-6 text-ink">
                        Our <span className="text-ink-muted">MVPs & projects</span>
                    </h1>
                    <p className="text-body-lg text-ink-muted max-w-2xl">
                        A collection of high-performance, precision-engineered craft.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
                    {mvps.map((mvp, index) => {
                        const CardContent = (
                            <div className="p-8 bg-canvas hover:bg-surface-1 transition-colors h-full flex flex-col group">
                                <div className="w-10 h-10 flex items-center justify-center bg-primary/8 text-primary mb-6">
                                    <mvp.icon className="w-5 h-5" />
                                </div>

                                <h2 className="text-card-title font-normal tracking-tight mb-2 flex items-center gap-2 text-ink">
                                    {mvp.title}
                                    {mvp.isExternal ? (
                                        <ExternalLink className="w-4 h-4 text-ink-subtle" />
                                    ) : (
                                        <ArrowRight className="w-4 h-4 text-ink-subtle opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                    )}
                                </h2>

                                <p className="text-body-sm text-ink-muted leading-relaxed mb-5 flex-grow">
                                    {mvp.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {mvp.tags.map(tag => (
                                        <span key={tag} className="text-caption px-2 py-0.5 bg-surface-1 text-ink-muted font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <span className="text-sm font-medium text-ink-muted group-hover:text-primary transition-colors">
                                    {mvp.isExternal ? 'Visit website' : 'View project'}
                                </span>
                            </div>
                        );

                        return (
                            <motion.div
                                key={mvp.id}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportOnce}
                                {...staggerTransition(index)}
                            >
                                {mvp.isExternal ? (
                                    <a href={mvp.path} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        {CardContent}
                                    </a>
                                ) : (
                                    <Link to={mvp.path} className="block h-full">
                                        {CardContent}
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <SiteFooter />
        </PortfolioShell>
    );
}
