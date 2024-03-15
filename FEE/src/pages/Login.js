import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import loginImg from "../assests/login.png";

export default function Login() {
  const navigate = useNavigate();
  // const btnHandeller = ()=>{
  //   navigate("/posts")
  // }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [register, setRegister] = useState(false);
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      });
      if (response.status == 200) {
        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/posts");
      }
      // console.log(response)
    } catch (error) {
      setLoginError("Invalid Username or Password");
      setRegister(true);
      localStorage.setItem("isLoggedIn", "false");
    }
    
  };

  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[50%] flex justify-center items-center">
        <div className="absolute top-10 text-7xl  font-bold text-blue-600">
         FriendHub
        </div>
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

          <div className="flex justify-evenly">
            <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-5 rounded mb-4">
              Login
            </button>

            <Link
              to="/register"
              className=" text-black font-bold py-3 px-8 rounded mb-4"
            >
              Don't have an Account? Signup
            </Link>
          </div>
        </form>
        <h2 className="text-red-500 mt-9 ml-5">{loginError}</h2>
        {/* <button onClick={btnHandeller}>Login</button> */}
      </div>
      <div className="bg-[#e5e5e5] w-[49%] h-[100vh] flex justify-center items-center">
        <img src={loginImg} />
      </div>
    </div>
  );
}
