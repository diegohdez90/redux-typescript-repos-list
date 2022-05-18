enum ActionType {
  SEARCH_REPOS = 'SEARCH_REPOS',
  SEARCH_REPOS_SUCCESS = 'SEARCH_REPOS_SUCCESS',
  SEARCH_REPOS_ERROR = 'SEARCH_REPOS_ERROR'
}

interface State {
  loading: boolean;
  data: string[];
  error: string | null;
}

interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
}

interface SearchReposSuccessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchReposErrorAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

type Action = SearchReposAction |
SearchReposSuccessAction |
SearchReposErrorAction;

const reducer = (
  state: State,
  action: Action
): State => {
  switch(action.type) {
    case ActionType.SEARCH_REPOS:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [...action.payload],
      };
    case ActionType.SEARCH_REPOS_ERROR:
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