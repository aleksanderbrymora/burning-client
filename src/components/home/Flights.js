import React from 'react'
import { Link } from 'react-router-dom';

const Flight = (props) => {
	const url = `/flights/${props.id}`
	return (
		<p alt={props.id}>
			{props.origin} -> {props.destination} - {props.date} - <Link to={url}>Select</Link>
		</p>
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