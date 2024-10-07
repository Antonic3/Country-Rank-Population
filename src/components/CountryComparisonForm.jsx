import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CountryCompareForm = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry1, setSelectedCountry1] = useState('');
  const [selectedCountry2, setSelectedCountry2] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const sortedCountries = response.data.sort((a, b) => {
          // Mengurutkan berdasarkan nama negara secara alfabetis
          return a.name.common.localeCompare(b.name.common);
        });
        setCountries(sortedCountries);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry1 = (e) => {
    setSelectedCountry1(e.target.value); // Update nilai untuk Country 1
    setSelectedCountry2(''); // Reset Country 2 agar dropdown berubah ketika Country 1 dipilih ulang
  };

  const handleSelectCountry2 = (e) => {
    setSelectedCountry2(e.target.value); // Update nilai untuk Country 2
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/compare/${selectedCountry1}/n/${selectedCountry2}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Compare Countries</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country1">
              Country 1
            </label>
            <select
              id="country1"
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-200"
              value={selectedCountry1} // Set nilai yang dipilih
              onChange={handleSelectCountry1}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.cca2} value={country.cca2}>
                  {country.name.common} ({country.cca2})
                </option>
              ))}
            </select>
            <div className="flex items-center justify-center p-2">
              {selectedCountry1 && (
                <img
                  src={`https://flagcdn.com/w160/${selectedCountry1.toLowerCase()}.png`}
                  alt={selectedCountry1}
                  className="w-1/2 h-1/2 object-contain"
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country2">
              Country 2
            </label>
            <select
              id="country2"
              className="block w-full p-2 pl-10 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-200"
              value={selectedCountry2} // Set nilai yang dipilih
              onChange={handleSelectCountry2}
              disabled={!selectedCountry1} // Disable dropdown jika Country 1 belum dipilih
            >
              <option value="">Select Country</option>
              {countries
                .filter(country => country.cca2 !== selectedCountry1) // Filter agar tidak muncul Country 1 di dropdown Country 2
                .map((country) => (
                  <option key={country.cca2} value={country.cca2}>
                    {country.name.common} ({country.cca2})
                  </option>
                ))}
            </select>
            <div className="flex items-center justify-center p-2">
              {selectedCountry2 && (
                <img
                  src={`https://flagcdn.com/w160/${selectedCountry2.toLowerCase()}.png`}
                  alt={selectedCountry2}
                  className="w-1/2 h-1/2 object-contain"
                />
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          disabled={!selectedCountry1 || !selectedCountry2} // Disable button jika salah satu negara belum dipilih
        >
          Compare
        </button>
      </form>
    </div>
  );
};

export default CountryCompareForm;
