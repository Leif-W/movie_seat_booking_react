import React from 'react';
import './App.css';
import MovieSelector from './components/MovieSelector';
import SeatLegend from './components/SeatLegend';
import SeatMap from './components/SeatMap';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <MovieSelector />
      <SeatLegend />
      <SeatMap />
      <Total />
    </div>
  );
}

export default App;
