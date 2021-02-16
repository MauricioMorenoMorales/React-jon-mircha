import logo from './logo.svg'
import Component from './components/Componente'
import Propiedades from './components/Propiedades'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Component text="Hola mundo desde un componente" />
				<Propiedades
					cadena="Esto es una cadena de texto"
					numero={12345}
					booleano={false}
					arreglo={[1, 2, 3]}
					objeto={{ nombre: 'Mauricio', correo: 'No lo recuerdo joven' }}
					funcion={num => num * num}
					elementoReact={<i>Esto es un elemento react</i>}
					componenteReact={<Component />}
				/>
			</header>
		</div>
	)
}

export default App
