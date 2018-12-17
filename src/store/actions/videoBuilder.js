import * as actionTypes from './actionTypes';
import axios from '../../axios-api';

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
      apiUrl = '/mostpopular.api.json';
      break;
      case 'alon':
      apiUrl = '/youtube.api.json';
      break;
    }

    axios.get(apiUrl)
      .then(response => {
        dispatch(setVideos(response.data.items));
      })
      .catch(error => {
        dispatch(fetchVideosFailed());
      });
  };
};