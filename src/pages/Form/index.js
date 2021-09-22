import FormRegister from "../../components/FormRegister"
const Register  = ({setIsAuthenticated, setUser}) => {
    return (
        <>
            
            <FormRegister setIsAuthenticated={setIsAuthenticated} setUser = {setUser} />
        </>

    )
}
export default Register