import AUTH from "../types/auth";

export function loginAction(users) {
  return {
    type: AUTH.LOGIN,
    payload: users,
  };
}

export function loginFailureAction(users) {
  return {
    type: AUTH.LOGIN_FAILURE,
  };
}

export function logoutAction() {
  return {
    type: AUTH.LOGOUT,
  };
}
