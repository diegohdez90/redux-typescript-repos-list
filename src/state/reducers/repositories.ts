interface State {
  loading: boolean;
  data: string[];
  error: string | null;
}

interface SearchReposAction {
  type: 'SEARCH_REPOS';
}

interface SearchReposSuccessAction {
  type: 'SEARCH_REPOS_SUCCESS';
  payload: string[];
}

interface SearchReposErrorAction {
  type: 'SEARCH_REPOS_ERROR';
  payload: string;
}

const reducer = (
  state: State,
  action: SearchReposAction |
          SearchReposSuccessAction |
          SearchReposErrorAction
): State => {
  switch(action.type) {
    case 'SEARCH_REPOS':
      return {
        loading: true,
        error: null,
        data: [],
      };
    case 'SEARCH_REPOS_SUCCESS':
      return {
        loading: false,
        error: null,
        data: [...action.payload],
      };
    case 'SEARCH_REPOS_ERROR':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;