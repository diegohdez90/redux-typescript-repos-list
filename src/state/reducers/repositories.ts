interface State {
  loading: boolean;
  data: string[];
  error: string | null;
}

interface Action {
  type: String;
  payload?: any;
}

const reducer = (state: State, action: Action): State => {
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