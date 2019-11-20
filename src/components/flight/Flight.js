import React, { Component } from 'react'
import axios from 'axios';

class Flight extends Component {
	constructor(props) {
		super();
		this.state = {
			id: props.match.params.id,
			flight: {}
		}

		const fetchFlight = () => {
			const URL = `https://aleks-chris-burning-server.herokuapp.com/flights/${this.state.id}.json`;
			axios.get(URL).then((data) => {
					// console.log(data.data.data);
					this.setState({ flight: data.data.data });
					console.log(this.state);
				})
		}
		fetchFlight();
	}
	
	fetchID() {

	}

	render() {
		return (
			<div>
				<h2>{this.props.match.params.id}</h2>
			</div>
		)
	}
}

export default Flight;