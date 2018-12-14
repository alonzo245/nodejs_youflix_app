import React, { Component } from 'react';
import Video from '../../components/Video/Video';

import BlackScreen from '../../components/UI/BlackScreen/BlackScreen';
import axios from '../../axios-api';
import './VideoBuilder.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import VideoPlayerSlider from '../../components/VideoPlayerSlider/VideoPlayerSlider';

class VideoBuilder extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    blackScreen: false,
    videoPlayerSliderOpen: false
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
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  togglePlayerHandler = (data = null) => {
    if (data) {
      console.log('data',)
    }
    // console.log('aaa')
    this.setState({
      blackScreen: !this.state.blackScreen,
      videoPlayerSliderOpen: !this.state.videoPlayerSliderOpen
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
          <VideoPlayerSlider  togglePlayer={this.togglePlayerHandler} active={this.state.videoPlayerSliderOpen}/>
          <BlackScreen active={this.state.blackScreen} />
          <div className="VideoBuilder">
            {items.map((data, index) => (
              <Video
                key={index}
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