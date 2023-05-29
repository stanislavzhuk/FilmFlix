import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import css from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  return (
    <DebounceInput
      className={css.input}
      value={value}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      onChange={handleInputChange}
      debounceTimeout={500}
    />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchBar;
