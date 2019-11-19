import React from 'react'

import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';

const Routes = (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route exact path="/:origin/:destination" component={Home} />
		</div>
	</Router>
);

export default Routes;