import React, { Component } from 'react'
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

export default class App extends Component {
	state = {
		ninjas :[
			{ name: 'Ryu', age: 30, belt: 'Blue', id : 1 },
			{ name: 'Bizon', age: 43, belt: 'Red', id : 2 },
			{ name: 'Ken', age: 23, belt: 'White', id : 3 },
		]
	}
	addNinja = (ninja) => {
		ninja.id = Math.random();
		let ninjas = [...this.state.ninjas, ninja];
		this.setState({ninjas});
	}

	deleteNinja = (id) => {
		let ninjas = this.state.ninjas.filter(ninja => {
			return ninja.id !== id;
		})
		this.setState({ninjas});
	}
	render() {
		return (
			<div className="App">
				<h1>Oi</h1>
				<p>Bem vindo</p>
				<Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
				<AddNinja addNinja={this.addNinja} />
			</div>
		)
	}
}