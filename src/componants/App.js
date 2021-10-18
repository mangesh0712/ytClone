import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoListAsync } from "../redux/videoListActions";

import "../index.css";

import SearchBar from "./SearchBar";
import VideoContainer from "./VideoContainer";

const App = () => {
  const errorMessage = useSelector((state) => state.video.errorMessage);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchVideoListAsync("neymar"));
    console.log("d");
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col m-5 mx-5 sm:mx-10 md:mx-20 lg:mx-40">
        {errorMessage ? (
          <div className="p-3 text-xl bg-red-200 rounded-sm font-serif">
            {errorMessage}
          </div>
        ) : (
          <>
            {/* Search Bar */}
            <SearchBar />

            {/* Video Container */}
            <VideoContainer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
