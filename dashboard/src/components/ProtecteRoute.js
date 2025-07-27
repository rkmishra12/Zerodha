import React from 'react';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["token"]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  console.log("use effect");
  useEffect(() => {
    console.log("Cookies");
    const verifyUser = async () => {
      if (!cookies.token) {
        console.log(cookies);
        console.log("!cookies.token");
        console.log(cookies.token);
        console.log(cookies);
        console.log("Undefined");
        console.log("is its the problem");
        return navigate("/");
      }

      try {
        const { data } = await axios.post(
          "https://zerodhaclone-noqh.onrender.com/",
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          navigate("/");
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Verification failed:", error);
        navigate("/");
      }
    };

    verifyUser();
  }, [cookies, navigate]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ); 
  }

  return children;
};

export default ProtectedRoute;
