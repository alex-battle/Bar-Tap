import React from 'react';


function HookahBars(props) {
    const hookah = props.hookahlist
    let venues = []
    if(hookah.response){
        venues = hookah.response.venues
    }

    return (

        <div className="results">
            <h1>Hookah Bars</h1>
         {venues.length > 0 && venues.map(item =>(
             <h1>{item.name}</h1>
         ))}
        </div>
    )


}
export default HookahBars