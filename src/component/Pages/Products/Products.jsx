import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Products extends Component {
	constructor() {
		super();
		this.state = {
			products: []
		}
	}
	componentDidMount() {
		fetch("./proDescription.json")
			.then(res => res.json())
			.then((x) => {

				this.setState((state) => {
					return {
						products: x.products,
					};
				})
			})
	}

	render() {
		console.log(this.state.products)
		let order = 1;
		return (
			<div>
				<section className="internal-page-wrapper">
					<div className="container">
						<div className="row justify-content-center text-center">
							<div className="col-12">
								<div className="title-wraper large">
									Welcome to VM Industry's Products Page<br />

								</div>

							</div>
						</div>
						{
							this.state.products.map((product) => {
								let id = product.Id;
								let productPage = "/product/" + id;

								let order1 = 1;
								let order2 = 2;
								if (order != 1) {
									order1 = 2;
									order2 = 1;
									order--;
								} else {
									order++;
								}

								let productDiv =
									<div key={id} className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
											<div className="product-title">
												{product.Title}
											</div>
											<div className="description-wraper">
												{product.Brief}
											</div>
											<br></br>
											<div className="description-wraper">
												<b>Production Process : </b>
												{product.Description1}
											</div>

											<br></br>
											<div className="description-wraper">
												<b>Specifications : </b>
												{product.Description2}
												<br></br>
												{product.Description3}
												<br></br>
												{product.Description4}
											</div>

											<br></br>

											<div className="description-wraper">
												<b>Applications : </b>
												{product.Description5}
											</div>
											<br></br>

											<div className="description-wraper">
												<b>Testing and Quality Assurance : </b>
												{product.Description6}
											</div>

											<br></br>

											<div className="description-wraper">
												<b>Usage Guidelines : </b>
												{product.Description7}
											</div>

											<br></br>

											<div className="description-wraper">
												<b>Packaging and Labeling : </b>
												{product.Description8}
											</div>



											<div className="links-wrapper">
												<ul>
													<li>
														<a href="/orders">Go to Order</a>
													</li>
												</ul>
											</div>
										</div>

										<div className={`col-sm-12 col-md-6 order-${order2}`}>
											<div className="prodict-image">
												<img src={product.img} />
											</div>
										</div>
									</div>
									;
								return productDiv;
							})
						}

					</div>
				</section>
			</div>
		)
	}
}

export default Products;
