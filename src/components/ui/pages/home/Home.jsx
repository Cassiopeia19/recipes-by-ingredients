import React from "react";
import homeHero from "../../../../assets/images/homeHero.jpg";
import Hero from '../../../../Hero'
import Banner from './banner/Banner'
import Header from '../../../../containers/header/Header'

const Home = () => {
  // Wrap this component in a new layout with header
  return (
    <div>
      <Header />
      <Hero img={homeHero}>
        <Banner />
      </Hero>
    </div>
  );
}

export default Home;