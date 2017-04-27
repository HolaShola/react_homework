import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import Menu from '../../components/menu';

describe('<Menu />', () => {
    it('renders', () => {
        const wrapper = shallow(<Menu />)
        assert(wrapper.length, 'rendered')
    })
})

