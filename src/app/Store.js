import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "../CountrySlice/countrySlice";

export const store = configureStore({
  reducer: {
    country: countrySlice,
  },
});