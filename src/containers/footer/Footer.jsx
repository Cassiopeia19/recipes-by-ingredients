import React from "react";
import './Footer.css'

const Footer = () => {
    return (
      <div className="wrapper">
        <footer className="footer">
          <div className="container">
            <div className="columns">
              <div className="column" style={{textAlign: "center"}}>
                  All Rights Reserved &copy; 2020 Recipes by Ingredients, a
                  jennieCreation
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default Footer;
