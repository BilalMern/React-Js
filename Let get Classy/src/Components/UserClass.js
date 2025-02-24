import React from "react"
class UserClass extends React.Component{
    //To pass props in class base component we have to create a constructor 
    render(){
        return(
            <div className="user-card">
            <h2>name: Bilal</h2>
            <h3>location: Karchi</h3>
            <h4>contact: @bilal.mern</h4>
                    </div>
        )
    }
}
export default UserClass


