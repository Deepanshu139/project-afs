import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      navigate("/login");
    }
  }, []);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handleFormData = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        {
          title: title,
          content: content,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      );
      if (response.status === 201) {
        navigate("/posts");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white rounded-lg p-8 shadow-lg animate-float">
        <div className="flex items-center mb-6">
          <HomeIcon
            className="text-blue-500 mr-2 cursor-pointer"
            style={{ fontSize: "32px" }}
            onClick={() => navigate("/posts")}
          />
          <h1 className="text-3xl font-semibold text-blue-500">Create Post</h1>
        </div>
        <form onSubmit={handleFormData} className="flex flex-col gap-4">
          <label className="text-lg font-semibold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
            required
          />
          <label className="text-lg font-semibold">Content:</label>
          <textarea
            value={content}
            onChange={handleContent}
            className="rounded-md border border-gray-300 px-3 py-2 h-32 resize-none focus:outline-none focus:border-blue-500 transition duration-300"
            required
          ></textarea>
          <button
            type="submit"
            disabled={submitting}
            className={`bg-blue-500 text-white font-semibold py-2 rounded-md ${
              submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            } transition duration-300`}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
