import React from "react";

const answerbutton = (props) => {
  return (
    <div className="answer-btn" onClick={props.clicked}>
      {props.answerText}
    </div>
  );
};

export default answerbutton;
