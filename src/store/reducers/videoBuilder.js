import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const setCurrentVideo = (state, action) => {

  // console.log('state', state);
  // console.log('action', action);

  return updateObject(state, {
    currentVideo: action.currentVideo
  })
};

const fetchVideosFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const setVideos = (state, action) => {
  // console.log('state', state);
  // console.log('action', action);
  return updateObject(state, {
    videos: action.videos
  })
};

const initialState = {
  currentVideo: null
};

// actions switcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
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