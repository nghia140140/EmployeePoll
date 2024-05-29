import QUESTION_TYPES from "../types/questionTypes";

const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_TYPES.GET_QUESTION:
      return action.payload;

    case QUESTION_TYPES.SAVE_QUESTION:
      return { ...state, [action.payload.id]: action.payload };

    case QUESTION_TYPES.SAVE_QUESTION_ANSWER:
      return action.payload;

    default:
      return state;
  }
};

export default questionReducer;
