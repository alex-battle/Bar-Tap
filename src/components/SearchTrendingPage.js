import React from 'react';
import { Link } from 'react-router-dom'

function SearchTrendingPage(props) {
    return (

        <div className="trending-results">
            {props.venues.map((venue, index) => (
                <div>
                    <Link to={`/newyork/${index}`}>{venue.name}</Link>
                </div>
            ))}
        </div>
    )
}
export default SearchTrendingPage