import React, { Component } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./component/Header/Navbar"
import Main from "./component/Main/main"
import Footer from "./component/Footer/Footer"



import Orders from "./component/Pages/Orders/Orders"
import Products from './component/Pages/Products/Products'
import AboutUs from './component/Main/AboutUs/AboutUs';
import ContactUs from './component/Main/ContactForm/ContactForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/products" exact component={Products} />
            <Route path="/aboutUs" exact component={AboutUs} />
            <Route path="/contactUs" exact component={ContactUs} />

          </Switch>
          <Footer />
        </div>
      </Router>

    );
  }

}

export default App;
