import React from 'react'

export default class Eventos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contador: 0,
		}
		this.sumar = this.sumar.bind(this)
		this.restar = this.restar.bind(this)
	}
	sumar() {
		this.setState({
			contador: this.state.contador + 1,
		})
	}
	restar() {
		this.setState({
			contador: this.state.contador - 1,
		})
	}
	render() {
		return (
			<div>
				<hr />
				<h3>Eventos en Componentes de Clase</h3>
				<h4>{this.state.contador}</h4>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
			</div>
		)
	}
}
