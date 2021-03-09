import React, { useState, useEffect } from 'react'

const Reloj = ({ hora }) => <h3>{hora}</h3>

const RelojHooks = () => {
	const [hora, setHora] = useState(new Date().toLocaleTimeString())
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		let temporizador
		if (visible) {
			temporizador = setInterval(() => {
				setHora(new Date().toLocaleTimeString())
			}, 1000)
		} else {
			clearInterval(temporizador)
		}
		return () => {
			console.log('Fase de Desmontaje')
			clearInterval(temporizador)
		}
	}, [visible])

	const tictac = valor => setVisible(valor)
	return (
		<div>
			<hr />
			<h3>Reloj con hooks</h3>
			{visible && <Reloj hora={hora} />}
			<button onClick={() => tictac(true)}>Iniciar</button>
			<button onClick={() => tictac(false)}>Detener</button>
		</div>
	)
}

export default RelojHooks
