import React, { Component } from "react";
import { connect } from "react-redux";

import Question from "../question/question";
import StickyCounter from "../../components/question/stickyCounter/stickyCounter";
import * as actions from "../../store/actions/index";

class QuestionLoader extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
