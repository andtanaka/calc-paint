import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import infoSliceReducer from './slices/infoSlice';

export const store = configureStore({
  reducer: {
    info: infoSliceReducer,
  },
});

// setupListeners(store.dispatch);
