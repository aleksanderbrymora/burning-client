import React, { Component } from 'react'
import axios from 'axios';

const SERVER_URL = 'https://18d09913-278a-4ef4-94ac-3ed82f097c1c.mock.pstmn.io/flights'

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			origin: [],
			destination: []
		}

		const fetchAirports = () => {
			axios.get(SERVER_URL).then((response) => {
				console.log(response);
				console.log(this);
				this.setState({
					origin: response.data.origin,
					destination: response.data.destination
				});
			})
		}
		fetchAirports();
		

		this._handleSubmit = this._handleSubmit.bind(this);
		// this._handleChange = this._handleChangeOrigin.bind(this);
		// this._handleChange = this._handleChangeDestination.bind(this);
	}

	_handleSubmit () {
		event.preventDefault();
		this.props.onSubmit(this.state.content);
		this.setState({content: ''});
	}

	// _handleChangeDestination() {

	// }

	// _handleChangeOrigin () {

	// }
	
	render() {
		return (
			<form onSubmit={this._handleSubmit}>
				<select 
					name="origin" 
					id="origin" 
					required 
				>
					{this.state.origin.map((airport) => {
						return <option value={airport.id}>{airport.name}</option>
					})}
				</select>
				<select 
					name="destination" 
					id="destination" 
					required
				>
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