import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import BackButton from './CloseButton';
import './Coin.css';

const CoinDetails = () => {
  const { state: { coin } } = useLocation();
  return (
    <div className="container">
      <div className="details-title">
        <h1 className="h1">
          <span>{coin.name}</span>
          <span>Breakdown</span>
        </h1>
        <Link to="/">
          <div className="close">
            <BackButton className="closebtn" />
          </div>
        </Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={coin.image} alt="details" />
          <h3 className="span">
            <span>{coin.name}</span>
            <span>{coin.atl}</span>
          </h3>
        </div>
        <div className="allDetail">
          <h3 className="h3">
            <span>Current Price</span>
            {coin.current_price}
          </h3>
          <h3 className="h3">
            <span>Total Supply</span>
            {coin.total_supply}
          </h3>
          <h3 className="h3">
            <span>Market Change</span>
            {coin.market_cap_change_24h}
          </h3>
          <h3 className="h3">
            <span>Market Rank</span>
            {coin.market_cap_rank}
          </h3>
          <h3 className="h3">
            <span>Total Volume</span>
            {coin.total_volume}
          </h3>
          <h3 className="h3">
            <span>Price Change Percentage</span>
            {coin.price_change_percentage_24h}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
