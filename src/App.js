import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Filters from './Filters';
import useFetchData from './fetch-data-hook';
import {getAllCategories, getProductsByCategoryId} from './data-utils';
import { ALL_PRODUCTS_ID } from './constants'

/* top level app component in charge of data loading, and state management */
const App = () => {
  // mock fetching data async  
  const [data, loading] = useFetchData();
  const [categoryId, setCategoryId] = useState(ALL_PRODUCTS_ID)

  //TODO: With more time, place transformed data in own data store like redux
  const allCategories  = getAllCategories(data);
  const productsByCategoryId = getProductsByCategoryId(data, allCategories)

  const onChangeCategory = (val) => {
    setCategoryId(val)
  };

  return (<div className="app">
    <div className="App-row">
      <Filters categories={allCategories} onChangeCategory={onChangeCategory} />
    </div>
    <div className="App-row">
      {loading ? <div>...loading</div> : <Products products={productsByCategoryId[categoryId]} />}
    </div>
  </div>
)};

export default App;
