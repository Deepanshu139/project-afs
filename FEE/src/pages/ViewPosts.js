import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add"; // Import the Add icon from Material-UI Icons
import ContactPageIcon from "@mui/icons-material/ContactPage"; // Import the ContactPage icon from Material-UI Icons
import LogoutIcon from "@mui/icons-material/Logout";

export default function ViewPosts() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      (async () => {
        try {
          const response = await axios.get("http://localhost:3000/posts", {
            headers: {
              authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          });
          setApiData(response.data);
          setLoading(false);
        } catch (error) {
          setApiError(true);
        }
      })();
    } else {
      navigate("/login");
    }
  }, []);

  const displayData = apiData.map((data) => (
    <div key={data.id} className="w-[40%] rounded-[12px] bg-white p-4 mb-4">
      <h4 className="text-xl font-semibold mb-2">Title: {data.title}</h4>
      <p className="mb-2">{data.content}</p>
      <p className="text-sm">Posted by: {data.username}</p>
    </div>
  ));

  const iconHandler = () => {
    navigate("/createpost");
  };

  if (apiError) {
    return <h1>Something Went Wrong....</h1>;
  }
  if (loading) {
    return <h1>Loading....</h1>;
  }

  function logOutHandler() {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col justify-center items-center relative">
      <h1 className="text-5xl uppercase font-semibold mb-8">POSTS</h1>
      <ContactPageIcon
        className="absolute top-5 right-24 cursor-pointer text-white rounded-full p-0"
        style={{ fontSize: "63px" }}
        onClick={() => {
          navigate("/showVideo");
        }}
      />
      {localStorage.getItem("isLoggedIn") === "true" && (
        <LogoutIcon
          className="absolute top-5 right-2 cursor-pointer text-white rounded-full p-0"
          style={{ fontSize: "63px" }}
          onClick={logOutHandler}
        />
      )}
      <AddIcon
        className="absolute bottom-10 right-5 cursor-pointer text-white rounded-full bg-blue-900 p-0"
        style={{ fontSize: "64px" }}
        onClick={iconHandler}
      />
      <div className="w-11/12 h-4/5 flex flex-col items-center gap-y-5 overflow-y-auto">
        {displayData}
      </div>
    </div>
  );
}
