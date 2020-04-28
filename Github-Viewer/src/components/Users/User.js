import React from 'react';
import PropTypes from 'prop-types';

const User = ({ username }) => (
  <header>
    <div>
      <p>{ username }Username</p>
    </div>
  </header>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
};

export default User;

