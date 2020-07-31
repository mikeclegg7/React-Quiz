import React, { Component, createRef } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

// import "../../App.css";

class Question extends Component {
  componentDidMount() {}
  componentWillUnmount() {
    console.log("[question.js] did unmount");
    //add css swipe out animation
  }

  render() {
    const nodeRef = React.createRef(null);
    let question = this.props.questionsLoaded ? (
      <CSSTransition
        in={this.props.showQuestion}
        timeout={500}
        nodeRef={nodeRef}
        classNames="quest"
        // unmountOnExit
        // onEnter={() => setShowButton(false)}
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
            <div
              className="answer"
              onClick={() => this.props.updateAndGetNext("A")}
            >
              {this.props.question.answerOptionA}
            </div>
            <div
              className="answer"
              onClick={() => this.props.updateAndGetNext("B")}
            >
              {this.props.question.answerOptionB}
            </div>
            <div
              className="answer"
              onClick={() => this.props.updateAndGetNext("C")}
            >
              {this.props.question.answerOptionC}
            </div>
            <div
              className="answer"
              onClick={() => this.props.updateAndGetNext("D")}
            >
              {this.props.question.answerOptionD}
            </div>
          </div>
        </div>
      </CSSTransition>
    ) : (
      <p>loading...</p>
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
    // slideInQ: () => dispatch(actions.slideInQuestion()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
