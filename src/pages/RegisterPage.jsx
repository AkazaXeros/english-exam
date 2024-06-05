import Register from "../components/Forms/Register"

const RegisterPage = ({saveUser}) => {
  return (
    <Register userHandler={saveUser} />
  )
}
export default RegisterPage