import React from 'react';
import { PropTypes } from 'prop-types';
import ContactItem from '../ContactItem';

import { ListContacts } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ListContacts>
      {contacts.length
        ? contacts.map(({ name, number, id }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
          ))
        : 'No contacts'}
    </ListContacts>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
