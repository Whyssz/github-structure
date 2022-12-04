import axios from "axios";
import { Dispatch } from "react";
import { UserAction, UsersActionTypes } from "../../types/users";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users',);
      setTimeout(() => {
        dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
      }, 500);
    } catch (e) {
      dispatch({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: `There was an error: ${e}` });
    }
  };
};
