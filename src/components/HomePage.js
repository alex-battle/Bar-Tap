import React from 'react';
import { Link, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import BarTypePage from './BarTypePage';
import TrendingPage from './SearchTrendingPage';
import SearchResultsPage from './SearchResultsPage';
import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import NotFound from './NotFound'
import AllBars from './AllBars';
import LoungeBars from './LoungeBars';
import CtailBars from './CtailBars'
import SportsBar from './SportsBar'
import HookahBars from './HookahBars';
import DiveBars from './DiveBars';
import WhiskeyBars from './WhiskeyBars'
import Cities from './Cities'

function HomePage(props) {
    return (
        <div>
            <div className="header">
                <Header />
            </div>

            <div >
                <Route exact path='/'>
                    <Cities />
                </Route>
                <Route exact path="/newyork">
                    <BarTypePage list={props.list} handleLoungeClick={props.handleLoungeClick} loungelist={props.loungelist} venues={props.venues} />
                </Route>
                <Route exact path="/results/allbars">
                    <TrendingPage venues={props.venues} />
                </Route>
                <Route exact path="/newyork/:name" component={(match) => <SearchResultsPage venues={props.venues} match={match} />} />
                <Route exact path="/categories">
                    <BarTypePage />
                </Route>
                <Route exact path="/search">
                    <SearchPage handleButtonClick={props.handleButtonClick} handleChange={props.handleChange} searchInput={props.searchInput} />
                </Route>
                <Route exact path="/nycallbars">
                    <AllBars handleClick={props.handleClick} list={props.list} />
                </Route>
                <Route exact path="/nyclounges">
                    <LoungeBars handleLoungeClick={props.handleLoungeClick} loungelist={props.loungelist} />
                </Route>
                <Route exact path="/nyccocktailbars">
                    <CtailBars handleCocktailClick={props.handleCocktailClick} cocktaillist={props.cocktaillist} />
                </Route>
                <Route exact path="/nycsportsbars">
                    <SportsBar handleSportsBarClick={props.handleSportsBarClick} sportsbarlist={props.sportsbarlist} />
                </Route>
                <Route exact path="/nychookah">
                    <HookahBars handleHookahClick={props.handleHookahClick} hookahlist={props.hookahlist} />
                </Route>
                <Route exact path="/nycdivebar">
                    <DiveBars handleDiveClick={props.handleDiveClick} divelist={props.divelist} />
                </Route>
                <Route exact path="/nycwhiskey">
                    <WhiskeyBars handleWhiskeyClick={props.handleWhiskeyClick} whiskeylist={props.whiskeylist} />
                </Route>

                <Route exact path="/favorites">
                    <NotFound />
                </Route>

                <Route exact path="/about">
                    <AboutPage />
                </Route>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>

    )
}
export default HomePage