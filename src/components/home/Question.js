import moment from "moment";

const Question = ({ question, gotoQuestionDetail }) => {
  const timeFormat = moment(question?.timestamp).format("hh:mm A | YYYY-MM-DD");

  return (
    <div className="question-item">
      <div className="question-info">
        <p className="author-question">{question?.author}</p>
        <p className="time-question">{timeFormat}</p>
      </div>
      <button className="btn-show" onClick={() => gotoQuestionDetail(question)}>
        <p className="txt-show">Show</p>
      </button>
    </div>
  );
};

export default Question;
