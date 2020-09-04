import _ from 'lodash';
import {ALL_PRODUCTS_ID} from './constants';

/** creates new array with all unique catagories from all the products. 
 * This is used to list all catagories in a drop down*/
export const getAllCategories = (data) => _.uniqBy(data.flatMap(product =>  product.categories),  'categoryId');

/** Creates a map of catagoryId to products within that catagory. Allows for easy look up when filtering*/
export const getProductsByCategoryId = (products, allCategories) => {
    const categoryMap = {}
    allCategories.forEach(category => {
        categoryMap[category.categoryId] = []
    });

    products.forEach(product => {
        product.categories.forEach(category => {
            categoryMap[category.categoryId].push(product)
        })
    });

    categoryMap[ALL_PRODUCTS_ID] = products

    return categoryMap;
};
