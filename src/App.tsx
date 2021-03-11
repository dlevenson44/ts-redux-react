import { useState } from 'react';
import { connect } from 'react-redux';
import { decrease, increase } from './redux/actions';
import Button from './Button';
import './App.css';

interface RootType {
  decrease: () => object;
  increase: () => object;
}

function App(props: RootType) {
  console.log('root props:  ', props)
  const { decrease, increase } = props;
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

export default connect(
  null,
  { decrease, increase }
)(App);
