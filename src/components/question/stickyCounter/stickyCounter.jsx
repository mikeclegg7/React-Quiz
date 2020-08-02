import React from "react";

const stickyCounter = (props) => {
  return (
    <div className="question__sticky-counter-container">
      <div className="question__sticky-counter-center">
        <div className="question__sticky-counter-box">
          {props.currentQ + 1}/{props.totalQ}
        </div>
      </div>
    </div>
  );
};

export default stickyCounter;
