import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import Converter_3 from '../../components/converter_3';

describe('<Converter_3 />', () => {
    it('renders', () => {
        const wrapper = shallow(<Converter_3 />)
        assert(wrapper.length, 'rendered')
    })
})

