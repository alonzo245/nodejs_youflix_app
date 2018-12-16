import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Video from '../../components/Video/Video';
import BlackScreen from '../../components/UI/BlackScreen/BlackScreen';
import axios from '../../axios-api';
import './VideoBuilder.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import VideoPlayerSlider from '../../components/VideoPlayerSlider/VideoPlayerSlider';

class VideoBuilder extends Component {
  state = {
    blackScreen: false,
    videoPlayerSliderOpen: false,
  };

  componentWillMount() {
    this.props.onInitVideos();
  }

  togglePlayerHandler = (data = null) => {
    
    this.props.toggleLayoutScroll();
    this.props.onSetCurrentVideo(this.props.videosList[data.videoIndex]);

    this.setState({
      ...this.state,
      blackScreen: !this.state.blackScreen,
      videoPlayerSliderOpen: !this.state.videoPlayerSliderOpen
    });
  }

  render() {
    if (!this.props.videosList) {
      return <Spinner />;
    }
    else {
      return (
        <React.Fragment>
          <VideoPlayerSlider
            togglePlayer={this.togglePlayerHandler}
            active={this.state.videoPlayerSliderOpen}
            currentVideoData={this.props.currentVideo}
          />
          <BlackScreen active={this.state.blackScreen} />
          <div className="VideoBuilder">
            {this.props.videosList.map((data, index) => (
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

const mapStateToProps = state => {
  return {
    videosList: state.videoBuilder.videos,
    currentVideo: state.videoBuilder.currentVideo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitVideos: () => dispatch(actions.initVideos()),
    onSetCurrentVideo: (videoId) => dispatch(actions.setCurrentVideo(videoId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoBuilder, axios);