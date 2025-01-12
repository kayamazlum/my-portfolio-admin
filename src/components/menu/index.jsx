"use client";
import React, { useState } from "react";
import MenuButton from "../menuButton";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const Menu = (props) => {
  const { userData, setSelected } = props;

  const [userDropdown, setUserDropown] = useState(false);

  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    deleteCookie("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="border-r-2 lg:w-64 lg:h-screen lg:sticky ">
      <div
        onClick={() => setUserDropown(!userDropdown)}
        className="w-full py-3 px-2 font-medium border-b-2 flex justify-between cursor-pointer items-center gap-2 text-lg "
      >
        <div className="flex items-center gap-2">
          <span className="size-10 flex justify-center items-center border border-black rounded-full font-semibold text-2xl bg-turkuaz">
            {userData?.username?.slice(0, 1).toUpperCase() || "G"}
          </span>
          <span>
            {userData?.username?.charAt(0).toUpperCase() +
              userData?.username?.slice(1, 12) || "Guest"}
          </span>
        </div>
        <span className="flex items-center gap-1">
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
      {userDropdown ? (
        <div className="absolute rounded-lg right-1 top-14 p-4 w-40 h-44 bg-beyaz border-2 flex items-end">
          <button
            onClick={handleLogout}
            className="w-full underline underline-offset-8 hover:underline-offset-2 hover:text-red-500 transition-all duration-500"
          >
            Logout
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menu;
