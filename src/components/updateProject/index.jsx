import React from "react";
import BigDropdown from "../bigDropdown";

const UpdateProject = (props) => {
  return (
    <BigDropdown setFuncHandler={props.setFuncHandler}>
      <div>UPDATE</div>
    </BigDropdown>
  );
};

export default UpdateProject;
