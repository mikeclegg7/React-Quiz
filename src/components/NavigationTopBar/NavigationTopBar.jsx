import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawToggle from "../sideDraw/DrawToggle/DrawToggle";

const NavTopBar = (props) => (
  <div className="NavTopBar">
    <DrawToggle openSideDraw={props.openSideDraw} />
    <div className="DesktopOnly">
      <NavigationItems />
    </div>
  </div>
);

export default NavTopBar;
