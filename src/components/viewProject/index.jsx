import React from "react";
import BigDropdown from "../bigDropdown";

const ViewProject = ({ setFuncHandler, funcHandler, detailsProjectData }) => {
  return (
    <BigDropdown setFuncHandler={setFuncHandler} funcHandler={funcHandler}>
      <div className="gap-2 flex flex-col">
        <div>
          <label className="text-xl font-medium">Project Name</label>
          <h1 className="text-lg">{detailsProjectData?.title}</h1>
        </div>
        <div>
          <label className="text-xl font-medium">Summary</label>
          <p className="text-lg">{detailsProjectData?.summary}</p>
        </div>
        <div>
          <label className="text-xl font-medium">Description</label>
          <p className="text-lg">{detailsProjectData?.content}</p>
        </div>
        <div>
          <label className="text-xl font-medium">Skills</label>
          <p className="text-lg flex gap-2">
            {detailsProjectData?.skills?.length > 0 ? (
              detailsProjectData.skills.map((item, index) => (
                <span className="bg-yellow-200 px-2 rounded-lg" key={index}>
                  {item}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No skills available</span>
            )}
          </p>
        </div>

        <div>
          <label className="text-xl font-medium">Site URL</label>
          <p className="text-lg">{detailsProjectData?.site_url}</p>
        </div>
        <div>
          <label className="text-xl font-medium">Git Repo</label>
          <p className="text-lg">{detailsProjectData?.git_repo_url}</p>
        </div>
        <div>
          <label className="text-xl font-medium">Image</label>
          <div className="flex flex-wrap gap-4 mt-2">
            {detailsProjectData?.image_url?.length > 0 ? (
              detailsProjectData.image_url.map((item, index) => (
                <div
                  key={index}
                  className="border border-black rounded-md p-2 w-32 h-32 overflow-hidden"
                >
                  <img
                    src={`http://localhost:4000${item}`}
                    alt={`Uploaded file ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              ))
            ) : (
              <span className="text-gray-500">No image available</span>
            )}
          </div>
        </div>
      </div>
    </BigDropdown>
  );
};

export default ViewProject;
