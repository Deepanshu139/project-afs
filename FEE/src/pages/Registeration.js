import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../assests/login.png";

export default function Registeration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, set_error] = useState("");
  const navigate = useNavigate();
  const handleUsername = (event) => {
    setUsername(event.target.value);
    set_error("");
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    set_error("");
  };
  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3000/register", {
        username: username,
        password: password,
      });

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      set_error("User Already Exists");
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[50%] flex justify-center items-center">
        <div className="absolute top-10 text-5xl uppercase font-bold">
          Sign Up
        </div>
        {/* <h2 className="text-red-500 mt-9 ml-5">{error}</h2> */}
        <form onSubmit={handleForm} className="flex flex-col w-[50%] gap-y-4 ">
          <label className="w-full">
            <p className="text-[0.65rem] mb-1 leading-[1.375rem]">
              Username <sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={username}
              onChange={handleUsername}
              placeholder="Enter Username"
              name="username"
              className="bg-grey-900 rounded-[0.2rem] w-full p-[4px] border border-gray-400"
            />
          </label>
          <label className="w-full relative">
            <p className="text-[0.65rem] mb-1 leading-[1.375rem]">
              Password <sup>*</sup>
            </p>
            <input
              required
              type={"password"}
              value={password}
              onChange={handlePassword}
              placeholder="Enter Password"
              name="password"
              className="rounded-[0.2rem] w-full p-[4px] border border-gray-400"
            />
          </label>
          <button className="bg-blue-500 rounded-[8px] font-medium text-white px-[12px] py-[9px]">
            Sign Up
          </button>
          <button>
            <Link
              to="/login"
              className=" text-black font-bold py-3 px-8 rounded mb-4 text-2xl"
            >
              Login
            </Link>
          </button>
        </form>
        {/* <button onClick={btnHandeller}>Login</button> */}
        <h2 className="text-red-500 mt-10 ml-6 font-bold">{error}</h2>
      </div>
      <div className="bg-[#e5e5e5] w-[49%] h-[100vh] flex justify-center items-center">
        <img style={{ transform: "rotateY(180deg)" }} src={loginImg} />
      </div>
    </div>
  );
}
