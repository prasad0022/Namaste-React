import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    console.log(`${this.props.name} child constructor`);
  }

  componentDidMount() {
    console.log(`${this.props.name} child did mount`);
  }

  render() {
    console.log(`${this.props.name} child render`);
    const { name } = this.props;
    return (
      <div>
        <h2>{`${name} child`}</h2>
      </div>
    );
  }
}

export default User;
