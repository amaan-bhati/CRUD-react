import React, { useState } from "react";

const Filter = ({ sortByPrice }) => {
  return (
    <div>
      <label>Sort by Price: </label>
      <select onChange={(e) => sortByPrice(e.target.value)}>
        <option value="none">None</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
