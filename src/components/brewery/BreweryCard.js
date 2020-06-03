import React from "react";

const BreweryCard = ({name, description, website, images}) => {

    const fallBackLink = "https://c1.wallpaperflare.com/preview/184/11/589/coming-soon-coming-soon-patience.jpg"
    const fallBackImg = { icon: fallBackLink, large: fallBackLink, contentAwareMedium: fallBackLink}
    const { icon, large, medium, squareLarge, squareMedium } = images || fallBackImg
    console.log("brewery", images)
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    Name: <span className="card-beername">{name}</span>
                </h3>
                <p>Description: {description}</p>
                <a target="_blank" href={website}>Visit Site</a>
                <img id="breweryLogo" src={icon} style={{ width: '64px'}} alt="Coming Soon" />
            </div>
        </div>
    );
};

export default BreweryCard