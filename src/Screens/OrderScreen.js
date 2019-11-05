import React from 'react';

export default class OrderScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cart: [],
		};
	}
	componentDidMount() {
		console.log(this.props.cart);
		this._getCartFromLocalStorage();
	}

	_getCartFromLocalStorage = () => {
		let cart = JSON.parse(localStorage.getItem('cart'));
		this.setState({ cart });
	};

	render() {
		return (
			<div>
				<div
					id="main-div"
					className="productDiv"
					style={{
						maxWidth: '1000px',
						margin: '30px 0px',
						padding: '10px',
						// border: "2px solid black",
						position: 'relative',
						float: 'left',
					}}
				>
					<div className="container-fluid">
						<div className="row">
							{this.state.cart.map((item, index) => {
								return (
									<div
										key={index}
										className="card"
										style={{ margin: 1000, backgroundColor: '#fff' }}
										style={{ maxWidth: 840 }}
									>
										<div className="row no-gutters">
											<div className="col-md-4">
												<img
													src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
													className="card-img"
													alt="..."
												/>
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<h5 className="card-title">{item.productName}</h5>
													<p className="card-text" style={{ color: '#B8B8B8' }}>
														<strong>Price: </strong>
														{item.price}
														<br />
														<strong>Delivery Time: </strong>
														{item.deliveryTime}
														<br />
														<strong>Quantity: </strong>
														{item.quantity}
														<br />
													</p>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
