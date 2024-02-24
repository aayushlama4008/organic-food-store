import React from "react";

import "./logIn.scss";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="login--home">
      <div className="login--container">
        <h1 className="semi-title-text">LOG IN </h1>
        <div className="login--fields">
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <p>
          Don't have an account?
          <Link to={"/Sign-up"}>
            <span>SIGN UP</span>
          </Link>
        </p>
        <div className="login-button">
          <button>LOG IN </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
