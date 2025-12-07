import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
  'weatherApi/fetchWeather',
  async () => {
    // async logic here
    let response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=30.033333&lon=31.233334&appid=38c8f743dc9dad3b44f625edcbe1f760'
    );
    // handle success
    let responseTemp = Math.round(response.data.main.temp - 272.15);
    let min = Math.round(response.data.main.temp_min - 272.15);
    let max = Math.round(response.data.main.temp_max - 272.15);
    let description = response.data.weather[0].description;
    let responseIcon = response.data.weather[0].icon;
    return {
      number: responseTemp,
      min,
      max,
      description,
      icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    };
  }
);
export const weatherApiSlice = createSlice({
  name: 'weather',
  initialState: {
    result: 'empty',
    weather: {},
    isLoading: false,
  },
  reducers: {
    changeResult: (state) => {
      state.result = 'changed';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
