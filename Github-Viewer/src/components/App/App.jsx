import React from 'react';
import Username from '../Users/Username.jsx';
import User from '../Users/User.jsx';
import UsernameInput from '../Users/UsernameInput.jsx';

export default function App() {
  return (
    <>
      <UsernameInput username="shaka2pass"/>
      <Username username="shaka2pass"/>,
      <User name="monalisa octocat" followers='20' following='20' url="https://api.github.com/users/octocat" />,
    </>
  );

}
