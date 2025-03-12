//Class base component Lifecycle:

// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log(this.props.name + "child constructor");
//   }

//   componentDidMount() {
//     console.log(this.props.name + "componentDidMount");
//   }
//   render() {
//     console.log(this.props.name + "render");

//     return (
//       <div className="user-card">
//         <h2>Count: {this.state.count}</h2>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           ADD
//         </button>
//         <h2>name: {this.props.name}</h2>
//         <h3>location: Karchi</h3>
//         <h4>contact: @bilal.mern</h4>
//       </div>
//     );
//   }
// }
// export default UserClass;

// //!API Call in Class base component:

// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {
//         name: "",
//         id: "",
//       },
//     };
//   }

//   async componentDidMount() {
//     const data = await fetch("https://api.github.com/users/BILALMERN");
//     const json = await data.json();
//     this.setState({
//       userInfo: json,
//     });
//   }
//   render() {
//     return (
//       <div className="user-card">
//         <h2>name: {this.state.userInfo.name}</h2>
//         <h3>location: Karchi</h3>
//         <h4>contact: @bilal.mern</h4>
//         <h6>Id: {this.state.userInfo.id}</h6>
//       </div>
//     );
//   }
// }
// export default UserClass;

//!API Call in Class base component:

// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <div className="user-card">
//         <h3>location: Karchi</h3>
//         <h4>contact: @bilal.mern</h4>
//       </div>
//     );
//   }
// }
// export default UserClass;

// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       userInfo: {
//         name: "",
//         id: "",
//       },
//     };
//   }
//   async componentDidMount() {
//     const data = await fetch(" https://api.github.com/users/BilalMern");
//     const json = await data.json();
//     this.setState({
//       userInfo: json,
//     })
//   }

//   render() {
//     return (
//       <div className="user-card">
//         <h2>Count: {this.state.count}</h2>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Add Count
//         </button>
//         <h2>Name:{this.state.userInfo.name}</h2>
//         <h2>name: {this.props.name}</h2>
//         <h3>location: "Karchi"</h3>
//         <h4>contact: @bilal.mern</h4>
//       </div>
//     );
//   }
// }
// export default UserClass;




import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "malik",
        id: "123",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/BilalMern");
    const json = await data.json();
    console.log(json)
    
    this.setState({
      userInfo: json,
    })
  }

componentDidUpdate(){  //just like we have componentDidMount, we have componentDidUpdate method which will be called after componentDidMount method and it comes under Updating cycle.
  console.log("componentDidUpdate")
}

componentWillUnmount(){  //just like we have componentDidMount, we have componentDidUpdate method which will be called after we navigate from that page where it is called.
  console.log("componentWillUnmount")
}

// After first render componentDidMount will be called and here mounted section completed, and after every subsiquent render compoenentWillMount will be called.

  render() {
    const {name,id}= this.state.userInfo
    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add Count
        </button>
        <h2>Name:{name}</h2>
         <h3>Id:{id}</h3>
        <h2>name: {this.props.name}</h2>
        <h3>location: "Karchi"</h3>
        <h4>contact: @bilal.mern</h4>
      </div>
    );
  }
}
export default UserClass;
