import HomeProfile from "../../components/HomeProfile"
const Profile = ({isAuthenticated, state}) => {

    return (
        <>
            <HomeProfile isAuthenticated = {isAuthenticated} state = {state}/>
        </>
    )



}
export default Profile 