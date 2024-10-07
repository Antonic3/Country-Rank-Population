import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryCompareResult = ({ code1, code2 }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (code1 && code2) {
      const fetchCountryData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_COMPARE_API}/alpha/${code1}`);
          const response2 = await axios.get(`${import.meta.env.VITE_COMPARE_API}/alpha/${code2}`);
          setData({ country1: response.data, country2: response2.data });
        } catch (error) {
          console.error(error);
        }
      };
      fetchCountryData();
    }
  }, [code1, code2]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Perbandingan Negara</h1>
      <div className="flex flex-wrap -mx-3 mb-4">
        {data.country1 && data.country2 ? (
          <>
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">{data.country1.name?.common || 'Nama tidak tersedia'}</h2>
              <img
                src={`https://flagcdn.com/w80/${code1.toLowerCase()}.png`}
                alt={code1}
                className="w-20 h-20 mb-2"
              />
              <p className="text-gray-700 text-sm mb-2">Ibukota: {data.country1.capital?.[0] || 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Luas Wilayah: {data.country1.area ? `${data.country1.area} km²` : 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Penduduk: {data.country1.population || 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Region: {data.country1.region || 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Subregion: {data.country1.subregion || 'Tidak tersedia'}</p>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">{data.country2.name?.common || 'Nama tidak tersedia'}</h2>
              <img
                src={`https://flagcdn.com/w80/${code2.toLowerCase()}.png`}
                alt={code2}
                className="w-20 h-20 mb-2"
              />
              <p className="text-gray-700 text-sm mb-2">Ibukota: {data.country2.capital?.[0] || 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Luas Wilayah: {data.country2.area ? `${data.country2.area} km²` : 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Penduduk: {data.country2.population || 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Region: {data.country2.region || 'Tidak tersedia'}</p>
              <p className="text-gray-700 text-sm mb-2">Subregion: {data.country2.subregion || 'Tidak tersedia'}</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {data.country1 && data.country2 && (
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Perbandingan</h2>
            <p className="text-gray-700 text-sm mb-2">
              Luas Wilayah: {data.country1.area ? `${data.country1.area} km²` : 'Tidak tersedia'} vs {data.country2.area ? `${data.country2.area} km²` : 'Tidak tersedia'}
            </p>
            <p className="text-gray-700 text-sm mb-2">
              Penduduk: {data.country1.population || 'Tidak tersedia'} vs {data.country2.population || 'Tidak tersedia'}
            </p>
            <p className="text-gray-700 text-sm mb-2">
              Region: {data.country1.region || 'Tidak tersedia'} vs {data.country2.region || 'Tidak tersedia'}
            </p>
            <p className="text-gray-700 text-sm mb-2">
              Subregion: {data.country1.subregion || 'Tidak tersedia'} vs {data.country2.subregion || 'Tidak tersedia'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCompareResult;
