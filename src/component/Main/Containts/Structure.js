import React, { Component } from 'react';
class Structure extends Component {

	render() {
		const { alert, title, description, price, titleColor, colorClass, priceColor } = this.props;
		return (
			<div className="container">
				<div className="new-alert">
					{alert}
				</div>
				<div className={`title-wraper bold ${titleColor}`}>
					{title}
				</div>

				<div className={`description-wrapper ${colorClass}`}>
					{description}
				</div>

				<div className={`price-wrapper ${priceColor}`}>
					{price}
				</div>

			</div>
		);
	}
}

export default Structure;