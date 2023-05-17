import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);

      // const index = state.contacts.findIndex(
      //   contact => contact.id !== action.payload
      // );
      // state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
