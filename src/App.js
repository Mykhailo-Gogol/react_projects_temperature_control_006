import './App.css';
import { useState } from 'react';

function App() {
  const hello = 'hello';
  const [temperatureValue, setTemperatureValue] = useState(10);
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default App;
