import React from 'react';
import {Link} from 'react-router-dom';

const RouteDetails = (props) => {
    return (
        <div>
            <h4>Here </h4>
            <p>{props.match.params.tag}</p>
            <Link to='/'>Back</Link>
        </div>
    )
};

export default RouteDetails;