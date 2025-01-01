"use client";
import React, { useState } from "react";
import BigDropdown from "../bigDropdown";
import axios from "axios";
import { toast } from "react-toastify";

const AddProject = (props) => {
  const { setFuncHandler, funcHandler } = props;
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    skills: "",
    site_url: "",
  });
  const [files, setFiles] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files || files.length === 0) {
      toast.warn("Please upload at least one image.", { autoClose: 3000 });
      return;
    }

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (files) {
      Array.from(files).forEach((file) => {
        data.append("images", file);
      });
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/add-project",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFuncHandler(!funcHandler);

      toast.success("Project saved successfully!", { autoClose: 3000 });
    } catch (error) {
      console.error("Error saving project:", error);
      alert("An error occurred while saving the project.", error);
    }
  };

  return (
    <BigDropdown setFuncHandler={setFuncHandler} funcHandler={funcHandler}>
      <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
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
            value={formData.title}
            onChange={handleInputChange}
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
            value={formData.summary}
            onChange={handleInputChange}
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
            value={formData.content}
            onChange={handleInputChange}
            required
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
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="siteUrl" className="text-xl font-medium rounded-md">
            Site URL
          </label>
          <input
            id="site_url"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="url"
            name="site_url"
            placeholder="Enter the project URL"
            value={formData.site_url}
            onChange={handleInputChange}
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
              onChange={handleFileChange}
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
