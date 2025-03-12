//Class base component Lifecycle:

// import UserClass from  "./UserClass"

// import React from "react";

// class About extends React.Component{
//     constructor(props){
//         super(props)
//         console.log("parent constructor")
//     }

// componentDidMount(){
//     console.log("parent componentDidMount")
// }

// render(){
// console.log("parent render")
//     return(
// <>
//         <div className="About_User_div">
//         <h3>Welcome to About Us page</h3><br/>
//         <UserClass name={"FirstChild"}/>
//         <UserClass name={"SecondChild"}/>

//         </div>
//         </>
//     )

// }
// }
// export default About;




//!API Call in Class base component:

import UserClass from "./UserClass";

import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    
    return (
      <>
        <div className="About_User_div">
          <h3>Welcome to About Us page</h3>
          <br />
          <UserClass name={"bilalClass"} />
        </div>
      </>
    );
  }
}
export default About;
