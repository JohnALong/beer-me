import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import BeerList from "./beer/BeerList";
import BreweryList from "./brewery/BreweryList";

const ApplicationViews = () => {
    return (
        <>
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />
            <Route
                path="/beers"
                // render={props => {
                //     console.log("props app views", props)
                //     return <BeerList />;
                // }}
                component={BeerList}
            />
            <Route
                path="/breweries"
                component={BreweryList}
            />
        </>
    );
};

export default ApplicationViews;