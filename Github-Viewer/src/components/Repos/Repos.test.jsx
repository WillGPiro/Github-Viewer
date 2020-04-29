import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos', () => {
  it('matches a snapshot of repos', () => {
    const repos = [
      {
        id: 1,
        name: 'About-Me-Guessing-Game',
        url: 'https://api.github.com/repos/Shaka2Pass/About-Me-Guessing-Game'
      },
      {
        id: 2,
        name: 'auth-lab',
        url: 'https://api.github.com/repos/Shaka2Pass/auth-lab'
      }
    ];
    const wrapper = shallow(<Repos repos={repos}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
