import React from 'react';
import GithubViewer from '../../containers/GithubViewer.jsx';
import Repos from '../Repos/Repos.jsx';

export default function App() {
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
  return (
    <>
      <GithubViewer />,
      <Repos repos={repos}/>
    </>
  );

}
