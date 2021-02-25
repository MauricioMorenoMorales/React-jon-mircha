import React, { Component } from 'react'

export default class Padre extends Component {
	state = {
		contador: 0,
	}

	incrementarContador = e =>
		this.setState({ contador: this.state.contador + 1 })

	render() {
		return (
			<div>
				<hr />
				<h3>Comunicacion entre componentes</h3>
				<Hijo
					incrementarContador={this.incrementarContador}
					mensaje={this.state.contador}
				/>
			</div>
		)
	}
}

function Hijo({ mensaje, incrementarContador }) {
	return (
		<>
			<p>
				<b>{mensaje}</b>
			</p>
			<button onClick={incrementarContador}>Incrementar Contador</button>
		</>
	)
}
