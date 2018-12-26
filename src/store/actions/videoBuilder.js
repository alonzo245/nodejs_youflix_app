import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const searchVideo = (videos) => {
  return {
    type: actionTypes.FETCH_VIDEO_FILTER,
    videos: videos
  };
};

export const setCurrentVideo = (toggle) => {
  return {
    type: actionTypes.SET_CURRENT_VIDEO,
    currentVideo: toggle
  };
};


export const setVideos = (videos) => {
  return {
    type: actionTypes.SET_VIDEOS,
    videos: videos
  };
};

export const setCurrentPage = () => {
  return {
    type: actionTypes.SET_CURRENT_PAGE
  };
};

export const requestSent = () => {
  return {
    type: actionTypes.SET_REQUEST_SENT
  };
};

export const fetchVideosFailed = () => {
  return {
    type: actionTypes.FETCH_VIDEOS_FAILED
  };
};

export const flushVideosItems = () => {

  return {
    type: actionTypes.FLUSH_VIDEOS
  };
};

export const setTotalItems = (totalItems, totalRequestItems) => {

  return {
    type: actionTypes.SET_TOTAL_ITEMS,
    totalItems: totalItems,
    totalRequestItems: totalRequestItems
  };
};

export const initVideos = (category, page = 1, flushVideos = false) => {
  return dispatch => {

    if(flushVideos){
      dispatch(flushVideosItems());
    }

    let baseUrl = 'https://flixapi.herokuapp.com';
    if (window.location.hostname === "localhost") {
      baseUrl = window.location.protocol + '//localhost:8000';
    }

    let apiUrl = baseUrl + '/video-feed/videos?category=';

    switch (category) {
      default:
      case 'mostPopular':
        apiUrl += 'mostpopular';
        break;
      case 'alon':
        apiUrl += 'alonsvideos';
        break;
    }

    apiUrl += "&page=" + page;

    axios.get(apiUrl)
      .then(response => {
        dispatch(setTotalItems(
          response.data.totlaItems,
          response.data.videos.length
        ));

        if (response.data.videos.length > 0) {
          dispatch(setVideos(response.data.videos));
          dispatch(setCurrentPage());
          dispatch(requestSent());
        } else {

        }
      })
      .catch(error => {
        dispatch(fetchVideosFailed());
      });
  };
};