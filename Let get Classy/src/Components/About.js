import User from "./User";
import UserClass from  "./UserClass"
const About=()=>{
    return(
        <>
        <div className="About_User_div">
        <h3>Welcome to About Us page</h3><br/>
        <User props={"bilal"}/>
        <UserClass/>
        </div>
        </>
    )
}
export default About;