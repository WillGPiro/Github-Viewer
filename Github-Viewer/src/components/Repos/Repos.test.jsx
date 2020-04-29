import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos', () => {
  it('matches a repo', () => {
    const wrapper = shallow(<Repos repos="somerepo"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
