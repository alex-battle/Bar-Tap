import React from 'react';


function AllBars(props) {

    const venue = props.list.response
    
    let venuesdisplay

    if (venue !== undefined) {
        venuesdisplay = venue.venues.map((venues) => {
            return (
                <div>
                    <h1>{venues.name}</h1>
                </div>
            )
        })
    }
    return (
        <div className="results">
            <h1>All Bars</h1>
            {venuesdisplay}
        </div>
    )
}
export default AllBars