import React from "react";
import "./App.css";
//import "./bootstrap.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./components/ui/home/Home";
import Favorites from "./components/ui/favorites/Favorites"
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy"
import Login from "./components/ui/login/Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Header from "./containers/header/Header"
import Footer from "./containers/footer/Footer"

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <>
            <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/favorites" component={Favorites} />
              <PrivateRoute
                exact
                path="/privacy-policy"
                component={PrivacyPolicy}
              />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
          </>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
