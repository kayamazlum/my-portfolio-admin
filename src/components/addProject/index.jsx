import React from "react";
import BigDropdown from "../bigDropdown";

const AddProject = (props) => {
  return (
    <BigDropdown
      setFuncHandler={props.setFuncHandler}
      funcHandler={props.funcHandler}
    >
      <form onSubmit={() => null} className="gap-2 flex flex-col">
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium">Title</label>
          <input
            className="border border-blue-600 p-1"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium">Summary</label>
          <input
            className="border border-yellow-600 p-1"
            type="text"
            name="summary"
            id="summary"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium">Content</label>
          <textarea
            className="border border-red-600 p-1"
            name="content"
            id="content"
            rows={5}
            cols={44}
          ></textarea>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium">Skills</label>
          <input
            className="border border-green-600 p-1"
            type="skills"
            name="skills"
            id="skills"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xl font-medium">Site URL</label>
          <input
            className="border border-purple-600 p-1"
            type="url"
            name=""
            id=""
          />
        </div>
        <div>
          <label className="text-xl font-medium">Image</label>
          <input type="file" name="" id="" />
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="bg-green-700 text-white w-full p-2 cursor-pointer hover:bg-green-600 text-xl font-semibold"
            type="button"
            value="Save"
          />
          <input
            className="bg-zinc-300 text-black w-full p-2 cursor-pointer hover:bg-green-600 text-xl font-semibold"
            type="button"
            value="Cancel"
          />
        </div>
      </form>
    </BigDropdown>
  );
};

export default AddProject;
