"use client";

import React, { useEffect, useState } from "react";
import BigDropdown from "../bigDropdown";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateProject = ({
  funcHandler,
  setFuncHandler,
  detailsProjectData,
  getAllProjects,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    skills: "",
    site_url: "",
    git_repo_url: "",
  });

  const [files, setFiles] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [filteredImage, setFilteredImage] = useState([]);

  // Set form data when detailsProjectData changes
  useEffect(() => {
    if (detailsProjectData) {
      setFormData({
        _id: detailsProjectData._id || "",
        title: detailsProjectData.title || "",
        summary: detailsProjectData.summary || "",
        content: detailsProjectData.content || "",
        skills: detailsProjectData.skills || "",
        site_url: detailsProjectData.site_url || "",
        git_repo_url: detailsProjectData.git_repo_url || "",
      });
      setFilteredImage(detailsProjectData.image_url || []);
    }
  }, [detailsProjectData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      Array.from(files).forEach((file) => {
        data.append("images", file);
      });

      data.append("deleted_images", deletedImages);

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/update-project`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Project updated successfully!", { autoClose: 3000 });
      getAllProjects();
      setFuncHandler(!funcHandler);
    } catch (error) {
      toast.warning("Failed to update the project. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleDeleteImage = (item) => {
    setFilteredImage((prevImages) =>
      prevImages.filter((image) => image !== item)
    );
    setDeletedImages((prevDeleted) => [...prevDeleted, item]);
  };

  return (
    <BigDropdown setFuncHandler={setFuncHandler} funcHandler={funcHandler}>
      <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-xl font-medium rounded-md">
            Project Name
          </label>
          <input
            value={formData.title}
            onChange={handleInputChange}
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
            value={formData.summary}
            onChange={handleInputChange}
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
            value={formData.content}
            onChange={handleInputChange}
            id="content"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md resize-none"
            name="content"
            rows={5}
            placeholder="Enter a detailed description"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="skills" className="text-xl font-medium rounded-md">
            Skills
          </label>
          <input
            value={formData.skills}
            onChange={handleInputChange}
            id="skills"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="text"
            name="skills"
            placeholder="Enter required skills"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="site_url" className="text-xl font-medium rounded-md">
            Site URL
          </label>
          <input
            value={formData.site_url}
            onChange={handleInputChange}
            id="site_url"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="url"
            name="site_url"
            placeholder="Enter the project URL"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="git_repo_url"
            className="text-xl font-medium rounded-md"
          >
            Git Repo
          </label>
          <input
            value={formData.git_repo_url}
            onChange={handleInputChange}
            id="git_repo_url"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="url"
            name="git_repo_url"
            placeholder="Enter the Git Repo URL"
          />
        </div>

        <div className="flex gap-2 justify-between mt-4 flex-col">
          <div className="flex gap-3 mb-3">
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
          <div>
            <div className="flex flex-wrap gap-4 mt-2">
              {filteredImage.length > 0 ? (
                filteredImage.map((item, index) => (
                  <div
                    key={item}
                    className="border border-black rounded-md p-2 w-32 h-32 overflow-hidden relative"
                  >
                    <img
                      src={`http://localhost:4000${item}`}
                      alt={`Uploaded file ${index + 1}`}
                      className="object-contain"
                    />
                    <span
                      onClick={() => handleDeleteImage(item)}
                      className="absolute right-0 top-0 text-xl font-bold text-white border-white hover:bg-black transition duration-300 px-2 text-center cursor-pointer bg-red-500 border-2 flex items-center justify-center rounded-full"
                    >
                      X
                    </span>
                  </div>
                ))
              ) : (
                <span className="text-gray-500">No image available</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 p-2 cursor-pointer w-full text-white hover:bg-green-500 text-xl font-semibold rounded-md border-blue-500 border-2 transition duration-300 ease-in my-4"
          >
            Save
          </button>
        </div>
      </form>
    </BigDropdown>
  );
};

export default UpdateProject;
