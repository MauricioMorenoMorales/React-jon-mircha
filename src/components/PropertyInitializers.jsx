import React from 'react'

export class PropertyInitializers extends React.Component {
	state = {
		contador: 0,
	}
	sumar = e => {
		this.setState({
			contador: this.state.contador + 1,
		})
	}
	restar = e => {
		this.setState({
			contador: this.state.contador - 1,
		})
	}
	render() {
		return (
			<div>
				<hr />
				<h3>Property Initializers</h3>
				<h4>{this.state.contador}</h4>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
			</div>
		)
	}
}
