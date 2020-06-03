import React from "react";

const fallBackLink = "https://c1.wallpaperflare.com/preview/184/11/589/coming-soon-coming-soon-patience.jpg"
const fallBackImg = { contentAwareIcon: fallBackLink, contentAwareLarge: fallBackLink, contentAwareMedium: fallBackLink}
const BeerCard = ({name, description, abv, labels}) => {

    const { contentAwareIcon, contentAwareLarge, contentAwareMedium } = labels || fallBackImg
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Name: <span className="card-beername">{name}</span>
                </h3>
                <p>Description: {description}</p>
                <p>ABV: {abv}%</p>
                <img id="beerLabel" src={contentAwareIcon} style={{ width: '64px'}} alt="Coming Soon" />
            </div>
        </div>
    );
};

export default BeerCard
