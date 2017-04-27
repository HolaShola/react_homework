import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import Converter_1 from '../../components/converter_1';

describe('<Converter_1 />', () => {
    it('renders', () => {
        const wrapper = shallow(<Converter_1 />)
        assert(wrapper.length, 'rendered')
    })
})
