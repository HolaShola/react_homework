import React from 'react';
//import { expect } from 'chai';
//import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
//import { spy } from 'sinon';
import assert from 'assert';

import Welcome from '../../components/welcome';

describe('welcome component', () => {
    it('renders', () => {
        const wrapper = shallow(<Welcome />)
        assert(wrapper.length, 'rendered')
    })
})

