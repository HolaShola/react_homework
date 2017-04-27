import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import Result from '../../components/result';

describe('<Result />', () => {
    it('renders', () => {
        const wrapper = shallow(<Result />)
        assert(wrapper.length, 'rendered')
    })
})
