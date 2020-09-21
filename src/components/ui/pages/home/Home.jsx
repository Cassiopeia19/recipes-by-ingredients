import React from "react";
import homeHero from "../../../../assets/images/homeHero.jpg";
import Hero from '../../../../Hero'
import Banner from './banner/Banner'
import './Home.css'

const Home = () => {
  return (
    <>
      <Hero img={homeHero}>
        <Banner />
      </Hero>
    </>
  );
}

export default Home;