import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import './VideoPlayerSlider.scss';
import Iframe from '../Iframe/Iframe';
import Spinner from '../UI/Spinner/Spinner';

const VideoPlayerSlider = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.active) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  let videoDescription = null;
  if (props.currentVideoData) {
    videoDescription = props.currentVideoData.snippet.description.split('\n').map( (line,i) =>  <p key={i} >{line}</p>
    );
  }

  if (props.currentVideoData) {
    return (
      <React.Fragment>
        <div className={attachedClasses.join(' ')}>
          <div onClick={props.togglePlayer} className="BackWindowPlayer">
            <FaRegArrowAltCircleLeft />
          </div>

          <Spinner />
          <Iframe
            src={props.currentVideoData.contentDetails.upload.videoId}
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