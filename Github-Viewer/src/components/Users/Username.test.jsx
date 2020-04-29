import React from 'react';
import { shallow } from 'enzyme';
import Username from './Username';

describe('User', () => {
  it('matches a user', () => {
    const wrapper = shallow(<Username username="shaka2pass"/>);
    expect(wrapper).toMatchSnapshot();
  });
});

