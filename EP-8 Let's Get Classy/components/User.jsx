import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };

    console.log(`${this.props.name} child constructor`);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/prasad0022");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    console.log(`${this.props.name} child did mount`);
  }

  componentDidUpdate() {
    console.log(`${this.props.name} child did update`);
  }

  componentWillUnmount() {
    console.log(`${this.props.name} child will unmount`);
  }

  render() {
    console.log(`${this.props.name} child render`);
    return (
      <div>
        {this.state.userInfo === null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h2>Location : {this.state.userInfo.location}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default User;
