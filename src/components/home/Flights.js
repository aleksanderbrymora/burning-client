import React from 'react'

const Flights = (props) => {
	console.log(props);
	console.log((!!props.flights));

	if (!!props.flights) {
		return (
			<div>
				<h5>Available flights</h5>
				{props.flights.map((data) => <p> {data.origin} -> {data.destination} - {data.date} </p>)}
			</div>
		);
	} else {
		return (
			<div></div>
		)
	}
}

export default Flights;