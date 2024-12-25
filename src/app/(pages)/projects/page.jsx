"use client";
import AddProject from "@/components/addProject";
import DeleteProject from "@/components/deleteProject";
import Menu from "@/components/menu";
import UpdateProject from "@/components/updateProject";
import ViewProject from "@/components/viewProject";
import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineRefresh } from "react-icons/hi";

const Projects = () => {
  const [funcHandler, setFuncHandler] = useState("");

  return (
    <div className="flex lg:flex-row flex-col">
      <Menu />
      <div className="p-4 w-full h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-medium mb-5 mt-2">Projects</h2>
        <div className="flex w-full mb-2 gap-2 items-center ">
          <span className="bg-white border border-turkuaz transition  duration-500 cursor-pointer rounded-lg py-1 px-2 flex items-center gap-1 group">
            <HiOutlineRefresh
              size={18}
              className="group-hover:rotate-180 transition-transform duration-500 "
            />
            Refresh
          </span>
          <span
            onClick={() => setFuncHandler("Add Project")}
            className="bg-green-700 select-none text-white border cursor-pointer rounded-lg py-1 px-2 flex items-center gap-1 group"
          >
            <GoPlusCircle
              size={20}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
            Add Project
          </span>
        </div>
        <div className="sm:h-full h-[calc(100vh-250px)] overflow-auto border ">
          <table className="w-full table-fixed ">
            <thead className="text-lg sticky top-0 ">
              <tr className="bg-turuncu text-beyaz ">
                <th className=" text-start p-2 lg:w-[50%] ">Title</th>
                <th className=" text-start p-2 lg:w-[20%]  lg:table-cell hidden">
                  Date
                </th>
                <th className=" text-start p-2 lg:w-[30%] ">Function</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="hover:bg-turkuaz transition duration-500 cursor-pointer odd:bg-gray-200 even:bg-white ">
                <td className=" text-start p-2 border ">Başlık1</td>
                <td className=" text-start p-2 lg:table-cell hidden border ">
                  Tarih falan
                </td>
                <td className=" text-start p-2 gap-1 flex text-beyaz border ">
                  <span
                    onClick={() => setFuncHandler("View Project")}
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
                    onClick={() => setFuncHandler("Delete Project")}
                    className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-lg py-1 px-2 select-none"
                  >
                    Delete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {funcHandler === "Add Project" ? (
        <AddProject setFuncHandler={setFuncHandler} funcHandler={funcHandler} />
      ) : (
        <div></div>
      )}
      {funcHandler === "View Project" ? (
        <ViewProject
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
      {funcHandler === "Delete Project" ? (
        <DeleteProject
          setFuncHandler={setFuncHandler}
          funcHandler={funcHandler}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Projects;
