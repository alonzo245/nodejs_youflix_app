import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const setCurrentVideo = (state, action) => {
  return updateObject(state, {
    currentVideo: action.currentVideo
  })
};

const fetchVideosFailed = (state) => {
  return updateObject(state, { error: true });
};

const setVideos = (state, action) => {
  return updateObject(state, {
    videos: action.videos,
    searchVideosList: action.videos
  })
};

const filterVideoList = (state, action) => {
  if(!action.videos.length){
    console.log('no res',)
    action.videos = state.searchVideosList
  }

  return updateObject(state, {
    videos: action.videos
  });
};

const initialState = {
  videosList: {},
  searchVideosList: [],
  currentVideo: null,
};

// actions switcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEO_FILTER:
      return filterVideoList(state, action)

    case actionTypes.SET_CURRENT_VIDEO:
      return setCurrentVideo(state, action)

    case actionTypes.SET_VIDEOS:
      return setVideos(state, action);

    case actionTypes.FETCH_VIDEOS_FAILED:
      return fetchVideosFailed(state, action);

    default:
      return state;
  }
};

export default reducer;