import { connect } from "react-redux";
import ListQuestion from "./ListQuestion";
import { useNavigate } from "react-router-dom";

const Home = ({ newQuestion, doneQuestion }) => {
  console.log("questionReducer", newQuestion, doneQuestion);

  const navigate = useNavigate();

  const gotoQuestionDetail = (question) => {
    navigate(`/question/${question.id}`, { state: { question } });
  };

  return (
    <ListQuestion
      newQuestion={newQuestion}
      doneQuestion={doneQuestion}
      gotoQuestionDetail={gotoQuestionDetail}
    />
  );
};

const mapStateToProps = ({ questionReducer, authReducer }) => {
  const arrKey = [];
  const newQuestion = [];
  const doneQuestion = [];
  for (const key in authReducer.answers) {
    arrKey.push(key);
  }

  Object.values(questionReducer).forEach((question) => {
    if (arrKey.includes(question?.id)) {
      doneQuestion.push(question);
    } else {
      newQuestion.push(question);
    }
  });

  return {
    newQuestion,
    doneQuestion,
  };
};

export default connect(mapStateToProps)(Home);
