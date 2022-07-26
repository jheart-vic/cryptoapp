import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Coins: [],
};

const cryptoSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    fetchCoins: (state, action) => {
      const eachCoin = action.payload.map((coin) => ({
        ...coin,
      }));
      /* eslint-disable no-param-reassign */
      state.Coins = eachCoin;
    },
  },
});

export const { fetchCoins } = cryptoSlice.actions;

export const fetchCoin = async (url, dispatch) => {
  const res = await fetch(url);
  const data = await res.json();
  dispatch(fetchCoins(data));
};

export default cryptoSlice.reducer;
