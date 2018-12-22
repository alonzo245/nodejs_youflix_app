import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import './VideoPlayerSlider.scss';
import Iframe from '../Iframe/Iframe';
import Spinner from '../UI/Spinner/Spinner';

const VideoPlayerSlider = (props) => {
  let attachedClasses = ["VideoPlayerSlider", "Close"];
  if (props.active) {
    attachedClasses = ["VideoPlayerSlider", "Open"];
  }

  let videoDescription = null;
  // console.log(props.currentVideoData)
  if (props.currentVideoData) {
    videoDescription = props.currentVideoData.video.snippet.description.split('\n').map((line, i) => <p key={i} >{line}</p>
    );
  }

  if (props.currentVideoData) {

    let videoId = null;
    if ('upload' in props.currentVideoData.video.contentDetails) {
      videoId = props.currentVideoData.video.contentDetails.upload.videoId;
    } else {
      videoId = props.currentVideoData.video.id
    }

    return (
      <React.Fragment>
        <div className={attachedClasses.join(' ')}>
          <div onClick={props.togglePlayer} className="BackWindowPlayer">
            <FaRegArrowAltCircleLeft />
          </div>

          <Spinner />
          <Iframe
            src={videoId}
            mute={false}
            autoplay={true}
            controls={true}
            title="video" />


          <div className="Description">
            <div className="TextWrapper">{videoDescription}</div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return '';
  }
};

export default VideoPlayerSlider;