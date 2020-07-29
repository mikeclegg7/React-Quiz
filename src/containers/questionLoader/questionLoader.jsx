import React, { Component } from "react";
import { connect } from "react-redux";

import { questions } from "../../content/questions/quiz_1";
import Question from "../question/question";
import StickyCounter from "../../components/question/stickyCounter/stickyCounter";
import * as actions from "../../store/actions/index";

class QuestionLoader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quizQuestions: questions,
  //     currentQuestion: 0,
  //     totalQuestions: questions.length,
  //     questionsLoaded: true,
  //   };
  // }

  //need to pull the question from the redux store, and then populate the question text and answers. Then need an onlick handler for the options which will register the answer. Then need an action to load the next question.
  // state = {
  //   quizQuestions: [],
  //   currentQuestion: 0,
  //   totalQuestions: 1,
  //   questionsLoaded: false,
  // };

  // updateAndGetNext(answer) {
  //   let QuizQuestionsUpdated = this.state.quizQuestions;
  //   QuizQuestionsUpdated[this.state.currentQuestion].userAnswer = answer;
  //   this.setState({ quizQuestions: QuizQuestionsUpdated });

  //   let questionIncrement = this.state.currentQuestion + 1;
  //   if (questionIncrement < this.state.totalQuestions) {
  //     this.setState({ currentQuestion: questionIncrement });
  //   } else {
  //     this.props.showQuizResults();
  //   }
  // }

  render() {
    return (
      <div>
        <StickyCounter
          currentQ={this.props.currentQuestion}
          totalQ={this.props.totalQuestions}
        />
        <Question
          questionsLoaded={this.props.questionsLoaded}
          question={this.props.quizQuestions[this.props.currentQuestion]}
          currentQ={this.props.currentQuestion}
          updateAndGetNext={(answer) => this.props.onAnswerSelected(answer)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    quizQuestions: state.questions.questionSet,
    currentQuestion: state.questions.currentQuestion,
    totalQuestions: state.questions.totalQuestions,
    questionsLoaded: state.questions.questionsLoaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerSelected: (answer) =>
      dispatch(actions.updateQuestionAnswer(answer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionLoader);
