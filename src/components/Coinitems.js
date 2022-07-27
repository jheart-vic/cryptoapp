import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import './Coin.css';
import { Link } from 'react-router-dom';

const CoinItems = ({ coin }) => {
  const {
    symbol, name, ath, image, id,
  } = coin;
  return (
    <div>
      <div className="parent">
        <div>
          <Link className="Links" to={`/CoinDetails/${id}`} state={{ coin, id }}>
            <div className="icon">
              <FiArrowRightCircle />
            </div>
          </Link>
          <div className="title">
            <h2 className="Name">{name}</h2>
          </div>
          <div className="image">
            <img src={image} alt="coinImages" className="img" />
          </div>
          <div className="div">
            <p className="ath">{ath}</p>
            <p className="Symbol">{symbol}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinItems.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    ath: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
export default CoinItems;
