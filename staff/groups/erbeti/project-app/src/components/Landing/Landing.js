import React, { Component } from "react";

import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div>
      <div className="landing-buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>

        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
      <div>
        <h1>Welcome to ErBeti</h1>
        
      </div>
    </div>
  );
}

export default Landing;
