import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { register } from "../apicalls";
function Signup() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const lastNameRef = useRef("");
  const firstNameRef = useRef("");
  const passwordConfirmRef = useRef("");
  const userRoleRef = useRef("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Password dosent match");
    }

    try {
      const regist = await register(
        emailRef.current.value,
        passwordRef.current.value,
        firstNameRef.current.value,
        lastNameRef.current.value,
        userRoleRef.current.checked
        //role:0
      );
      console.log("message", regist);
      return alert(regist.message);
    } catch (error) {
      console.log("error>>>>", error);
      return alert("account with this email already exist");
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon Icon"
        />
      </Link>
      <div className="register__container">
        <form>
          <h1>Create Account</h1>
          <h5>First Name</h5>
          <input type="text" ref={firstNameRef} required />
          <h5>Last Name</h5>
          <input type="text" ref={lastNameRef} required />
          <h5>E-mail</h5>
          <input type="email" ref={emailRef} required />
          <h5>Password</h5>
          <input type="password" ref={passwordRef} required />
          <h5>Confirm password</h5>
          <input type="password" ref={passwordConfirmRef} required />
          <p title="Check this if you want to sell products">
            <input
              type="checkbox"
              id="businessAccount"
              name="businessAccount"
              ref={userRoleRef}
            />
            &nbsp;Bussiness Account
          </p>

          <button
            onClick={handleSubmit}
            type="submit"
            className="register__signUpButton"
          >
            Sign Up
          </button>
        </form>
        <p>Note: We will send you a mail to verify your email.</p>

        <p>
          Already have an account?
          <Link className="login__link" to="/login">
            &nbsp;Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
