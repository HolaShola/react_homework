import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import Converter_2 from '../../components/converter_2';

describe('<Converter_2 />', () => {
    it('renders', () => {
        const wrapper = shallow(<Converter_2 />)
        assert(wrapper.length, 'rendered')
    })
})
