import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import { Converter } from '../../components/converter';

describe('<Converter />', () => {
    const wrapper = shallow(<Converter />);

    it('renders', () => {
        assert(wrapper.length, 'rendered')
    });

    it('child Result components', () => {
        expect(wrapper.find('Result').length).to.equal(1);
    });
    it('child ConvertFrom components', () => {
        expect(wrapper.find('ConvertFrom').length).to.equal(1);
    });
    it('child ConvertTo components', () => {
        expect(wrapper.find('ConvertTo').length).to.equal(1);
    });
    it('child InputValue components', () => {
        expect(wrapper.find('InputValue').length).to.equal(1);
    });

    it('renders the custom props', () => {
        wrapper.setProps({
            converterName: 'Hello, world'
        });

        expect(wrapper.contains('Hello, world')).to.equal(true);
    });

    /*it('renders the custom props', () => {
        wrapper.setProps({
            log: false
        });

        expect(wrapper.contains('Logger')).to.equal(true);
    });*/

})