import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import toast from 'react-hot-toast';

const SignUpForm = () => {
  const [popUp, setPopUp] = useState();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.length === 0 ||
      enteredConfirmPassword.length === 0
    ) {
      setPopUp({
        title: "Empty Fields❌❌",
        message: "All fields are mandatory!",
        btn1: "Okay",
      });
      return;
    }
    if (!enteredEmail.includes("@")) {
      setPopUp({
        title: "Invalid email❌❌",
        message: "Please enter valid Email!",
        btn1: "Okay",
      });
      return;
    }
    if (enteredPassword.length < 6) {
      setPopUp({
        title: "Invalid password❌❌",
        message: "Password should be greater than 6 characters long (> 6)!",
        btn1: "Okay",
      });
      return;
    }
    if (enteredPassword !== enteredConfirmPassword) {
      setPopUp({
        title: "Password does not match",
        message: "Password and confirm password should be same!",
        btn1: "Okay",
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
      });
      const responseData = await response.json();
      if (responseData.status === "Failed") {
        throw new Error(responseData.message);
      }
      toast.success('Regsiterd Successfully');
      setPopUp({
        title: "Regitration Successful",
        message: "User registered successfully✅✅",
        btn1: "Done👍",
      });
    } catch (err) {
      setPopUp({
        title: "SignUp unsuccessful❗",
        message: err.message,
        btn1: "Okay",
      });
    }
  };

  const cancelHandler = () => {
    setPopUp();
  };

  const successHandler = () => {
    navigate("../auth/signin");
  };
  return (
    <>
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          onCancel={cancelHandler}
          onSuccess={successHandler}
          btn1={popUp.btn1}
        />
      )}
      <div className={classes.container}>
        <div className={classes["child-container"]}>
          <section className={classes.logo}>
            <div className={classes["main-logo-auth"]}>
            <img className={classes['main-icon-img']} src="https://cdn-icons-png.flaticon.com/512/1040/1040999.png" alt="property-icon" />
            <h1 className={classes['mp-l-hd']}>PROPERTY.com</h1>
            </div>
          </section>
          <p className={classes.heading}>Create New Account</p>
          <form className={classes.form} onSubmit={signUpHandler}>
            <div className={classes["form-control"]}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                ref={emailInputRef}
                // required
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordInputRef}
                // required
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                ref={confirmPasswordInputRef}
                // required
              />
            </div>
            <div className={classes["form-actions"]}>
              <button type="submit">Sign up</button>
            </div>
          </form>
          <section className={classes.signin}>
          <Link  to="../auth/signin"><span style={{color:"black"}}>Already registerd? {'  '}</span><span style={{color:"blue", textDecoration:"underline"}}>Sign In</span></Link>
        </section>
        </div>

      </div>
    </>
  );
};

export default SignUpForm;
