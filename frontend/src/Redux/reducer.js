import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errMsg: "",
  success: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        success: false,
        errMsg: "",
      };

    case ADD_USER_SUCCESS:
      console.log(action.payload, "paylod");
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: true,
        user: action.payload.data,
      };

    case ADD_USER_FAILURE:
      console.log(action.payload.response);
      return {
        ...state,
        isLoading: false,
        isError: true,
        success: false,
        errMsg: action.payload.response.data.err[0].msg
          ? action.payload.response.data.err[0].msg +
            " of " +
            action.payload.response.data.err[0].param
          : action.payload,
      };
    default:
      return state;
  }
};
