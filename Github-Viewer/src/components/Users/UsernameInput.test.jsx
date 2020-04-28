import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from './UsernameInput';

describe('User', () => {
  it('matches a user', () => {
    const wrapper = shallow(<UsernameInput username="shaka2pass" />);
    expect(wrapper).toMatchSnapshot();
  });
});

