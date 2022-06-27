import actionsTypes from "./constants";

const increment = () => ({
  type: actionsTypes.INCREMENT
});

// TODO create decrement and reset actions
const decrement = () => ({
  type: actionsTypes.DECREMENT
})

const reset = () => ({
  type: actionsTypes.RESET
})

export const incrementAction = () => {
  return dispatch => {
    dispatch(increment());
  };
};

// TODO create decrementAction and resetAction action creators
export const decrementAction = () => {
  return dispatch => {
    dispatch(decrement());
  }
}

export const resetAction = () => {
  return dispatch => {
    dispatch(reset());
  }
}