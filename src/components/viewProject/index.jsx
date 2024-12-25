import React from "react";
import BigDropdown from "../bigDropdown";

const ViewProject = (props) => {
  return (
    <BigDropdown setFuncHandler={props.setFuncHandler}>
      <div>VIEW</div>
    </BigDropdown>
  );
};

export default ViewProject;
