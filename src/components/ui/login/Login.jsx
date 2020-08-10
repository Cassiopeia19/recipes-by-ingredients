import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './Login.css'


class Login extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };
  render() {
    return (
      <>
        <ul>
          <li>
            <img
              src="../../../assets/images/recipe1.jpg"
              alt="recipe1"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe2.jpg"
              alt="recipe2"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe3.jpg"
              alt="recipe3"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe4.jpg"
              alt="recipe4"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe5.jpg"
              alt="recipe5"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe6.jpg"
              alt="recipe6"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe7.jpg"
              alt="recipe7"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="../../../assets/images/recipe8.jpg"
              alt="recipe8"
              loading="lazy"
            />
          </li>
        </ul>
        {/* <body
         className="login-background"
         style={{ backgroundImage: `url(${meal})`}}
       >  */}
        <div>
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
              <Redirect to="/" />
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
        {/* </body> */}
      </>
    );
  }
}

export default withRouter(Login);