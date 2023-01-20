import React from 'react';
import { PropTypes } from 'prop-types';

import { ItemContact, ButtonDeleteContact } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <ItemContact>
        <p>
          {name}: {number}
        </p>
        <ButtonDeleteContact type="button" onClick={() => onDelete(id)}>
          Delete
        </ButtonDeleteContact>
      </ItemContact>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
