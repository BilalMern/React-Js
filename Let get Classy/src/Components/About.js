
import UserClass from  "./UserClass"

import React from "react";

class About extends React.Component{
render(){
    return(
<>
        <div className="About_User_div">
        <h3>Welcome to About Us page</h3><br/>
        <UserClass name={"bilalClass"}/>
        </div>
        </>
    )
}
}
export default About;