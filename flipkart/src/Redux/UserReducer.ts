import { SET_USER,LOGOUT_USER } from "./ActionType.ts";


const initialUserState = null;  
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    case LOGOUT_USER:
      return null;

    default:
      return state;
  }
};