import React from "react";
import MenuButton from "../menuButton";

const Menu = (props) => {
  return (
    <div className="border-r-2 w-64 h-screen top-12 sticky">
      <div className="w-full py-4 px-2 border-b-2 font-medium flex justify-end">
        Admin
      </div>
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
  );
};

export default Menu;
