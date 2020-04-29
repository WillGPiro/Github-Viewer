import React from 'react';
import { shallow } from 'enzyme';
import UsernameInput from './UsernameInput';

describe('UserName', () => {
  it('matches a username', () => {
    const wrapper = shallow(<UsernameInput 
      username="shaka2pass" 
      onNameChange={()=>{}} 
      onNameSubmit={()=>{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});

