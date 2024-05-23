import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="display" role="heading" aria-level="1">
    {value}
  </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
