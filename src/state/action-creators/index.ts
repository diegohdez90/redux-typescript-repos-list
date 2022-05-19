import axios from 'axios';
import { Dispatch } from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepos = (term: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SEARCH_REPOS,
  });

  try {
    const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
      params: {
        text: term,
      },
    });

    const names: string[] = data.objects.map((result: any) => result.package.name);

    dispatch({
      type: ActionType.SEARCH_REPOS_SUCCESS,
      payload: names,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.SEARCH_REPOS_ERROR,
      payload: err.message,
    });
  }
};
