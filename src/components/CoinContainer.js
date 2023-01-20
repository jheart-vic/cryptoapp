import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoin } from '../redux/coinSlice';
import CoinItems from './Coinitems';
import './Coin.css';
import Search from './SearchButton';

const CoinContainer = () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=103&page=1&sparkline=false';
  const dispatch = useDispatch();
  const { Coins } = useSelector((state) => state.cryptos);
  const [coinsToRender, setCoinsToRender] = useState(Coins);
  useEffect(() => {
    fetchCoin(url, dispatch);
    setCoinsToRender(Coins);
  }, [url, dispatch, Coins.length]);
  return (
    <div>
      <Search coins={Coins} setCoins={setCoinsToRender} />
      <div className="grid">
        {coinsToRender.map((coin) => (
          <CoinItems className="child" key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default CoinContainer;
