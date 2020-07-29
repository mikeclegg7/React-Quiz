import React, { Component } from "react";
import { connect } from "react-redux";

//this section will involve returning the redux score and alos number of questions

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

    console.log(percentageCorrect);
    let message =
      percentageCorrect === 100
        ? "You scored 100% - Well done!"
        : percentageCorrect >= 51
        ? "You got over 50% of the questions correct - Fantastic!"
        : "Thanks for playing and great try!";

    const scorevariables = {
      scores0_20: 50,
      scores30_40: 100,
      scores50_60: 342,
      scores70_80: 453,
      scores90_100: 353,
    };

    var maxwidth = 300;
    var quiz_completes = 600;

    // for (let [key, count] of Object.entries(scorevariables)) {
    //   var barwidth = Math.round((count / quiz_completes) * maxwidth);
    //   var barcolor = "#ffe8a8";

    //   $("#" + key + "_r").html(
    //     "<div style='width:0px;height:37px;overflow:hidden;vertical-align:middle;padding:0px;background:" +
    //       barcolor +
    //       ";display:inline-block;border:1px solid grey'>&nbsp</div><div style='display:inline-block;height:35px;vertical-align:middle;overflow:visible;padding-left:5px;padding-top:0px;padding-bottom: 0px'> " +
    //       count +
    //       "</div>"
    //   );

    //   $("#" + key + "_r div:first-child").animate(
    //     { width: barwidth + "px" },
    //     1000,
    //     function () {
    //       //complete
    //     }
    //   );
    // }

    return (
      <div className="results_page">
        <h1>Quiz Results...</h1>
        <div class="results_quiz_score">
          <p>
            {quizScore.userScore}/{quizScore.numQ} ({percentageCorrect}%)
          </p>
        </div>

        <p>{message}</p>

        <div className="results__rank">
          <h2>How did you rank?</h2>
        </div>

        <div className="results__what-next">
          <hr style={{ maxWidth: "300px" }} />
          <p>
            <strong>Would you like to:</strong>
          </p>
          <p>Reply this Quiz - Play another quiz</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizQuestions: state.questions.questionSet,
  };
};

export default connect(mapStateToProps)(QuizResults);
