import React from 'react'

const Flights = (props) => {
	if (!!props.flights) {
		return (
			<div>
				<h5>Available flights</h5>
				{props.flights.map((data) => <p key={data.id}> {data.origin} -> {data.destination} - {data.date} </p>)}
			</div>
		);
	} else return (null)
}

export default Flights;