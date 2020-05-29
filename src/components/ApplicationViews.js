import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import BeerCard from "./beer/BeerCard";

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
                render={props => {
                    return <BeerCard />;
                }}
            />
        </>
    );
};

export default ApplicationViews;