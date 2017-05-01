import React from 'react';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import assert from 'assert';

import Welcome from '../../components/welcome';

describe('<Welcome />', () => {
    it('renders', () => {
        const wrapper = shallow(<Welcome />)
        assert(wrapper.length, 'rendered')
    })
})

