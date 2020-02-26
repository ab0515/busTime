import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const RouteDetails = (props) => {
    const [details, setDetails] = useState();
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        axios 
        .get("http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=ttc&r="+props.match.params.tag)
        .then(({ data }) => {
            setDetails(data);
            setDirections(data.route.direction);
        });
    }, []);
    
    return details ? (
        <div>
            <h4>Choose your direction</h4>
            <ul>
                {details.route.direction.map(dir => (
                    <li key={dir.tag}>
                        {dir.title}
                    </li>
                ))}
            </ul>
            <Link to='/'>Back</Link>
        </div>
    ) : (
        <div>
            <div>Loading...</div>
        </div>
    )
};

export default RouteDetails;