import React from 'react';

function LoungeBars(props) {
    const lounges = props.loungelist
    let loungeDisplay
    
    if (lounges !== undefined) {
        loungeDisplay = lounges.response.venues.map((venues) => {
            return(
                <div>
                    <h1>{venues.name}</h1>
                </div>
            )
        })
        }

    return (

        <div className="results">
            <h1>Lounges</h1>
            <h2>{loungeDisplay}</h2>
        </div>
    )
}
export default LoungeBars