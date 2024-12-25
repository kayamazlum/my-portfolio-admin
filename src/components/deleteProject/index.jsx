import React from "react";
import BigDropdown from "../bigDropdown";

const DeleteProject = (props) => {
  return (
    <BigDropdown setFuncHandler={props.setFuncHandler}>
      <div>DELETE</div>
    </BigDropdown>
  );
};

export default DeleteProject;
