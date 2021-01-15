import shortid from 'shortid';
import types from './phonebook-types';

export const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const overwriteContacts = newContacts => ({
  type: types.OVERWRITE,
  payload: newContacts,
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
