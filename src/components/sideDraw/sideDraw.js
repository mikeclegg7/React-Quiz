import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
//import DrawToggle from '../SideDraw/DrawToggle/DrawToggle';
import Backdrop from "../UI/Backdrop/Backdrop";
import Aux from "../../hoc/Aux/Aux";

const SideDraw = (props) => {
  let attachedClasses = ["SideDraw", "Close"];
  if (props.open) {
    attachedClasses = ["SideDraw", "Open"];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div onClick={props.closed} className="CloseButton">
          X
        </div>
        <div className="Links">
          <strong>MENU</strong>
          <hr />
          <NavigationItems clicked={props.closed} />
        </div>
      </div>
    </Aux>
  );
};

export default SideDraw;
