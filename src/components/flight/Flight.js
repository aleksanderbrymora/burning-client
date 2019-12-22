import React, { Component } from 'react';
import axios from 'axios';
import SeatChooser from './SeatChooser';

import Navbar from '../nav/Navbar'

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
				 setTimeout(fetchFlight, 1000);
				 console.log('reload')
				})
		}
		fetchFlight();
	}
	
	render() {
		if (!!this.state.plane) {
			const flight = this.state.flight;
			const plane = this.state.plane;
			return (

				<div>
					<Navbar />
					<div className="container">
						<div className="flight-data m-3">
							<h1>{flight.origin} to {flight.destination}</h1>
							<h3>Flight number: {flight.number}</h3>
							<h5>{flight.date}</h5>
						</div>
						<div className="seats-view mt-5 mx-auto">
							<SeatChooser rows={plane.row} cols={plane.column} taken={flight.taken_seats} flightId={flight.id}/>
						</div>
					</div>
				</div>
			)
		} else {
			return (null)
		}
	}
}

export default Flight;