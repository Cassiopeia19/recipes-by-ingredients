import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import GoogleLogin from 'react-google-login'



ReactDOM.render(
  // <GoogleLogin
  //   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
  //   buttonText="Login"
  //   onSuccess={responseGoogle}
  //   onFailure={responseGoogle}
  //   cookiePolicy={"single_host_origin"}
  // />,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("App")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
