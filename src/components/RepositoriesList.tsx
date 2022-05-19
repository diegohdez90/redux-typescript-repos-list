import React from 'react'

const RepositoriesList: React.FC = () => {
  return (
    <div>
      <h4>
        <form>
          <label>Search a repo</label>
          <input type='text' />
          <button type='submit'>Search</button>
        </form>
      </h4>
    </div>
  )
}

export default RepositoriesList