import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow, render } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import ConvertTo from '../../components/to';

describe('<ConvertTo />', () => {
    const wrapper = shallow(<ConvertTo />);

    it('<ConvertTo>', () => {
        assert(wrapper.length, 'rendered');
    });

    it("contains a class name 'convert-to'", () => {
        expect(wrapper.find('.convert-to').length).to.equal(1);
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

