import React from 'react';
import PropTypes from 'prop-types';

const Username = ({ username }) => (
  <header>
    <div>
      <p>{ username }Username</p>
    </div>
  </header>
);

Username.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Username;

