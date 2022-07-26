import React from 'react';
import { useLocation } from 'react-router-dom';

const CoinDetails = () => {
  const { state: { coin, id } } = useLocation();
  return (
    <div>
      <h1>Coin Details</h1>
      <ul>
        <li>{coin.name}</li>
        <li>{id}</li>
        <li>{coin.symbol}</li>
      </ul>
    </div>
  );
};

export default CoinDetails;
