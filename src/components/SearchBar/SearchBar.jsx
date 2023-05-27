import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const SearchBar = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <DebounceInput
      value={value}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movie"
      onChange={handleInputChange}
      debounceTimeout={500}
    />
  );
};

export default SearchBar;
