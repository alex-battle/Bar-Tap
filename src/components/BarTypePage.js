import React from 'react';
import { Link } from 'react-router-dom'


function BarTypePage(props) {
    return (
        <div className="bar-categories">
            <div className="all-bars">
                <Link handleClick={props.handleClick}
                    list={props.list} to="/nycallbars"> All Bars </Link>
            </div>
            <div className="lounge-bars">
                <Link handleLoungeClick={props.handleLoungeClick}
                    loungelist={props.loungelist} to="/nyclounges"> Lounges </Link>
            </div>
            <div className="cocktail-bars">
                <Link handleCocktailClick={props.handleCocktailClick}
                    cocktaillist={props.cocktaillist} to="/nyccocktailbars"> Cocktail </Link>
            </div>
            <div className="sports-bars">
                <Link handleSportsBarClick={props.handleSportsBarClick}
                    sportsbarlist={props.sportsbarlist} to="nycsportsbars"> Sports Bar </Link>
            </div>
            <div className="hookah-bars">
                <Link handleHookahClick={props.handleHookahClick}
                    hookahlist={props.hookahlist} to="nychookah"> Hookah Bar </Link>
            </div>
            <div className="dive-bars">
                <Link handleDiveClick={props.handleDiveClick}
                    divelist={props.divelist} to="/nycdivebar"> Dive Bar </Link>
            </div>
            <div className="whiskey-bars">
                <Link handleWhiskeyClick={props.handleWhiskeyClick}
                    whiskeylist={props.whiskeylist} to="/nycwhiskey"> Whiskey Bar </Link>
            </div>
        </div>
    )
}
export default BarTypePage
