import React from "react";
import BigDropdown from "../bigDropdown";

const AddProject = (props) => {
  return (
    <BigDropdown
      setFuncHandler={props.setFuncHandler}
      funcHandler={props.funcHandler}
    >
      <form onSubmit={() => null} className="gap-4 flex flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-xl font-medium rounded-md">
            Project Name
          </label>
          <input
            id="title"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="text"
            name="title"
            placeholder="Enter your project name"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="summary" className="text-xl font-medium rounded-md">
            Summary
          </label>
          <input
            id="summary"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="text"
            name="summary"
            placeholder="Enter a short summary"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="text-xl font-medium">
            Description
          </label>
          <textarea
            id="content"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md resize-none"
            name="content"
            rows={5}
            placeholder="Enter a detailed description"
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="skills" className="text-xl font-medium rounded-md">
            Skills
          </label>
          <input
            id="skills"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="text"
            name="skills"
            placeholder="Enter required skills"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="siteUrl" className="text-xl font-medium rounded-md">
            Site URL
          </label>
          <input
            id="siteUrl"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="url"
            name="siteUrl"
            placeholder="Enter the project URL"
            required
          />
        </div>

        <div className="flex gap-4 justify-between mt-4 flex-wrap">
          <div className="gap-2 flex">
            <label htmlFor="image" className="text-xl font-medium">
              Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              className="cursor-pointer"
              multiple
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 py-2 px-8 cursor-pointer text-white hover:bg-green-500 text-xl font-semibold sm:w-auto w-full rounded-md border-blue-500 border-2 transition duration-300 ease-in"
          >
            Save
          </button>
        </div>
      </form>
    </BigDropdown>
  );
};

export default AddProject;
