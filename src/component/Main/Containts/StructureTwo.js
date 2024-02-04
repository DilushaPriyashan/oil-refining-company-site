import React, { Component } from 'react';

const StructureTwo = (props) => {
    return (
        <div className={`${props.wrapperClass} col-sm-12 col-md-6`}>
            <div className={props.innerClassName}>
                <div className={`title-wraper ${props.titleColor}`}>
                    {props.title}
                </div>
                <div className="description-wraper">
                    {props.description}
                </div>
                <div className="price-wrapper">
                    {props.price}
                </div>
                <div className={`links-wrapper ${props.linkColor}`}>
                    <ul>
                        <li><a href="">{props.link}</a></li>
                        <li>{props.children}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StructureTwo;


