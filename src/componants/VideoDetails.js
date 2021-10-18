import React from "react";
import { useSelector } from "react-redux";

const VideoDetails = () => {
  const video = useSelector((state) => state.video.selectedVideo);
  if (!video) {
    return <></>;
  }
  return (
    <div className="lg:w-8/12 py-2 pb-4 self-baseline lg:py-4 lg:mr-4 xl:mr-12 bg-gray-800 rounded-sm shadow-sm">
      {/* <video width="320" height="240" controls src={video.videoId}></video> */}
      <iframe
        title={video.id}
        id="ytplayer"
        className="w-11/12 h-60 md:h-96 ml-3 lg:mx-5 rounded-sm shadow-md"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col mx-5 ">
        <span className="flex p-1 px-2 mt-1 md:mt-3 w-max text-md md:text-lg lg:text-xl font-bold bg-gray-800 text-gray-50 rounded-sm shadow-md">
          {video.channelName}
        </span>
        <span className="p-1 px-2 mt-1 md:mt-2 xl:w-5/5 text-gray-200 bg-gray-600 text-sm lg:text-lg font-normal rounded-sm shadow-sm truncate">
          {video.title}
        </span>
      </div>
    </div>
  );
};

export default VideoDetails;
