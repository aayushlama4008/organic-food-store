import React from "react";
import "./signUp.scss";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signUp--home">
      <div className="signup--container">
        <h1 className="semi-title-text">SIGN UP</h1>
        <div className="signup--fields">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>

        <p>
          Already have an account?
          <Link to={'/Log-in'}>
            <span>Log In</span>
          </Link>
        </p>
        <div className="signup--agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
        <div className="sign-button">
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
