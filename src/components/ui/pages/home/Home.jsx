import React from "react";
//import app from "../../../base";
import homeHero from "../../../../assets/images/homeHero.jpg";
import Hero from '../../../../Hero'

const Home = () => {
  return (
    <>
      <Hero img={homeHero} />
      {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
    </>
  );
}

export default Home;
