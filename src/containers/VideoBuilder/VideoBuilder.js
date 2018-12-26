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
    activeSelectedCategory: 'mostPopular'
  };

  togglePlayerHandler = (data = null) => {
    this.props.toggleLayoutScroll();
    this.props.onSetCurrentVideo(this.props.videos[data.videoIndex]);

    this.setState({
      ...this.state,
      videoPlayerSliderOpen: !this.state.videoPlayerSliderOpen
    });
  }

  filterListHandler = (event) => {
    let inputEmpty = true;
    let updatedList = [];

    if (event.target.value) {
      inputEmpty = false;
      updatedList = this.props.videos.filter((video) => {
        return video.video.snippet.title.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
    }
    this.props.onSearchVideo(updatedList, inputEmpty);
  }

  getVideoCategoy = (category) => {
    this.props.onInitVideos(category, 1,true);
    this.setState({ activeSelectedCategory: category });
  }

  componentDidMount() {
    this.props.onInitVideos(this.state.activeSelectedCategory, 1, false);
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll = () => {
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.querySearchResult();
    }
  }

  querySearchResult = () => {
    if (this.state.requestSent) {
      window.removeEventListener('scroll', this.handleOnScroll);
      return;
    }

    if (this.props.totalRequestItems === this.props.totalItems) {
      return;
    }

    setTimeout(
      this.props.onInitVideos(this.state.activeSelectedCategory, this.props.page, false)
      , 2000);
  }
  
  render() {
    if (!this.props.videos) {
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
                className={classNames({ 'Selected': this.state.activeSelectedCategory === 'mostPopular' })}
                onClick={() => this.getVideoCategoy('mostPopular')}>
                Most Popular
              </li>
              <li
                className={classNames({ 'Selected': this.state.activeSelectedCategory === 'alon' })}
                onClick={() => this.getVideoCategoy('alon')}>
                Alon's Videos
              </li>
            </ul>
          </div>
          <div className="VideoBuilder">
            {this.props.videos.map((data, index) => {
              return <Video
                key={index}
                videoId={index}
                videoData={data.video}
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
    page: state.videoBuilder.page,
    requestSent: state.videoBuilder.requestSent,
    totalItems: state.videoBuilder.totalItems,
    totalRequestItems: state.videoBuilder.totalRequestItems,
    videos: state.videoBuilder.videos,
    currentVideo: state.videoBuilder.currentVideo,
    searchVideosList: state.videoBuilder.searchVideosList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitVideos: (category, page, flushVideos) => dispatch(actions.initVideos(category, page, flushVideos)),
    onSetCurrentVideo: (videoId) => dispatch(actions.setCurrentVideo(videoId)),
    onSearchVideo: (videos, inputEmpty) => dispatch(actions.searchVideo(videos, inputEmpty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoBuilder, axios);