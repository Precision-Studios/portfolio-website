import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    <Link to="/mvp/tshirt" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
                        PRECISION<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">.MVP</span>
                    </Link>

                    <div className="flex items-center gap-8">
                        <Link to="/mvp/tshirt" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link to="/mvp/tshirt/browse" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            Shop
                        </Link>

                        {user ? (
                            <button onClick={logout} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                                Logout
                            </button>
                        ) : (
                            <Link to="/mvp/tshirt/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                                Login
                            </Link>
                        )}

                        <Link to="/mvp/tshirt/cart" className="relative group">
                            <ShoppingBag size={22} className="text-white/70 group-hover:text-white transition-colors" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] rounded-full flex items-center justify-center font-semibold">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
