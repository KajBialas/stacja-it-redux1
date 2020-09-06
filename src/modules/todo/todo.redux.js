import { TODO_ACTION_TYPES } from './todo.action';

const COUNTER_INITIAL_STATE = {
  list: [],
};

export default (state = COUNTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD:
      const newTodoElementId = state.list.length ? state.list.length + 1 : 1;
      const newTodoElement = {
        id: newTodoElementId,
        text: action.payload,
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
    default:
      return state;
  }
}