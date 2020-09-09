import firebase from "firebase";

const uiConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: "https://recipes-by-ingredients-285703.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
});

export const db = firebase.database(uiConfig);

export default uiConfig;

//needed for deployed app
// "scripts": {
//   "dev": "react-scripts start",
//   "start": "serve -s build",
//   "build": "react-scripts build",
//   "test": "react-scripts test --env=jsdom",
//   "eject": "react-scripts eject",
//   "heroku-postbuild": "npm run build"
//   },

//needed to run in localhost only
// "scripts": {
//   "start": "set PORT=4200 && react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build"
// },
