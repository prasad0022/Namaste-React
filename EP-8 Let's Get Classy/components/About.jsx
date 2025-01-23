import React from "react";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "About",
    };

    console.log("Parent contructor");
  }

  componentDidMount() {
    console.log("Parent did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>{this.state.heading} Us</h1>
        <User name="First" />
      </div>
    );
  }
}

export default About;
