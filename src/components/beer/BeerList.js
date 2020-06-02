import React, { useState, useEffect } from "react";
import BeerCard from './BeerCard';
import BeerManager from '../../modules/BeerManager';
import { useLocation } from "react-router-dom";

const initialBeerData = {
    data: [],
    currentPage: 1
}

const BeerList = () => {
    const [beerData, setBeerData] = useState(initialBeerData);

    const location = useLocation();
    // console.log("location hook", location)

    const getBeers = () => {
        BeerManager.getAllBeers().then(beersFromAPI => {
            // console.log("beers test", beersFromAPI.currentPage);
            setBeerData(beersFromAPI)
        });
    };

    const handleNext = () => {
        const newPage = beerData.currentPage + 1
        console.log("ryan test", newPage)
        BeerManager.getPaginatedBeers(newPage).then(beersFromAPI => {
            setBeerData(beersFromAPI)
        });
    };

    const handlePrev = (currentPage) => {
        console.log("click prev button", currentPage)
        if (currentPage != 0) {
            const prevPage = beerData.currentPage -1
            console.log("john test", prevPage)
            BeerManager.getPaginatedBeers(prevPage).then(beersFromAPI => {
                setBeerData(beersFromAPI)
            });
        };
    };

    useEffect(() => {
        getBeers();
    }, []);

    return (
        <>
        <button onClick={handleNext}>NextPage</button>
        <button onClick={handlePrev}>Previous Page</button>
        <div className="container-cards">
            {beerData.data.map(beer => <BeerCard {...beer} />)}
        </div>
        </>
    );
};

export default BeerList;