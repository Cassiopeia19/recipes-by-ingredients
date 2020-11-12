import React from "react";
import homeHero from "../../../../assets/images/homeHero.jpg";
import Hero from '../../../../Hero'
import Banner from './banner/Banner'
import Header from '../../../../containers/header/Header'
import firebase from 'firebase'

const Home = () => {
  // Wrap this component in a new layout with header
  return (
    <>
    <div>
      <Header />
      <Hero img={homeHero}>
        <Banner />
      </Hero>
    </div>
     <h1>
        <center>
          {" "}
          <img
            src={firebase.auth().currentUser.photoURL}
            style={{
              borderRadius: "50px",
              height: "50px",
              width: "50px",
            }}
          />
          Welcome {firebase.auth().currentUser.displayName}!
        </center>
      </h1>
      </>
  );
}

export default Home;