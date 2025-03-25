function Input(props) {
  const { type, name, onChange, value, placeholder, className } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`h-11 rounded-xl outline outline-gray-500 text-white px-3 ${className}`}
      />
    </>
  );
}

export default Input;
