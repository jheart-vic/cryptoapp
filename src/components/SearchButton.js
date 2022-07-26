import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import './Coin.css';

function Search({ setCoins, coins }) {
  const handleSearch = (e) => {
    setCoins(coins.filter((coinList) => (
      coinList.name.toLowerCase().includes(e.target.value.toLowerCase())
    )));
  };

  return (
    <div className="search">
      <InputGroup size="lg" className="center" onChange={handleSearch}>
        <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
}

Search.propTypes = {
  coins: PropTypes.instanceOf(Array).isRequired,
  setCoins: PropTypes.func.isRequired,
};

export default Search;
