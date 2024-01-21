import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({

  name: 'config',
  initialState: {
    language: 'en'
  },
  reducers: {
    updateLanguage: (state, action) => {

      state.language = action.payload;
    }
  }
})

export const { updateLanguage } = configSlice.actions;

export default configSlice.reducer;