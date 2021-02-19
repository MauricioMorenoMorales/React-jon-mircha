import React from 'react'
import data from '../helpers/data.json'

function ElementoLista(props) {
	const { element } = props
	return (
		<li>
			<a href={element.web} target="_blank">
				{element.name}
			</a>
		</li>
	)
}

export default class RenderizadoElementos extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
		}
	}
	render() {
		console.log(data)
		return (
			<div>
				<hr></hr>
				<h3>Renderizado de Elementos</h3>
				<ol>
					{this.state.seasons.map((e, i) => (
						<li key={i}>{e}</li>
					))}
				</ol>
				<h3>Frameworks Frontend Javascript</h3>
				<ol>
					{data.frameworks.map(e => (
						<ElementoLista key={e.id} element={e} />
					))}
				</ol>
			</div>
		)
	}
}
