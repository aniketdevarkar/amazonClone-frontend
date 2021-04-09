import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import CenteredContainer from "./CenteredContainer";

import { login } from "../apicalls";
import "./Login.css";
function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    try {
      const log = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(log);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon Icon"
        />
      </Link>
      <div className="login__container">
        <form>
          <h1>sign in</h1>
          <h5>E-mail</h5>
          <input type="email" ref={emailRef} />
          <h5>password</h5>
          <input type="password" ref={passwordRef} />
          <button
            onClick={handleSubmit}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <Link className="login__link" to="/Register">
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
