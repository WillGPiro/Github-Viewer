import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ username, onNameChange, onNameSubmit }) => (
  <>
    <input type="text" value={username} onChange={onNameChange} />
    <input type="button" name="search" value="Search" onClick={onNameSubmit} />
  </>
);

UsernameInput.propTypes = {
  username: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNameSubmit: PropTypes.func.isRequired
};

export default UsernameInput;

