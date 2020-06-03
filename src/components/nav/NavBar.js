import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <h1 className="site-title">
                Beer Me!
                <br />
                <small>When you just need a beer!</small>
            </h1>
            <nav>
                <ul className="container">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/beers">Beers</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/breweries">Breweries</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;