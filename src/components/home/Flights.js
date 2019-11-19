import React from 'react'
import { Link } from 'react-router-dom';

const Flight = (props) => {
	const url = `/flight/${props.id}`
	return (
		<p alt={props.id}>
			{props.origin} -> {props.destination} - {props.date} <Link to={url}>Select</Link>
		</p>
	)
}

const Flights = (props) => {
	if (!!props.flights) {
		return (
			<div>
				<h5>Available flights</h5>
				<div>
					{props.flights.map((data) => {
						return (
							<Flight 
								key={data.id}
								id={data.id}
								origin={data.origin}
								destination={data.destination}
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