import { Action } from '../actions';
import { ActionType } from '../action-types';

interface State {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const reducer = (
  state: State = initialState,
  action: Action,
) => {
  switch (action.type) {
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
