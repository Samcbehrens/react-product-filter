import React from 'react';
import {shallow } from 'enzyme';
import Filter from './Filters';
import {expect} from 'chai';

describe("Filters", () => {
    const Fixtures = {
        categories: [
            {
                "categoryId": "84082b7a-0a6b-4072-8771-e3d7d76d6018",
                "name": "Beverages",
                "commonId": "KNA7",
                "parentId": "31442fe7-cf35-4bd5-888b-e28fcd6919af",
                "thumbnailUrl": null
            },
            {
                "categoryId": "31442fe7-cf35-4bd5-888b-e28fcd6919af",
                "name": "Non-Produce",
                "commonId": "DRY",
                "parentId": null,
                "thumbnailUrl": null
            },
            {
                "categoryId": "5fefe732-4c8b-435a-bdc6-fbe360307ca9",
                "name": "Dried Fruit & Nuts",
                "commonId": "5XGG",
                "parentId": "31442fe7-cf35-4bd5-888b-e28fcd6919af",
                "thumbnailUrl": null
            }
        ],
        onChangeCategory: () => {}
    }

    it("should render all  product categories available", () => {
        const wrapper = shallow(<Filter {...Fixtures} />);
        const options = wrapper.find('option');
        expect(options.length).to.eql(Fixtures.categories.length + 1);
    })

    // TODO: fix the chai sinon set up to test that the spy has been called
    // it("should trigger onChange if food category is selected", () => {
    //     const onChangeSpy  = spy();
    //     const wrapper = shallow(<Filter {...Fixtures} onChangeCategory={onChangeSpy} />);
    //     const options = wrapper.find('option');
    //     console.log('stuff', options.at(3).props())
    //     expect(onChangeSpy).to.have.been.called;
    // })
});