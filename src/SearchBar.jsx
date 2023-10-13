
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
   
  };

  return (
    <input
    className='search-bar'
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
