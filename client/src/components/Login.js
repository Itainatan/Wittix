import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rnageStart: 1,
      rangeEnd: 1
    };
  }

  startWorke = () => {
    axios.post("/api/start/startWork", {
      range: this.state.rnageStart
    }).then((res) => {
      if (res.status === 200) {
      }
    })
  };

  endWork = () => {
    axios.post("/api/end/endWork", {
      range: this.state.rnageStart
    }).then((res) => {
      if (res.status === 200) {
      }
    })
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3 col-sm-12">
        <h1 style={{ marginTop: "15px" }} className="text-center">
          Welcome to Work Hours
        </h1>
        <button style={{ margin: "20px" }} onClick={this.startWorke}>
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
