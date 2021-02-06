fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');

        countryDiv.className = 'country'
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital-name">${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Detail<br>information</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}
const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country => {
    console.log(country);
    const countryDiv=document.getElementById('country-details');
    countryDiv.innerHTML=`
        <h1>Country: ${country.name}</h1>
        <p> Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}"></img>
    `
}