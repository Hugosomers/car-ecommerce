import './App.css';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';
import SellCar from './pages/Sell_Car/SellCar';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Home } />
      <Route exact path="/sellCar" component={ SellCar } />
    </div>
  );
}

export default App;
