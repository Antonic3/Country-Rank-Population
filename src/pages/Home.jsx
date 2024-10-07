import React, { useState, useEffect } from 'react';
import { formatPopulation } from '../utils';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Cek apakah data negara sudah ada di localStorage
    const storedCountries = localStorage.getItem('countries'); 
    if (storedCountries) {
      // Jika ada, parse data dari localStorage dan set ke state
      setCountries(JSON.parse(storedCountries));
    } else {
      // Jika tidak ada, fetch data dari API dan simpan ke localStorage
      fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
          const sortedData = data.sort((a, b) => b.population - a.population);
          // Simpan data ke localStorage
          localStorage.setItem('countries', JSON.stringify(sortedData));
          // Set data ke state
          setCountries(sortedData);
        });
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto py-16">
        <div className="overflow-x-auto max-w-7xl">
          {/* Tabel dengan styling */}
          <div className="w-full border border-gray-300 rounded shadow-md overflow-y-auto">
            <table className="table-auto w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Country</th>
                  <th className="px-4 py-2 text-left">Code</th>
                  <th className="px-4 py-2 text-left">Population</th>
                </tr>
              </thead>
              <tbody>
                {countries.slice(0, 200).map((country, index) => (
                  <tr
                    key={country.cca2}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                    } hover:bg-blue-100 transition duration-200 ease-in-out`}
                  >
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{country.name.common}</td>
                    <td className="border px-4 py-2">{country.cca2}</td>
                    <td className="border px-4 py-2">{formatPopulation(country.population)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
