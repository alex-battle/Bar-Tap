import React from 'react';


function DiveBars(props) {
    const dive = props.divelist
    console.log(dive)
    let venues = []
    if (dive.response) {
        venues = dive.response.venues
    }

    return (

        <div className="results">
            {venues.length > 0 && venues.map(item => (
               
               <h1>{item.name}</h1>
            ))}
        </div>
    )
}
export default DiveBars