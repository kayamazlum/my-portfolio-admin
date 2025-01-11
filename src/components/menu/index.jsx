import React from "react";
import MenuButton from "../menuButton";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = (props) => {
  const { userData, setSelected } = props;
  return (
    <div className="border-r-2 lg:w-64 lg:h-screen lg:sticky ">
      <div className="w-full py-3 px-2 font-medium border-b-2 flex justify-end cursor-pointer items-center gap-2 text-lg">
        <span className="size-10 text-center flex justify-center items-center border border-black rounded-full font-semibold text-2xl bg-turkuaz">
          {userData?.username?.slice(0, 1).toUpperCase()}
        </span>
        <span className="flex items-center gap-1">
          {userData?.username?.charAt(0).toUpperCase() +
            userData?.username?.slice(1, 12)}
          <IoMdArrowDropdown size={20} className="mt-1" />
        </span>
      </div>
      <div className="flex flex-row lg:flex-col lg:justify-start justify-center ">
        <MenuButton setSelected={setSelected} link={"hero"} text={"Hero"} />
        <MenuButton
          setSelected={setSelected}
          link={"projects"}
          text={"Projects"}
        />
        <MenuButton setSelected={setSelected} link={"about"} text={"About"} />
      </div>
    </div>
  );
};

export default Menu;
