/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Header.css";
import logo from '../../assets/images/logo.png'
import firebase from 'firebase'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav style={{ fontSize: "24px" }}>
          <div>
            <div>
              <Link to="/home">
                <img src={logo} alt="recipe logo" />
              </Link>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li style={{ float: "right" }}>
              <Link onClick={() => firebase.auth().signOut()}>Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);