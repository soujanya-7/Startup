import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="auth-label">
            Full Name
            <input type="text" className="auth-input" placeholder="Jane Doe" required />
          </label>
          <label className="auth-label">
            Email
            <input type="email" className="auth-input" placeholder="you@example.com" required />
          </label>
          <label className="auth-label">
            Password
            <input type="password" className="auth-input" placeholder="Create a password" required />
          </label>
          <button type="submit" className="auth-submit">Create account</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
