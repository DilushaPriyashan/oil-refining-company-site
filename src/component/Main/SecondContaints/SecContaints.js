import React, { Component } from 'react';
import Structure from "../Containts/Structure"
import './SecContaints.css';

class SecondContaints extends Component {

    render() {
        return (
            <section className="second-hightlight-wrapper">
                <div className='pro-con'>
                    <Structure titleColor="white" title="Coconut Oil"
                        colorClass="white" description="Unlock wholesale possibilities with our pure and versatile coconut oil."
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
export default SecondContaints;