import QUESTION_TYPES from "../types/questionTypes";

export function getQuestionsAction(question) {
  return {
    type: QUESTION_TYPES.GET_QUESTION,
    payload: question,
  };
}

export function saveQuestionAction(question) {
  return {
    type: QUESTION_TYPES.SAVE_QUESTION,
    payload: question,
  };
}

export function saveQuestionAnswerAction(question) {
  return {
    type: QUESTION_TYPES.SAVE_QUESTION_ANSWER,
    payload: question,
  };
}
