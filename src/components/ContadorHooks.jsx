import React, { useState } from 'react'

const ContadorHooks = props => {
	const [contador, setContador] = useState(0)

	const sumar = () => setContador(contador + 1)

	const restar = () => setContador(contador - 1)

	return (
		<div>
			<hr />
			<h3>Hooks use State</h3>
			<nav>
				<button onClick={sumar}>+</button>
				<button onClick={restar}>-</button>
			</nav>
			<p>contador de {props.titulo}</p>
			<h3>{contador}</h3>
		</div>
	)
}

export default ContadorHooks

ContadorHooks.defaultProps = {
	titulo: 'Clicks',
}
