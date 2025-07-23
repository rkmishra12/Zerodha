import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function CheckAccount() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please Enter your email address.");
      return;
    }
    try {
      const  {data}  = await axios.post(
        "http://localhost:8080/checkaccount",
        { email },
        { withCredentials: true }
      );
      if(data.exists){
        toast.success("Account found! Redirecting to Login page...");
        setTimeout(()=>{
            navigate("/login");
        },1000);
      }else{
        toast.info("Account does not exists! Redirecting to Signup page...");
        setTimeout(()=>{
            navigate("/signup",{state:{email}});
        },1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error or server not responding.");
    }
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
      <div className="row px-5 ">
        <div className="col">
          <img src="media/images/signup.png" style={{ width: "100%" }}></img>
        </div>
        <div className="col">
          <div className="from-container p-4">
            <h4 className="fs-3">Signup now</h4>
            <p className="text-muted mt-3 mb-4">
              Or track your existing application
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email address"
                value={email}
                onChange={handleChange}
              />
              <button
                className="btn btn-primary btn-sm fs-5 mb-3 mt-4"
                type="submit"
              >
                Check email
              </button>
            </form>
            <ToastContainer />
            <p style={{ fontSize: "0.8rem" }}>
              By proceeding, you agree to the Zerodha
              <a href="" className="text-decoration-none">
                terms & privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckAccount;
