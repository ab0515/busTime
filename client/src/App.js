import React from 'react';
import {Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from './components/RoutesList';
import NavBar from './components/NavBar';
import RoutesList from './components/RoutesList';
import RouteDetails from './components/RouteDetails';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<NavBar></NavBar>
					<Switch>
						<Route exact path='/' component={RoutesList}></Route>
						<Route path='/routes/:tag' component={RouteDetails}></Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;