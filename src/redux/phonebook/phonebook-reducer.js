import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './phonebook-actions';
import { v4 as keyGenerate } from 'uuid';

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => [
    ...state,
    { id: keyGenerate(), name: payload.name, number: payload.number },
  ],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
