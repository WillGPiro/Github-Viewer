import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onNameChange }) => (
  <>
    <input type="text" value={username} onChange={onNameChange} />
  </>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default UsernameInput;

