import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import './VideoPlayerSlider.scss';
import Iframe from '../Iframe/Iframe';

const VideoPlayerSlider = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.active) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  

  if (props.currentVideoData) {
    // console.log('currentVideoData', props.currentVideoData.snippet.description)

    return (
      <React.Fragment>
        <div className={attachedClasses.join(' ')}>
          <div onClick={props.togglePlayer} className="BackWindowPlayer">
            <FaRegArrowAltCircleLeft />
          </div>
          <div>
            <Iframe 
            src={props.currentVideoData.contentDetails.upload.videoId}
            mute={false}
            autoplay={true}
            title="video" />
          </div>

          <div className="Description">
            {props.currentVideoData.snippet.description}
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return '';
  }
};

export default VideoPlayerSlider;