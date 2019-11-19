import React, { Component } from 'react'
import axios from 'axios';

const SERVER_URL = 'https://18d09913-278a-4ef4-94ac-3ed82f097c1c.mock.pstmn.io/flights'

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			cities: []
		}

		const fetchAirports = () => {
			axios.get(SERVER_URL).then((response) => {
				this.setState({
					cities: response.data.cities
				});
			})
		}
		fetchAirports();
		
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit (event) {
		event.preventDefault();
	}
	
	render() {
		return (
			<div>
				<h2>Search for a flight</h2>
				<form onSubmit={this._handleSubmit}>
					<select 
						name="origin" 
						id="origin" 
						required 
					>
						{this.state.cities.map((airport) => {
							return <option value={airport} key={airport}>{airport}</option>
						})}
					</select>
					<select 
						name="destination" 
						id="destination" 
						required
					>
						{this.state.cities.map((airport) => {
							return <option value={airport} key={airport}>{airport}</option>
						})}
					</select>
					<input type="submit" value="Search" />
				</form>
			</div>
		)
	}
}

export default SearchForm;