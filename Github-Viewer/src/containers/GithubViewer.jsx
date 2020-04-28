import React, { Component } from 'react';
import Username from '../components/Users/Username.jsx';
import UsernameInput from '../components/Users/UsernameInput.jsx';
import User from '../components/Users/User.jsx';

export default class GithubViewer extends Component {
  state = {
    username: 'shaka2pass',
    name: 'monalisa octocat',
    followers: '20',
    following: '20',
    url: 'https://api.github.com/users/octocat'
  }

 onNameChange = event => {
   const username = event.target.value;
   this.setState({ username });
 }


 render() {
   const { username, name, followers, following, url } = this.state;
   return (
     <>
       <UsernameInput username={username} onNameChange={this.onNameChange} />
       <Username username={username}/>,
       <User name={name} followers={followers} following={following} url={url} />
     </>
   );
 }
}
