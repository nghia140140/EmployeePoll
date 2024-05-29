import Question from "./Question";
import React from "react";
import "./listQuestion.css";

const ListQuestion = ({ newQuestion, doneQuestion, gotoQuestionDetail }) => {
  return (
    <div className="container">
      <div className="groupQuestion">
        <div className="title">
          <span className="text-title">New Question</span>
        </div>
        <div className="listQuestion">
          {newQuestion?.map((question) => (
            <Question
              question={question}
              key={question?.id}
              gotoQuestionDetail={gotoQuestionDetail}
            />
          ))}
        </div>
      </div>

      <div className="groupQuestion">
        <div className="title">
          <span className="text-title">Done</span>
        </div>
        <div className="listQuestion">
          {doneQuestion?.map((question) => (
            <Question
              question={question}
              key={question?.id}
              gotoQuestionDetail={gotoQuestionDetail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListQuestion;
