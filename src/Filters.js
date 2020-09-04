import React from 'react';
import './Filters.css';
import { arrayOf, object, func } from 'prop-types';
import {ALL_PRODUCTS_ID} from './constants';

/*  Select component to select a certain category */
const Filters = ({ categories, onChangeCategory }) => (
  <div className="Filters-row">
    <select onChange={(event) => onChangeCategory(event.target.value)}>
      {categories.map(({categoryId, name}) => 
        <option key={categoryId} value={categoryId}>{name}</option>
      )}
      <option value={ALL_PRODUCTS_ID}>All Products</option>
    </select>
  </div>
);

Filters.propTypes = {
  categories: arrayOf(object).isRequired,
  onChangeCategory: func.isRequired
}

export default Filters;
