import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "componentDidMount");
  }
  render() {
    console.log(this.props.name + "render");

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
          ADD
        </button>
        <h2>name: {this.props.name}</h2>
        <h3>location: Karchi</h3>
        <h4>contact: @bilal.mern</h4>
      </div>
    );
  }
}
export default UserClass;
