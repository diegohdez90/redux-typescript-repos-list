import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>Search for repositories</h3>
        <RepositoriesList />

      </div>
    </Provider>
  );
}

export default App;
