import { connect, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { saveQuestionAnswer } from "../../redux/middleware/thunk";
import "./detail.css";
import { useMemo } from "react";

const QuestionDetail = ({ authId, userReducer }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { question } = location?.state;

  const answerQuestion = (option) => {
    if (window.confirm("Select option")) {
      dispatch(saveQuestionAnswer({ authedUser: authId, qid: question?.id, answer: option }));
    }
  };

  const avatarUrl = useMemo(() => {
    return userReducer[question.author]?.avatarURL;
  }, [question.author, userReducer]);

  return (
    <div className="container">
      <p className="author-poll">Poll by {question?.author}</p>
      <img src={avatarUrl || null} />
      <p className="author-poll">Would You Rather</p>

      <div className="option">
        <div className="option-one">
          <div className="content-question">
            <p>{question?.optionOne?.text}</p>
          </div>
          <button className="btn-click" onClick={() => answerQuestion("optionOne")}>
            <p>Click</p>
          </button>
        </div>

        <div className="option-two">
          <div className="content-question">
            <p>{question?.optionTwo?.text}</p>
          </div>
          <button className="btn-click" onClick={() => answerQuestion("optionTwo")}>
            <p>Click</p>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authReducer, userReducer }) => ({
  authId: authReducer?.id,
  userReducer: userReducer,
});

export default connect(mapStateToProps)(QuestionDetail);
