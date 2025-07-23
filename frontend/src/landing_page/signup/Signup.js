import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [inputValue, setInputValue] = useState({
    email: email,
    username: "",
    password: "",
  });
  const {username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) => {
    toast.error(err, {
      postion: "bottom-left",
    });
  };
  const handleSuccess = (msg) => {
    toast.success(msg, {
      postion: "bottom-right",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      username: "",
      password: "",
    });
  };
  return (
    <div className="container p-5">
      <div className="row p-4 text-center">
        <h2>Open a Zerodha account</h2>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row px-5">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Create an username"
            value={username}

            onChange={handleOnChange}
            style={{ width: "30%" }}
          />
          <br />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Create a password"
            value={password}
            onChange={handleOnChange}
            style={{ width: "30%" }}
          />
          <button
            className="btn btn-primary btn-sm fs-5 mb-3 mt-4"
            type="submit"
          >
            Signup now
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
