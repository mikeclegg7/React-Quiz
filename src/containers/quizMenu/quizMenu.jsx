import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import { questions } from "../../content/questions/quiz_1";

class QuizMenu extends Component {
  state = {
    quizzes: [
      {
        QuizID: "quiz_1",
        quizName: "Europe Capitals",
        quizStatus: "Incomplete",
        quizNumQuestions: 10,
        quizScore: null,
      },
      {
        QuizID: "quiz_2",
        quizName: "Famous Landmarks",
        quizStatus: "Incomplete",
        quizNumQuestions: 10,
        quizScore: null,
      },
    ],
  };

  getQuestions(whichQuestions) {
    switch (whichQuestions) {
      case "quiz_1":
        return questions;
      default:
        return "";
    }
  }

  render() {
    const quizListArr = [];
    for (let key in this.state.quizzes) {
      quizListArr.push({
        id: this.state.quizzes[key].QuizID,
        name: this.state.quizzes[key].quizName,
        status: this.state.quizzes[key].quizStatus,
        quizNumQuestions: this.state.quizzes[key].quizNumQuestions,
      });
    }

    return (
      <div className="quiz_menu">
        <h1>Menu</h1>
        <p>Which quiz would you like to play?</p>
        <div className="quiz_menu_options">
          {quizListArr.map((quiz) => (
            <div
              className="quiz_menu_item"
              key={quiz.id}
              //onClick={this.props.loadQuiz}
              onClick={() => this.props.onQuizSelected(quiz.id)}
            >
              <p>
                <strong>{quiz.name}</strong> - ({quiz.quizNumQuestions}{" "}
                questions)
              </p>
            </div>
          ))}
          <p>
            To do next: add counter in questions - improve design more, add
            buttons for more quizzes
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuizSelected: (whichQuiz) => dispatch(actions.initQuiz(whichQuiz)),
  };
};

export default connect(null, mapDispatchToProps)(QuizMenu);
