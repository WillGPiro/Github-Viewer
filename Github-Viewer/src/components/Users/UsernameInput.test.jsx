import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from './UsernameInput';

describe('UserName', () => {
  it('matches a username', () => {
    const wrapper = shallow(<UsernameInput username="shaka2pass" onNameChange={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

