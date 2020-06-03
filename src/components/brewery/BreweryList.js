import React, { useState, useEffect } from "react";
import BreweryCard from './BreweryCard';
import BeerManager from '../../modules/BeerManager';
import { useLocation } from "react-router-dom";

const initialBreweryData = {
    data: [],
    currentPage: 1
}

const BreweryList = () => {
    const [breweryData, setBreweryData] = useState(initialBreweryData);

    const location = useLocation();
    // console.log("location hook", location)

    const getBreweries = () => {
        BeerManager.getAllBreweries().then(breweriesFromAPI => {
            console.log("beers test", breweriesFromAPI);
            setBreweryData(breweriesFromAPI)
        });
    };

    // const handleNext = () => {
    //     const newPage = beerData.currentPage + 1
    //     console.log("ryan test", newPage)
    //     BeerManager.getPaginatedBeers(newPage).then(beersFromAPI => {
    //         setBeerData(beersFromAPI)
    //     });
    // };

    // const handlePrev = (currentPage) => {
    //     console.log("click prev button", currentPage)
    //     if (currentPage != 0) {
    //         const prevPage = beerData.currentPage -1
    //         console.log("john test", prevPage)
    //         BeerManager.getPaginatedBeers(prevPage).then(beersFromAPI => {
    //             setBeerData(beersFromAPI)
    //         });
    //     };
    // };

    useEffect(() => {
        getBreweries();
    }, []);

    return (
        <>
        {/* <button onClick={handleNext}>NextPage</button>
        <button onClick={handlePrev}>Previous Page</button> */}
        <div className="container-cards">
            {breweryData.data.map(brewery => <BreweryCard {...brewery} />)}
        </div>
        </>
    );
};

export default BreweryList;