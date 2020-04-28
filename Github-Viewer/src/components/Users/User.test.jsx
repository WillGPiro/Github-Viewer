import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('matches a user', () => {
    const wrapper = shallow(<User username="shaka2pass"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

