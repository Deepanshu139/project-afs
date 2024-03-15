import React from "react";
import v from "../assests/djvideo.mp4"

export default function Video(){

    return(
        <div className="w-[50%] h-[50%] right-5 justify-center items-center ">
            <video src={v}  autoPlay loop controls></video> 
        </div>
    )

}