import React from 'react';


function CtailBars(props) {
    const whiskey = props.whiskeylist
    let venues = []
    if (whiskey.response){
        venues = whiskey.response.venues
    }

    return (

        <div className="results">
          {venues.length > 0 && venues.map(item =>(
              
              <h1>{item.name}</h1>
          ))}
        </div>
    )
}
export default CtailBars