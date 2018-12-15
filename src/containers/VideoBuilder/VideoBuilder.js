import React, { Component } from 'react';
import Video from '../../components/Video/Video';

import BlackScreen from '../../components/UI/BlackScreen/BlackScreen';
import axios from '../../axios-api';
import './VideoBuilder.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import VideoPlayerSlider from '../../components/VideoPlayerSlider/VideoPlayerSlider';
import VideosJsonData from '../../youtube.api.js';

class VideoBuilder extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    blackScreen: false,
    videoPlayerSliderOpen: false,
    currentVideo: null
  };

  componentWillMount() {
    axios.get('/youtube.api.json')
      .then(response => {
        // console.log('response.data2', response.data)
        // let updatedData = response.data.items.slice(0,4);
        let updatedData = response.data.items;
        // console.log(updatedData)
        this.setState({
          isLoaded: true,
          items: updatedData
        });
      })
      .catch(error => {
        if (error.response.status === 404) {
          // console.log('error',error.request);
          console.log('error', error.response.status);
          // console.log('error',error.config);
          let updatedData = VideosJsonData.items;
          this.setState({
            isLoaded: true,
            items: updatedData
          });
        } else {
          this.setState({
            isLoaded: true,
            error
          });
        }
      });
  }

  togglePlayerHandler = (data = null) => {

    let currentUpdatedVideo = null;
    if (this.state.items[data.videoIndex]) {
      // console.log('data', this.state.items[data.videoIndex])
      currentUpdatedVideo = this.state.items[data.videoIndex];
    }

    this.setState({
      ...this.state,
      blackScreen: !this.state.blackScreen,
      videoPlayerSliderOpen: !this.state.videoPlayerSliderOpen,
      currentVideo: currentUpdatedVideo
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <Spinner />;
    }
    else {
      return (
        <React.Fragment>
          <VideoPlayerSlider
            togglePlayer={this.togglePlayerHandler}
            active={this.state.videoPlayerSliderOpen}
            currentVideoData={this.state.currentVideo}
          />
          <BlackScreen active={this.state.blackScreen} />
          <div className="VideoBuilder">
            {items.map((data, index) => (
              <Video
                key={index}
                videoId={index}
                videoData={data}
                togglePlayer={this.togglePlayerHandler}
              />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default VideoBuilder;