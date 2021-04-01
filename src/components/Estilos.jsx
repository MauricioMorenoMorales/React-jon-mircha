import React from 'react'
import '../styles/Estilos.css'
import moduleStyles from '../styles/Estilos.module.css'

const Estilos = () => {
	const myStyles = {
		borderRadius: '.5rem',
		margin: '2rem auto',
		maxWidth: '50%',
	}
	return (
		<section className="estilos">
			<hr />
			<h3 className="bg-react">Estilos en React</h3>
			<h3 className="bg-react">Estilos importados de Css</h3>
			<h3
				className="bg-react"
				style={{ borderRadius: '.25rem', margin: '1rem', background: 'red' }}
			>
				Estilos en linea (atributo Style)
			</h3>
			<h3 className="bg-react" style={myStyles}>
				Estilos en linea variable
			</h3>
			<h3 className="bg-react">
				Agregando Normalize con
				<br /> <code>@import-normalize</code>
			</h3>
			<h3 className={moduleStyles.error}>Estilos con Modulos</h3>
			<h3 className={moduleStyles.success}>Estilos con Modulos</h3>
		</section>
	)
}

export default Estilos
