import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const ip = require("../ipAddress");
const port = process.env.PORT || 5000;

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sign: true,
      login: false,
      email: "",
      password: "",
      phoneno: "",
      username: ""
    };
  }

  _login = async () => {
    console.log(this.state.email);
    console.log(port);
    await Axios.post(`http://${ip.default}:5050/user/login/`, {
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log(res + " gey");
      })
      .catch(err => console.log("Error while log in " + err));
  };

  _signUp = async () => {
    console.log(ip.default);
    console.log(this.state.email);
    console.log(port);
    await Axios.post(`http://${ip.default}:5050/user/register/`, {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      phoneno: this.state.phoneno
    })
      .then(res => {
        console.log(res.token);
        this._login();
      })
      .catch(err => console.log("Error while signing up " + err));
  };

  render() {
    return (
      <div className="form">
        <ul className="tab-group">
          <li className={this.state.sign === true ? "tab active" : "tab"}>
            <a
              href="#"
              onClick={() => {
                this.setState({ sign: true, login: false });
              }}
            >
              Sign Up
            </a>
          </li>
          <li className={this.state.login === true ? "tab active" : "tab"}>
            <a
              href="#"
              onClick={() => {
                this.setState({ login: true, sign: false });
              }}
            >
              Log In
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            id="signup"
            style={{
              display: this.state.sign === true ? "block" : "none"
            }}
          >
            <form >
              <div className="field-wrap">
                <input
                  type="text"
                  placeholder="Name"
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  onChange={e => {
                    this.setState({ phoneno: e.target.value });
                  }}
                  maxLength={10}
                  required
                  autoComplete="off"
                />
              </div>

              <button
                onClick={() => {
                  this._signUp();
                }}
                type="button"
                className="button button-block"
              >
                Sign Up
              </button>
            </form>
          </div>

          <div
            id="login"
            style={{
              display: this.state.login === true ? "block" : "none"
            }}
          >
            <form action='/'>
              <div className="field-wrap">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={e => {
                    this.setState({ email:e.target.value });
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                  required
                  autoComplete="off"
                />
              </div>

              <p className="forgot">
                <Link to="#">Forgot Password?</Link>
              </p>

              <button
                onClick={() => {
                  this._login();
                }}
                className="button button-block"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
