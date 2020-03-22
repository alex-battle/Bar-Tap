import React from 'react';


function CtailBars(props) {
    const ctail = props.cocktaillist
    let venues = []
    if (ctail.response) {
        venues = ctail.response.venues
    }

    return (

        <div className="results">
            {venues.length > 0 && venues.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    )
}
export default CtailBars