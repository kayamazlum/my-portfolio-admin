import React from "react";
import MenuButton from "../menuButton";

const Menu = (props) => {
  return (
    <div className="border-r-2 lg:w-64 lg:h-screen lg:sticky ">
      <div className="w-full py-4 px-2 border-b-2 font-medium flex justify-end">
        Admin
      </div>
      <div className="flex flex-row lg:flex-col lg:justify-start justify-center gap-2">
        <MenuButton
          setSelected={props.setSelected}
          link={"projects"}
          text={"Projects"}
        />
        <MenuButton
          setSelected={props.setSelected}
          link={"about"}
          text={"About"}
        />
      </div>
    </div>
  );
};

export default Menu;
