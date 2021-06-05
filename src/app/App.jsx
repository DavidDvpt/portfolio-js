import React from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
