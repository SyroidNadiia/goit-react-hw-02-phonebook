// import React from "react";
import css from './Filter.module.css';

const Filter = ({ filter, handleInputChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
        className={css.input}
      ></input>
    </label>
  );
};


export default Filter;