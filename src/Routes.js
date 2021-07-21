import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import GlobalStyle from "./Modules/globalStyle";
import { Home, Beerlist, Cartlist } from "./Pages/TotalPage";
import Redirects from "./Modules/redirect";

// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Redirects exact path="/" />
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={Beerlist} />
        <Route path="/cartlist" component={Cartlist} />
      </Switch>
    </Router>
  );
};

export default Routes;
