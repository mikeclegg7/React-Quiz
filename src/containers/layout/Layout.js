import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../../hoc/Aux/Aux";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NavTopBar from "../../components/NavigationTopBar/NavigationTopBar";
import SideDraw from "../../components/sideDraw/sideDraw";
import QuizMenu from "./../quizMenu/quizMenu";
import QuestionLoader from "../questionLoader/questionLoader";
import QuizResults from "../results/quizResults";

/* This is our primary layout component where we set the different parts of the page. Such as where the header will go, the nav bar, main content and footer.*/
class Layout extends Component {
  state = {
    showSideDraw: false,
    whichQuiz: null,
    quizLoaded: false,
    showQuizResults: false,
  };

  //Update the state once the sidedraw is set to close
  sideDrawClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };
  //Update the state, but it is dependent on the previous state
  sideDrawOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDraw: !prevState.showSideDraw };
    });
  };

  // loadQuiz = (whichQuiz) => {
  //   this.setState({
  //     whichQuiz: "quiz_1",
  //     showResults: false,
  //     quizLoaded: true,
  //   });
  // };
  // showResults = (quizQuestions) => {
  //   this.setState({
  //     showQuizResults: true,
  //     quizLoaded: false,
  //   });
  //   console.log("[LAYOUT]");
  // };

  //Render and return the different elements
  render() {
    let content = this.props.quizComplete ? (
      <QuizResults />
    ) : this.props.quizLoaded ? (
      <QuestionLoader
        questionSet={this.state.whichQuiz}
        showQuizResults={this.showResults}
      />
    ) : (
      <QuizMenu />
    );

    return (
      <Aux>
        <div className="Wrap">
          <Header />
          <NavTopBar openSideDraw={this.sideDrawOpenHandler} />
          />
          <SideDraw
            open={this.state.showSideDraw}
            closed={this.sideDrawClosedHandler}
          />
          <section className="MainContent">{content}</section>
          <Footer />
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizLoaded: state.questions.questionsLoaded,
    quizComplete: state.questions.quizComplete,
  };
};

export default connect(mapStateToProps)(Layout);
