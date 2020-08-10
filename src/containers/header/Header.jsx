/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
//import ReloadPage from "../../components/routes/ReloadPage";
import "./Header.css";
import Auth from "../../Auth"
import logo from '../../assets/images/recipes.png'
import firebase from 'firebase'

class Header extends Component {
  render() {
    const isUserLoggedIn = Auth.AuthContext.Provider;
    return (
      <header className="header">
        <nav style={{ fontSize: "24px" }}>
          <div>
            {isUserLoggedIn && (
              <div>
                <Link to="/home">
                  <img src={logo} alt="recipe logo" />
                </Link>
              </div>
            )}
          </div>
          <ul activeStyle={{ color: "red" }}>
            {isUserLoggedIn && (
              <li>
                <Link to="/login" onClick={withRouter}>
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link to="/home">Home</Link>
              </li>
            )}
            {isUserLoggedIn && (
            <li>
              <Link to="/about">About</Link>
            </li>
            )}
            {isUserLoggedIn && (
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            )}
            {isUserLoggedIn && (
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            )}
            {isUserLoggedIn && (
            <li>
              <Link to="/privacy-policy">PrivacyPolicy</Link>
            </li>
            )}
            {isUserLoggedIn && (
            <li style={{ float: "right" }}>
              <Link onClick={() => firebase.auth().signOut()}>Logout</Link>
            </li>
            )}
          </ul>
            {!isUserLoggedIn && (
              <li>
                <Link
                  to="/login"
                  onClick={withRouter}
                >
                  Login
                </Link>
              </li>
            )}
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);