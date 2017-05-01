import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import ConvertFrom from '../../components/from';

describe('<ConvertFrom />', () => {
    const wrapper = shallow(<ConvertFrom />);

    it('<ConvertFrom>', () => {
        assert(wrapper.length, 'rendered');
    });

    it("contains a class name 'convert-from'", () => {
        expect(wrapper.find('.convert-from').length).to.equal(1);
    });

    it("contains input", () => {
        expect(wrapper.find('input').length).to.equal(3);
    });

    it('renders the custom props', () => {
        wrapper.setProps({
            arr_of_val: ['Hello, world', 'Hello, cat', 'Hello, dog']
        });

        expect(wrapper.contains('Hello, world')).to.equal(true);
        expect(wrapper.contains('Hello, cat')).to.equal(true);
        expect(wrapper.contains('Hello, dog')).to.equal(true);
    });
})


