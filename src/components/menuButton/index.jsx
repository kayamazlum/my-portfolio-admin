"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const MenuButton = (props) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const router = useRouter();
  const { link, text } = props;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  console.log(currentUrl);

  const isActive =
    currentUrl === `${process.env.NEXT_PUBLIC_ADMIN_URI}/${link}`;

  return (
    <div
      onClick={() => router.push(`/${link}`)}
      className={`w-full py-4 px-2 duration-500 transition ease-in border-x-8 border-transparent hover:border-turuncu ${
        isActive ? "bg-turuncu " : "bg-mavi"
      } text-beyaz transition duration-500 cursor-pointer font-medium`}
    >
      {text}
    </div>
  );
};

export default MenuButton;
