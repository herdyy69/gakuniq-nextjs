const Input = ({
    disabled = false,
    type = '',
    values = '',
    placeholder = '',
    className,
    ...props
}) => (
    <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
