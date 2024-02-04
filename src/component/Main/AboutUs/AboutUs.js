import React from "react";
import "./AboutUs.css"; 
import HomeStructure from "../Containts/HomeStructure";
import aboutImage from '../../../images/home/about.png';
import Structure from "../Containts/Structure";


const AboutUs = () => {
    return (
        <section className="about-us-highlight-wrapper" id="aboutUs">
            <Structure />
            <div className="about-us-wrapper">
                <h1><b>About Us</b></h1>
                <br></br>
                <p>
                    VM Industry is a leading player in the oil refining wholesale business.
                    With a commitment to quality and excellence, we provide a wide range
                    of refined oil products to meet the diverse needs of our clients.
                </p>
                <p>
                    Our state-of-the-art refining facilities and a dedicated team of experts
                    ensure that our products adhere to the highest industry standards.
                    We take pride in our ability to deliver superior quality products on time,
                    making us a trusted partner for businesses across various industries.
                </p>
                <p>
                    At VM Industry, we are not just a supplier; we are a partner in your success.
                    Our focus on innovation, sustainability, and customer satisfaction sets us
                    apart in the competitive oil industry.
                </p>
                <p>
                    Contact us today to explore how VM Industry can meet your oil refining needs
                    and contribute to the success of your business.
                </p>
                
                <div className="about-image" >
                <img src={aboutImage} alt="About VM Industry" className="about-image" />

                </div>
                
            </div>
        </section>
    );
};

export default AboutUs;
