import React from 'react';
import {Link} from 'react-router-dom'

function notFound(){
    return(
        <div className="error">
            404 Not Found
            <Link to="/">Go Home</Link>
        </div>
    )
}
export default notFound 