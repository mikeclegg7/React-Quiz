import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import AnswerButton from "../../components/UI/answerButton/answerButton";

class Question extends Component {
  render() {
    const nodeRef = React.createRef(null);
    let question = this.props.questionsLoaded ? (
      <CSSTransition
        in={this.props.showQuestion}
        timeout={500}
        nodeRef={nodeRef}
        classNames="quest"
        onExited={() => this.props.loadNextQ()}
      >
        <div className="question" ref={nodeRef}>
          <div className="questionText">
            <h3>
              {this.props.currentQ + 1}.{this.props.question.questionText}
            </h3>
            <img
              src={this.props.question.questionImage}
              alt="Description"
              width="500"
              height="333"
            />
          </div>
          <div className="answersgroup">
            <AnswerButton
              clicked={() => this.props.updateAndGetNext("A")}
              answerText={this.props.question.answerOptionA}
            />
            <AnswerButton
              clicked={() => this.props.updateAndGetNext("B")}
              answerText={this.props.question.answerOptionB}
            />
            <AnswerButton
              clicked={() => this.props.updateAndGetNext("C")}
              answerText={this.props.question.answerOptionC}
            />
            <AnswerButton
              clicked={() => this.props.updateAndGetNext("D")}
              answerText={this.props.question.answerOptionD}
            />
          </div>
        </div>
      </CSSTransition>
    ) : (
      <p>Loading...</p>
    );

    return <div>{question}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentQ: state.questions.currentQuestion,
    showQuestion: state.questions.showQuestion,
    slideStatus: state.questions.slideStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadNextQ: () => dispatch(actions.loadNextQuestion()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
