import React, { Component } from "react";
import FlagIcon from "../../images/icons/16.png"

import './Footer.css'
import './Toggel.js'



class Footer extends Component {

    render() {

        return (
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="upper-text-container">
                        <p>1. Trade-In: Trade-in values for your oil refining wholesale business may vary. Promotional pricing for our oil products is based on trade-in of specific oils such as Palm Oil, Coconut Oil, Rice Bran Oil, and Coconut Wax. To qualify for promotional pricing, the traded oils must be in good condition. Additional trade-in values may be available upon the purchase of new oil products, subject to availability and limits. Customers must be at least 18 years old. Our company, along with its trade-in partners, reserves the right to refuse or limit any trade-in transaction for any reason. In-store trade-ins require the presentation of a valid, government-issued photo ID, as local law may mandate the saving of this information. Sales tax may be assessed on the full value of the new oil products. Additional terms from our company or our trade-in partners may apply. Read the <a href="#" > Customer Agreement</a> for futher details. </p>
                        <p>2. Experience the excellence that VM Industry brings to the oil refining wholesale business. Our dedication to quality, transparency, and customer satisfaction sets us apart in the industry. Choose VM Industry for unparalleled oil products that elevate your business standards. Restrictions and other terms apply.
                        </p>
                    </div>
                    <div>

                    </div>

                    <div className="vm-wrapper">
                        More ways to shop: <a href="#">Find an VM Industry Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-VM-INDUSTRY.
                    </div>
                    <div className="copyright-wrapper row">
                        <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                            Copyright &copy; 2024 VM INDUSTRY. All rights reserved.
                        </div>
                        <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Sales and Refunds</a></li>
                                <li><a href="#">Legal</a></li>
                                <li><a href="#">Site Map</a></li>
                            </ul>
                        </div>
                        <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                            <div className="flag-wrapper"><img src={FlagIcon} /></div> <div className="footer-country-name">United States</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;