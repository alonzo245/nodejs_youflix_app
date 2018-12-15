import React, { Component } from 'react';
import Moment from 'react-moment';
import { GoClock } from 'react-icons/go';
import { MdPlayCircleOutline, MdInfoOutline } from 'react-icons/md';
import Iframe from '../Iframe/Iframe';
import './Video.scss';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoImageVisibile: true
    };

    // console.log('props',this.props)
  }

  overVideoHandler = (data = null) => {
    setTimeout(() => {
      this.setState({ videoImageVisibile: !this.state.videoImageVisibile });
    }, 800)

    if (data) { }
  }

  render() {

    let backgroundStyle = {
      backgroundImage: 'url(' + this.props.videoData.snippet.thumbnails.standard.url + ')',
    };

    let classes = [
      'VideoImage',
      this.state.videoImageVisibile ? 'fadeIn' : 'fadeOut',
    ].join(' ');

    Object.keys(this.props.videoData.snippet)
      .map((value, index) => this.props.videoData.snippet[index]);

    // console.log('zzzz');
    return (
      <div className="Video"
        onMouseEnter={() => { this.overVideoHandler(this.props.videoData); }}
        onMouseLeave={() => { this.overVideoHandler(this.props.videoData); }}
        onClick={() => {
          this.props.togglePlayer({
            videoIndex: this.props.videoId,
            videoId: this.props.videoData.contentDetails.upload.videoId
          });

        }}
      >
        <div className="VideoPlayerWrapper">
          {
            this.state.videoImageVisibile ? null : <Iframe
              src={this.props.videoData.contentDetails.upload.videoId}
              title="video"
              mute={false}
              autoplay={true}
            />
          }
        </div>
        <div className={classes} style={backgroundStyle}>
          <MdPlayCircleOutline className="PlayerIcon" />
        </div>
        <div className="VideoData">
          <div className="Title">
            <MdInfoOutline className="Info" />
            {this.props.videoData.snippet.title}
          </div>
          <div className="Date">
            <GoClock className="GoClock" /> Published: <Moment format="DD.MM.YYYY" date={this.props.videoData.snippet.publishedAt} />
          </div>
          <br />
        </div>

      </div>
    );
  }
}

export default Video;