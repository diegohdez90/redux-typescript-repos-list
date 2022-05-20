import { configureStore } from '@reduxjs/toolkit';
import { reducer as repositories } from './reducers/repositories';

export const store = configureStore({
  reducer: {
    repositories: repositories,
  },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;
