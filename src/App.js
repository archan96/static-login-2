import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      logIn: false,
      name: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  emailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleLogin = () => {
    this.state.name.length > 1 &&
      this.state.email.length > 1 &&
      this.setState({ logIn: true });

    this.state.name.length <= 1 && window.alert("type a larger name!");
    this.state.name.email <= 1 && window.alert("type a larger email!");
  };
  render() {
    return (
      <>
        <div className="container">
          {!this.state.logIn && (
            <div className="LoginSec">
              <input
                type="text"
                placeholder="Enter your name"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <input
                type="text"
                placeholder="Enter your Email ID"
                onChange={this.emailChange}
                value={this.state.email}
              />

              <div className="btn" onClick={this.handleLogin}>
                <p>LOG IN</p>
              </div>
            </div>
          )}

          {this.state.logIn && (
            <div className="LoginSec log">
              <p>{this.state.name}</p>
              <p>{this.state.email}</p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
