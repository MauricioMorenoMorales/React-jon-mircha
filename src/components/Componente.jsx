import React from 'react'

const Componente = props => {
	return (
		<div>
			<h1>{props.text}</h1>
		</div>
	)
}

Componente.defaultProps = {
	text: 'texto por defecto',
}

export default Componente
