"use client";
import { getUserInformationService } from "@/services/users";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const login = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!username.trim() || !password.trim()) {
        return toast.error("Lütfen giriş yapın!", { autoClose: 3000 });
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/login`,
        {
          username,
          password,
        }
      );

      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
        const userInfoResponse = await getUserInformationService();
        if (userInfoResponse?.data?.user) {
          setCookie("token", res.data.token);
          localStorage.setItem(
            "user",
            JSON.stringify(userInfoResponse?.data?.user)
          );
          toast.success("Giriş başarılı");
          router.push("/projects");
        } else {
          toast.error("Giriş başarısız");
        }
      }
    } catch (err) {
      if (err.response) {
        const message = err.response.data.message || "Bir hata oluştu!";
        setError(message);
        toast.error(message, { autoClose: 3000 });
      } else {
        const message = "Sunucuya bağlanılamadı.";
        setError(message);
        toast.error(message, { autoClose: 3000 });
      }
    }
  };

  return (
    <div className="flex bg-black h-screen w-full justify-center items-center">
      <div className="bg-zinc-700 p-8 rounded-lg">
        <form className="gap-4 flex flex-col" onSubmit={login}>
          <div className="gap-1 flex flex-col w-full">
            <label htmlFor="username" className="font-medium text-white pl-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="rounded-lg px-2 py-1"
            />
          </div>
          <div className="gap-1 flex flex-col w-full">
            <label htmlFor="password" className="font-medium text-white pl-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="rounded-lg px-2 py-1"
            />
          </div>
          {/* Hata mesajını göster */}
          {error && <p className="w-full text-red-500 text-sm">{error}</p>}
          <div className="w-full">
            <button className="rounded-lg bg-cyan-500 font-medium p-1 w-full duration-500 ease-in transition hover:bg-cyan-600">
              Login
            </button>
          </div>
          <div className="w-full flex justify-center top-5">
            <span className="text-sm text-zinc-400 font-light ">
              mazlumkaya | 2025
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Auth;
