export const TODO_ACTION_TYPES = {
  ADD: 'TODO_ADD',
  MARK_COMPLETE: 'TODO_MARK_COMPLETE',
  FETCH_LOADING: 'TODO_FETCH_LOADING',
  FETCH_SUCCESS: 'TODO_FETCH_SUCCESS',
  FETCH_ERROR: 'TODO_FETCH_ERROR',
};

export const ACTION_FETCH_TODOS = () => {
  return dispatch => {
    dispatch({
      type: TODO_ACTION_TYPES.FETCH_LOADING
    });
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setTimeout(() => dispatch({
        type: TODO_ACTION_TYPES.FETCH_SUCCESS,
        payload: json,
      }),3000))
      .catch(e => setTimeout(()=> {
        dispatch({type: TODO_ACTION_TYPES.FETCH_ERROR})
      }, 2000));
  }
};