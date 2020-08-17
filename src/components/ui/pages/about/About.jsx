import React from "react";
import aboutHero from "../../../../assets/images/aboutHero.png";
import Hero from "../../../../Hero";
import './About.css'
import recipe9 from '../../../../assets/images/recipe9.jpg'
import recipe6 from '../../../../assets/images/recipe6.jpg'
import recipe7 from '../../../../assets/images/recipe7.jpg'
import recipe8 from '../../../../assets/images/recipe8.jpg'
import recipe12 from "../../../../assets/images/recipe12.jpg";

const About = () => {
  return (
    <>
      <Hero img={aboutHero} />
      <div className="textbox">
        <h1 className="header">About this website</h1>
        <p style={{ fontSize: "20px" }}>
          {" "}
          Our website offers you the opportunity to obtain recipes based upon
          what food or ingredient(s) that you enter for the search. Once you
          open up your recipe, you then have the options of saving, reviewing,
          or printing the recipe. Our wish is that you enjoy using this website
          and it becomes a staple of your everyday life. Our goal is to make
          your time searching for recipes just a little bit easier.{" "}
        </p>
        <a href="./privacy-policy">
          <button className="about">Our privacy policy</button>
        </a>
      </div>
      <div className="col-md-4 col-lg-3">
        <div className="card">
          <h1>Hundreds of Recipes!</h1>
          <div className="image-container">
            <img src={recipe9} alt="" />
            <img src={recipe6} alt="" />
            <img src={recipe7} alt="" />
            <img src={recipe8} alt="" />
            <img src={recipe12} alt="" />
          </div>
        </div>
      </div>
      <p />
      <p />
      <p />
    </>
  );
    }

export default About;


  