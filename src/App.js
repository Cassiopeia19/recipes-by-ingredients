import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./components/ui/pages/home/Home";
import About from "./components/ui/pages/about/About";
import Recipes from "./components/ui/pages/recipes/Recipes"
import Favorites from "./components/ui/pages/favorites/Favorites"
import PrivacyPolicy from "./components/ui/pages/privacyPolicy/PrivacyPolicy"
import Login from "./components/ui/login/Login";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <Router>
            <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/about" component={About} />
              <PrivateRoute exact path="/recipes" component={Recipes} />
              <PrivateRoute exact path="/favorites" component={Favorites} />
              <PrivateRoute
                exact
                path="/privacy-policy"
                component={PrivacyPolicy}
              />
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
        </AuthProvider>
      </div>
      <Footer />
    </>
  );
};

export default App;
