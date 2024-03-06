import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  countrys: [],
  oneCountryData: [],
  continentsCountry: [],
  countryItem: [],
  isLoading: false,
}
export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    fetchingCountry: (state) => {
      state.isLoading = true
    },
    fetchedCountry: (state, action) => {
      state.isLoading = false
      state.countrys = action.payload
    },
    fetchedOneCountryData: (state, action) => {
      state.isLoading = false
      state.oneCountryData = action.payload
    },
    fetchedContinentsCountry: (state, action) => {
      state.isLoading = false
      state.continentsCountry = action.payload
    },
    fetchedCountryItem: (state, action) => (
      state.countryItem = [action.payload, ...state.countryItem]
    ),
  }
})

export const { fetchedCountry, fetchedOneCountryData, fetchedContinentsCountry, fetchingCountry, fetchedCountryItem } = stateSlice.actions
export default stateSlice.reducer