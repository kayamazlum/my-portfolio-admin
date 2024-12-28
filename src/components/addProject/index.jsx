"use client";
import React, { useState } from "react";
import BigDropdown from "../bigDropdown";
import axios from "axios";

const AddProject = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    skills: "",
    site_url: "",
  });

  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("summary", formData.summary);
    data.append("content", formData.content);
    data.append("skills", formData.skills);
    data.append("site_url", formData.site_url);

    images.forEach((file) => {
      data.append("files", file);
    });

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
      setMessage(response.data.message);
      props.setFuncHandler(false);
    } catch (error) {
      console.log("Hata: ", error);
      setMessage("Proje eklenirken hata oluştu!");
    }
  };

  return (
    <BigDropdown
      setFuncHandler={props.setFuncHandler}
      funcHandler={props.funcHandler}
    >
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
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
      </form>
    </BigDropdown>
  );
};

export default AddProject;
