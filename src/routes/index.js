import { Switch, Route } from "react-router-dom"
import Register from "../pages/Form"
import Profile from "../pages/Profile"
import {useState} from "react"
const Routes = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [ user, setUser ] = useState({}) 
    
    const userAuthenticated = () => {
        setIsAuthenticated(false)
    }


    return(
     <Switch>
         <Route exact path = "/">
                <Register setIsAuthenticated = {setIsAuthenticated} setUser = {setUser}/>
         </Route>

         <Route path = "/profile" >
                <Profile  isAuthenticated = {isAuthenticated} state = {user}/> 
         </Route>
     </Switch>
    )
}

export default Routes