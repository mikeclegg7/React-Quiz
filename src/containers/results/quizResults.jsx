import React, { Component } from "react";
import { connect } from "react-redux";

import Btn from "../../components/UI/generalButton/generalButton";
import * as actions from "../../store/actions/index";

//this section will involve returning the redux score and also number of questions

class QuizResults extends Component {
  calculateScore() {
    let quizQuestions = this.props.quizQuestions;
    let score = 0;
    let numQuestions = quizQuestions.length;

    quizQuestions.forEach((element) => {
      if (element.userAnswer === element.correctAnswer) {
        score++;
      }
    });
    return { userScore: score, numQ: numQuestions };
  }

  render() {
    let quizScore = this.calculateScore();
    let percentageCorrect = Math.round(
      (quizScore.userScore / quizScore.numQ) * 100
    );

    let message =
      percentageCorrect === 100
        ? "You scored 100% - Well done!"
        : percentageCorrect >= 51
        ? "You got over 50% of the questions correct - Fantastic!"
        : "Thanks for playing and great try!";

    const scorevariables = {
      scores81_100: {
        label: "81-100%",
        score: 353,
      },
      scores61_80: {
        label: "61-80%",
        score: 453,
      },
      scores41_60: {
        label: "41-60%",
        score: 342,
      },
      scores21_40: {
        label: "21-40%",
        score: 100,
      },
      scores0_21: {
        label: "0-20%",
        score: 50,
      },
    };

    const maxwidth = 300;
    const quiz_completes = 1298;

    let rowsArray = [];

    for (let [key, scoreGroup] of Object.entries(scorevariables)) {
      var barwidth =
        Math.round((scoreGroup.score / quiz_completes) * maxwidth) * 2 + "px";

      let barColour = "#ffe8a8";
      if (
        percentageCorrect >= 0 &&
        percentageCorrect <= 20 &&
        key === "scores0_21"
      ) {
        barColour = "#7cc9f5";
      } else if (
        percentageCorrect >= 21 &&
        percentageCorrect <= 40 &&
        key === "scores21_40"
      ) {
        barColour = "#7cc9f5";
      } else if (
        percentageCorrect >= 41 &&
        percentageCorrect <= 60 &&
        key === "scores41_60"
      ) {
        barColour = "#7cc9f5";
      } else if (
        percentageCorrect >= 61 &&
        percentageCorrect <= 80 &&
        key === "scores61_80"
      ) {
        barColour = "#7cc9f5";
      } else if (
        percentageCorrect >= 81 &&
        percentageCorrect <= 100 &&
        key === "scores81_100"
      ) {
        barColour = "#7cc9f5";
      }

      rowsArray.push(
        <tr key={key}>
          <td>{scoreGroup.label}</td>
          <td className="results-table-right">
            <div
              style={{
                width: barwidth,
                marginLeft: "0px",
                marginRight: "auto",
                height: "37px",
                overflow: "hidden",
                verticalAlign: "middle",
                padding: "0px",
                background: barColour,
                display: "inline-block",
                border: "1px solid grey",
              }}
            ></div>
            <div
              style={{
                display: "inline-block",
                height: "35px",
                verticalAlign: "middle",
                overflow: "visible",
                paddingLeft: "5px",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              {scoreGroup.score}
            </div>
          </td>
        </tr>
      );
    }

    return (
      <div className="results_page">
        <h1>Quiz Results...</h1>
        <div className="results_quiz_score">
          <p>
            {quizScore.userScore}/{quizScore.numQ} ({percentageCorrect}%)
          </p>
        </div>

        <p>{message}</p>

        <div className="results-rank">
          <h2>How did you rank?</h2>

          <table className="results-table">
            <tbody>
              <tr>
                <th>Questions correct</th>
                <th>People</th>
              </tr>
              {rowsArray}
            </tbody>
          </table>

          <p>Number of completes: {quiz_completes}</p>
        </div>

        <div className="results__what-next">
          <hr style={{ maxWidth: "300px" }} />
          <p>
            <strong>Would you like to:</strong>
          </p>
          <div className="results__what-next-btns">
            <Btn
              text="Reply this Quiz"
              btnClick={() =>
                this.props.onReplayCurrentQuiz(this.props.quizSet)
              }
            />{" "}
            <Btn text="Choose New Quiz" btnClick={this.props.onChooseNewQuiz} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizSet: state.questions.whichQuiz,
    quizQuestions: state.questions.questionSet,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onReplayCurrentQuiz: (whichQuiz) => dispatch(actions.replayQuiz(whichQuiz)),
    onChooseNewQuiz: () => dispatch(actions.chooseNewQuiz()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);
