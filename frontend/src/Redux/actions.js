import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "./actionTypes";
import axios from "axios";

// Add a new user

export const addNewUserRequest = () => ({
  type: ADD_USER_REQUEST,
});

export const addNewUserSuccess = (payload) => ({
  type: ADD_USER_SUCCESS,
  payload,
});

export const addNewUserFailure = (payload) => ({
  type: ADD_USER_FAILURE,
  payload,
});

export const addNewUser = (payload) => (dispatch) => {
  console.log(payload, "payload in actions");
  dispatch(addNewUserRequest(payload));
  axios
    .post("http://localhost:8000/api/user/new/", payload)
    .then((res) => dispatch(addNewUserSuccess(res.data)))
    .catch((err) => dispatch(addNewUserFailure(err)));
};
