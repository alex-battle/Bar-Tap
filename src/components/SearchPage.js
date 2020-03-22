import React from 'react';
import {Link} from 'react-router-dom'

function SearchPage(props){
    return(
    <div>
        <input type="text" className="searchBar" onChange={props.handleChange} placeholder="Search bar...get it?" value={props.searchInput}></input>
        <Link to="/results/allbars"><button onClick={props.handleButtonClick} type="submit"><i id="searchButton">Get Drunk</i></button></Link>
    </div>
    )
}
export default SearchPage