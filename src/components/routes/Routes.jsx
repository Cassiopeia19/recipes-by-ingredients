import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";
import Home from "../home/Home";
import Favorites from '../favorites/Favorites'
import PrivacyPolicy from '../../components/privacyPolicy/PrivacyPolicy'

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Header />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}

export default Routes;
