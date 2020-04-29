import React, { Component } from 'react';
import Username from '../components/Users/Username.jsx';
import UsernameInput from '../components/Users/UsernameInput.jsx';
import User from '../components/Users/User.jsx';
import Repos from '../components/Repos/Repos.jsx';
import { fetchUser, fetchRepos } from '../services/github.js';

export default class GithubViewer extends Component {
  state = {
    username: '',
    user: {
      name: '',
      followers: 0,
      following: 0,
      url: '',
    },
    repos:[]
  }

 onNameChange = ({ target }) => {
   const username = target.value;
   this.setState({ username });
 }

 onNameSubmit =() => {
   fetchUser(this.state.username)
     .then(user => this.setState({ user }));
   fetchRepos(this.state.username)
     .then(repos => this.setState({ repos }));
 }

 render() {
   const { username, user, repos } = this.state;
   return (
     <>
       <UsernameInput username={username} onNameChange={this.onNameChange} onNameSubmit={this.onNameSubmit}/>
       <Username username={username}/>,
       <User {...user} />
       <Repos repos={repos} />
     </>
   );
 }
}
