import React from 'react'

class Reloj extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillUnmount() {
		// console.log(3, 'El componente ha sido eliminado de el DOM')
	}
	render() {
		return <h4>{this.props.hora}</h4>
	}
}

export default class CicloVida extends React.Component {
	constructor(props) {
		//Primero en ejecutarse
		super(props)
		// console.log(0, 'El componente se inicializa, aún no está en el DOM')
		this.state = {
			hora: new Date().toLocaleTimeString(),
			visible: false,
		}
		this.temporizador = null
	}
	componentDidMount() {
		//Tercero en ejecutarse
		// console.log(1, 'El componente ya se encuentra en el dom')
	}
	componentDidUpdate(prevProps, prevState) {
		//Cuarto en ejecutarse
		// console.log(2, 'El estado o las props de el componente han cambiado')
		// console.log(prevProps)
		// console.log(prevProps)
	}
	componentWillUnmount() {
		// console.log(3, 'El componente ha sido eliminado de el DOM')
	}
	tictac = () => {
		this.temporizador = setInterval(() => {
			this.setState({
				hora: new Date().toLocaleTimeString(),
			})
		}, 1000)
	}
	iniciar = () => {
		this.tictac()
		this.setState({
			visible: true,
		})
	}
	detener = () => {
		clearInterval(this.temporizador)
		this.setState({
			visible: false,
		})
	}
	render() {
		//Segundo en ejecutarse
		// console.log(
		// 	4,
		// 	'El componente se dibuja o redibuja por algún cambio en el DOM',
		// )
		return (
			<div>
				<hr />
				<h3>Ciclo de vida de los componentes</h3>
				{this.state.visible && <Reloj hora={this.state.hora} />}
				<button onClick={this.iniciar}>Iniciar</button>
				<button onClick={this.detener}>Detener</button>
			</div>
		)
	}
}
