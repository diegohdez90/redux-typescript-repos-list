import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';

function RepositoriesList() {
  const [term, setTerm] = useState('');
  const {
    searchRepos,
  } = useActions();
  const onChangeTermEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term);
  };

  return (
    <div>
      <h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="search-input">
            Search a repo
            <input
              name="search-input"
              type="text"
              value={term}
              onChange={onChangeTermEvent}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </h4>
    </div>
  );
}

export default RepositoriesList;
