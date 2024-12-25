"use client";
import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
const BigDropdown = (props) => {
  const { setFuncHandler, funcHandler } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen ? (
        <div className="w-full h-screen left-0 top-0 absolute bg-opacity-70 bg-black flex justify-center items-center transition duration-500 ">
          <div className="xl:w-[1000px] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[95%] sm:h-[90%] h-[96%] bg-beyaz flex flex-col p-1 relative overflow-y-auto overflow-x-hidden py-2 px-4 pt-4 rounded-md">
            <div className="w-full flex text-black text-2xl font-medium cursor-pointer border-b border-zinc-400 pb-3">
              <h2>{funcHandler}</h2>
              <AiOutlineCloseSquare
                onClick={() => {
                  setIsOpen(!isOpen);
                  setFuncHandler("");
                }}
                size={44}
                className="top-2 right-2 absolute "
              />
            </div>
            <div className="mt-4 ml-1">{props.children}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BigDropdown;
