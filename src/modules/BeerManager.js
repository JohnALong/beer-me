const apiKey = process.env.REACT_APP_BREWERYDB_KEY;

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const beerURL = `https://sandbox-api.brewerydb.com/v2/beers/?key=${apiKey}`
const breweryURL = `https://sandbox-api.brewerydb.com/v2/breweries/?key=${apiKey}`
const categoryURL = `https://sandbox-api.brewerydb.com/v2/categories/?key=${apiKey}`

export default {
    getAllBeers() {
        return fetch(`${proxyurl}${beerURL}`).then(result => result.json())
    },

    getPaginatedBeers(page) {
        return fetch(`${proxyurl}${beerURL}&p=${page}`).then(result => result.json())
    },

    getAllBreweries() {
        return fetch(`${proxyurl}${breweryURL}`).then(result => result.json())
    },
}