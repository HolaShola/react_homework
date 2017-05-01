import React from 'react';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import assert from 'assert';

import {Logger} from '../../components/logger';

describe('<Logger />', () => {
    const wrapper = shallow(<Logger />);

    it('renders', () => {
       assert(wrapper.length, 'rendered')
    })
})

