import React from "react";
import homeHero from "../../../../assets/images/homeHero.jpg";
import Hero from '../../../../Hero'
import './Home.css'

const Home = () => {
  return (
    <>
      <Hero img={homeHero} />
      <h1 className="header">
        <center>Welcome to Reciplia!</center>
      </h1>
    </>
  );
}

export default Home;