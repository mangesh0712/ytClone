import React, { useRef } from "react";
import { fetchVideoListAsync } from "../redux/videoListActions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    dispatch(fetchVideoListAsync(inputRef.current.value));
  };

  return (
    <React.Fragment>
      <div className="flex items-center w-full">
        <form className="w-full pt-1 lg:pt-3 pb-2 lg:pb-5">
          <input
            ref={inputRef}
            type="text"
            name="Search"
            className="p-1 md:p-3 w-full text-gray-200 bg-gray-800 outline-none shadow-sm ring-2 ring-gray-800"
            placeholder="Search..."
          />
          <button hidden type="submit" onClick={onFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
