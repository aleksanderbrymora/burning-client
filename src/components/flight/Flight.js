import React, { Component } from 'react';
import axios from 'axios';
import SeatChooser from './SeatChooser';

class Flight extends Component {
	constructor(props) {
		super();
		this.state = {
			id: props.match.params.id,
			flight: null,
			plane: null
		}

		const fetchFlight = () => {
			const URL = `https://aleks-chris-burning-server.herokuapp.com/flights/${this.state.id}.json`;
			axios.get(URL).then((data) => {
				this.setState({ 
					flight: data.data.data,
					plane: data.data.data.plane
				 });
				// console.log(URL);
			})
		}
		fetchFlight();
	}
	
	render() {
		// console.log(this.state);
		// console.log(!!this.state.flight)
		if (!!this.state.plane) {
			const flight = this.state.flight;
			const plane = this.state.plane;
			console.log(flight);
			console.log(plane);
			// console.log(this.state);
			return (
				<div>
					<div className="flight-data">
						<h1>{flight.origin} to {flight.destination}</h1>
						<h2>Flight number: {flight.number}</h2>
						<h3>{flight.date}</h3>
					</div>
					<div className="seats-view">
						
						<SeatChooser rows={plane.row} cols={plane.column} taken={flight.taken_seats} />
					</div>
				</div>
			)
		} else {
			return (null)
		}
	}
}

export default Flight;