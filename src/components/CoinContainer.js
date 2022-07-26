import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoin } from '../redux/coinSlice';
import CoinItems from './Coinitems';
import './Coin.css';

const CoinContainer = () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=21&page=1&sparkline=false';
  const dispatch = useDispatch();
  const { Coins } = useSelector((state) => state.cryptos);
  useEffect(() => {
    fetchCoin(url, dispatch);
  }, []);
  return (
    <div className="grid">
      {Coins.map((coin) => (
        <CoinItems key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinContainer;
