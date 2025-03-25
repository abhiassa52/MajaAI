function Button(props) {
  const { children, onClick, className } = props;
  return (
    <>
      <button onClick={onClick} className={`min-h-11 ${className}`}>
        {children}
      </button>
    </>
  );
}

export default Button;
