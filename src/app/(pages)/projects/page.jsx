import Menu from "@/components/menu";
import React from "react";

const Projects = () => {
  return (
    <div className="flex">
      <Menu />
      <div className="p-4 w-full">
        <h2 className="text-2xl font-medium">Projects</h2>
        <div className="mt-4">
          <table className=" w-full">
            <thead className="text-lg">
              <tr className="bg-turuncu text-beyaz border-black">
                <th className="border text-start p-2 w-[50%]">Title</th>
                <th className="border text-start p-2 w-[20%]">Date</th>
                <th className="border text-start p-2 w-[30%]">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-turkuaz transition duration-500 cursor-pointer">
                <td className="border text-start p-2">Başlık1</td>
                <td className="border text-start p-2">Tarih falan</td>
                <td className="border text-start p-2 gap-1 flex text-beyaz">
                  <span className="bg-green-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    View
                  </span>
                  <span className="bg-blue-600 hover:scale-110 transition-all duration-500 hover:-rotate-12 ease-in-out rounded-md py-1 px-2">
                    Update
                  </span>
                  <span className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    Delete
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-turkuaz transition duration-500 cursor-pointer">
                <td className="border text-start p-2">Başlık1</td>
                <td className="border text-start p-2">Tarih falan</td>
                <td className="border text-start p-2 gap-1 flex text-beyaz">
                  <span className="bg-green-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    View
                  </span>
                  <span className="bg-blue-600 hover:scale-110 transition-all duration-500 hover:-rotate-12 ease-in-out rounded-md py-1 px-2">
                    Update
                  </span>
                  <span className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    Delete
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-turkuaz transition duration-500 cursor-pointer">
                <td className="border text-start p-2">Başlık1</td>
                <td className="border text-start p-2">Tarih falan</td>
                <td className="border text-start p-2 gap-1 flex text-beyaz">
                  <span className="bg-green-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    View
                  </span>
                  <span className="bg-blue-600 hover:scale-110 transition-all duration-500 hover:-rotate-12 ease-in-out rounded-md py-1 px-2">
                    Update
                  </span>
                  <span className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    Delete
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-turkuaz transition duration-500 cursor-pointer">
                <td className="border text-start p-2">Başlık1</td>
                <td className="border text-start p-2">Tarih falan</td>
                <td className="border text-start p-2 gap-1 flex text-beyaz">
                  <span className="bg-green-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    View
                  </span>
                  <span className="bg-blue-600 hover:scale-110 transition-all duration-500 hover:-rotate-12 ease-in-out rounded-md py-1 px-2">
                    Update
                  </span>
                  <span className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    Delete
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-turkuaz transition duration-500 cursor-pointer">
                <td className="border text-start p-2">Başlık1</td>
                <td className="border text-start p-2">Tarih falan</td>
                <td className="border text-start p-2 gap-1 flex text-beyaz">
                  <span className="bg-green-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    View
                  </span>
                  <span className="bg-blue-600 hover:scale-110 transition-all duration-500 hover:-rotate-12 ease-in-out rounded-md py-1 px-2">
                    Update
                  </span>
                  <span className="bg-red-600 hover:scale-110 transition-all duration-500 hover:rotate-12 ease-in-out rounded-md py-1 px-2">
                    Delete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
