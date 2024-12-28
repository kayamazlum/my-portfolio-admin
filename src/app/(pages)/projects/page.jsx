"use client";
import AddProject from "@/components/addProject";
import DeleteProject from "@/components/deleteProject";
import Menu from "@/components/menu";
import UpdateProject from "@/components/updateProject";
import ViewProject from "@/components/viewProject";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineRefresh } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";

const Projects = () => {
  const [funcHandler, setFuncHandler] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);

  //API CONNECTIONS

  // GET ALL PROJECTS
  const [allProjectsData, setAllProjectsData] = useState([]);
  const getAllProjects = async () => {
    try {
      const allProjects = await axios.get(
        "http://localhost:4000/api/get-projects"
      );
      setAllProjectsData(allProjects.data.projects || []);
      console.log(allProjects);
    } catch (error) {
      alert("DB bağlantısında hata!", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllProjects();
    };
    fetchData();
  }, []);

  //VIEW PROJECT DETAILS
  const [detailsProjectData, setDetailsProjectData] = useState({});
  const getDetailsProject = async (id) => {
    try {
      const d = await axios.get(
        `http://localhost:4000/api/details-project?_id=${id}`
      );
      setDetailsProjectData(d.data.selectedProject);
      console.log(detailsProjectData);
    } catch (error) {
      console.log(error);
      alert("DB bağlantısında hata!");
    }
  };

  //DELETE PROJECT
  const [selectedId, setSelectedId] = useState(null);
  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/delete-project`, {
        data: { _id: id },
      });
      toast.success("Project deleted successfully", { autoClose: 3000 });
      getAllProjects();
    } catch (error) {
      alert("DB bağlantısında hata!", error);
    }
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <Menu />
      <div className="p-4 w-full h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-medium mb-5 mt-2">Projects</h2>
        <div className="flex w-full mb-2 gap-2 items-center">
          <span
            onClick={() => getAllProjects()}
            className="bg-white border border-turkuaz transition text-lg duration-500 cursor-pointer rounded-lg py-2 px-3 flex items-center gap-1 group"
          >
            <HiOutlineRefresh
              size={20}
              className="group-hover:rotate-180 transition-transform duration-500 "
            />
            Refresh
          </span>
          <span
            onClick={() => setFuncHandler("Add Project")}
            className="bg-green-700 select-none text-white border text-lg cursor-pointer rounded-lg py-2 px-3 flex items-center gap-1 group"
          >
            <GoPlusCircle
              size={22}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
            Add Project
          </span>
        </div>
        <div className="overflow-auto border">
          {allProjectsData.length > 0 ? (
            <table className="w-full table-auto">
              <thead className="text-lg sticky top-0 ">
                <tr className="bg-turuncu text-beyaz ">
                  <th className=" text-start p-2 lg:w-[50%] w-auto">Title</th>
                  <th className=" text-start p-2 lg:w-[20%] w-auto lg:table-cell hidden">
                    Date
                  </th>
                  <th className=" text-start p-2 lg:w-[30%] w-auto">
                    Function
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {allProjectsData.map((data) => {
                  return (
                    <tr
                      key={data._id}
                      className="hover:bg-turkuaz transition duration-500 cursor-pointer odd:bg-gray-200 even:bg-white "
                    >
                      <td className=" text-start p-2 border ">{data.title}</td>
                      <td className=" text-start p-2 lg:table-cell hidden border ">
                        {data.updated_at}
                      </td>
                      <td className=" text-start p-2 gap-1 flex text-beyaz items-center">
                        <span
                          onClick={() => {
                            setFuncHandler("View Project");
                            getDetailsProject(data._id);
                          }}
                          className="bg-blue-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-lg py-1 px-2 select-none"
                        >
                          View
                        </span>
                        <span
                          onClick={() => setFuncHandler("Update Project")}
                          className="bg-green-600 hover:scale-110 transition-all duration-500 hover:-rotate-12 ease-in-out rounded-lg py-1 px-2 select-none"
                        >
                          Update
                        </span>
                        <span
                          onClick={() => {
                            setDeleteModal(true);
                            setSelectedId(data._id);
                          }}
                          className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-lg py-1 px-2 select-none"
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-xl my-5 flex items-center justify-center">
              Projects not found!
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
      {funcHandler === "Add Project" ? (
        <AddProject setFuncHandler={setFuncHandler} funcHandler={funcHandler} />
      ) : (
        <div></div>
      )}
      {funcHandler === "View Project" ? (
        <ViewProject
          detailsProjectData={detailsProjectData}
          setFuncHandler={setFuncHandler}
          funcHandler={funcHandler}
        />
      ) : (
        <div></div>
      )}
      {funcHandler === "Update Project" ? (
        <UpdateProject
          setFuncHandler={setFuncHandler}
          funcHandler={funcHandler}
        />
      ) : (
        <div></div>
      )}
      {deleteModal ? (
        <DeleteProject
          selectedId={selectedId}
          deleteProject={deleteProject}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Projects;
