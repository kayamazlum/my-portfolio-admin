import axios from "axios";

export const getUserInformationService = async () => {
  try {
    const token = localStorage.getItem("token");
    // if (!token) {
    //   return router.push("/");
    // }
    if (!token) {
      throw new Error("Token yok!");
    }
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/validate-token`,
      { headers: { Authorization: `${token}` } }
    );
    return res;
  } catch (error) {
    toast.error(error.response?.data?.message || "Token doğrulama başarısız!");
    // router.push("/");
    return;
  }
};
