import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => (
  <header>
    <div>
      <p>{ repos }</p>
    </div>
  </header>
);

Repos.propTypes = {
  repos: PropTypes.string.isRequired,
};

export default Repos;


