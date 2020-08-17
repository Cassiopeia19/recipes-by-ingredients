import React from "react";
import './Footer.css'

const Footer = () => {
    return (
      <div className="wrapper">
        <footer className="footer">
          <div className="container">
            <div className="columns">
              <div className="column">
                Copyright &copy; jennieCreation {new Date().getFullYear()}. All
                Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

export default Footer;
