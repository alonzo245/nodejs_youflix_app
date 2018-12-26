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
    videos: state.videos.concat(action.videos),
    searchVideosList: action.videos.concat(action.videos)
  })
};

const filterVideoList = (state, action) => {
  if (!action.videos.length) {
    action.videos = state.searchVideosList
  }

  return updateObject(state, {
    videos: action.videos
  });
};

const setCurrentPage = (state, action) => {
  return updateObject(state, {
    page: state.page + 1
  });
};

const setRequestSent = (state, action) => {
  return updateObject(state, {
    requestSent: !state.requestSent
  });
};

const setTotalItems = (state, action) => {
  return updateObject(state, {
    totalItems: action.totalItems,
    totalRequestItems: state.totalRequestItems += action.totalRequestItems
  });
};

const flushVideos = (state, action) => {
  console.log('ss')
  return updateObject(state, initialState);
};

const initialState = {
  page: 1,
  requestSent: false,
  totalItems: 0,
  totalRequestItems: 0,
  videos: [],
  searchVideosList: [],
  currentVideo: null
};

// actions switcher
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FLUSH_VIDEOS:
      return flushVideos(state, action)

    case actionTypes.SET_TOTAL_ITEMS:
      return setTotalItems(state, action)

    case actionTypes.SET_REQUEST_SENT:
      return setRequestSent(state, action)

    case actionTypes.SET_CURRENT_PAGE:
      return setCurrentPage(state, action)

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