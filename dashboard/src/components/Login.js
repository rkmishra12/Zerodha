import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (error) => {
    toast.error(error, {
      position: "bottom-left",
    });
  };
  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodhaclone-noqh.onrender.com/login",
        { ...inputValue },
        {
          withCredentials: true,
        }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          console.log("redirecting to home");
          navigate("/home");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
    }
    setInputValue({
        ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
      <img src="logo.png" alt="app logo"></img>
      <p>Login to kite</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            placeholder="Enter your email"
            aria-label="Email"
            onChange={handleOnChange}
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="input-group flex-nowrap mt-4">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            aria-label="Password"
            aria-describedby="addon-wrapping"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <button className=" btn loginBtn mt-4" type="submit">Login</button>
      </form>
      <p className="fs-6 text-muted mt-3">Forgot username and password?</p>
      <ToastContainer />
    </div>
    </div>
  );
}

export default Login;
