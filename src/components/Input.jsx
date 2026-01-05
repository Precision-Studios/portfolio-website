const Input = ({ label, type = "text", ...props }) => {
    return (
        <div className="flex flex-col mb-4">
            {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                {...props}
            />
        </div>
    );
};

export default Input;
