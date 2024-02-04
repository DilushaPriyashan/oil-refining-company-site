import React, { Component } from 'react';
import Structure from "../Containts/Structure"
import './FourthContaints.css';

class FourthContaints extends Component {

    render() {
        return (
            <section className="fourth-hightlight-wrapper">
                <div className='pro-con'>
                    <Structure titleColor="white" title="Coconut Wax"
                        colorClass="white" description="Illuminate your space sustainably with our wholesale coconut wax."
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
export default FourthContaints;