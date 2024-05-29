import USER_TYPES from "../types/userTypes";

export function getUsersAction(users) {
  return {
    type: USER_TYPES.GET_USER,
    payload: users,
  };
}
