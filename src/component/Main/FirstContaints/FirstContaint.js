import React, { Component } from "react"
import "./FirstContaint.css";
import Structure from "../Containts/Structure";

class FirstContaint extends Component {
	render() {
		return (
			<section className="first-hightlight-wrapper">
				<div className='pro-con'>
					<Structure titleColor="white" title="Palm Oil"
						colorClass="white" description="Discover the richness and sustainability of our palm oil."
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

export default FirstContaint;

