import React, { Component } from 'react';
import Username from '../components/Users/Username.jsx';
import UsernameInput from '../components/Users/UsernameInput.jsx';
import User from '../components/Users/User.jsx';
import Repos from '../components/Repos/Repos.jsx';
import Repo from '../components/Repos/Repo.jsx';
import { fetchRepos } from '../services/github.js';

export default class GithubViewer extends Component {
  state = {
    username: 'shaka2pass',
    name: 'monalisa octocat',
    followers: '20',
    following: '20',
    url: 'https://api.github.com/users/octocat',
    repos:[]
  }

  componentDidMount() {
    fetchRepos()
      .then(repos => this.setState({ repos }));
  }

 onNameChange = ({ target }) => {
   const username = target.value;
   this.setState({ username });
 }

 render() {
   const { username, name, followers, following, url, repos } = this.state;
   return (
     <>
       <UsernameInput username={username} onNameChange={this.onNameChange} />
       <Username username={username}/>,
       <User name={name} followers={followers} following={following} url={url} />
       <Repo/>
       <Repos repos={repos} />
     </>
   );
 }
}
