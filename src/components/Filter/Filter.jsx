import React from 'react';
import { PropTypes } from 'prop-types';

import { FormInput } from './Filter.styled.js';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <FormInput type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
