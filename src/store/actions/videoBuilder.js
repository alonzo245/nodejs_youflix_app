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

    let apiUrl;
    switch(category) {
      default:
      case 'mostPopular':
      // apiUrl = 'http://localhost:8000/feed/videos';
      // apiUrl = '/mostpopular.api.json';
      apiUrl = 'http://localhost:8000/video-feed/videos';
      break;
      case 'alon':
      apiUrl = '/youtube.api.json';
      break;
    }

    axios.get(apiUrl)
      .then(response => {
        // console.log(response.data.videos)
        dispatch(setVideos(response.data.videos));
      })
      .catch(error => {
        dispatch(fetchVideosFailed());
      });
  };
};