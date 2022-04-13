import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
import LoginPage from "./components/pages/loginPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/Sign-up" component={Signup} />
          <Route path="/Login-page" component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
