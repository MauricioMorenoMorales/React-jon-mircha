import React from 'react'

function EstadoHijo(props) {
	return (
		<div>
			<h4>{props.contadorHijo}</h4>
		</div>
	)
}

export default class Estado extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contador: 0,
		}
		setInterval(() => {
			this.setState({ contador: this.state.contador + 1 })
		}, 1000)
	}
	render() {
		return (
			<div>
				<hr />
				<h3>El estado</h3>
				<EstadoHijo contadorHijo={this.state.contador} />
			</div>
		)
	}
}
