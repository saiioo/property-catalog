import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import toast from 'react-hot-toast';


const SignInForm = () => {
  const [popUp, setPopUp] = useState();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const signInHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (enteredEmail.trim().length === 0 || enteredPassword.length === 0) {
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
    try {
      const response = await fetch("http://localhost:8080/api/users/signin", {
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
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      const token = responseData.token;
      localStorage.setItem("token", token);
      navigate("../user");
      toast.success('Logged in succesfully');
    } catch (err) {
      setPopUp({
        title: "Error!❌❌",
        message: err.message,
        btn1: "Okay",
      });
    }
  };

  const cancelHandler = () => {
    setPopUp();
  };

  return (
    <>
      {popUp && (
        <ErrorModal
          title={popUp.title}
          message={popUp.message}
          onCancel={cancelHandler}
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
          <p className={classes.heading}>
            Enter your credentials to access your account
          </p>
          <form className={classes.form} onSubmit={signInHandler}>
            <div className={classes["form-control"]}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="User ID"
                ref={emailInputRef}
              />
            </div>
            <div className={classes["form-control"]}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>
            <div className={classes["form-actions"]}>
              <button type="submit">SignIn</button>
            </div>
          </form>
          <section className={classes.signup}>
          <p>
            Don't have an account?<Link to="../auth/signup">Sign Up</Link>
          </p>
        </section>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
