import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from './logo.png';
import './App.css';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Centural Logo" />
        <p>
          Centural
        </p>
        <input data-testid="secret_key" type="password" label="Write your secret key in a book secret_key book in game to login!" />
      </header>
      <div className="login_register">
        <p>Username</p>
      </div>
    </div>
  );
}

export default App;
