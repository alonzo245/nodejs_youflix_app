import React from 'react';

const Iframe = (props) => {
  // console.log(props)

  const mute = !props.mute ? '1' : '0';
  const autoplay = props.autoplay ? '1' : '0';

  return(
    <iframe src={'https://www.youtube.com/embed/' + props.src + '?autoplay='+autoplay+'&rel=0&modestbranding=1&autohide=1&mute='+mute+'&showinfo=0&controls=0'} title={props.title} />
  )
};

export default Iframe;