import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const register = (username, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "content-type",
      },
    };
    const response = await axios.post(
      "https://simple-todo-api.vercel.app/user/register",
      { username, password },
      config
    );
    dispatch({ type: ActionTypes.SIGN_UP, payload: response.data });
  } catch (error) {
    alert(error);
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "content-type",
      },
    };
    const response = await axios.post(
      "https://simple-todo-api.vercel.app/user/login",
      { username, password },
      config
    );
    dispatch({ type: ActionTypes.LOGIN, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const setIsLoggedIn = (isLoggedIn) => ({
  type: ActionTypes.SET_IS_LOGGED_IN,
  payload: isLoggedIn,
});

export const setUserNull = () => ({
  type: ActionTypes.SET_USER_NULL,
});

export const setTodoNull = () => ({
  type: ActionTypes.SET_TODOS_NULL,
});

export const getTodosById = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.get(
      `https://simple-todo-api.vercel.app/todo/getTodo/${id}`,
      config
    );
    dispatch({ type: ActionTypes.GET_TODO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = (id, title, description) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.post(
      `https://simple-todo-api.vercel.app/todo/add/${id}`,
      { title, description },
      config
    );
    dispatch({ type: ActionTypes.ADD_TODO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id, todoId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.delete(
      `https://simple-todo-api.vercel.app/todo/delTodo/${id}/${todoId}`,
      config
    );
    dispatch({ type: ActionTypes.DELETE_TODO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = (id, todoId) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const response = await axios.put(
      `https://simple-todo-api.vercel.app/todo/uStatus/${id}/${todoId}`,
      config
    );
    dispatch({ type: ActionTypes.EDIT_TODO, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
