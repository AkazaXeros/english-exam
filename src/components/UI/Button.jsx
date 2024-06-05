const Button = ({label, type, handlerFunction}) => {
  return (
      <button onClick={handlerFunction} type={type}>{ label }</button>
  )
}
export default Button