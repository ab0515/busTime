import React, { useState, useEffect } from 'react';
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
						{route.title}
					</li>
				))}
			</ul>
		</div>
	) : (
		<div>Loading...</div>
	)
};

export default RoutesList;