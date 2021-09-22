import { useHistory } from "react-router-dom"
import { Button } from '@material-ui/core';
import { HomeStyle } from "./style"

const HomeProfile = ({isAuthenticated, state }) => {
    const history = useHistory()

    if(!isAuthenticated) {
        history.push("/")
    }

    const backToRegister = () => {
        history.push("/")
    }

    return (
        <HomeStyle>
            <h1>Boas vindas, {state.name}</h1>
            <Button type="submit"
                    variant = "contained"
                    size = "large" 
                    onClick={backToRegister}>Voltar</Button>
        </HomeStyle>
)

}

export default HomeProfile