import React from "react";
import BigDropdown from "../bigDropdown";

const UpdateProject = (props) => {
  return (
    <BigDropdown
      setFuncHandler={props.setFuncHandler}
      funcHandler={props.funcHandler}
    >
      <div className="gap-2 flex flex-col">
        <div>
          <label className="text-xl font-medium">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label className="text-xl font-medium">Summary</label>
          <input type="text" name="summary" id="summary" />
        </div>
        <div>
          <label className="text-xl font-medium">Content</label>
          <textarea name="content" id="content" rows={5} cols={44}></textarea>
        </div>
        <div>
          <label className="text-xl font-medium">Skills</label>
          <input type="skills" name="skills" id="skills" />
        </div>
        <div>
          <label className="text-xl font-medium">Site URL</label>
          <input type="url" name="" id="" />
        </div>
        <div>
          <label className="text-xl font-medium">Image</label>
          <input type="file" name="" id="" />
        </div>
      </div>
    </BigDropdown>
  );
};

export default UpdateProject;
