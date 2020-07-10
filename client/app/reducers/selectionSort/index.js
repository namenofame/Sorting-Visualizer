import { createAction, handleActions } from "redux-actions";

const initialState = [];

export const SET_CURRENT_SELECTIONTWO = "SET_CURRENT_SELECTIONTWO";
export const setCurrentSelectionTwo = createAction(SET_CURRENT_SELECTIONTWO);

export const currentSelectionTwo = handleActions({
    SET_CURRENT_SELECTIONTWO: (state, { payload }) => {
    return payload;
  },
}, initialState);
