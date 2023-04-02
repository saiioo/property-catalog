import React from "react";
import Button from "../UI/Button/Button";
import classes from "./MainPage.module.css";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const signupAuthHandler = () => {
    navigate("auth/signup");
  };
  const signinAuthHandler = () => {
    navigate("auth/signin");
  };

  return (
    <main className={classes.main}>
      {/* <h1 className={classes["main-heading"]}>Welcome to 10X Real Estate</h1> */}
      <section className={classes.actions}>
        <div className={classes['main-header-div']}>
          <div className={classes["main-page-logo-heading"]}>
          <img className={classes['main-icon-img']} src="https://cdn-icons-png.flaticon.com/512/1040/1040999.png" alt="property-icon" />
          <h1 className={classes['mp-l-hd']}>PROPERTY.com</h1>
          </div>
        <div className={classes['main-page-button-div']}>
        <Button className={classes["auth-btn"]} onClick={signupAuthHandler}>
          Sign Up
        </Button>
        <Button className={classes["auth-btn"]} onClick={signinAuthHandler}>
          Sign In
        </Button> 
        </div>
        </div>
        <div className={classes['mp-pl-c-div']}>
        <Link className={classes['udl-link']} to='/auth/signin'>          
          <div className={classes['mp-pl-div']}>
            <img src="https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb3BlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className={classes["main-page-listing-image"]}/>
            <h1 className={classes["main-page-listing-heading"]}>R ARCITECURE</h1>
            <p className={classes["main-page-listing-desc"]}>This duplex house boasts an open concept living and dining area, perfect for entertaining guests or spending quality time with family.</p>
          </div>
        </Link>
          <Link className={classes['udl-link']}>
          <div className={classes['mp-pl-div']}>
            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb3BlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className={classes["main-page-listing-image"]}/>
            <h1 className={classes["main-page-listing-heading"]}>BRIGHTER HOME</h1>
            <p className={classes["main-page-listing-desc"]}>Perfect for those who work from home, this duplex house features a dedicated home office with built-in bookshelves and a large desk.</p>
          </div>
          </Link>
          <Link className={classes['udl-link']}>
          <div className={classes['mp-pl-div']}>
            <img src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb3BlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className={classes["main-page-listing-image"]}/>
            <h1 className={classes["main-page-listing-heading"]}>HARIYAT NILAYAM</h1>
            <p className={classes["main-page-listing-desc"]}>This luxurious duplex house features high-end finishes and amenities such as a private elevator, wine cellar, and home theater. </p>
          </div>
          </Link>
          <Link className={classes['udl-link']}>
          <div className={classes['mp-pl-div']}>
            <img src="https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHVwbGV4JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className={classes["main-page-listing-image"]}/>
            <h1 className={classes["main-page-listing-heading"]}>BOX NIVAS</h1>
            <p className={classes["main-page-listing-desc"]}>This duplex house is designed with sustainability in mind, featuring energy-efficient appliances, solar panels, and a rainwater harvesting system.</p>
          </div>
          </Link>
          <Link className={classes['udl-link']}>
          <div className={classes['mp-pl-div']}>
            <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGR1cGxleCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className={classes["main-page-listing-image"]}/>
            <h1 className={classes["main-page-listing-heading"]}>OPERA HOME</h1>
            <p className={classes["main-page-listing-desc"]}>Located in a desirable neighborhood, this duplex house offers stunning views of the surrounding mountains. The main living area is on the top floor.</p>
          </div>
          </Link>
          <Link className={classes['udl-link']}>
          <div className={classes['mp-pl-div']}>
            <img src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1cGxleCUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className={classes["main-page-listing-image"]}/>
            <h1 className={classes["main-page-listing-heading"]}>SILICON HOSE</h1>
            <p className={classes["main-page-listing-desc"]}>This duplex house has a unique split-level design, with the kitchen and dining area on the upper level and the living room and bedrooms on the lower level.</p>
          </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
