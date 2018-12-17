import React from 'react';
import './Toggle.scss';

const Toggle = (props) => {

  return (
    <div className="ToggleCheckbox" onChange={props.toggleTheme}>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  )
};

export default Toggle;