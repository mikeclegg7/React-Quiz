import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact clicked={props.clicked}>
      Home
    </NavigationItem>
    <NavigationItem link="/quizzes" exact clicked={props.clicked}>
      Quizzes
    </NavigationItem>
  </ul>
);

export default navigationItems;
