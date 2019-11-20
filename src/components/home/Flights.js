import React from 'react'
import { Link } from 'react-router-dom';

const Flight = (props) => {
	const url = `/flights/${props.id}`
	return (
		<div className="card w-50 text-center">
			<div className="card-body">
				<h5 className="card-title">
					{props.origin} to {props.destination}
				</h5>
				<p className="card-text" alt={props.id}>
					{props.date}
				</p>
				<Link className="btn btn-outline-primary" to={url}>Select</Link>
			</div>
		</div>
	)
}

const Flights = (props) => {
	if (!!props.flights) {
		return (
			<div>
				<h5>Available flights</h5>
				<div>
					{props.flights.map((flight) => {
						return (
							<Flight 
								key={flight.id}
								id={flight.id}
								date={flight.date}
								origin={flight.origin}
								destination={flight.destination}
							/>
						)
					})}
				</div>
			</div>
		);
	} else {
		return (null);
	}
}

export default Flights;