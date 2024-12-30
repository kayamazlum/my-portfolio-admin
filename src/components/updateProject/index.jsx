"use client";
import React, { useEffect, useState } from "react";
import BigDropdown from "../bigDropdown";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateProject = (props) => {
  const { funcHandler, setFuncHandler, detailsProjectData } = props;
  console.log(detailsProjectData);

  const [formData, setFormData] = useState({
    // _id: "",
    // title: "",
    // summary: detailsProjectData?.summary,
    // content: "",
    // skills: "",
    // site_url: "",
  });

  const [files, setFiles] = useState([]);

  const hanleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // onChange={(e) =>
    //   setFormData((prev) => ({ ...prev, summary: e.target.value }))
    // }
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

      const response = await axios.put(
        "http://localhost:4000/api/update-project",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Project updated successfully!", { autoClose: 3000 });
    } catch (error) {
      toast.warning("Failed to update the project. Please try again.");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    if (detailsProjectData) setFormData(detailsProjectData);
  }, [detailsProjectData]);

  const [deletedImages, setDeletedImages] = useState([]);
  useEffect(() => {
    console.log(deletedImages);
  }, [deletedImages]);

  const [filteredImage, setFilteredImage] = useState(
    detailsProjectData?.image_url
  );

  return (
    <BigDropdown setFuncHandler={setFuncHandler} funcHandler={funcHandler}>
      <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-xl font-medium rounded-md">
            Project Name
          </label>
          <input
            value={formData?.title}
            onChange={(e) =>
              setFormData(() => ({ ...formData, title: e.target.value }))
            }
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
            value={formData?.summary}
            onChange={(e) =>
              setFormData(() => ({ ...formData, summary: e.target.value }))
            }
            placeholder="Enter a short summary"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="content" className="text-xl font-medium">
            Description
          </label>
          <textarea
            value={formData?.content}
            onChange={(e) =>
              setFormData(() => ({ ...formData, content: e.target.value }))
            }
            id="content"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md resize-none"
            name="content"
            rows={5}
            placeholder="Enter a detailed description"
            required
          >
            {formData?.content}
          </textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="skills" className="text-xl font-medium rounded-md">
            Skills
          </label>
          <input
            value={formData?.skills}
            onChange={(e) =>
              setFormData(() => ({ ...formData, skills: e.target.value }))
            }
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
            value={formData?.site_url}
            onChange={(e) =>
              setFormData(() => ({ ...formData, site_url: e.target.value }))
            }
            id="site_url"
            className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md"
            type="url"
            name="site_url"
            placeholder="Enter the project URL"
          />
        </div>

        <div className="flex gap-2 justify-between mt-4">
          <div>
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
              onChange={(e) => setFiles(e.target.files)}
            />
          </div>
          <div>
            <label className="text-xl font-medium">Image</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {filteredImage?.length > 0 ? (
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
                      onClick={() => {
                        setFilteredImage((prevImages) =>
                          prevImages.filter((image) => image !== item)
                        );
                        setDeletedImages((prevDeleted) => [
                          ...prevDeleted,
                          item,
                        ]);
                      }}
                      className="absolute right-0 top-0 text-xl text-red-500 px-1 cursor-pointer bg-blue-50 rounded-full"
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
            className="bg-green-600 p-2 cursor-pointer text-white hover:bg-green-500 text-xl font-semibold w-48 rounded-md border-blue-500 border-2 transition duration-300 ease-in"
          >
            Save
          </button>
        </div>
      </form>
    </BigDropdown>
  );
};

export default UpdateProject;
