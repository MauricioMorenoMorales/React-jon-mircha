import React, { useState } from 'react'

export const FormulariosObjeto = () => {
	const [form, setForm] = useState({})

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handleChecked = e => {
		setForm({
			...form,
			[e.target.name]: e.target.checked,
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		alert('El formulario se ha enviado correctamente')
	}
	return (
		<div>
			<hr />
			<h3>Formularios</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre</label>
				<input
					type="text"
					name="nombre"
					id="nombre"
					value={form.nombre}
					onChange={handleChange}
				/>
				<p>Elije tu Sabor JS Favorito</p>
				<input
					type="radio"
					id="vanilla"
					name="sabor"
					value="vanilla"
					defaultChecked
					onChange={handleChange}
				/>
				<label htmlFor="vanilla">Vanilla</label>
				<input
					type="radio"
					id="react"
					name="sabor"
					value="react"
					onChange={handleChange}
				/>
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="vue"
					name="sabor"
					value="vue"
					onChange={handleChange}
				/>
				<label htmlFor="vue">Vue</label>
				<input
					type="radio"
					id="svelte"
					name="sabor"
					value="svelte"
					onChange={handleChange}
				/>
				<label htmlFor="svelte">Svelte</label>
				<p>Selecciona tu lenguaje de programacion favorito</p>
				<select name="lenguaje" id="" onChange={handleChange}>
					<option value="" defaultValue>
						---
					</option>
					<option value="js">Javascript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">GO</option>
					<option value="rb">Ruby</option>
					<option value="hs">Haskell</option>
				</select>
				<br />
				<label htmlFor="terminos">Acepto términos y condiciones</label>
				<input
					type="checkbox"
					name="terminos"
					id="terminos"
					onChange={handleChecked}
				/>
				<br />
				<button type="submit">Enviar formulario</button>
			</form>
		</div>
	)
}

//Versión con muchos estados
export const FormulariosMultiplesestados = () => {
	const [nombre, setNombre] = useState('')
	const [sabor, setSabor] = useState('')
	const [lenguaje, setLenguaje] = useState('')
	const [terminos, setTerminos] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		alert('El formulario se ha enviado correctamente')
	}
	return (
		<div>
			<hr />
			<h3>Formularios</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre</label>
				<input
					type="text"
					name="nombre"
					id="nombre"
					value={nombre}
					onChange={e => setNombre(e.target.value)}
				/>
				<p>Elije tu Sabor JS Favorito</p>
				<input
					type="radio"
					id="vanilla"
					name="sabor"
					value="vanilla"
					defaultChecked
					onChange={e => setSabor(e.target.value)}
				/>
				<label htmlFor="vanilla">Vanilla</label>
				<input
					type="radio"
					id="react"
					name="sabor"
					value="react"
					onChange={e => setSabor(e.target.value)}
				/>
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="vue"
					name="sabor"
					value="vue"
					onChange={e => setSabor(e.target.value)}
				/>
				<label htmlFor="vue">Vue</label>
				<input
					type="radio"
					id="svelte"
					name="sabor"
					value="svelte"
					onChange={e => setSabor(e.target.value)}
				/>
				<label htmlFor="svelte">Svelte</label>
				<p>Selecciona tu lenguaje de programacion favorito</p>
				<select
					name="lenguaje"
					id=""
					onChange={e => setLenguaje(e.target.value)}
				>
					<option value="" defaultValue>
						---
					</option>
					<option value="js">Javascript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go">GO</option>
					<option value="rb">Ruby</option>
					<option value="hs">Haskell</option>
				</select>
				<br />
				<label htmlFor="terminos">Acepto términos y condiciones</label>
				<input
					type="checkbox"
					name="terminos"
					id="terminos"
					onChange={e => setTerminos(e.target.checked)}
				/>
				<br />
				<button type="submit">Enviar formulario</button>
			</form>
		</div>
	)
}
