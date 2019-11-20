import React, { Component } from 'react'
import axios from 'axios';

class Flight extends Component {
	constructor() {
		super();
		this.state = {
			id: props.match.params.id,
			flight: {}
		}

		const fetchID = () => {
			console.log(this);
			return this
		}

		console.log(this.state.id);
		

		// const fetchFlight = () => {
		// 	axios.get(`http://5a5deda9.ngrok.io/flights/${}.json`).then((data) => {
		// 		this.setState({ flight: data.data });
		// 	})
		// }
		// fetchFlight();
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