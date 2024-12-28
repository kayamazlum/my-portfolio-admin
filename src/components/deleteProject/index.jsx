import React from "react";
const DeleteProject = ({
  deleteModal,
  setDeleteModal,
  deleteProject,
  selectedId,
}) => {
  return (
    <div>
      {deleteModal ? (
        <div className="w-full h-screen top-0 left-0 flex justify-center items-center absolute bg-black bg-opacity-70">
          <div className=" bg-beyaz h-48 w-[500px] flex flex-wrap px-4 py-6 rounded-md text-xl flex-col justify-between mx-3">
            <div>Are you sure you want to permanently delete this project?</div>
            <div className="flex w-full justify-end gap-2 h-min">
              <span
                onClick={() => {
                  deleteProject(selectedId);
                  setDeleteModal(!deleteModal);
                }}
                className="py-1 w-28 bg-red-600 rounded-md text-center cursor-pointer text-white ransition duration-500 hover:bg-red-500"
              >
                Yes
              </span>
              <span
                onClick={() => {
                  setDeleteModal(!deleteModal);
                }}
                className="py-1 w-28 bg-zinc-300 rounded-md text-center cursor-pointer transition duration-500 hover:bg-zinc-200"
              >
                Cancel
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DeleteProject;
