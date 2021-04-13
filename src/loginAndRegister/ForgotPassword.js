import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../apicalls";
function ForgotPassword() {
  const emailRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const log = await forgotPassword(emailRef.current.value);
      alert(`Email sent to reset password on ${emailRef.current.value}`);
    } catch (error) {
      console.log(error);
      alert(`Email is not valid`);
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
          <h2>Password assistance</h2>
          <p>
            Enter the email address or mobile phone number associated with your
            Amazon account.
          </p>
          <h5>Enter E-mail</h5>
          <input type="email" ref={emailRef} required />
          <button
            onClick={handleSubmit}
            type="submit"
            className="login__signInButton"
          >
            Continue
          </button>
        </form>
        <p>
          Create New account?
          <Link className="login__link" to="/register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
