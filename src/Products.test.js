import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';
import Product from './Product';
import {expect} from 'chai';

describe('product cards', () => {
    const vegetableCategoryId = "1991b56a-65b2-4550-a794-294e86a3be7d"
    const testProducts =   [{
        "productId": "7e57aa75-f2fb-4cff-95be-1b092896e090",
        "name": "Conventional Lemons",
        "categories": [
            {
                "categoryId": "ce29b694-f558-4646-aba6-c51028c3e1d2",
                "name": "Produce",
                "commonId": "PRO",
                "parentId": null,
                "thumbnailUrl": null
            },
            {
                "categoryId": "ff960f60-c327-4d96-ae02-f28ceb8d6848",
                "name": "Fruit",
                "commonId": "fruit",
            }
        ],
    },
    {
        "productId": "eba5f71d-412c-4712-beb7-f5bc6b272b59",
        "inventoryId": "eba5f71d-412c-4712-beb7-f5bc6b272b59",
        "name": "Conventional Parsnips",
        "categories": [
            {
                "categoryId": "ce29b694-f558-4646-aba6-c51028c3e1d2",
                "name": "Produce",
                "commonId": "PRO",
            },
            {
                "categoryId": "1991b56a-65b2-4550-a794-294e86a3be7d",
                "name": "Vegetables",
                "commonId": "VEG",
            }
        ],
    },
    {
        "productId": "6c71079d-b2f0-47c6-8a71-029d50b5c931",
        "inventoryId": "6c71079d-b2f0-47c6-8a71-029d50b5c931",
        "name": "Conventional Mini Watermelon",
        "categories": [
            {
                "categoryId": "ce29b694-f558-4646-aba6-c51028c3e1d2",
                "name": "Produce",
                "commonId": "PRO",
            },
            {
                "categoryId": "ff960f60-c327-4d96-ae02-f28ceb8d6848",
                "name": "Fruit",
                "commonId": "fruit",

            }
        ]
    }]
    const fixtures = {
        products: testProducts, //2 fruit, 1 vegetable 
    };

    it('should render all product cards if no category id is given', () => {
         const wrapper = shallow(<Products {...fixtures}/>);
         const productCards = wrapper.find(Product);
         expect(productCards.length).to.eql(3);
    });

    it('should filter only associated products if category is given', () => {
        const wrapper = shallow(<Products {...fixtures} categoryId={vegetableCategoryId} />);
        const productCards = wrapper.find(Product);
        expect(productCards.length).to.eql(1);
    });
});