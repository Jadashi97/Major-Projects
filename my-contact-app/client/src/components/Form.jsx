import React from "react";
import Login from "./Login"

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* set a condition to render confirm password if isRegistered is false. use the && */}
      {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* plug in a condition to switch  the button when isRegistered is either false true */}
      <button type="submit">{props.isRegistered ? Login : "Register"}</button>
    </form>
  );
}

export default Form;
