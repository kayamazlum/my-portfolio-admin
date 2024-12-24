"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MenuButton = (props) => {
  const router = useRouter();
  const { link, text } = props;
  return (
    <div
      onClick={() => router.push(`/${link}`)}
      className="w-full py-4 px-2 border-b-2 hover:bg-turuncu bg-mavi text-beyaz transition duration-500 cursor-pointer font-medium"
    >
      {text}
    </div>
  );
};

export default MenuButton;
