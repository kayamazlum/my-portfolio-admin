"use client";
import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
const BigDropdown = (props) => {
  const { setFuncHandler } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      {isOpen ? (
        <div className="w-full h-screen left-0 top-0 absolute bg-opacity-70 bg-black flex justify-center items-center">
          <div className="xl:w-[1000px] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[95%] sm:h-[90%] h-[96%] bg-beyaz flex flex-col p-1 relative">
            <div className="w-full flex  pl-2 pt-2 text-black text-3xl font-semibold cursor-pointer ">
              <h2>Title</h2>
              <AiOutlineCloseSquare
                onClick={() => {
                  setIsOpen(!isOpen);
                  setFuncHandler("");
                }}
                size={44}
                className="top-1 right-1 absolute"
              />
            </div>
            <div>{props.children}</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BigDropdown;
