import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { login } from "../apicalls";
import "./Login.css";
function Login({ handleLogin, history }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const log = await login(
        emailRef.current.value,
        passwordRef.current.value
      );

      handleLogin(log.data, log.token);
      if (log.data.role) {
        return history.push(`/admin/products`);
      } else {
        return history.push(`/user/products`);
      }
    } catch (error) {
      console.log(error);
      return alert("Wrong user Credentials");
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
          <h1>Sign-In</h1>
          <h5>E-mail</h5>
          <input type="email" ref={emailRef} required />
          <h5>password</h5>
          <input type="password" ref={passwordRef} required />
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
        <Link to="/forgot-password">Forgot Password ?</Link>
      </div>
    </div>
  );
}

export default Login;
