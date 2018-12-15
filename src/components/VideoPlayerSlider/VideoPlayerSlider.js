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
          <div className="TextWrapper">
            {props.currentVideoData.snippet.description}
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return '';
  }
};

export default VideoPlayerSlider;