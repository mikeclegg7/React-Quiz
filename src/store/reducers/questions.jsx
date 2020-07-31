//import * as actionTypes from "../actions/actionsTypes";
import questions_quiz_1 from "../../content/questions/quiz_1";
import questions_quiz_2 from "../../content/questions/quiz_2";

//the game will contain the questions, as well as the status and score of the user. This is loaded from the question sets
const initialState = {
  questionSet: [],
  currentQuestion: 0,
  totalQuestions: 0,
  quizComplete: false,
  quizScore: 0,
  questionsLoaded: false,
  slideStatus: "slideInit",
  showQuestion: true,
};

const initQuiz = (state, action) => {
  let updatedState = state;
  let questionSet = [];
  //const questionSet = import("../../content/questions/quiz_1");
  //console.log("qset: ", questionSet);
  if (action.whichQuiz === "quiz_1") {
    questionSet = questions_quiz_1;
  } else {
    questionSet = questions_quiz_2;
  }
  updatedState.questionSet = questionSet;
  updatedState.currentQuestion = 0;
  updatedState.totalQuestions = questionSet.length;
  updatedState.questionsLoaded = true;
  return { ...state, ...updatedState };
};

const updateQuestionAnswer = (state, action) => {
  let updatedState = state;

  // updatedState.slideStatus = "slideOut";
  updatedState.showQuestion = false;
  updatedState.questionSet[state.currentQuestion].userAnswer =
    action.userAnswer;

  // let questionIncrement = state.currentQuestion + 1;
  // if (questionIncrement < state.totalQuestions) {
  //   updatedState.currentQuestion = questionIncrement;
  // } else {
  //   updatedState.quizComplete = true;
  // }
  return { ...state, ...updatedState };
};
const loadNextQuestion = (state, action) => {
  let updatedState = state;
  let questionIncrement = state.currentQuestion + 1;
  if (questionIncrement < state.totalQuestions) {
    updatedState.currentQuestion = questionIncrement;
    updatedState.showQuestion = true;
  } else {
    updatedState.quizComplete = true;
  }
  return { ...state, ...updatedState };
};

// const slideInitQuestion = (state, action) => {
//   let updatedState = state;
//   // updatedState.slideStatus = "slideInit";
//   return { ...state, ...updatedState };
// };
// const slideInQuestion = (state, action) => {
//   let updatedState = state;
//   // updatedState.slideStatus = "slideIn";
//   updatedState.showQuestion = true;
//   return { ...state, ...updatedState };
// };

//set the state as intial state. Also have to create a deep clone so as to immutably change the state. We do this with the spread operator
const reducer = (state = initialState, action) => {
  //console.log('action.type:', action.type);
  switch (action.type) {
    case "INIT_QUIZ":
      return initQuiz(state, action);
    case "UPDATE_QUESTION_ANSWER":
      return updateQuestionAnswer(state, action);
    case "LOAD_NEXT_QUESTION":
      return loadNextQuestion(state, action);
    default:
      return state;
  }
};

export default reducer;
