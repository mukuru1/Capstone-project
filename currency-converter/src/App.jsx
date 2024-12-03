import React from "react";
import Header from "./components/Header";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <p>Welcome to the Currency Converter App!</p>
      </main>
    </div>,

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
