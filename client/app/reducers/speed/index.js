import { createAction, handleActions } from "redux-actions";

const initialState = 50;

export const SET_SPEED = "SET_SPEED";
export const setSpeed = createAction(SET_SPEED);

export const speed = handleActions(
  {
    SET_SPEED: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);
