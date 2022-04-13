
import React from "react";

export class Register extends React.Component {
  construction(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1649415792/undraw_programming_re_kg9v_i9wmwh.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Username" required/>
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email Address</label>
              <input type="Email" name="email" placeholder="Email Address" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password"  required/>
            </div>
          </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">Login</button>
        </div>
      </div>
    );
  }
}
  
