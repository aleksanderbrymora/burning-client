import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Flight from './components/flight/Flight';

const Routes = (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/flights/:id" component={Flight} />
		</div>
	</Router>
);

export default Routes;