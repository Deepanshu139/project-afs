import React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../assests/ww.svg"; // Update this with your image path

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      {/* Image on the left */}
      <div className="w-1/2 h-full bg-[#e5e5e5]">
        <img src={imageSrc} alt="Your Image" className="w-[80%] h-[100%] " />
      </div>

      {/* Content on the right */}
      <div className="w-1/2 px-4 flex flex-col justify-center items-center text-blue-600">

      <div className=" absolute top-10 right-5 text-5xl  font-bold">
         FriendHub
        </div>

        <h1 className="text-3xl font-bold mb-7 text-center">Get Started</h1>
        <div className="flex">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-8 rounded mb-4 mr-8"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-3 px-8 rounded mb-4"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
