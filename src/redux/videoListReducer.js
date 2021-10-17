import { VIDEO_LIST_ACTION } from "./videoListActionTypes";

const initialState = {
  videoList: [],
  selectedVideo: null,
  loading: false,
  errorMessage: null,
};

export const videoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VIDEO_LIST_ACTION.FETCH_VIDEO_LIST_START:
      return { ...state, loading: true };

    case VIDEO_LIST_ACTION.FETCH_VIDEO_LIST_SUCCESS:
      return {
        ...state,
        videoList: payload,
        loading: false,
        errorMessage: null,
      };

    case VIDEO_LIST_ACTION.FETCH_VIDEO_LIST_FAILURE:
      return { ...state, loading: false, errorMessage: "Server error please try again after some time" };

    case VIDEO_LIST_ACTION.SET_SELECTED_VIDEO:
      return { ...state, selectedVideo: payload };

    default:
      return state;
  }
};
