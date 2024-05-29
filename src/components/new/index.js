import { useState } from "react";
import React from "react";
import "./new.css";
import { connect, useDispatch } from "react-redux";
import { saveQuestions } from "../../redux/middleware/thunk";

const New = ({ authId }) => {
  const dispatch = useDispatch();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const onChangeOptionOne = (e) => {
    setOptionOne(e.target.value);
  };

  const onChangeOptionTwo = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveQuestions({ optionOneText: optionOne, optionTwoText: optionTwo, author: authId }));
    setOptionOne("");
    setOptionTwo("");
  };

  return (
    <div className="container">
      <h2>Would You Rather</h2>
      <span>Create You Own Poll</span>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>First Option</h5>
          <div className="input-option">
            <input
              data-testid="option-one"
              value={optionOne}
              onChange={onChangeOptionOne}
              type="text"
              name="optionOne"
              id="optionOne"
              placeholder="Option One"
            ></input>
          </div>
        </div>
        <div>
          <h5>Second Option</h5>
          <div className="input-option">
            <input
              data-testid="option-two"
              value={optionTwo}
              onChange={onChangeOptionTwo}
              type="text"
              name="optionTwo"
              id="optionTwo"
              placeholder="Option Two"
            ></input>
          </div>
        </div>
        <button
          data-testid="submit-button"
          className="btnLogin"
          type="submit"
          disabled={!optionOne && !optionTwo}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  authId: authReducer?.id,
});

export default connect(mapStateToProps)(New);
