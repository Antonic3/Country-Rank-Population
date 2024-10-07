import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryCompareForm from '../components/CountryComparisonForm';
import CountryCompareResult from '../components/CountryComparisonResult';

const Compare = () => {
  return (
    <Routes>
      <Route path="/" element={<CountryCompareForm />} />
      <Route path=":code1/n/:code2" element={<CountryCompareResult />} />
    </Routes>
  );
};

export default Compare;