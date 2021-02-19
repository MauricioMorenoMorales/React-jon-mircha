import React from 'react'

const Componente = props => {
	return (
		<div>
			<h3>{props.text}</h3>
		</div>
	)
}

Componente.defaultProps = {
	text: 'texto por defecto',
}

export default Componente
