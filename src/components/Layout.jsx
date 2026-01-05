import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}
