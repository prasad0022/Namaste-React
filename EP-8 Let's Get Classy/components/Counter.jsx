import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;

    const handlePlus = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    const handleMinus = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };

    return (
      <div className="counter-container">
        <h1>{count}</h1>
        <div className="ops">
          <button onClick={handleMinus}>➖</button>
          <button onClick={handlePlus}>➕</button>
        </div>
      </div>
    );
  }
}

export default Counter;
