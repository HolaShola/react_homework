import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import NotFound from '../../components/not_found';

describe('<NotFound />', () => {
    it('renders', () => {
        const wrapper = shallow(<NotFound />)
        assert(wrapper.length, 'rendered')
    })
})

