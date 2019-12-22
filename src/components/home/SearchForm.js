import React, { Component } from 'react'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

const URL_CITIES = 'https://aleks-chris-burning-server.herokuapp.com/cities.json'

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			cities: [],
			destinations: [],
			origin: '',
			destination: '',
			response: false
		};

		const fetchAirports = () => {
			axios.get(URL_CITIES).then((response) => {
				this.setState({
					cities: response.data,
					response: true
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
		this.setState({ destinations: [] });
		this.setState({ origin: event.target.value })
		axios.get(`https://aleks-chris-burning-server.herokuapp.com/${event.target.value.toLowerCase()}/destinations.json`).then((r) => {
			console.log(r);
			this.setState({ destinations: r.data });
		})
	}

	_handleChangeDestination(event) {
		this.setState({ destination: event.target.value })
	}

	render() {
		return (
			<div>
				<h2 className="display-3">Search for a flight</h2>
				<form onSubmit={this._handleSubmit} className="my-5">
					<h5>Choose the airport</h5>
					{this.state.response
						? <div className="input-group">
							<div className="input-group-prepend">

							</div>
							<select
								onChange={this._handleChangeOrigin}
								value={this.state.origin}
								name="origin"
								id="origin"
								required
								className="custom-select"
							>
								<option/>
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
								className="custom-select"
							>
								<option/>
								{this.state.destinations.map((airport) => {
									return <option value={airport} key={airport}>{airport}</option>
								})}
							</select>
							<div className="input-group-append">
								<input type="submit" value="Search" className="btn btn-outline-primary" />
							</div>
						</div>
						: <div>
							<p>Please give Heroku a second...</p>
							<Spinner animation="border" role="status">
								<span className="sr-only">Loading...</span>
							</Spinner>
						</div>
					}
				</form>
			</div>
		)
	}
}

export default SearchForm;