import { connect, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { saveQuestionAnswer } from "../../redux/middleware/thunk";
import "./detail.css";
import { useMemo } from "react";

const QuestionDetail = ({ authId, userReducer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { question } = location?.state;

  const answerQuestion = (option) => {
    if (window.confirm("Select option")) {
      dispatch(saveQuestionAnswer({ authedUser: authId, qid: question?.id, answer: option }));
      navigate(-1);
    }
  };

  const userAnswer = useMemo(
    () => ({
      optionOne: question?.optionOne?.votes?.includes(authId) || false,
      optionTwo: question?.optionTwo?.votes?.includes(authId) || false,
    }),
    [authId, question?.optionOne?.votes, question?.optionTwo?.votes]
  );

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
          <button
            className="btn-click"
            onClick={() => answerQuestion("optionOne")}
            disabled={userAnswer?.optionOne}
          >
            <p>{userAnswer?.optionOne ? "Your Option" : "Click"}</p>
          </button>
        </div>

        <div className="option-two">
          <div className="content-question">
            <p>{question?.optionTwo?.text}</p>
          </div>
          <button
            className="btn-click"
            onClick={() => answerQuestion("optionTwo")}
            disabled={userAnswer?.optionTwo}
          >
            <p>{userAnswer?.optionTwo ? "Your Option" : "Click"}</p>
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
