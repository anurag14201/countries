const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
}

const getCountryHTML = country => {
    return
}
loadCountries();