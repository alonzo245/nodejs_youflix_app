import React from 'react';

const Iframe = (props) => {
  // console.log(props)

  const mute = props.mute ? '1' : '0';
  const autoplay = props.autoplay ? '1' : '0';
  const controls = props.controls ? '1' : '0';

  return (
    <iframe src={
      'https://www.youtube.com/embed/' +props.src +
      '?autoplay=' + autoplay +
      '&mute=' + mute +
      '&controls=' + controls +
      '&showinfo=0&rel=0&modestbranding=0&autohide=1'}
      title={props.title} />
  )
};

export default Iframe;