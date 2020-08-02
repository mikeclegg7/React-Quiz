export const initQuiz = (which) => {
  return {
    type: "INIT_QUIZ",
    whichQuiz: which,
  };
};
export const updateQuestionAnswer = (answer) => {
  return {
    type: "UPDATE_QUESTION_ANSWER",
    userAnswer: answer,
  };
};
export const loadNextQuestion = () => {
  return {
    type: "LOAD_NEXT_QUESTION",
  };
};
export const replayQuiz = (which) => {
  return {
    type: "REPLAY_QUIZ",
    whichQuiz: which,
  };
};
export const chooseNewQuiz = () => {
  return {
    type: "CHOOSE_NEW_QUIZ",
  };
};
