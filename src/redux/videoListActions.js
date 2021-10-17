import { VIDEO_LIST_ACTION } from "./videoListActionTypes";
import youtube from "../apis/youtube";
import { videolistMapped } from "./videoListUtils";

export const fetchVideoListStart = () => ({
  type: VIDEO_LIST_ACTION.FETCH_VIDEO_LIST_START,
});
export const fetchVideoListSuccess = (videoList) => ({
  type: VIDEO_LIST_ACTION.FETCH_VIDEO_LIST_SUCCESS,
  payload: videoList,
});
export const fetchVideoListFailure = () => ({
  type: VIDEO_LIST_ACTION.FETCH_VIDEO_LIST_FAILURE,
});

export const setSelectedVideo = (selectedVideo) => ({
  type: VIDEO_LIST_ACTION.SET_SELECTED_VIDEO,
  payload: selectedVideo,
});

export const fetchVideoListAsync = (searchedTerm) => async (dispatch) => {
  dispatch(fetchVideoListStart());
  try {
    const response = await youtube.get("/search", {
      params: {
        q: searchedTerm,
      },
    });

    const transformedList = videolistMapped(response.data.items);

    dispatch(fetchVideoListSuccess(transformedList));
    dispatch(setSelectedVideo(transformedList[0]));
  } catch (error) {
    console.log(error,"er");
    dispatch(fetchVideoListFailure());
  }
  //   setVideoListForPage(response.data.items.slice(0, 2));
};
