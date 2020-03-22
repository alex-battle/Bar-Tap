import React from 'react';


function SportsBar(props) {
    const sports = props.sportsbarlist
    console.log(sports)
    let sportsDisplay

    if (sports !== undefined) {
        sportsDisplay = sports.response.venues.map((venues) => {
            return (
                <div>
                    <h1>{venues.name}</h1>
                </div>
            )
        })
    }

    return (

        <div className="results">
            <h1>Sports Bars</h1>
            <h2>{sportsDisplay}</h2>
        </div>
    )
}
export default SportsBar