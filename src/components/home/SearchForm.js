import React, { Component } from 'react'
import axios from 'axios';

const URL_CITIES = 'https://aleks-chris-burning-server.herokuapp.com/cities.json'

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			cities: [],
			origin: '',
			destination: ''
		}

		const fetchAirports = () => {
			axios.get(URL_CITIES).then((response) => {
				this.setState({
					cities: response.data
				});
			})
		}
		fetchAirports();
		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
		this._handleChangeDestination = this._handleChangeDestination.bind(this);
	}

	_handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state.origin, this.state.destination);
	}

	_handleChangeOrigin(event) {
		this.setState({ origin: event.target.value })
	}

	_handleChangeDestination(event) {
		this.setState({ destination: event.target.value })
	}

	render() {
		return (
			<div>
				<h2>Search for a flight</h2>
				<p>Only try Newcastle and Sydney cause Postman is confusing</p>
				<form onSubmit={this._handleSubmit}>
					<select
						onChange={this._handleChangeOrigin}
						value={this.state.origin}
						name="origin"
						id="origin"
						required
					>
						<option></option>
						{this.state.cities.map((airport) => {
							return <option value={airport} key={airport}>{airport}</option>
						})}
					</select>
					<select
						onChange={this._handleChangeDestination}
						value={this.state.destination}
						name="destination"
						id="destination"
						required
					>
						<option></option>
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