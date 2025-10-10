import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <label className="auth-label">
            Email
            <input type="email" className="auth-input" placeholder="you@example.com" required />
          </label>
          <label className="auth-label">
            Password
            <input type="password" className="auth-input" placeholder="••••••••" required />
          </label>
          <button type="submit" className="auth-submit">Sign In</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
