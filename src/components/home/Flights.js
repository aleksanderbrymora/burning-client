import React from 'react'

const Flights = (props) => {
	console.log(props);
	return (
		<div>
			<h5>Available flights</h5>
			{/* {props.map((data) => <p> {data.origin} -> {data.destination} - {data.date} </p>)} */}
		</div>
	);
}

export default Flights;