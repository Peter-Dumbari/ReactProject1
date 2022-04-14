import React from "react";
import "../../App.css";
import "../pages/loginPage.css";

function loginPage() {
  return (
    <div className="body">
      <form className="Registration-form">
        <div className="form-content">
          <div className="form-heading">
            <h1 className="form-header">Login Page</h1>
          </div>

          <div className="form-item">
            <label className="Email-Label">Email Address: </label>
            <input type="email" className="Email-Input" required />
          </div>
          <div className="form-item">
            <label className="password-Label">Password: </label>
            <input type="Password" className="Password-Input" required />
          </div>

          <div className="footer">
            <input type="submit" value="Login" className="login-btn" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default loginPage;
