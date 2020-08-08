/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
//import ReloadPage from "../../components/routes/ReloadPage";
import "./Header.css";
//import Login from '../../components/ui/login/Login'
import logo from '../../assets/images/recipes.png'

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
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {/* {isUserLoggedIn && ( */}
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            {/* )} 
            {isUserLoggedIn && ( */}
            <li>
              <Link to="/privacy-policy">Privacy</Link>
            </li>
            {/* )}  */}
          </ul>
          <ul>
            {/* {!isUserLoggedIn &&  */}
            {/* <li>
                <Link
                  to="/login"
                  onClick={withRouter }
                >
                  Login
                </Link>
              </li>   */}
            {/* }          */}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);