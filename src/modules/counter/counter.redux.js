import { COUNTER_ACTION_TYPES } from './counter.action';

const COUNTER_INITIAL_STATE = {
  value: 0,
};

export default (state = COUNTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return state = {
        value: state.value + 1,
      };
    case COUNTER_ACTION_TYPES.DECREMENT:
      return state = {
        value: state.value - 1,
      };
    case COUNTER_ACTION_TYPES.RESET:
      return {
        value: 0,
      };
    case COUNTER_ACTION_TYPES.CHANGE:
      return state = {
        value: Number(action.payload),
      };
    default:
      return state;
  }
}