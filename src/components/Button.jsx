const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseClass = 'px-6 py-3 rounded-lg font-semibold transition-colors';
    const variantClass = variant === 'primary'
        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
        : 'border-2 border-slate-300 text-slate-700 hover:bg-slate-50';

    return (
        <button
            className={`${baseClass} ${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
