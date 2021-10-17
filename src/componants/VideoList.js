import React from "react";
import Videoitems from "./VideoItems";
import { useSelector } from "react-redux";

const VideoList = () => {
  const list = useSelector((state) => state.video.videoList);
  return (
    <>
      <div
        className="w-auto mt-4 lg:mt-0 lg:w-4/12 h-screen bg-gray-800 rounded-sm shadow-sm
        overflow-y-auto  scrollbar scrollbar-thin scroll scrollbar-thumb-gray-400 scrollbar-track-gray-800
       "
      >
        {list?.map((video, index) => (
          <Videoitems video={video} key={index} />
        ))}
      </div>
    </>
  );
};
export default VideoList;
