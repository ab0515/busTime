import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';

const RoutesList = () => {
	const [routes, setRoutes] = useState();

	useEffect(() => {
		axios
		.get("http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=ttc")
		.then(({ data }) => {
			setRoutes(data);
		});
	}, []);

	return routes ? (
		<div>
			<ul>
				{routes.route.map(route => (
					<li key={route.tag}>
						<Link to={`/routes/${route.tag}`}>{route.title}</Link> 
					</li>
				))}
			</ul>
		</div>
	) : (
		<div>Loading...</div>
	)
};

export default RoutesList;