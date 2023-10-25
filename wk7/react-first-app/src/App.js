import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {

  const [number, setNumber] = useState(0);

  const onClickButton = () => {
    setNumber(number + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          You have clicked {number} time
        </p>
        <Button
          variant="contained"
          onClick={onClickButton}
        >
          Click
        </Button>
      </header>
    </div>
  );
}

export default App;
