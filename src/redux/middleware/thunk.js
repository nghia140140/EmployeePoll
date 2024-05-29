import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "../../util/_DATA";
import { loginAction, loginFailureAction } from "../actions/auth";
import {
  getQuestionsAction,
  saveQuestionAction,
  saveQuestionAnswerAction,
} from "../actions/question";
import { getUsersAction } from "../actions/user";

export function getUsers() {
  return (dispatch) => {
    return _getUsers().then((user) => {
      dispatch(getUsersAction(user));
    });
  };
}

export function getQuestions() {
  return (dispatch) => {
    return _getQuestions().then((question) => {
      dispatch(getQuestionsAction(question));
    });
  };
}

export function handleLogin(username, password) {
  return (dispatch, getState) => {
    const { userReducer } = getState();

    const user = Object.values(userReducer).find(
      (user) => user.id === username && user.password === password
    );

    if (!!user) {
      return dispatch(loginAction(user));
    } else {
      return dispatch(loginFailureAction());
    }
  };
}

export function saveQuestions(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((res) => {
      dispatch(saveQuestionAction(res));
    });
  };
}

export function saveQuestionAnswer(questionAnswer) {
  return (dispatch) => {
    return _saveQuestionAnswer(questionAnswer).then((res) => {
      dispatch(saveQuestionAnswerAction(res.questions));
      dispatch(getUsersAction(res.users));
      dispatch(loginAction(res.users[questionAnswer.authedUser]));
    });
  };
}
