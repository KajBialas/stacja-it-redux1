export const TODO_ACTION_TYPES = {
  ADD: 'TODO_ADD',
  MARK_COMPLETE: 'TODO_MARK_COMPLETE',
  FETCH_SUCCESS: 'TODO_FETCH_SUCCESS'
};

export const ACTION_FETCH_TODOS = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => dispatch({
        type: TODO_ACTION_TYPES.FETCH_SUCCESS,
        payload: json,
      }))
  }
};