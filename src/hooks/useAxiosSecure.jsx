import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://assignment12-server-gold.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // console.log("Interceptors Error: ",error);

        if (error.status === 401 || error.status === 403) {
          handleLogOut()
            .then(() => {
              // console.log("logged Out User");
              navigate("/login");
            })
            .catch((error) => {
              // console.log(error)
            });
        }

        return Promise.reject(error);
      }
    );
  });

  return axiosInstance;
};

export default useAxiosSecure;
