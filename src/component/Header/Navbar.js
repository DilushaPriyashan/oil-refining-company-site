import React, { Component } from "react"
import './Header.css';


class Navbar extends Component {
    componentDidMount() {
        const selectElement = (element) => document.querySelector(element);

        selectElement('.mobile-menu').addEventListener('click', () => {
            selectElement('header').classList.toggle('active')
        })
    }
    render() {
        return (
            <header>
                <div className="container2">
                    <nav>
                        <ul className="nav-list nav-list-mobile">
                            <li className="nav-item">
                                <div className="mobile-menu">
                                    <span className="line line-top"></span>
                                    <span className="line line-bottom"></span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link nav-link-bag"></a>
                            </li>

                        </ul>

                        <ul className="nav-list nav-list-larger">

                            <li className="nav-item nav-item-hidden">
                                <a href="/" className="nav-link nav-link-logo"></a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/aboutUs" className="nav-link">About us</a>
                            </li>

                            <li className="nav-item">
                                <a href="/products" className="nav-link">Products</a>
                            </li>

                            <li className="nav-item">
                                <a href="/orders" className="nav-link">Order</a>
                            </li>

                            <li className="nav-item">
                                <a href="/contactUs" className="nav-link">Contact us</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link nav-link-bag"></a>
                            </li>
                        </ul>

                    </nav>

                </div>
            </header>
        )
    }
}


export default Navbar;



