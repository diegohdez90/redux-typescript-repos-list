import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const {
    searchRepos,
  } = useActions();
  const {
    data,
    error,
    loading,
  } = useSelector((state) => state.repositories);

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
          {
            error && <h5>{error}</h5>
          }
          {
            loading && <span>Loading...</span>
          }
          {
            data && (
              <ul>
                {data.map((repo) => (<li>{repo}</li>))}
              </ul>
            )
          }
        </form>
      </h4>
    </div>
  );
};

export default RepositoriesList;
