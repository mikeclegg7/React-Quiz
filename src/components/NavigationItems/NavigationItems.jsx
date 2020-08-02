import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/" exact clicked={props.clicked}></NavigationItem>
  </ul>
);

export default navigationItems;
