import React, { useState } from 'react';
import Grid from './components/Grid';
import SearchBar from './components/SearchBar';
import './styles/grid.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <h1>Romantic Comedy</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid searchTerm={searchTerm} />
    </div>
  );
};

export default App;
