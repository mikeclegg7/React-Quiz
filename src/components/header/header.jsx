import React from "react";
import { NavLink } from "react-router-dom";

import HeaderImage from "../../assets/quiz_title.jpg";

//Return a little header with the title
const header = (props) => (
  <header className="Header">
    <div className="Title">
      <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
        <img src={HeaderImage} alt="Quiz header" />
        <br />
        <span className="TitleSecondary">Fun games for you</span>
      </NavLink>
    </div>
  </header>
);
export default header;
