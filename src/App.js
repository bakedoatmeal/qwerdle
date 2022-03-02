import logo from './logo.svg';
import './App.css';
import Game from './Components/Game/Game';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Game/>
    </div>
  );
}

export default App;
