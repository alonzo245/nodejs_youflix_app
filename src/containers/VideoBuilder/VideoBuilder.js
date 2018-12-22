import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classNames from 'classnames';

import Video from '../../components/Video/Video';
import axios from '../../axios';
import './VideoBuilder.scss';
import Spinner from '../../components/UI/Spinner/Spinner';
import VideoPlayerSlider from '../../components/VideoPlayerSlider/VideoPlayerSlider';
import SearchInput from '../../components/UI/SearchInput/SearchInput';

class VideoBuilder extends Component {
  state = {
    videoPlayerSliderOpen: false,
    activeSelectedCategory : 'mostPopular'
  };

  componentWillMount() {
    this.props.onInitVideos();
  }

  togglePlayerHandler = (data = null) => {
    this.props.toggleLayoutScroll();
    this.props.onSetCurrentVideo(this.props.videosList[data.videoIndex]);

    this.setState({
      ...this.state,
      videoPlayerSliderOpen: !this.state.videoPlayerSliderOpen
    });
  }

  filterListHandler = (event) => {
    let inputEmpty = true;
    let updatedList = { ...this.props.searchVideosList };

    if (event.target.value) {
      inputEmpty = false;
      updatedList = this.props.videosList.filter((video) => {
        return video.snippet.title.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
    }
    this.props.onSearchVideo(updatedList, inputEmpty);
  }

  getVideoCategoy = (category) => {
    this.props.onInitVideos(category);
    this.setState( { activeSelectedCategory : category } );
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
          <SearchInput filterList={this.filterListHandler} />
          <div className="VideoMenu">
            <ul>
              <li 
              className={classNames({'Selected' : this.state.activeSelectedCategory === 'mostPopular'})}
              onClick={() => this.getVideoCategoy('mostPopular')}>
                Most Popular
              </li>
              <li
              className={classNames({'Selected' : this.state.activeSelectedCategory === 'alon'})}
              onClick={() => this.getVideoCategoy('alon')}>
                Alon's Videos
              </li>
            </ul>
          </div>
          <div className="VideoBuilder">
            {this.props.videosList.map((data, index) => {
              return <Video
                key={index}
                videoId={index}
                videoData={data}
                togglePlayer={this.togglePlayerHandler}
              />
            })}
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    videosList: state.videoBuilder.videos,
    currentVideo: state.videoBuilder.currentVideo,
    searchVideosList: state.videoBuilder.searchVideosList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitVideos: (category) => dispatch(actions.initVideos(category)),
    onSetCurrentVideo: (videoId) => dispatch(actions.setCurrentVideo(videoId)),
    onSearchVideo: (videos, inputEmpty) => dispatch(actions.searchVideo(videos, inputEmpty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoBuilder, axios);