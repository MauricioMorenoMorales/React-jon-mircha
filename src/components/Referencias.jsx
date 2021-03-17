import React, { createRef, useRef } from 'react'

const Referencias = () => {
	const refMenuBtn = useRef(),
		refMenu = useRef()

	// const refMenuBtn = createRef() Este se usa cuándo estés usando componentes de tipo clase
	const handleToggleMenu = e => {
		if (refMenuBtn.current.textContent === 'Menú') {
			refMenuBtn.current.textContent = 'Cerrar'
			refMenu.current.style.display = 'block'
		} else {
			refMenuBtn.current.textContent = 'Menú'
			refMenu.current.style.display = 'none'
		}
		// const $menu = document.getElementById('menu')
		// let refMenu = createRef()
		// if (e.target.textContent === 'Menu') {
		// 	e.target.textContent = 'Cerrar'
		// 	$menu.style.display = 'block'
		// } else {
		// 	e.target.textContent = 'Menu'
		// 	$menu.style.display = 'none'
		// }
	}

	return (
		<div>
			<hr />
			<h2>Referencias</h2>
			<button ref={refMenuBtn} onClick={handleToggleMenu}>
				Menú
			</button>
			<nav ref={refMenu} style={{ display: 'none' }}>
				<a href="#">Sección 1</a>
				<br />
				<a href="#">Sección 2</a>
				<br />
				<a href="#">Sección 3</a>
				<br />
				<a href="#">Sección 4</a>
				<br />
				<a href="#">Sección 5</a>
				<br />
			</nav>
		</div>
	)
}

export default Referencias
