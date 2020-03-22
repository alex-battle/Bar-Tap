import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component{
    render(){
    return(
        <div className="header">
            <NavLink to="/"> Home </NavLink>
            |
            <NavLink to="/categories"> Bar Type </NavLink>
            |
            <NavLink to="/favorites"> Favorites </NavLink>
            |
            <NavLink to="/search"> Search </NavLink>
        </div>
    )
    }
}
export default Header