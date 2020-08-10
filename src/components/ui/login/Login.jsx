import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './Login.css'
import recipe1 from '../../../assets/images/recipe1.jpg'
import recipe2 from '../../../assets/images/recipe2'
import recipe3 from '../../../assets/images/recipe3'
import recipe4 from '../../../assets/images/recipe4'
import recipe5 from '../../../assets/images/recipe5'
import recipe6 from '../../../assets/images/recipe6'
import recipe7 from '../../../assets/images/recipe7'
import recipe8 from '../../../assets/images/recipe8'
import recipe9 from '../../../assets/images/recipe9'

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
          <li>{recipe1}</li>
          <li>{recipe2}</li>
          <li>{recipe3}</li>
          <li>{recipe4}</li>
          <li>{recipe5}</li>
          <li>{recipe6}</li>
          <li>{recipe7}</li>
          <li>{recipe8}</li>
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