/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
//import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
//import ReloadPage from "../../components/routes/ReloadPage";
import "./Header.css";
//import Login from '../../components/ui/login/Login'
import logo from '../../assets/images/recipes.png'
import firebase from 'firebase'

class Header extends Component {
  render() {
    // const isUserLoggedIn = Login.isSignedIn;
    return (
      <header className="header">
        <nav style={{ fontSize: "24px" }}>
          <div>
            {/* {isUserLoggedIn && ( */}
            <div>
              <Link to="/home">
                <img src={logo} alt="recipe logo" />
              </Link>
            </div>
            {/* )}  */}
          </div>
          <ul activeStyle={{ color: "red" }}>
            <li>
              <Link to="/login" onClick={withRouter}>
                Login
              </Link>
            </li>
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
            <li>
              <Link to="/privacy-policy">
                PrivacyPolicy
              </Link>
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