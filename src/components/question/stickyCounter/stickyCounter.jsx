import React from "react";

const stickyCounter = (props) => {
  return (
    <div class="question__sticky-counter-container">
      <div class="question__sticky-counter-center">
        <div class="question__sticky-counter-box">
          {props.currentQ + 1}/{props.totalQ}
        </div>
      </div>
    </div>
  );
};

export default stickyCounter;
