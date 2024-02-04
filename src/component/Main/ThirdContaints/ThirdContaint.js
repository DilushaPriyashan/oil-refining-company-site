import React, { Component } from 'react';
import Structure from "../Containts/Structure";
import './ThirdContaint.css'

class ThirdContaint extends Component {

    render() {
        return (
            <section className="third-hightlight-wrapper">
                <div className='pro-con'>
                    <Structure titleColor="white" title="Rise bran Oil" priceColor="grey"
                        colorClass="white" description="Experience wholesomeness in every drop with our premium rice bran oil."
                    />

                    <div className="links-wrapper">
                        <ul>
                            <li><a href="/products">Learn more </a></li>
                            <li><a href="/orders">Buy</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default ThirdContaint;

