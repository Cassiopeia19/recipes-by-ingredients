import React from "react";
import aboutHero from "../../../../assets/images/aboutHero.png";
import Hero from "../../../../Hero";
import './About.css'

const About = () => {
  return (
      <>
      <Hero img={aboutHero} />
      <div className="About">
        <p>
          Our website offers you the opportunity to obtain recipes based upon
          what ingredients that you enter for the search. You then have the
          option of favoriting whichever menus that you fancy. Our wish is that
          you enjoy using this website, because we try to make your time
          searching for recipes just a little easier.
          </p>
          </div>
          </>
        );
    }

export default About;

