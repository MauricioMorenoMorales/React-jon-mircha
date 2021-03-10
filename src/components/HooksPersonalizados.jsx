import React from 'react'
import useFetch from '../hooks/useFetch'

const HooksPersonalizados = () => {
	let url = 'https://pokeapi.co/api/v2/poemon/'
	let url2 = 'https://jsonplaceholder.typicode.com/users'
	let { data, isPending, error } = useFetch(url)
	return (
		<div>
			<hr />
			<h3>Hooks personalizados</h3>
			<h3>{JSON.stringify(isPending)}</h3>
			<h3>
				<mark>{JSON.stringify(error)}</mark>
			</h3>
			<h3>
				<pre style={{ whiteSpace: 'pre-wrap' }}>
					<code>{JSON.stringify(data)}</code>
				</pre>
			</h3>
		</div>
	)
}

export default HooksPersonalizados
