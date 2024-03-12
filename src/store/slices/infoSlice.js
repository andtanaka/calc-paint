import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('info')
  ? JSON.parse(localStorage.getItem('info'))
  : { data: {} };

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.data = action.payload;
      localStorage.setItem('info', JSON.stringify(state));
    },
    clearInfo: (state, action) => {
      state.data = {};
      localStorage.setItem('info', JSON.stringify(state));
    },
  },
});

export const { setInfo, clearInfo } = infoSlice.actions;

export default infoSlice.reducer;
