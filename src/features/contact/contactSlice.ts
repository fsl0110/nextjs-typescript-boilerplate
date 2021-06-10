import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Gender = 'male' | 'female' | undefined;

export type ContactData = {
  gender: Gender;
  firstname: string;
  surename: string;
  email: string;
  message: string;
};

export interface ContactState {
  contactData: ContactData | {};
}

const initialState: ContactState = {
  contactData: {},
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setContactData: (state, action: PayloadAction<ContactData>) => {
      state.contactData = action.payload;
    },
  },
});

export const { setContactData } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
