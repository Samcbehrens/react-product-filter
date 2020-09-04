import React from 'react';
import {shallow} from 'enzyme';
import Product from './Product';
import {expect} from 'chai';

describe("Product Card", () => {
    const testProduct = {
        name: 'carrots',
        price: 2.00,
        packageUnitAmount: 3,
        packageUnitFormatted: 'ct',
        imageFilename: 'carrots.png'
    };

    it("should populate product card with correct information", () => {
        const wrapper = shallow(<Product product={testProduct} />);
        const image = wrapper.find('img');
        expect(image.props().src).to.eql('//res.cloudinary.com/imperfect/image/upload/w_400,h_260,c_pad,b_auto,d_products:no-image-found.png/carrots.png');
        expect(image.props().alt).to.eql(testProduct.name);
        expect(wrapper.find('.product-name').text()).to.eql(testProduct.name)
        expect(wrapper.find('.product-descriptor').text()).to.eql("$2 | 3 ct")
    });
});