import React from 'react';
import './BlackScreen.scss';

const BlackScreen = (props) => {
  let active = props.active ? 'none' : 'none';
  // console.log(active)
  return (
  <div className="BlackScreen" style={{display:`${active}`}}></div>
  )
};

export default BlackScreen;