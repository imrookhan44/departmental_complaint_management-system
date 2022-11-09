import React from "react";
import "./forgetPassword.css";
function ForgetPassword() {
  return (
    <div>
      <div className="row" id="row">
        <h1>Forgot Password</h1>
        <h6 className="information-text">
          Enter your registered email to reset your password.
        </h6>
        <div className="form-group">
          <p>
            <label htmlFor="username">Email</label>
          </p>
          <input type="email" name="user_email" id="user_email" />
          <p>
            <label htmlFor="username">New Password</label>
          </p>
          <input type="email" name="user_email" id="user_email" />
          <p>
            <label htmlFor="username">Confirm New Password</label>
          </p>
          <input type="email" name="user_email" id="user_email" />

          <button>Reset Password</button>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
