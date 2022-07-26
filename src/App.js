import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/CoinDetails/:id" element={<CoinDetails />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
