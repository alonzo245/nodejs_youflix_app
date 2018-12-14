import React from 'react';

import './VideoPlayerSlider.scss';

const VideoPlayerSlider = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.active) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <React.Fragment>
      <div className={attachedClasses.join(' ')}>
        <button onClick={props.togglePlayer}>x</button>
      </div>
    </React.Fragment>
  );
};

export default VideoPlayerSlider;