import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeStart: 1,
      rangeEnd: 1
    };
  }

  startWork = () => {
    axios.post("/api/start/startWork", {
      range: this.state.rangeStart
    }).then((res) => {
    })
  };

  endWork = () => {
    axios.post("/api/end/endWork", {
      range: this.state.rangeEnd
    }).then((res) => {
    })
  };

  render() {
    return (
      <div>
        <h1 style={{ marginTop: "15px" }}>
          Welcome to Work Hours
        </h1>
        <button style={{ margin: "20px" }} onClick={this.startWork}>
          Start work
          </button>
        <button style={{ margin: "20px" }} onClick={this.endWork}>
          End work
          </button>
      </div>
    );
  }
}

export default Login;
