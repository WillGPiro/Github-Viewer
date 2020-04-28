import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('matches a user', () => {
    const wrapper = shallow(<User name="monalisa octocat" followers='20' following='20' url="https://api.github.com/users/octocat"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
