import axios from "axios";
import { useState } from "react";
import { baseurl } from "../include/Urlinclude"

export const Registor = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  function registeration(event) {
    var data = JSON.stringify({
      email: email,
      firstName: firstname,
      lastName: lastname,
      password: password,
      mobileNumber: mobilenumber,
    });

    var config = {
      method: "post",
      url: baseurl + "/api/v1/user/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  function Login(event) {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   email: email,
    //   password: password,
    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   mode: "no-cors",
    //   // redirect: "follow",
    // };

    // fetch("http://localhost:8080/apiauth/authenticate", requestOptions)
    //   // .then(response => {
    //   //   console.log(JSON.stringify(response));
    //   // })
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
    
    var data = JSON.stringify({
      email: email,
      password: password
    });

    var config = {
      method: "post",
      url: baseurl + "/apiauth/authenticate",
      headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label type="text">Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={Login}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label type="text">First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jack"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label type="text">Last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Lee"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label type="text">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label type="text">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label type="text">Mobile Number</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g 111 111 1111"
              onChange={(e) => setMobilenumber(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={registeration}
            >
              Register
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};
