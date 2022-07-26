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
        {/* <Home /> */}
        <Routes>
          <Route path="/CoinDetails/:id" element={<CoinDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
