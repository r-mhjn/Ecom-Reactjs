import React from 'react';

export default class QuantityChangeButtons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="input-group quantityDiv">
					<button
						className="incdecButtons"
						onClick={() => {
							this.props.decrement(this.props.item, this.props.index);
						}}
					>
						-
					</button>
					<input
						type="text"
						value={this.props.item.quantity}
						onChange={e => {}}
						style={{
							width: 40,
							height: 30,
							padding: 8,
							borderLeft: 0,
							borderRight: 0,
							color: 'black',
							fontSize: 14,
							borderColor: '#A3A3A3',
							textAlign: 'center',
						}}
						min="1"
						max={this.props.item.stockAvailable}
					></input>
					<button
						className="incdecButtons"
						onClick={() => {
							console.log('inc1');
							this.props.increment(this.props.item, this.props.index);
						}}
					>
						+
					</button>
				</div>
			</div>
		);
	}
}
