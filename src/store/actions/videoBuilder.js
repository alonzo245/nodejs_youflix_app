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

export const fetchVideosFailed = () => {
  return {
    type: actionTypes.FETCH_VIDEOS_FAILED
  };
};

export const initVideos = (category) => {
  return dispatch => {

    let baseUrl = 'https://flixapi.herokuapp.com';
    if (window.location.hostname === "localhost") {
      baseUrl = window.location.protocol + '//localhost:8000';
    }

    let apiUrl = baseUrl + '/video-feed/videos?category=';

    // let apiUrl = 'http://localhost:8000/video-feed/videos?category=';
    // let apiUrl = 'https://flixapi.herokuapp.com/video-feed/videos?category=';
    switch (category) {
      default:
      case 'mostPopular':
        apiUrl += 'mostpopular';
        break;
      case 'alon':
        apiUrl += 'alonsvideos';
        break;
    }

    axios.get(apiUrl)
      .then(response => {
        dispatch(setVideos(response.data.videos));
      })
      .catch(error => {
        dispatch(fetchVideosFailed());
      });
  };
};