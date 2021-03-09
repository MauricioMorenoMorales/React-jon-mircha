import React, { useState, useEffect } from 'react'

const ScrollHooks = () => {
	const [scrollY, setScrollY] = useState(0)
	const [name, setName] = useState('John')
	useEffect(() => {
		const detectarScroll = () => setScrollY(window.pageYOffset)
		window.addEventListener('scroll', detectarScroll)
		return () => {
			window.removeEventListener('scroll', detectarScroll)
		}
	}, [scrollY])
	// useEffect(() => console.log('fase de montaje'), [])
	// useEffect(() => console.log('fase de actualizacion'))
	// useEffect(() => {
	// 	return () => {
	// 		console.log('Fase de Desmontaje')
	// 	}
	// })
	return (
		<div>
			<h3>Hooks - useEffect y el ciclo de Vida</h3>
			<p>Scroll Y de el navegador {scrollY}px</p>
		</div>
	)
}

export default ScrollHooks
