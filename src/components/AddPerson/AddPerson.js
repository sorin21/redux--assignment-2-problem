import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
	state = {
		name: '',
		age: ''
	}

	nameChangehandler = (event) => {
		this.setState({name: event.target.value})
	}
	ageChangehandler = (event) => {
		this.setState({age: event.target.value})
	}
	render() {
		return (
			<div className="AddPerson" >
				<input type="text" placeholder="Name" onChange={this.nameChangehandler} value={this.state.name} />
				<input type="number" placeholder="Age" onChange={this.ageChangehandler} value={this.state.age} />
				<button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
			</div>
		);
	}
}



export default AddPerson;