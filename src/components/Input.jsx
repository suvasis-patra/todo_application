import React from "react";

const Input = React.forwardRef(function Input(
  { type, className, label, value, placeholder, name, ...rest },
  ref
) {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block mb-3 font-semibold capitalize">
        {label}:
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={label}
        placeholder={placeholder}
        className={`p-4 border-2 rounded-lg w-full border-gray-500 focus:outline-none ${className}`}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

export default Input;
