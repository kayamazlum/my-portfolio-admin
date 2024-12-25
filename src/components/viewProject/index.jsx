import React from "react";
import BigDropdown from "../bigDropdown";

const ViewProject = (props) => {
  return (
    <BigDropdown
      setFuncHandler={props.setFuncHandler}
      funcHandler={props.funcHandler}
    >
      <div className="gap-2 flex flex-col">
        <div>
          <label className="text-xl font-medium">Title</label>
          <h1 className="text-lg">Başlık falan</h1>
        </div>
        <div>
          <label className="text-xl font-medium">Summary</label>
          <p className="text-lg">Özet falan</p>
        </div>
        <div>
          <label className="text-xl font-medium">Content</label>
          <p className="text-lg">İçerik yazısı falan</p>
        </div>
        <div>
          <label className="text-xl font-medium">Skills</label>
          <p className="text-lg">Kullanılan teknolojiler</p>
        </div>
        <div>
          <label className="text-xl font-medium">Site URL</label>
          <p className="text-lg">Sitenin varsa linki</p>
        </div>
        <div>
          <label className="text-xl font-medium">Image</label>
          <p className="text-lg">Burda da Image dosyaları</p>
        </div>
      </div>
    </BigDropdown>
  );
};

export default ViewProject;
