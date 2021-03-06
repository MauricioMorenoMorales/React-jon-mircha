import logo from './logo.svg'
import Component from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import {
	Eventos,
	PropertyInitializers,
	MasSobreEventos,
} from './components/Eventos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Referencias from './components/Referencias'
import { FormulariosObjeto as Formularios } from './components/Formularios'
import Estilos from './components/Estilos'
import ComponentesEstilizados from './components/ComponentesEstilizados'

import './App.css'

// ! Html Css

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
				<ComponentesEstilizados />
				<ComunicacionComponentes />
				<MasSobreEventos />
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
				<Estado />
				<RenderizadoCondicional />
				<RenderizadoElementos />
				<Eventos />
				<PropertyInitializers />
				<CicloVida />
				<AjaxApis />
				<ContadorHooks />
				<ScrollHooks />
				<RelojHooks />
				<AjaxHooks />
				<HooksPersonalizados />
				<Referencias />
				<Formularios />
				<Estilos />
			</header>
		</div>
	)
}

export default App
