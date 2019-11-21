import React from 'react'
import { Link } from 'react-router-dom';

// !Temp links for the navigation between React and Server sites
// const serverURL = 'https://aleks-chris-burning-server.herokuapp.com';
const serverURL = 'https://aleks-chris-burning-server.herokuapp.com'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/" > SkyFlying </Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href={serverURL}>User Panel</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar