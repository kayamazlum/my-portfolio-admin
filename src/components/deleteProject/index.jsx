import React from "react";
import BigDropdown from "../bigDropdown";

const DeleteProject = (props) => {
  return (
    <BigDropdown
      setFuncHandler={props.setFuncHandler}
      funcHandler={props.funcHandler}
    >
      <div>DELETE</div>
    </BigDropdown>
  );
};

export default DeleteProject;
