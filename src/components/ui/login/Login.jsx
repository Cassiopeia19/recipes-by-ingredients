import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './Login.css'
import recipe2 from '../../../assets/images/recipe2.jpg'

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
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      this.setState({ isSignedIn: !!firebaseUser });
      console.log("user", firebaseUser);
    });
  };

  login() {
    firebase.auth.signInWithPopup(firebase.provider).then((result) => {
      this.callFirebaseFunction();
      const user = result.user;
      this.setState({
        user,
      });
    });
  }
  render() {
    return (
      <>
        <img className="img bg" src={recipe2} alt="recipe" />
        <div>
          {this.state.isSignedIn ? (
            <Redirect to="/" />
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </>
    );
  }
}

export default withRouter(Login);