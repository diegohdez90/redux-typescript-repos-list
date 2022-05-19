import { configureStore } from '@reduxjs/toolkit';
import repositories from './reducers';

export const store = configureStore({
  reducer: {
    repositories,
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;
