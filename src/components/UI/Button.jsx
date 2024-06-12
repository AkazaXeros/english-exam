const Button = ({
  label,
  type = 'button',
  handlerFunction,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={handlerFunction}
      type={type}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default Button;
