import axios from "axios";
import { Dispatch } from "react";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodo = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page, _limit: limit
        }
      });
      setTimeout(() => {
        dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: `There was an error: ${e}` });
    }
  };
};

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionTypes.SET_TODO_PAGE, payload: page };
}

