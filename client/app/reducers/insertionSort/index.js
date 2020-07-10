import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_CURRENT_INSERTIONTWO = "SET_CURRENT_INSERTIONTWO";
export const setCurrentInsertionTwo = createAction(SET_CURRENT_INSERTIONTWO);

export const currentInsertionTwo = handleActions({
    SET_CURRENT_INSERTIONTWO: (state, { payload }) => {
    return payload;
  },
}, initialState);
