const Input = ({ label, type = 'text', className = '', ...props }) => {
    return (
        <div className="flex flex-col mb-4">
            {label && (
                <label className="mb-2 text-sm text-ink-muted">{label}</label>
            )}
            <input
                type={type}
                className={`carbon-input ${className}`}
                {...props}
            />
        </div>
    );
};

export default Input;
