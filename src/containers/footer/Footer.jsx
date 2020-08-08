import React from "react";
import './Footer.css'

const Footer = () => {
    return (
      <div>
        <footer class="footer">
          <div className="container">
            <div className="columns">
              <div className="column">
                All Rights Reserved &copy; 2020 Recipes By Ingredients
              </div>
              <div className="column has-text-right">
                <a className="icon" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="icon" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default Footer;
