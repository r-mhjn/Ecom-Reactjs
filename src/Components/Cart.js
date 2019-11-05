import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import QuantityChangeButtons from './QuantityChangeButtons';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			quantityValue: 1,
		};
	}

	checkOut = () => {};

	getSubTotal = () => {
		let subtotal = 0;
		for (let i = 0; i < this.props.cart.length; i++) {
			subtotal += parseInt(this.props.cart[i].price) * this.props.cart[i].quantity;
		}
		return subtotal.toFixed(2);
	};

	render() {
		return (
			<div>
				<div className="cartDiv">
					<span
						style={{
							display: this.props.cart.length === 0 ? 'block' : 'none',
							color: '#808291',
							fontSize: 24,
							position: 'relative',
							top: 250,
							left: 70,
						}}
					>
						YOUR CART IS EMPTY
					</span>
					{this.props.cart.map((item, index) => {
						return (
							<div key={index}>
								<div className="card mb-3 cardDiv">
									<div className="row no-gutters">
										<div className="col-md-4">
											<img
												src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
												className="card-img"
												alt="..."
												style={{ height: 120, marginTop: 25 }}
											/>
										</div>
										<div className="col-md-8">
											<div className="card-body">
												<h5 className="card-title" style={{ color: 'black' }}>
													{item.productName}
												</h5>

												<p className="small" style={{ color: '#A3A3A3' }}>
													This is a wider card with supporting text below as a natural lead-in
													to additional content. This content is a little bit longer.
												</p>
												<QuantityChangeButtons
													item={item}
													index={index}
													increment={this.props.increment}
													decrement={this.props.decrement}
												/>
												<div
													style={{
														position: 'relative',
														left: 138,
														top: -24,
														fontSize: 20,
														color: 'black',
													}}
												>
													<span>&#x20b9; {item.quantity * item.price}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<hr className="lineDivider"></hr>
							</div>
						);
					})}
				</div>
				<div
					className="checkoutDiv"
					style={{
						display: this.props.cart.length === 0 ? 'none' : 'block',
					}}
				>
					<div>
						<span className="checkoutSpan">SubTotal: </span>
						<span
							style={{
								position: 'relative',
								left: 134,
								fontSize: 20,
								color: 'black',
							}}
						>
							{this.getSubTotal()}
						</span>
					</div>

					<Link to="/order" className="button button-block buttonStyle" style={{ textDecoration: 'none' }}>
						<span style={{ color: '#fff' }}>Checkout</span>
					</Link>
				</div>
			</div>
		);
	}
}
