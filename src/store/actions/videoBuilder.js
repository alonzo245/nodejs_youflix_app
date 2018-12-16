import * as actionTypes from './actionTypes';
import axios from '../../axios-api';


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

export const initVideos = () => {
  return dispatch => {
    axios.get('/youtube.api.json')
      .then(response => {
        // console.log(response.data)
        dispatch(setVideos(response.data.items));
      })
      .catch(error => {
        dispatch(fetchVideosFailed());
      });
  };
};