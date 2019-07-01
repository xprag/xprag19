import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Speakers from "./components/speakers";
import Call from "./components/call";
import Award from "./components/award";
import GenderPolicy from "./components/gender-policy";
import Program from "./components/program";
import Venue from "./components/venue";
import Error from "./components/error";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/invited-speakers" component={Speakers} />
            <Route path="/call-for-papers" component={Call} />
            <Route path="/award" component={Award} />
            <Route path="/gender-policy" component={GenderPolicy} />
            <Route path="/program" component={Program} />
            <Route path="/venue" component={Venue} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
