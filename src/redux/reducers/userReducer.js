import USER_TYPES from "../types/userTypes";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TYPES.GET_USER:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
