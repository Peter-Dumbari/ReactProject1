import React from "react";
import "../pages/Signup.css";
import { Link } from "react-router-dom";
import "../pages/loginPage";
import checkPassword from "./Uservalidations";

function SignUp() {
  return (
    <div className="body">
      <form className="Registration-form" onSubmit={checkPassword}>
        <div className="form-content">
          <div className="form-heading">
            <h1 className="form-header">REGISTRATION FORM</h1>
          </div>
          <div className="form-item">
            <label className="Username-Label">Username: </label>
            <input
              type="text"
              className="Username-Input"
              placeholder="Username"
              id="userName"
              required
            />
          </div>
          <div className="form-item">
            <label className="Email-Label">Email Address: </label>
            <input
              type="email"
              className="Email-Input"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-item">
            <label className="password-Label">Password: </label>
            <input
              type="Password"
              className="Password-Input"
              placeholder="Password"
              required
              id="password"
            />
          </div>
          <div className="form-item">
            <label className="Confirm-password-Label">Confirm Password: </label>
            <input
              type="Password"
              className="Confirm-Password-Input"
              placeholder="Confirm Password"
              id="confirmPassword"
              required
            />
          </div>
          <div id="messanger"> </div>
          <div className="footer">
            <input type="submit" value="Register" className="submit-btn" />
          </div>
        </div>

        <Link to="/Login-page" className="alreadyLoginPage">
          Already Registered? login!
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
