import { ActionTypes } from "../constants/action-types";

const initialState = {
  user: [],
  isLoggedIn: false,
  todos: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_UP:
      return { ...state, user: payload };
    case ActionTypes.LOGIN:
      return { ...state, user: payload };
    case ActionTypes.SET_USER_NULL:
      return {
        ...state,
        user: null,
      };
    case ActionTypes.SET_TODOS_NULL:
      return {
        ...state,
        todos: null,
      };
    case ActionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: payload,
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: payload,
      };
    case ActionTypes.EDIT_TODO:
      return {
        ...state,
        todos: payload,
      };
    case ActionTypes.GET_TODO:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};
