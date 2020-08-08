/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ReloadPage from "../../components/routes/ReloadPage";
import "./Header.css";
import Login from '../../components/ui/login/Login'
import logo from '../../assets/images/recipe.png'
import AuthenticationService from '../../components/authentication/AuthenticationService'

class Header extends Component {
  render() {
    const isUserLoggedIn = Login.isSignedIn;
    return (
      <header className="header">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-custom sticky-nav"
          style={{ fontSize: "24px" }}
        >
          <div>
            {isUserLoggedIn && (
              <div>
                <Link className="navbar-brand" to="/home">
                  <img src={logo} alt="recipe logo" />
                </Link>
              </div>
            )}
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/login"
                  onClick={withRouter && ReloadPage.refresh}
                >
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={
                    withRouter &&
                    ReloadPage.refresh &&
                    AuthenticationService.logout
                  }
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);