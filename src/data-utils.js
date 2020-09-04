import _ from 'lodash';
import {ALL_PRODUCTS_ID} from './constants';

export const getAllCategories = (data) => _.uniqBy(data.flatMap(product =>  product.categories),  'categoryId');

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
