import React, { Component } from 'react'
import axios from 'axios';

const SERVER_URL = 'http://localhost:3333'

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			origin: [],
			destination: []
		}

		const fetchAirports = () => {
			axios.get(`${SERVER_URL}/flights.json`).then((response) => {
				this.setState({
					origin: response.origins,
					destination: response.destinations
				});
			})
		}
		fetchAirports();

		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit () {

	}

	render() {
		return (
			<form onSubmit={this._handleSubmit}>
				<select name="origin" id="origin" required>
					{this.state.origin.map((airport) => {
						return <option value={airport.id}>{airport.name}</option>
					})}
				</select>
				<select name="destination" id="destination" required>
					{this.state.destination.map((airport) => {
						return <option value={airport.id}>{airport.name}</option>
					})}
				</select>
				<input type="submit" value="Search" />
			</form>
		)
	}
}

export default SearchForm;