import React from 'react';
import './App.css';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Django + MongoDB App</h1>
      </header>
      <main>
        <Items />
      </main>
    </div>
  );
}

export default App;