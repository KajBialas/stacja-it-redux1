import { TODO_ACTION_TYPES } from './todo.action';

const COUNTER_INITIAL_STATE = {
  list: [],
  isLoading: false,
  isError: false,
};

export default (state = COUNTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD:
      const newTodoElementId = state.list.length ? state.list.length + 1 : 1;
      const newTodoElement = {
        id: newTodoElementId,
        title: action.payload,
        completed: false,
      };

      return state = {
        ...state,
        list: [...state.list, newTodoElement],
      };
    case TODO_ACTION_TYPES.MARK_COMPLETE:
      const newTodoArray = [...state.list];
      const selectedItem = newTodoArray.find(el => el.id === action.payload);
      newTodoArray[newTodoArray.indexOf(selectedItem)].completed = !newTodoArray[newTodoArray.indexOf(selectedItem)].completed;
      return state = {
        ...state,
        list: newTodoArray,
      };
    case TODO_ACTION_TYPES.FETCH_LOADING:
      return state = {
        ...state,
        isLoading: true,
      };
    case TODO_ACTION_TYPES.FETCH_SUCCESS:
      return state = {
        ...state,
        isLoading: false,
        isError: false,
        list: action.payload,
      };
    case TODO_ACTION_TYPES.FETCH_ERROR:
      return state = {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}