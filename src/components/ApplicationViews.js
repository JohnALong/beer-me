import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import BeerList from "./beer/BeerList";

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
        </>
    );
};

export default ApplicationViews;