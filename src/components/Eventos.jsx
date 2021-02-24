import React from 'react'

export class Eventos extends React.Component {
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

// const Boton = props => (
// 	<button onClick={props.myOnClick}>Boton hecho componente</button>
// )

const Boton = ({ myOnClick }) => (
	<button onClick={myOnClick}>Boton hecho componente</button>
)

export class MasSobreEventos extends React.Component {
	handleClick = (e, mensaje) => {
		console.log(e)
		console.log(e.nativeEvent)
		console.log(e.target)
		console.log(e.nativeEvent.target)
		console.log(mensaje)
	}
	render() {
		return (
			<div className="">
				<h3>Mas sobre eventos</h3>
				<button
					onClick={e =>
						this.handleClick(e, 'Hola pasando parametro desde un evento')
					}
				>
					Saludar
				</button>
				{/* Evento personalizado */}
				{/* <Boton
					onClick={e => this.handleClick(e, 'Hola este es otro parametro')}
				/> */}
				<Boton
					myOnClick={e => this.handleClick(e, 'Hola este es otro parametro')}
				/>
			</div>
		)
	}
}
