import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedVideo } from "../redux/videoListActions";

const VideoItems = ({ video }) => {
  const { title, thumbnail, channelName } = video;
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setSelectedVideo(video))}
      className="flex m-3 overflow-hidden py-2
    border-b border-gray-400 bg-gray-800 cursor-pointer group hover:bg-gray-700"
    >
      <img
        src={thumbnail.url}
        alt="img"
        className="h-20 w-40 xl:h-28 xl:w-48 p-1"
      />
      <div className="flex flex-col ml-3 ">
        <span className=" truncate text-gray-300">{title}</span>
        <span className="text-normal text-sm text-gray-400">{channelName}</span>
      </div>
    </div>
  );
};
export default VideoItems;
