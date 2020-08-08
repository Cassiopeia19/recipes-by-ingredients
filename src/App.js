import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/ui/home/Home";
import Favorites from "./components/ui/favorites/Favorites"
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy"
import Login from "./components/ui/login/Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute
            exact
            path="/privacy-policy"
            component={PrivacyPolicy}
          />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
