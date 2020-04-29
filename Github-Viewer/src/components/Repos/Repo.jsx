import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url }) => (
  <div>
    <div>
      Name: {name}
    </div>
    <div>
      Url: {url}
    </div>
  </div>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired, 
};

export default Repo;
