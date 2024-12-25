import React from "react";
import BigDropdown from "../bigDropdown";

const AddProject = (props) => {
  return (
    <BigDropdown setFuncHandler={props.setFuncHandler}>
      <div>ADD</div>
    </BigDropdown>
  );
};

export default AddProject;
