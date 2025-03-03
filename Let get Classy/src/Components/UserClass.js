// import React from "react"
// class UserClass extends React.Component{
//     //To pass props in class base component we have to create a constructor:
//     constructor(props){
//         super(props)

//     }
//     render(){
//         return(
//             <div className="user-card">
//             <h2>name: {this.props.name}</h2>
//             <h3>location: Karchi</h3>
//             <h4>contact: @bilal.mern</h4>
//                     </div>
//         )
//     }
// }
// export default UserClass

import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="user-card">
        <h2>name: {this.props.name}</h2>
        <h3>location: Karchi</h3>
        <h4>contact: @bilal.mern</h4>
      </div>
    );
  }
}
export default UserClass