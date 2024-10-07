import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img src={country.flags.svg} alt={country.name.common} />
      <h2 className="card-title">{country.name.common}</h2>
      <p className="card-text">Population: {country.population}</p>
      <p className="card-text">Capital: {country.capital}</p>
    </div>
  );
};

export default CountryCard;