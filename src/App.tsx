import { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <h3 className="count">{count}</h3>
      <div className="button-container">
        <Button text="Increase" onClick={() => setCount(count + 1)} />
        <Button text="Decrease" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
}

export default App;
