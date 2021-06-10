import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_COUNTER,
  INITIALIZE_COUNTER,
} from "../shared/constants";
const initialState = {
  counter_min: 1,
  counter_val: 1,
  counter_max: 1000,
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter_val:
          state.counter_val &&
          state.counter_val < (state.counter_max ? state.counter_max : 1000)
            ? state.counter_val + 1
            : state.counter_val,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter_val:
          state.counter_val &&
          state.counter_val > (state.counter_min ? state.counter_min : 1)
            ? state.counter_val - 1
            : state.counter_val,
      };
    case SET_COUNTER:
      return {
        ...state,
        counter_val:
          action.payload >= (state.counter_min ? state.counter_min : 1) &&
          action.payload <= (state.counter_max ? state.counter_max : 1000)
            ? action.payload
            : state.counter_val,
      };
    case INITIALIZE_COUNTER:
      return {
        ...state,
        counter_val: state.counter_val ? state.counter_val : 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default CounterReducer;
