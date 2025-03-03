import User from "./User";
import UserClass from  "./UserClass"
const About=()=>{
    return(
        <>
        <div className="About_User_div">
        <h3>Welcome to About Us page</h3><br/>
        <User name={"bilalfunction"}/>
        <UserClass name = {"billaclass"}/>
        </div>
        </>
    )
}
export default About;