import React from "react";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";

function VideoContainer() {
  const videoList = useSelector((state) => state.video.videoList);
  console.log(videoList, "list");
  return (
    <div className="lg:flex my-3">
      {/* /// Selected video */}
      <VideoDetails />

      {/* /// videoList */}
      <VideoList />
    </div>
  );
}

export default VideoContainer;
