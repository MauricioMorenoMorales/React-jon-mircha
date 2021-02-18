import React from 'react'

function Login() {
	return (
		<>
			<h3>Login</h3>
		</>
	)
}
function Logout() {
	return (
		<>
			<h3>Logout</h3>
		</>
	)
}

export default class RenderizadoCondicional extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			session: false,
		}
	}
	render() {
		return (
			<div>
				<h3>Renderizado condicional</h3>
				{this.state.session ? <Login /> : <Logout />}
			</div>
		)
	}
}
