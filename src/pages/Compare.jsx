import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CompareResult from '../components/CountryComparisonResult';

export default function CompareRes() {
  const countries = useSelector((state) => state.country.data);
  const { code1, code2 } = useParams();
  const country1 = countries.find((country) => country.cca2 === code1);
  const country2 = countries.find((country) => country.cca2 === code2);
  const data = {
    country1,
    country2,
  };
  return (
    <section className="mt-10 text-center">
      <div className="flex justify-center items-center">
        <CompareResult data={data} />
      </div>
    </section>
  );
}
