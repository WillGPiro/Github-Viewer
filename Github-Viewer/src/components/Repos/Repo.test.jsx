import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo', () => {
  it('matches a user', () => {
    const wrapper = shallow(<Repo name="shaka2pass" url="https://github.com/Shaka2Pass/About-Me-Guessing-Game"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
