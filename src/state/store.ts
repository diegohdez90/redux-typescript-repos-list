import { configureStore } from '@reduxjs/toolkit';
import repositories from './reducers/repositories';

const store = configureStore({
  reducer: {
    repositories: repositories
  },
});

export default store;
