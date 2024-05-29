import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("saveQuestion", () => {
  it("Resolve api saveQuestion", async () => {
    const newQuestion = await _saveQuestion({
      optionOneText: "option1",
      optionTwoText: "option2",
      author: "123",
    });
    expect(newQuestion.author).toEqual("123");
    expect(newQuestion.optionOne.text).toEqual("option1");
    expect(newQuestion.optionTwo.text).toEqual("option2");
  });

  it("Reject api saveQuestion", async () => {
    await expect(
      _saveQuestion({
        optionOneText: "",
        optionTwoText: "",
        author: "",
      })
    ).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
  });

  it("Resolve api saveAnswerQuestion", async () => {
    const authedUser = "sarahedo";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionOne";
    const { users, questions } = await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });

    expect(users[authedUser].answers[qid]).toEqual(answer);
    expect(questions[qid][answer].votes).toContain(authedUser);
  });

  it("Reject api saveAnswerQuestion", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "",
        qid: "8xf0y6ziyjabvozdd253nd",
        answer: "optionOne",
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});
