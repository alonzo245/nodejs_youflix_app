import React, { Component } from 'react';
import Moment from 'react-moment';
import './Video.scss';

class Video extends Component {
  state = {
    videoImageVisibile: true
  };

  overVideoHandler = (data = null) => {
    setTimeout(() => {
      this.setState({ videoImageVisibile: !this.state.videoImageVisibile });
    }, 800)

    if (data) { }
  }

  getIframe = (url) => (
    `https://www.youtube.com/embed/${url}?autoplay=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0`
  );

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
          this.props.togglePlayer(this.props.videoData.contentDetails.upload.videoId);

        }}
      >
        <div className="VideoPlayerWrapper">
          {this.state.videoImageVisibile ? null : <iframe src={this.getIframe(this.props.videoData.contentDetails.upload.videoId)} title="iframe" />}
        </div>
        <div className={classes} style={backgroundStyle}></div>
        <div className="VideoData">
          <div className="Title">{this.props.videoData.snippet.title}
          </div>
          <div className="Date">
          Published: <Moment format="DD.MM.YYYY" date={this.props.videoData.snippet.publishedAt} />
          </div>
          {/* desc: {this.props.videoData.snippet.description} <br/> * */}
          {/* url: {`https://www.youtube.com/watch?v=${this.props.videoData.contentDetails.upload.videoId}`} */}
          <br />
        </div>

      </div>
    );
  }
}

export default Video;