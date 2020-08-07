/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
//import ReloadPage from "../../components/ReloadPage.js";
import "./Header.css";

class Header extends Component {
  render() {

    return (
      <header className="header">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-custom sticky-nav"
          style={{ fontSize: "24px" }}
        >
          <div>
            <Link className="navbar-brand" to="/home"></Link>
            <Link className="navbar-brand" to="/favorites"></Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
