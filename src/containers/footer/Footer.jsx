import React from "react";
import './Footer.css'
import logo from "../../assets/images/logo.png";

const Footer = () => {
    return (
      <footer className="footer">
        <img src={logo} alt="recipe logo" />
         &copy; jennieCreation {new Date().getFullYear()}. All Rights
        Reserved
      </footer>
    );
  }

export default Footer;
