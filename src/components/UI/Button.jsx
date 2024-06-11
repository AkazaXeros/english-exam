const Button = ({
  label,
  type = 'button',
  handlerFunction,
  className = '',
}) => {
  return (
    <button onClick={handlerFunction} type={type} className={className}>
      {label}
    </button>
  );
};
export default Button;
