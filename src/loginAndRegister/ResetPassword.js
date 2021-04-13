import React, { useRef } from "react";
import { resetPassword } from "../apicalls";
import { Link, useParams } from "react-router-dom";
function ResetPassword(props) {
  const passwordConfirmRef = useRef("");
  const passwordRef = useRef("");
  const { token } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Enter same password");
    }
    try {
      const log = await resetPassword(token, passwordRef.current.value);
      alert("Password is Reseted try Sign In");
    } catch (error) {
      alert("Link is deactivated");
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
          <h1>Reset Password</h1>
          <h5>password</h5>
          <input type="password" ref={passwordRef} required />
          <h5>Confirm password</h5>
          <input type="password" ref={passwordConfirmRef} required />
          <button
            onClick={handleSubmit}
            type="submit"
            className="login__signInButton"
          >
            Reset Password
          </button>
        </form>

        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}

export default ResetPassword;
