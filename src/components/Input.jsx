function Input(props) {
  const { type, name, onChange, value, ref, placeholder, className } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        ref={ref}
        placeholder={placeholder}
        className={`bg-gray-50 h-11 rounded-xl outline outline-gray-400 text-slate-950 px-3 focus:outline-4 ${className}`}
      />
    </>
  );
}

export default Input;
