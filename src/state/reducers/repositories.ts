interface State {
  loading: boolean;
  data: string[];
  error: string | null;
}

const reducer = (state: State, action: any): State => {
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