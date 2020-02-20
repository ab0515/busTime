import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from 'axios';

const RoutesList = () => {
	const [routes, setRoutes] = useState();
	const PlayerAPI = {
		players: [
		  { number: 1, name: "Ben Blocker", position: "G" },
		  { number: 2, name: "Dave Defender", position: "D" },
		  { number: 3, name: "Sam Sweeper", position: "D" },
		  { number: 4, name: "Matt Midfielder", position: "M" },
		  { number: 5, name: "William Winger", position: "M" },
		  { number: 6, name: "Fillipe Forward", position: "F" }
		]
	};

	// return (
	// 	<div>
	// 		<ul>
	// 			{
	// 				PlayerAPI.players.map(p => (
	// 					<li key={p.number}>
	// 						<Link to={`/routes/${p.number}`}>{p.name}</Link>
	// 					</li>
	// 				))
	// 			}
	// 		</ul>
	// 	</div>
	// )

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