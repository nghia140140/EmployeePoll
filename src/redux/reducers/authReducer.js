import AUTH from "../types/auth";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return action.payload;

    case AUTH.LOGIN_FAILURE:
      return false;

    case AUTH.LOGOUT:
      return false;

    default:
      return state;
  }
};

export default authReducer;
