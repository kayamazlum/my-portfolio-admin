"use client";
import Menu from "@/components/menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const About = () => {
  const [getAboutData, setGetAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading durumu

  const router = useRouter();
  const [userData, setUserData] = useState([]);
  const validateToken = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return router.push("/");
      }
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/validate-token`,
        { headers: { Authorization: `${token}` } }
      );

      setUserData(res.data.user || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Token doğrulama başarısız!"
      );
      router.push("/");
      return;
    }
  };
  useEffect(() => {
    const fetcUser = async () => {
      await validateToken();
    };
    fetcUser();
  }, []);

  const getAbout = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/get-about`
      );
      setGetAboutData(response.data.aboutData[0]);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  const updateAbout = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Loading durumunu başlat

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return toast.error("Yetki yok!");
      }

      const updatedData = {
        ...getAboutData,
        about_skills: Array.isArray(getAboutData.about_skills)
          ? getAboutData.about_skills // Eğer zaten array ise direkt kullan
          : getAboutData.about_skills
              ?.split(",") // String ise virgül ile ayır
              .map((skill) => skill.trim()), // Fazladan boşlukları temizle
      };

      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/update-about`,
        updatedData,
        { headers: { Authorization: token } }
      );
      toast.success("About updated successfully!", { autoClose: 3000 });
    } catch (error) {
      toast.error(error.response.data.message, { autoClose: 3000 });
      console.error("Update error:", error);
    } finally {
      setIsLoading(false); // Loading durumunu bitir
    }
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <Menu userData={userData} />
      <div className="p-4 w-full h-[calc(100vh-100px)]">
        <h2 className="text-2xl font-medium mb-5 mt-2">About</h2>
        <div className="flex w-full mb-2 gap-2 items-center">
          <form onSubmit={updateAbout} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium" htmlFor="about-text">
                Description
              </label>
              <textarea
                id="about_text"
                className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md resize-none"
                name="about_text"
                value={getAboutData?.about_text}
                onChange={(e) =>
                  setGetAboutData((prev) => ({
                    ...prev,
                    about_text: e.target.value,
                  }))
                }
                rows={5}
                placeholder="Enter a detailed description"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-xl font-medium" htmlFor="about-skills">
                Skills
              </label>
              <textarea
                id="about_skills"
                className="border border-turkuaz p-2 focus:outline-blue-500 rounded-md resize-none"
                name="about_skills"
                value={getAboutData?.about_skills}
                onChange={(e) => {
                  setGetAboutData((prev) => ({
                    ...prev,
                    about_skills: e.target.value,
                  }));
                }}
                rows={3}
                placeholder="Enter skills separated by commas (e.g., React, Node.js, CSS)"
                required
              ></textarea>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="sm:w-40 w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-500 duration-500 transition"
                disabled={isLoading} // Butonu işlem sırasında devre dışı bırak
              >
                {isLoading ? "Updating..." : "Update"} {/* Loading durumu */}
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
