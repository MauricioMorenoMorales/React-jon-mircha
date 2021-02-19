import React from 'react'
import propTypes from 'prop-types'

const Propiedades = props => {
	return (
		<div>
			<hr />
			<h3>{props.porDefecto}</h3>
			<ul>
				<li>{props.cadena}</li>
				<li>{props.numero}</li>
				<li>{props.booleano ? 'verdadero' : 'falso'}</li>
				<li>{props.arreglo.join(', ')}</li>
				<li>{props.objeto.nombre + ' - ' + props.objeto.correo}</li>
				<li>{props.elementoReact}</li>
				<li>{props.arreglo.map(props.funcion).join(', ')}</li>
				<li>{props.componenteReact}</li>
			</ul>
		</div>
	)
}

Propiedades.defaultProps = {
	porDefecto: 'Las props',
}

Propiedades.propTypes = {
	cadena: propTypes.string.isRequired,
	numero: propTypes.number.isRequired,
	booleano: propTypes.bool.isRequired,
}

export default Propiedades
