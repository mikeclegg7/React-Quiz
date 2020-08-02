import React from "react";

const generalbutton = (props) => {
  return (
    <div className="general-btn" onClick={props.btnClick}>
      {props.text}
    </div>
  );
};

export default generalbutton;
