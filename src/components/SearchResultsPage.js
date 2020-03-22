import React from 'react';

function SearchResultsPage(props){
    let name = props.match.match.params.name
    let data = props.venues[name]
    if(props.venues){
    return(
        <div className="results">
            <div className="results-title">
            {data.name}
            </div>
            <div className="results-stats">
            {data.location.address}
           
            </div>
            <div className>
             
            </div>
            <div className="results-photo">
          
            </div>
        </div>
    )
    }
    else {return(<div>
        error
    </div>)}
}
export default SearchResultsPage