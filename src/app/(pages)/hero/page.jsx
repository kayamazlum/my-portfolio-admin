"use client";
import Menu from "@/components/menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const About = () => {
  const [getHeroData, setGetHeroData] = useState(null);

  const router = useRouter();

  const userInfo = JSON.parse(localStorage.getItem("user"));

  const token = localStorage.getItem("token");

  const getHero = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/get-hero`
      );
      setGetHeroData(response.data.heroData[0]);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Token doğrulama başarısız!"
      );
    }
  };

  useEffect(() => {
    getHero();
  }, []);

  const updateHero = async (e) => {
    e.preventDefault();
    try {
      if (!token) {
        return toast.error("Yetki yok!");
      }

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/update-hero`,
        getHeroData,
        { headers: { Authorization: token } }
      );
      toast.success("Hero updated successfully!", { autoClose: 3000 });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (!userInfo?.username || !token) {
      router.push("/");
    }
  }, [userInfo, token]);

  return (
    <div className="flex lg:flex-row flex-col">
      <Menu userData={userInfo} />
      <div className="p-4 w-full h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-medium mb-5 mt-2">Hero</h2>
        <div className="flex w-full mb-2 gap-2 items-center ">
          <form onSubmit={updateHero} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium" htmlFor="about-text">
                Description
              </label>
              <textarea
                id="hero_text"
                className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md resize-none"
                name="hero_text"
                value={getHeroData?.hero_text}
                onChange={(e) =>
                  setGetHeroData((prev) => ({
                    ...prev,
                    hero_text: e.target.value,
                  }))
                }
                rows={5}
                placeholder="Enter a detailed description"
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="sm:w-40 w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-500 duration-500 transition"
              >
                Update
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default About;
