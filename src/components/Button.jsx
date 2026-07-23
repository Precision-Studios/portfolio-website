const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variantClass = {
        primary: 'carbon-btn-primary',
        secondary: 'carbon-btn-secondary',
        ghost: 'carbon-btn-ghost',
        danger: 'carbon-btn-danger',
    }[variant] || 'carbon-btn-primary';

    return (
        <button
            className={`carbon-btn ${variantClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
