import React, { useState, useEffect } from 'react'

function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	)
}

const AjaxHooks = () => {
	const [pokemons, setPokemons] = useState([])
	useEffect(() => {
		const getPokemons = async url => {
			let res = await fetch(url),
				json = await res.json()

			json.results.forEach(async el => {
				let res = await fetch(el.url),
					json = await res.json()
				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				}
				setPokemons(pokemons => [...pokemons, pokemon])
			})
		}
		getPokemons('https://pokeapi.co/api/v2/pokemon/')
	}, [])
	return (
		<div>
			<hr />
			<h3>Peticiones Asincronas con Hooks</h3>
			{pokemons.length === 0 ? (
				<h4>cargando</h4>
			) : (
				pokemons.map(el => (
					<Pokemon key={el.id} name={el.name} avatar={el.avatar} />
				))
			)}
		</div>
	)
}

export default AjaxHooks
