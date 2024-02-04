import React, { Component } from 'react';


import HomeContaint from './HomeContaints/HomeContaint';
import FirstContaint from './FirstContaints/FirstContaint';
import SecondContaints from "./SecondContaints/SecContaints";
import ThirdContaint from "./ThirdContaints/ThirdContaint";
import ForthContaint from "./ForthContaints/FourthContaints";
import ContactForm from './ContactForm/ContactForm';
import AboutUs from './AboutUs/AboutUs';


class Main extends Component {
  render() {
    return (
      <div>

        <HomeContaint />
        <AboutUs />
        <FirstContaint />
        <SecondContaints />
        <ThirdContaint />
        <ForthContaint />
        <ContactForm />
      </div>

    );
  }

}

export default Main;